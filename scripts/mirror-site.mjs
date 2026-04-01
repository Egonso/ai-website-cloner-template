import { spawnSync } from "node:child_process";
import { copyFile, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const researchDir = path.join(projectRoot, "docs", "research");
const mirrorDir = path.join(projectRoot, "mirror", "site");
const sitemapPath = path.join(researchDir, "sitemap-urls.txt");
const sitemapUrl = "https://www.thewalkerschool.org/sitemap.xml";

const mirroredDomains = [
  "www.thewalkerschool.org",
  "thewalkerschool-cdn.website.amais.com",
  "thewalkerschool.static.amais.com",
  "player.vimeo.com",
  "i.vimeocdn.com",
  "f.vimeocdn.com",
];

function extractUrls(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());
}

async function rewriteHomeAliases(rootDir) {
  const entries = await readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      await rewriteHomeAliases(entryPath);
      continue;
    }

    if (!entry.name.endsWith(".html")) {
      continue;
    }

    const contents = await readFile(entryPath, "utf8");
    if (!contents.includes("emergency-action-plan.html")) {
      continue;
    }

    await writeFile(
      entryPath,
      contents.replaceAll("emergency-action-plan.html", "index.html"),
      "utf8",
    );
  }
}

async function fetchSitemapUrls() {
  const response = await fetch(sitemapUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  const urls = extractUrls(xml);

  if (urls.length === 0) {
    throw new Error("No URLs were found in the Walker School sitemap.");
  }

  await mkdir(researchDir, { recursive: true });
  await writeFile(sitemapPath, `${urls.join("\n")}\n`, "utf8");

  return urls;
}

async function main() {
  const urls = await fetchSitemapUrls();

  await rm(mirrorDir, { recursive: true, force: true });
  await mkdir(mirrorDir, { recursive: true });

  const result = spawnSync(
    "wget",
    [
      `--input-file=${sitemapPath}`,
      "--page-requisites",
      "--span-hosts",
      "--convert-links",
      "--adjust-extension",
      "--no-verbose",
      "--execute",
      "robots=off",
      `--directory-prefix=${mirrorDir}`,
      "--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X) Codex Walker Mirror",
      `--domains=${mirroredDomains.join(",")}`,
    ],
    {
      cwd: projectRoot,
      stdio: "inherit",
    },
  );

  if (result.status !== 0 && result.status !== 8) {
    throw new Error(`wget exited with status ${result.status ?? "unknown"}`);
  }

  const aliases = [
    [
      "www.thewalkerschool.org/primary-school-extended-day-program-and-after-school-activities.html",
      "www.thewalkerschool.org/extended-day-program-and-after-school-activities.html",
    ],
  ];

  for (const [source, target] of aliases) {
    const sourcePath = path.join(mirrorDir, source);
    const targetPath = path.join(mirrorDir, target);
    await copyFile(sourcePath, targetPath);
  }

  await rewriteHomeAliases(path.join(mirrorDir, "www.thewalkerschool.org"));

  const manifestPath = path.join(mirrorDir, ".mirror-manifest.json");
  await writeFile(
    manifestPath,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        target: "https://www.thewalkerschool.org/",
        urlCount: urls.length,
        domains: mirroredDomains,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  console.log(`\nMirror complete. Downloaded scope for ${urls.length} sitemap URLs.`);
  console.log(`Preview with: npm run mirror:serve`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
