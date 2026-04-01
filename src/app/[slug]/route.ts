import { renderSubpage } from "@/lib/paideia-walker-html";
import { htmlResponse } from "@/lib/mirror-utils";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (slug === "infoabend") {
    return NextResponse.redirect(new URL("/aufnahme#infoabend", request.url), 308);
  }

  const html = await renderSubpage(slug);

  if (!html) {
    return new Response("Nicht gefunden", { status: 404 });
  }

  return htmlResponse(html);
}
