import { serveMirrorAsset } from "@/lib/mirror-utils";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  return serveMirrorAsset(["www.thewalkerschool.org", "ams"], path);
}
