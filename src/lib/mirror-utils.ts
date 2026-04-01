import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const mirrorRoot = path.join(process.cwd(), "walker-runtime");

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".gif", "image/gif"],
  [".ico", "image/x-icon"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".ttf", "font/ttf"],
  [".eot", "application/vnd.ms-fontobject"],
  [".mp4", "video/mp4"],
  [".xml", "application/xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
]);

function transformWalkerSiteScript(source: string) {
  const replacementIntroBlock = `  var isBannerFadedOut = false;
  var hasLeftPreScrollState = false;
  var homeScrollStorageKey = 'paideia-home-scroll-left';
  var storedHomeScroll = 0;
  var shouldRestoreHomeScroll = false;

  try {
    storedHomeScroll = Number(window.sessionStorage.getItem(homeScrollStorageKey) || '0');
    shouldRestoreHomeScroll = storedHomeScroll > 24;
    window.__paideiaStoredHomeScroll = storedHomeScroll;
    window.__paideiaShouldRestoreHomeScroll = shouldRestoreHomeScroll;
  } catch (error) {}

  // Banner intro interaction gate
  if (document.body.classList.contains('home-page') && !document.body.classList.contains('cms-page-is-in-edit-mode')) {
    if ($('.site-custom-intro-banner-wrapper').length) {
      var $introBanner = $('.site-custom-intro-banner-wrapper');
      var $introHeading = $('.site-custom-intro-banner-wrapper h2');
      var introListenersBound = false;

      function removePreScrollListeners() {
        $(document).off('.paideiaPreScroll');
        $(window).off('.paideiaPreScroll');
        document.removeEventListener('touchmove', handleFirstScroll, false);
      }

      function handleFirstScroll(event) {
        if (hasLeftPreScrollState) {
          return;
        }

        if (event && event.type === 'keydown') {
          var scrollKeys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'Spacebar'];
          if (scrollKeys.indexOf(event.key) === -1) {
            return;
          }
        }

        hasLeftPreScrollState = true;
        $('body').removeClass('paideia-pre-scroll');
        removePreScrollListeners();
      }

      function leavePreScrollState() {
        if (hasLeftPreScrollState) {
          return;
        }

        hasLeftPreScrollState = true;
        $('body').removeClass('paideia-pre-scroll');
        removePreScrollListeners();
      }

      function removeIntroListeners() {
        if (!introListenersBound) {
          return;
        }

        introListenersBound = false;
        $(document).off('.paideiaIntro');
        $(window).off('.paideiaIntro');
        $introBanner.off('.paideiaIntro');
        document.removeEventListener('touchstart', handleFirstInteraction, false);
        document.removeEventListener('touchmove', handleFirstInteraction, false);
      }

      function fadeOutBanner() {
        if (isBannerFadedOut) {
          return;
        }

        leavePreScrollState();
        isBannerFadedOut = true;
        $('body').addClass('paideia-intro-transitioning');
        $introHeading.addClass('zoom-in');

        setTimeout(function () {
          $introBanner.removeClass('fade-in').addClass('fade-out');
        }, 140);

        setTimeout(function () {
          $('body').removeClass('stop-scrolling paideia-intro-active paideia-intro-transitioning');
          removeIntroListeners();
        }, 760);
      }

      function handleFirstInteraction() {
        fadeOutBanner();
      }

      if (!window.location.hash && !shouldRestoreHomeScroll) {
        $introBanner.removeClass('fade-out').addClass('fade-in');
        $('body').addClass('stop-scrolling paideia-intro-active paideia-pre-scroll');
      } else {
        isBannerFadedOut = true;
        hasLeftPreScrollState = true;
        $('body').removeClass('stop-scrolling paideia-intro-active paideia-pre-scroll');
      }

      if (!isBannerFadedOut) {
        introListenersBound = true;
        $(document).on('wheel.paideiaIntro', handleFirstInteraction);
        $(document).on('mousedown.paideiaIntro', handleFirstInteraction);
        $(document).on('keydown.paideiaIntro', handleFirstInteraction);
        $(window).on('scroll.paideiaIntro', function () {
          if (window.scrollY > 0) {
            handleFirstInteraction();
          }
        });
        $introBanner.on('click.paideiaIntro', handleFirstInteraction);
        document.addEventListener('touchstart', handleFirstInteraction, false);
        document.addEventListener('touchmove', handleFirstInteraction, false);
      }

      if (!hasLeftPreScrollState) {
        $(document).on('wheel.paideiaPreScroll', handleFirstScroll);
        $(document).on('keydown.paideiaPreScroll', handleFirstScroll);
        $(window).on('scroll.paideiaPreScroll', function () {
          if (window.scrollY > 0) {
            handleFirstScroll();
          }
        });
        document.addEventListener('touchmove', handleFirstScroll, false);
      }

      $(window).on('resize.paideiaViewportSync', function () {
        if (window.innerWidth < 1024) {
          leavePreScrollState();
          $('#site-header').removeClass('active-header');
        }
      });
    }
  }
`;

  return source.replace(
    /  var isBannerFadedOut = false;[\s\S]*?(?=  \/\/ Mousewheel scroll Homepage & landing-page)/,
    replacementIntroBlock,
  );
}

function safeResolve(...segments: string[]) {
  const filePath = path.resolve(mirrorRoot, ...segments);
  if (!filePath.startsWith(mirrorRoot)) {
    throw new Error("Ungültiger Mirror-Pfad");
  }
  return filePath;
}

export function inferContentType(filePath: string) {
  const cleanBasename = path.basename(filePath).split("?")[0].split("%3F")[0];
  const extension = path.extname(cleanBasename).toLowerCase();
  return contentTypes.get(extension) || "application/octet-stream";
}

export async function loadMirrorHtml(relativeFilePath: string) {
  const filePath = safeResolve("www.thewalkerschool.org", relativeFilePath);
  return readFile(filePath, "utf8");
}

export async function serveMirrorAsset(baseSegments: string[], assetPath: string[]) {
  const variants = [
    assetPath,
    assetPath.map((segment) => decodeURIComponent(segment)),
    assetPath.map((segment) => segment.replaceAll("%3F", "?")),
    assetPath.map((segment) => decodeURIComponent(segment).replaceAll("%3F", "?")),
    assetPath.map((segment) => segment.replaceAll("?", "%3F")),
  ];

  for (const variant of variants) {
    try {
      const filePath = safeResolve(...baseSegments, ...variant);
      const buffer = await readFile(filePath);

      if (filePath.endsWith(path.join("TheWalkerSchool", "js", "site-script.js"))) {
        const transformed = transformWalkerSiteScript(buffer.toString("utf8"));
        return new NextResponse(transformed, {
          headers: {
            "content-type": "application/javascript; charset=utf-8",
            "cache-control": "no-cache",
          },
        });
      }

      return new NextResponse(buffer, {
        headers: {
          "content-type": inferContentType(filePath),
          "cache-control": "public, max-age=31536000, immutable",
        },
      });
    } catch {
      // Try next variant.
    }
  }

  return new NextResponse("Asset nicht gefunden", { status: 404 });
}

export function htmlResponse(html: string) {
  return new NextResponse(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-cache",
    },
  });
}
