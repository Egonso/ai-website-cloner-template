import { createReadStream } from "node:fs";
import { access } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const mirrorRoot = path.join(projectRoot, "mirror", "site");
const port = Number(process.env.PORT || 4315);

const hostDirectories = new Set([
  "www.thewalkerschool.org",
  "thewalkerschool-cdn.website.amais.com",
  "thewalkerschool.static.amais.com",
  "player.vimeo.com",
  "i.vimeocdn.com",
  "f.vimeocdn.com",
]);

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".gif", "image/gif"],
  [".ico", "image/x-icon"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".ttf", "font/ttf"],
  [".eot", "application/vnd.ms-fontobject"],
  [".mp4", "video/mp4"],
  [".xml", "application/xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
]);

function inferContentType(filePath) {
  const basename = path.basename(filePath);
  const cleanBasename = basename.split("?")[0].split("%3F")[0];
  const extension = path.extname(cleanBasename).toLowerCase();
  return contentTypes.get(extension) || "application/octet-stream";
}

function withHtmlVariants(relativePath) {
  const normalized = relativePath.replace(/^\/+/, "");
  const candidates = new Set();

  if (!normalized) {
    candidates.add(path.join("www.thewalkerschool.org", "index.html"));
    return [...candidates];
  }

  candidates.add(normalized);

  if (!path.extname(normalized)) {
    candidates.add(`${normalized}.html`);
    candidates.add(path.join(normalized, "index.html"));
  }

  if (!normalized.endsWith(".html") && normalized.endsWith("/")) {
    candidates.add(path.join(normalized, "index.html"));
  }

  const firstSegment = normalized.split("/")[0];
  if (!hostDirectories.has(firstSegment)) {
    const prefixed = path.join("www.thewalkerschool.org", normalized);
    candidates.add(prefixed);
    if (!path.extname(prefixed)) {
      candidates.add(`${prefixed}.html`);
      candidates.add(path.join(prefixed, "index.html"));
    }
  }

  return [...candidates];
}

async function resolveExistingPath(requestPath) {
  const sanitized = path.posix.normalize(`/${requestPath}`).replace(/^\/+/, "");

  if (sanitized.startsWith("..")) {
    return null;
  }

  for (const candidate of withHtmlVariants(sanitized)) {
    const absolutePath = path.resolve(mirrorRoot, candidate);
    if (!absolutePath.startsWith(mirrorRoot)) {
      continue;
    }

    try {
      await access(absolutePath);
      return absolutePath;
    } catch {
      // Try next candidate.
    }
  }

  return null;
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "127.0.0.1"}`);
    const decodedPath = decodeURIComponent(url.pathname);
    const filePath = await resolveExistingPath(decodedPath);

    if (!filePath) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Mirror file not found. Run `npm run mirror:fetch` first.\n");
      return;
    }

    response.writeHead(200, { "content-type": inferContentType(filePath) });
    createReadStream(filePath).pipe(response);
  } catch (error) {
    response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    response.end(
      `Mirror server error: ${error instanceof Error ? error.message : String(error)}\n`,
    );
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Walker mirror available at http://127.0.0.1:${port}/`);
  console.log(`Serving files from ${mirrorRoot}`);
});
