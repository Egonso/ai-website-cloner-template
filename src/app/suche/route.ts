import { renderSearchPage } from "@/lib/paideia-walker-html";
import { htmlResponse } from "@/lib/mirror-utils";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  return htmlResponse(await renderSearchPage(query));
}
