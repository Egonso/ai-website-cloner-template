import { NextRequest, NextResponse } from "next/server";
import {
  SITE_ACCESS_COOKIE,
  SITE_ACCESS_ROUTE,
  hasValidSiteAccessToken,
  isSiteProtectionEnabled,
  normalizeNextPath,
} from "@/lib/site-access";

function isPublicPath(pathname: string) {
  return (
    pathname === SITE_ACCESS_ROUTE ||
    pathname.startsWith(`${SITE_ACCESS_ROUTE}/`) ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/_vercel/")
  );
}

export async function middleware(request: NextRequest) {
  if (!isSiteProtectionEnabled()) {
    return NextResponse.next();
  }

  if (request.method === "OPTIONS" || isPublicPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(SITE_ACCESS_COOKIE)?.value;

  if (await hasValidSiteAccessToken(cookie)) {
    return NextResponse.next();
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = SITE_ACCESS_ROUTE;
  loginUrl.searchParams.set(
    "next",
    normalizeNextPath(`${request.nextUrl.pathname}${request.nextUrl.search}`),
  );

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/:path*"],
};
