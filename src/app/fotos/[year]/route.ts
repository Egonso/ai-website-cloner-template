import { renderGalleryPage } from "@/lib/paideia-walker-html";
import { htmlResponse } from "@/lib/mirror-utils";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ year: string }> },
) {
  const { year } = await params;
  const html = await renderGalleryPage(year);

  if (!html) {
    return new Response("Nicht gefunden", { status: 404 });
  }

  return htmlResponse(html);
}
