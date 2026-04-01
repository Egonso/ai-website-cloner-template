import { renderSubpage } from "@/lib/paideia-walker-html";
import { htmlResponse } from "@/lib/mirror-utils";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const html = await renderSubpage(slug);

  if (!html) {
    return new Response("Nicht gefunden", { status: 404 });
  }

  return htmlResponse(html);
}
