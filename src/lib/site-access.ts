const DEFAULT_ACCESS_SALT = "paideia-site-access-v1";

export const SITE_ACCESS_COOKIE = "paideia_access";
export const SITE_ACCESS_ROUTE = "/zugang";
export const SITE_ACCESS_UNLOCK_ROUTE = "/zugang/unlock";

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
}

export function getSitePassword() {
  return process.env.SITE_PASSWORD?.trim() ?? "";
}

export function isSiteProtectionEnabled() {
  return getSitePassword().length > 0;
}

export function normalizeNextPath(nextPath: string | null | undefined) {
  if (!nextPath || !nextPath.startsWith("/") || nextPath.startsWith("//")) {
    return "/";
  }

  if (nextPath === SITE_ACCESS_ROUTE || nextPath.startsWith(`${SITE_ACCESS_ROUTE}/`)) {
    return "/";
  }

  return nextPath;
}

async function hashSiteValue(value: string) {
  const salt = process.env.SITE_PASSWORD_SALT?.trim() || DEFAULT_ACCESS_SALT;
  const data = new TextEncoder().encode(`${salt}:${value}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return toHex(digest);
}

export async function getExpectedAccessToken() {
  const password = getSitePassword();
  if (!password) {
    return "";
  }

  return hashSiteValue(password);
}

export async function isValidSitePassword(candidate: string) {
  const password = getSitePassword();

  if (!password) {
    return true;
  }

  if (!candidate) {
    return false;
  }

  return (await hashSiteValue(candidate)) === (await getExpectedAccessToken());
}

export async function hasValidSiteAccessToken(candidate: string | undefined) {
  if (!isSiteProtectionEnabled()) {
    return true;
  }

  if (!candidate) {
    return false;
  }

  return candidate === (await getExpectedAccessToken());
}
