import { NextResponse } from "next/server";
import {
  SITE_ACCESS_COOKIE,
  isSiteProtectionEnabled,
  getExpectedAccessToken,
  isValidSitePassword,
  normalizeNextPath,
} from "@/lib/site-access";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const nextPath = normalizeNextPath(String(formData.get("next") ?? "/"));
  const baseUrl = new URL(request.url);

  if (!isSiteProtectionEnabled()) {
    return NextResponse.redirect(new URL(nextPath, baseUrl), { status: 303 });
  }

  if (!(await isValidSitePassword(password))) {
    const invalidUrl = new URL("/zugang", baseUrl);
    invalidUrl.searchParams.set("next", nextPath);
    invalidUrl.searchParams.set("error", "1");
    return NextResponse.redirect(invalidUrl, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(nextPath, baseUrl), {
    status: 303,
  });
  response.cookies.set({
    name: SITE_ACCESS_COOKIE,
    value: await getExpectedAccessToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: baseUrl.protocol === "https:",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
