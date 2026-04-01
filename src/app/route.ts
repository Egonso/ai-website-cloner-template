import { renderHomePage } from "@/lib/paideia-walker-html";
import { htmlResponse } from "@/lib/mirror-utils";

export const runtime = "nodejs";

export async function GET() {
  return htmlResponse(await renderHomePage());
}
