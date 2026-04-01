import { load, type Cheerio, type CheerioAPI } from "cheerio";
import type { AnyNode } from "domhandler";
import {
  galleries,
  homeContent,
  pages,
  pressItems,
  searchDocuments,
  shellConfig,
  schoolPaperIssues,
  teamGroups,
  type GalleryPage,
  type TeamGroup,
  type WalkerLink,
  type WalkerSubpageContent,
} from "@/lib/paideia-walker-content";
import { loadMirrorHtml } from "@/lib/mirror-utils";

const PAIDEIA_PRIMARY_HEX = "#283058";
const LEGACY_RED_HEX_VALUES = ["#762123", "#762122"];

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function replaceLegacyAccentMarkup(html: string) {
  return LEGACY_RED_HEX_VALUES.reduce(
    (updatedHtml, legacyHex) => updatedHtml.replaceAll(legacyHex, PAIDEIA_PRIMARY_HEX),
    html,
  );
}

function linkAttributes(link: Partial<WalkerLink>) {
  return link.external ? ' target="_blank" rel="noreferrer"' : "";
}

function buildInlineLinks(links: WalkerLink[]) {
  return links
    .map(
      (link) =>
        `<a href="${link.href}"${linkAttributes(link)}>${escapeHtml(link.label)}</a>`,
    )
    .join(" ");
}

function applyBaseDocument(
  html: string,
  {
    title,
    description,
    pathname,
    isHome,
  }: {
    title: string;
    description: string;
    pathname: string;
    isHome: boolean;
  },
) {
  const $ = load(html);

  $("html").attr("lang", "de");
  $("head title").text(title);
  $('meta[name="title"]').attr("content", title);
  $('meta[name="description"]').attr("content", description);
  $('meta[property="og:title"]').attr("content", title);
  $('meta[property="og:description"]').attr("content", description);
  $('meta[property="og:image"]').attr("content", "/paideia/home/hero-cool.jpg");
  $('meta[name="twitter:image"]').attr("content", "/paideia/home/hero-cool.jpg");
  $('meta[property="og:site_name"]').remove();
  $('meta[name="twitter:title"]').remove();
  $('meta[name="twitter:description"]').remove();
  $('link[rel="canonical"]').attr("href", pathname);
  $('meta[property="og:type"]').attr("content", "website");
  $('link[rel*="icon"], link[rel="apple-touch-icon"], link[rel="manifest"]').remove();
  $('head').append(`
    <meta property="og:site_name" content="Paideia | Freie Schule Salzburg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="theme-color" content="#283058" />
    <link rel="icon" type="image/png" href="/paideia/logos/mark-color-tight.png" />
    <link rel="shortcut icon" href="/paideia/logos/mark-color-tight.png" />
    <link rel="apple-touch-icon" href="/paideia/logos/mark-color-tight.png" />
  `);

  $("script")
    .filter((_, element) => {
      const content = $(element).html() ?? "";
      const src = $(element).attr("src") ?? "";
      return (
        src.includes("googletagmanager") ||
        src.includes("tag.ubiqeducation") ||
        src.includes("collector.js") ||
        content.includes("amaisDxpIngressAPI") ||
        content.includes("Google Tag Manager") ||
        content.includes("gtm.js?id=") ||
        content.includes("dataLayer")
      );
    })
    .remove();

  $('noscript iframe[src*="googletagmanager"]').parent().remove();

  $("body")
    .attr("id", isHome ? "home-page" : "content-with-sidebar-page")
    .attr(
      "class",
      `${isHome ? "home-page" : "content-with-sidebar-page paideia-panel-page"} cms-page-is-published admin-section-cms admin-section-website`,
    );

  $(".site-page-title-block").text(title);

  $('head link[href="Templates/TheWalkerSchool/css/style.css"]').after(
    '<link rel="stylesheet" href="/paideia/walker-overrides.css" />',
  );

  transformShell($, pathname);

  return $;
}

function transformShell($: CheerioAPI, pathname: string) {
  const colourLogoSrc = pathname === "/" ? shellConfig.homeLogoSrc : shellConfig.pageLogoSrc;
  const logoSlide = $("#site-header-logo .site-slide").first();
  logoSlide
    .attr("style", "background-image: none;")
    .addClass("paideia-header-logo-slide");
  logoSlide
    .find("a")
    .attr("href", "/")
    .attr("aria-label", shellConfig.logoAlt);
  logoSlide.find(".site-slider-image-block").html(`
    <span class="paideia-header-lockup" aria-hidden="true">
      <span class="paideia-header-lockup__mark">
        <img src="${colourLogoSrc}" class="paideia-header-lockup__mark-image paideia-header-lockup__mark-image--colour" title="" alt="${escapeHtml(shellConfig.logoAlt)}" />
        <img src="/paideia/logos/mark-white.png" class="paideia-header-lockup__mark-image paideia-header-lockup__mark-image--white" title="" alt="" />
      </span>
      <span class="paideia-header-lockup__wording">
        <span class="paideia-header-lockup__title">PAIDEIA</span>
        <span class="paideia-header-lockup__subtitle">Freie Schule Salzburg</span>
      </span>
    </span>
  `);

  $("#site-header-right-text .cms-feature-datablock").html(
    `<div class="paideia-header-links">
      <p class="paideia-header-links__primary">${buildInlineLinks(shellConfig.quickLinks)}</p>
      <p class="paideia-header-links__secondary">${buildInlineLinks(shellConfig.spotlightLinks)}</p>
    </div>`,
  );

  $(".site-search-data").html(`
    <form action="/suche" method="get" class="paideia-search-form">
      <input type="text" name="q" class="site-search-input" placeholder="Suchbegriff" />
      <button title="Suchen" class="site-search-button" type="submit">Suchen</button>
    </form>
  `);

  $(".site-menu-toggle").attr("title", "Menü");
  $(".site-navigation-block").html(buildMenuOverlay(pathname));

  $("#site-footer-links .cms-feature-datablock").html(shellConfig.footerLineHtml);
  $("#site-footer-right .cms-feature-datablock").html(shellConfig.footerRightHtml);

  $("a").each((_, element) => {
    const anchor = $(element);
    const href = (anchor.attr("href") ?? "").toLowerCase();
    const text = anchor.text().toLowerCase();
    const looksLikeWalker =
      href.includes("walker") ||
      href.includes("thewalkerschool") ||
      href.includes("style-guide") ||
      href.includes("sg---") ||
      text.includes("walker");

    if (!looksLikeWalker) {
      return;
    }

    const listItem = anchor.closest("li");

    if (listItem.length) {
      listItem.remove();
      return;
    }

    const feature = anchor.closest(".cms-feature-wrapper");

    if (feature.length) {
      feature.remove();
    } else {
      anchor.remove();
    }
  });
}

function buildMenuColumnHtml(
  column: (typeof shellConfig.menuColumns)[number],
  pathname: string,
  {
    wrapperClass,
    titleId,
    textId,
    contentId,
  }: {
    wrapperClass: string;
    titleId: string;
    textId: string;
    contentId: string;
  },
) {
  return `
    <div class="${wrapperClass}">
      <div id="${titleId}" class="feature-zone">
        <div id="${textId}" class="cms-text-feature cms-text-feature-wrapper cms-feature-wrapper featureMainDiv cms-tag-feature-text-wrapper cms-tag-feature-header-wrapper" feature-data-tag="text header">
          <div id="${textId.toLowerCase()}" class="cms-text-feature-data">
            <div id="${contentId}" class="cms-feature-datablock cms-text-feature-content cms-tag-feature-text cms-tag-feature-header">
              <p><var><span style="color:#ffffff;">${escapeHtml(column.title)}</span></var></p>
            </div>
          </div>
        </div>
      </div>
      <nav class="site-navigation">
        ${buildPrimaryNav(column.links, pathname)}
      </nav>
    </div>
  `;
}

function buildMenuOverlay(pathname: string) {
  const directLinks = [...shellConfig.quickLinks, ...shellConfig.spotlightLinks];

  const wrappers = [
    {
      wrapperClass: "site-nav-believe-wrapper",
      titleId: "site-navigation-title",
      textId: "TextFeature_afbab2bebbf547cbbd520dc212579886",
      contentId: "TextFeature_ContentArea_afbab2bebbf547cbbd520dc212579886",
    },
    {
      wrapperClass: "site-nav-school-wrapper",
      titleId: "site-navigation-title-two",
      textId: "TextFeature_02e9ae5ce86b45798d702042a7886aec",
      contentId: "TextFeature_ContentArea_02e9ae5ce86b45798d702042a7886aec",
    },
    {
      wrapperClass: "site-nav-activities-wrapper",
      titleId: "site-navigation-title-three",
      textId: "TextFeature_c0a6357d0f4645ad91c5d884fd54c8ad",
      contentId: "TextFeature_ContentArea_c0a6357d0f4645ad91c5d884fd54c8ad",
    },
  ] as const;

  return `
    <div class="site-navigation-block--column-one">
      ${shellConfig.menuColumns
        .map((column, index) => buildMenuColumnHtml(column, pathname, wrappers[index]))
        .join("")}
      <div class="site-navigation-block-quicklinks">
        <div id="site-navigation-title-five" class="feature-zone">
          <div id="TextFeature_c8f42941ad4e453cbe385316d2307c80" class="cms-text-feature cms-text-feature-wrapper cms-feature-wrapper featureMainDiv site-feature-bottom-no-space-wrapper custom-link-active-wrapper header-custom-link-wrapper cms-tag-feature-text-wrapper cms-tag-feature-header-wrapper" feature-data-tag="text header">
            <div id="textfeature_c8f42941ad4e453cbe385316d2307c80" class="cms-text-feature-data">
              <div id="TextFeature_ContentArea_c8f42941ad4e453cbe385316d2307c80" class="cms-feature-datablock cms-text-feature-content site-feature-bottom-no-space custom-link-active header-custom-link cms-tag-feature-text cms-tag-feature-header">
                <p><var><span style="color:#ffffff;">Direkt</span></var></p>
                <p>${buildInlineLinks(directLinks)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="site-navigation-block--image">
      <div id="site-navigation-image" class="feature-zone">
        <div id="GalleryFeature_79eb986344c14b8080ec2c6cd135b70f" class="cms-gallery-feature cms-gallery-feature-wrapper cms-feature-wrapper featureMainDiv drop-target site-slider-slideshow-wrapper site-feature-bottom-no-space-wrapper cms-tag-feature-gallery-wrapper cms-tag-feature-header-wrapper" feature-data-tag="gallery header">
          <div class="cms-feature-datablock site-slider site-slider-slideshow site-feature-bottom-no-space cms-tag-feature-gallery cms-tag-feature-header">
            <div id="site-slideshow_79eb986344c14b8080ec2c6cd135b70f" class="site-slick-wrapper">
              <div class="site-slide site-slider-with-image" style="background-image: url(${shellConfig.menuImage.src})">
                <a href="${shellConfig.menuImage.href}" class="site-slide-link"${linkAttributes({ href: shellConfig.menuImage.href, external: shellConfig.menuImage.href.startsWith("http") })}>
                  <div class="site-slider-image-block">
                    <img src="${shellConfig.menuImage.src}" class="site-slider-image" alt="${escapeHtml(shellConfig.menuImage.alt)}" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildPrimaryNav(links: WalkerLink[], pathname: string) {
  return `
    <ul class="site-nav-block">
      ${links
        .map(
          (link, index) => `
        <li class="site-nav-item ${index === 0 ? "site-nav-first-item " : ""}level1 ${
            pathname === link.href ? "site-nav-active-parent site-nav-active-path " : ""
          }custom-nav-">
          <a class="site-nav-link" href="${link.href}"${linkAttributes(link)}>${escapeHtml(link.label)}</a>
        </li>`,
        )
        .join("")}
    </ul>
  `;
}

function setImageSlide(slide: Cheerio<AnyNode>, image: string, alt: string) {
  slide.attr("style", `background-image: url(${image})`);
  slide.find(".site-slider-image").attr({
    src: image,
    alt,
  });
}

function setVideoSlide(
  slide: Cheerio<AnyNode>,
  {
    src,
    poster,
    title,
    primaryButton,
    secondaryButton,
  }: {
    src: string;
    poster?: string;
    title: string;
    primaryButton: WalkerLink;
    secondaryButton: WalkerLink;
  },
) {
  slide.attr("style", `background-image: url(${poster ?? src})`);
  slide.removeClass("site-slider-with-image").addClass("site-slider-with-video");
  slide.find(".site-slider-image-block, .site-slider-video-block").remove();
  slide.prepend(`
    <div class="site-slider-video-block">
      <video class="site-slider-video" autoplay loop muted playsinline poster="${poster ?? ""}" title="${escapeHtml(title)}">
        <source src="${src}" type="video/mp4" />
      </video>
    </div>
  `);
  slide.find(".site-slider-capton-data").html(`
    <h2 style="text-align: center;">${escapeHtml(title)}</h2>
    <p style="text-align: center;">
      <a class="site-button-primary" href="${primaryButton.href}"${linkAttributes(primaryButton)}>${escapeHtml(primaryButton.label)}</a>
      &nbsp; &nbsp;&nbsp;
      <a class="site-button-primary" href="${secondaryButton.href}"${linkAttributes(secondaryButton)}>${escapeHtml(secondaryButton.label)}</a>
    </p>
  `);
}

function buildAccordion(label: string, paragraphs: string[]) {
  return `
    <table border="0" cellpadding="10" cellspacing="1" class="site-table-mobile site-table-accordion" style="width:100%;">
      <tbody>
        <tr>
          <th>${escapeHtml(label)}</th>
        </tr>
        <tr>
          <td>${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</td>
        </tr>
      </tbody>
    </table>
  `;
}

function buildSubpageTopContent(page: WalkerSubpageContent) {
  return `
    <div class="paideia-panel-toolbar">
      <a href="/" class="paideia-panel-close" data-paideia-close>
        <span class="paideia-panel-close__icon">×</span>
        <span>Schließen</span>
      </a>
    </div>
    <div class="cms-text-feature cms-text-feature-wrapper cms-feature-wrapper featureMainDiv site-feature-bottom-no-space-wrapper site-padding-dt-bottom-50-wrapper site-padding-mob-bottom-25-wrapper site-custom-title-left-wrapper cms-tag-feature-text-wrapper">
      <div class="cms-text-feature-data">
        <div class="cms-feature-datablock cms-text-feature-content site-feature-bottom-no-space site-padding-dt-bottom-50 site-padding-mob-bottom-25 site-custom-title-left cms-tag-feature-text">
          <p style="text-align: right;"><var>${escapeHtml(page.eyebrow)}</var></p>
          <h2 style="text-align: right;">${escapeHtml(page.title)}</h2>
        </div>
      </div>
    </div>
  `;
}

function appendSubpagePanelScript($: CheerioAPI) {
  $("body").append(`
    <script>
      (function () {
        function setupPaideiaPanelTransitions() {
          document.body.classList.add('paideia-panel-visible');
          document.querySelectorAll('[data-paideia-close]').forEach(function (link) {
            link.addEventListener('click', function (event) {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || this.target === '_blank') {
                return;
              }

              event.preventDefault();
              var href = this.getAttribute('href') || '/';
              document.body.classList.add('paideia-panel-closing');
              window.setTimeout(function () {
                window.location.href = href;
              }, 240);
            });
          });
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', setupPaideiaPanelTransitions);
        } else {
          setupPaideiaPanelTransitions();
        }
      })();
    </script>
  `);
}

function buildTeamGroupsHtml(groups: TeamGroup[]) {
  return `
    <div class="paideia-team-groups">
      ${groups
        .map(
          (group) => `
        <section class="paideia-team-group">
          <h3><font color="${PAIDEIA_PRIMARY_HEX}">${escapeHtml(group.title)}</font></h3>
          <p>${group.description}</p>
          <div class="paideia-team-grid">
            ${group.members
              .map(
                (member) => `
              <article class="paideia-team-card">
                <img src="${member.image}" alt="${escapeHtml(member.name)}" />
                <div class="paideia-team-card__body">
                  <p class="paideia-team-card__role">${escapeHtml(member.role)}${
                    member.status ? ` · ${escapeHtml(member.status)}` : ""
                  }</p>
                  <h4>${escapeHtml(member.name)}</h4>
                  <p>${member.shortBio}</p>
                  ${
                    member.longBio?.length
                      ? `<details class="paideia-team-card__details">
                    <summary><span>Mehr erfahren</span></summary>
                    ${member.longBio.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
                  </details>`
                      : ""
                  }
                </div>
              </article>`,
              )
              .join("")}
          </div>
        </section>`,
        )
        .join("")}
    </div>
  `;
}

function buildPressHtml() {
  const sortedItems = [...pressItems].sort((left, right) =>
    right.sortDate.localeCompare(left.sortDate),
  );

  return `
    <div class="paideia-press-grid">
      ${sortedItems
        .map(
          (item) => `
        <a class="paideia-press-card" href="${item.href}" target="_blank" rel="noreferrer">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" />
          <div class="paideia-press-card__body">
            <p class="paideia-press-card__meta">${escapeHtml(item.year)} · ${escapeHtml(item.date)}</p>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${item.body}</p>
            <span class="site-button-primary">Artikel öffnen</span>
          </div>
        </a>`,
        )
        .join("")}
    </div>
  `;
}

function buildSchoolPaperHtml() {
  return `
    <div class="paideia-schoolpaper-grid">
      ${schoolPaperIssues
        .map(
          (issue) => `
        <a class="paideia-schoolpaper-card" href="${issue.href}" target="_blank" rel="noreferrer">
          <img src="${issue.image}" alt="${escapeHtml(issue.title)}" />
          <div class="paideia-schoolpaper-card__body">
            <p class="paideia-schoolpaper-card__meta">${escapeHtml(issue.year)}</p>
            <h3>${escapeHtml(issue.title)}</h3>
            <p>${escapeHtml(issue.body)}</p>
            <span class="site-button-primary">Ausgabe öffnen</span>
          </div>
        </a>`,
        )
        .join("")}
    </div>
  `;
}

function buildGalleryHtml(gallery: GalleryPage) {
  return `
    <div class="paideia-gallery-grid">
      ${gallery.items
        .map(
          (item) => `
        <figure class="paideia-gallery-card">
          <img src="${item.src}" alt="${escapeHtml(item.alt)}" />
          <figcaption>
            <strong>${escapeHtml(item.caption)}</strong>
            <span>${escapeHtml(item.alt)}</span>
          </figcaption>
        </figure>`,
        )
        .join("")}
    </div>
  `;
}

function appendHomeScrollbar($: CheerioAPI) {
  $("body").append(`
    <div class="paideia-scrollbar" aria-hidden="true">
      <p class="paideia-scrollbar__hint">Nach rechts ziehen oder horizontal scrollen</p>
      <div class="paideia-scrollbar__track">
        <span class="paideia-scrollbar__thumb"></span>
      </div>
    </div>
    <script>
      (function () {
        function setupPaideiaScrollbar() {
          var storageKey = 'paideia-home-scroll-left';
          var scrollbar = document.querySelector('.paideia-scrollbar');
          if (!scrollbar || scrollbar.getAttribute('data-ready') === 'true') {
            return;
          }

          var track = scrollbar.querySelector('.paideia-scrollbar__track');
          var thumb = scrollbar.querySelector('.paideia-scrollbar__thumb');
          var scroller = document.querySelector('.site-scroller-wrapper #MainContent');
          if (!track || !thumb || !scroller) {
            return;
          }

          scrollbar.setAttribute('data-ready', 'true');
          var dragState = null;

          function readStoredScroll() {
            try {
              return Number(window.sessionStorage.getItem(storageKey) || '0');
            } catch (error) {
              return 0;
            }
          }

          function saveScrollPosition() {
            try {
              window.sessionStorage.setItem(storageKey, String(Math.round(scroller.scrollLeft)));
            } catch (error) {}
          }

          function getMaxScrollLeft() {
            return Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
          }

          function getThumbMetrics() {
            var trackWidth = track.clientWidth;
            var visibleRatio = scroller.clientWidth / scroller.scrollWidth;
            var thumbWidth = Math.max(trackWidth * visibleRatio, 72);
            thumbWidth = Math.min(thumbWidth, trackWidth);
            return {
              trackWidth: trackWidth,
              thumbWidth: thumbWidth,
              travel: Math.max(trackWidth - thumbWidth, 0)
            };
          }

          function updateScrollPosition(thumbOffset) {
            var metrics = getThumbMetrics();
            var maxScrollLeft = getMaxScrollLeft();
            var clampedOffset = Math.max(0, Math.min(thumbOffset, metrics.travel));
            var progress = metrics.travel === 0 ? 0 : clampedOffset / metrics.travel;
            scroller.scrollLeft = progress * maxScrollLeft;
          }

          function syncScrollbar() {
            var maxScrollLeft = getMaxScrollLeft();
            var isDesktop = window.innerWidth >= 1024;
            if (!isDesktop || maxScrollLeft <= 0) {
              scrollbar.classList.remove('is-visible');
              scrollbar.classList.remove('is-dragging');
              thumb.style.width = '0px';
              thumb.style.transform = 'translate3d(0, 0, 0)';
              return;
            }

            var metrics = getThumbMetrics();
            var progress = maxScrollLeft === 0 ? 0 : scroller.scrollLeft / maxScrollLeft;
            var thumbOffset = metrics.travel * progress;

            thumb.style.width = metrics.thumbWidth + 'px';
            thumb.style.transform = 'translate3d(' + thumbOffset + 'px, 0, 0)';
            scrollbar.classList.add('is-visible');
          }

          function restoreScrollPosition() {
            var storedScroll = readStoredScroll();
            if (!storedScroll) {
              syncScrollbar();
              return;
            }

            scroller.scrollLeft = Math.max(0, Math.min(storedScroll, getMaxScrollLeft()));
            syncScrollbar();
          }

          function jumpScrollbar(clientX) {
            var rect = track.getBoundingClientRect();
            var metrics = getThumbMetrics();
            updateScrollPosition(clientX - rect.left - metrics.thumbWidth / 2);
            syncScrollbar();
          }

          function stopDragging(event) {
            if (!dragState || (event && event.pointerId !== dragState.pointerId)) {
              return;
            }

            if (thumb.releasePointerCapture) {
              try {
                thumb.releasePointerCapture(dragState.pointerId);
              } catch (error) {}
            }

            dragState = null;
            scrollbar.classList.remove('is-dragging');
          }

          scroller.addEventListener('scroll', function () {
            saveScrollPosition();
            syncScrollbar();
          }, { passive: true });
          window.addEventListener('resize', syncScrollbar);
          window.addEventListener('load', syncScrollbar);
          window.addEventListener('pagehide', saveScrollPosition);
          window.addEventListener('beforeunload', saveScrollPosition);

          document.querySelectorAll('a[href]').forEach(function (link) {
            link.addEventListener('click', saveScrollPosition, { passive: true });
          });

          track.addEventListener('pointerdown', function (event) {
            if (window.innerWidth < 1024 || event.target === thumb) {
              return;
            }

            jumpScrollbar(event.clientX);
          });

          thumb.addEventListener('pointerdown', function (event) {
            if (window.innerWidth < 1024) {
              return;
            }

            dragState = {
              pointerId: event.pointerId,
              grabOffset: event.clientX - thumb.getBoundingClientRect().left
            };
            scrollbar.classList.add('is-dragging');

            if (thumb.setPointerCapture) {
              thumb.setPointerCapture(event.pointerId);
            }

            event.preventDefault();
            event.stopPropagation();
          });

          thumb.addEventListener('pointermove', function (event) {
            if (!dragState || event.pointerId !== dragState.pointerId) {
              return;
            }

            var rect = track.getBoundingClientRect();
            updateScrollPosition(event.clientX - rect.left - dragState.grabOffset);
            syncScrollbar();
            event.preventDefault();
          });

          thumb.addEventListener('pointerup', stopDragging);
          thumb.addEventListener('pointercancel', stopDragging);
          window.addEventListener('pointerup', stopDragging);

          window.setTimeout(restoreScrollPosition, 40);
          window.setTimeout(restoreScrollPosition, 300);
          window.setTimeout(restoreScrollPosition, 900);
          restoreScrollPosition();
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', setupPaideiaScrollbar);
        } else {
          setupPaideiaScrollbar();
        }
      })();
    </script>
  `);
}

function buildSearchHtml(query: string) {
  const needle = query.trim().toLocaleLowerCase("de");
  const results = needle
    ? searchDocuments.filter((document) =>
        `${document.title} ${document.body}`.toLocaleLowerCase("de").includes(needle),
      )
    : [];

  if (!needle) {
    return "<p>Gib oben einen Suchbegriff ein, um Inhalte der Seite zu durchsuchen.</p>";
  }

  if (!results.length) {
    return `<p>Für <strong>${escapeHtml(query)}</strong> wurden noch keine Treffer gefunden.</p>`;
  }

  return `
    <div class="paideia-search-results">
      ${results
        .map(
          (result) => `
        <a class="paideia-search-result" href="${result.href}">
          <h3>${escapeHtml(result.title)}</h3>
          <p>${escapeHtml(result.body.replace(/<[^>]+>/g, "").slice(0, 180))}…</p>
        </a>`,
        )
        .join("")}
    </div>
  `;
}

export async function renderHomePage() {
  const $ = applyBaseDocument(await loadMirrorHtml("index.html"), {
    title: "Paideia | Freie Schule Salzburg",
    description:
      "Paideia ist eine freie Schule in Salzburg, die Beziehung, Struktur, Freiheit und wirksames Lernen zusammenführt.",
    pathname: "/",
    isHome: true,
  });

  $(".site-custom-intro-banner-wrapper h2").html(`
    <span class="paideia-intro-lockup" aria-hidden="true">
      <span class="paideia-intro-lockup__mark">
        <img src="/paideia/logos/mark-color.png" class="paideia-intro-lockup__mark-image paideia-intro-lockup__mark-image--colour" alt="" />
        <img src="/paideia/logos/mark-white.png" class="paideia-intro-lockup__mark-image paideia-intro-lockup__mark-image--white" alt="" />
      </span>
      <span class="paideia-intro-lockup__wording">
        <span class="paideia-intro-lockup__title">PAIDEIA</span>
        <span class="paideia-intro-lockup__subtitle">Freie Schule Salzburg</span>
      </span>
    </span>
  `);
  $(".site-custom-intro-banner-wrapper .site-custom-intro-definition").html(
    `<p>${homeContent.introDefinition}</p>`,
  );

  const heroSlide = $(".site-custom-video-banner-wrapper .site-slide").first();
  heroSlide
    .removeClass("site-slider-with-image")
    .addClass("site-slider-with-video paideia-home-hero-slide")
    .attr("style", "background-image: none;");
  heroSlide.find(".site-slider-image-block").html(`
    <video class="site-slider-video paideia-hero-video" autoplay loop muted playsinline poster="${homeContent.hero.poster}">
      <source src="${homeContent.hero.videoSrc}" type="video/mp4" />
    </video>
  `);
  heroSlide.append(`
    <button
      type="button"
      class="paideia-hero-audio-toggle"
      aria-pressed="false"
      aria-label="Ton aktivieren"
      style="z-index:8;pointer-events:auto;"
      onclick="var video=document.querySelector('.paideia-home-hero-slide .paideia-hero-video'); if(!video){return false;} var shouldEnable=video.muted||video.defaultMuted||video.hasAttribute('muted'); if(shouldEnable){ video.defaultMuted=false; video.muted=false; video.removeAttribute('muted'); video.volume=1; var playPromise=video.play(); if(playPromise&&typeof playPromise.then==='function'){ playPromise.then(function(){}, function(){}); } } else { video.defaultMuted=true; video.muted=true; video.setAttribute('muted','muted'); } this.setAttribute('aria-pressed', String(shouldEnable)); this.setAttribute('aria-label', shouldEnable ? 'Ton deaktivieren' : 'Ton aktivieren'); this.textContent = shouldEnable ? 'Ton aus' : 'Ton an'; this.classList.toggle('is-active', shouldEnable); return false;"
    >
      Ton an
    </button>
  `);
  const heroCaption = heroSlide.find(".site-slider-caption").first();
  const heroCaptionStyle = heroCaption.attr("style");
  heroCaption.attr(
    "style",
    `${heroCaptionStyle ? `${heroCaptionStyle.replace(/\s+$/, "").replace(/;?$/, ";")} ` : ""}pointer-events:none;`,
  );
  heroSlide.find(".site-slider-capton-data").html(`
    <div class="paideia-home-hero-copy">
      <p class="paideia-home-hero-copy__lead"><strong>${homeContent.hero.lead}</strong></p>
      <p class="paideia-home-hero-copy__definition">${homeContent.hero.definition}</p>
    </div>
  `);
  heroSlide.find(".site-slider-more-desc-data h2").text(homeContent.hero.word);
  heroSlide.find(".site-slider-more-desc-data p").remove();
  heroSlide.find('script[src*="player.vimeo.com"]').remove();

  const valueSlides = $(".site-custom-number-gallery-wrapper .site-slide");
  homeContent.values.forEach((value, index) => {
    const slide = valueSlides.eq(index);
    setImageSlide(slide, value.image, value.title);
    slide.find(".site-slider-capton-data h2").text(value.number);
    slide
      .find(".site-slider-more-desc-data h6")
      .html(`<span style="color:${PAIDEIA_PRIMARY_HEX};">${value.title}</span>`);
    slide.find(".site-slider-more-desc-data p").eq(0).text(value.body);
    slide.find(".site-slider-more-desc-data a").attr("href", value.href).text("Mehr erfahren");
  });

  $("#TextFeature_ContentArea_a432acf97ccd41cf803d5a8b24f8b22d").html(`
    <p><var>${homeContent.familyChoice.eyebrow}</var></p>
    <h2>${homeContent.familyChoice.title}</h2>
    <p><strong>${homeContent.familyChoice.lead}</strong></p>
    ${buildAccordion("Mehr erfahren", homeContent.familyChoice.body)}
  `);
  setImageSlide(
    $("#GalleryFeature_dd5c56072c7447058df030fde2e48b62 .site-slide").first(),
    homeContent.familyChoice.cutoutImage,
    "Paideia Familie",
  );

  $(".site-custom-image-grid-wrapper .site-slide").each((index, element) => {
    const image = homeContent.gridImages[index % homeContent.gridImages.length];
    setImageSlide($(element), image, `Paideia Grid ${index + 1}`);
  });

  $("#TextFeature_ContentArea_184254801f8745098525cf1e26520526").html(`
    <p><var>${homeContent.mission.eyebrow}</var></p>
    <h2>${homeContent.mission.title}</h2>
    <p><strong>${homeContent.mission.lead}</strong></p>
    ${buildAccordion("Mehr erfahren", [homeContent.mission.body])}
  `);

  setImageSlide(
    $("#GalleryFeature_46a7b4e38d8647d58421772336fa90d5 .site-slide").first(),
    "/paideia/home/group.jpg",
    "Paideia Gemeinschaft",
  );
  setImageSlide(
    $("#GalleryFeature_8353bcd2f73b417bbccbee3a95ce18ad .site-slide").first(),
    "/paideia/gallery/2023-24/kws17.jpeg",
    "Paideia Lernmoment",
  );

  $("#TextFeature_ContentArea_8fc97feb63d9416285a4a2eff3dcf047").html(`
    <p><var>${homeContent.balance.eyebrow}</var></p>
    <h2>${homeContent.balance.title}</h2>
    <p><strong>${homeContent.balance.lead}</strong></p>
    ${buildAccordion("Mehr erfahren", [homeContent.balance.body])}
  `);

  $("#TextFeature_ContentArea_ff9b5a0d5c924788ab8f5d461aaa8598").html(`
    <p><var>${homeContent.purposefulLearning.eyebrow}</var></p>
    <h2>${homeContent.purposefulLearning.title}</h2>
    <p><strong>${homeContent.purposefulLearning.lead}</strong></p>
    ${buildAccordion("Mehr erfahren", [homeContent.purposefulLearning.body])}
  `);

  const featureSlides = $("#GalleryFeature_8691daddc2054247ac70e0106181f2db .site-slide");
  homeContent.threeCards.forEach((card, index) => {
    const slide = featureSlides.eq(index);
    setImageSlide(slide, card.image, card.title);
    slide.find(".site-slider-capton-data").html(`
      <h2>${card.title}</h2>
      <p><strong>${card.body}</strong></p>
      <p><a class="site-button-primary" href="${card.href}">${card.buttonLabel}</a></p>
    `);
  });

  $("#TextFeature_ContentArea_50dac7c11a884baa89417acf225ebb66").html(`
    <p>&nbsp;</p>
    <h2><a id="Unsere-Wege" name="Unsere-Wege"></a>${homeContent.pathways.title}</h2>
    <p><strong>${homeContent.pathways.lead}</strong></p>
    <p>Hier findest du die wichtigsten Einstiege in die Seite ohne Walker-Restnavigation.</p>
  `);
  setImageSlide(
    $("#GalleryFeature_ae04f7e6bf664957a6d8a496f9ec3e47 .site-slide").first(),
    "/paideia/home/campus.jpg",
    "Paideia Wege",
  );

  const stageSlides = $("#GalleryFeature_b7fcccbe1aa24098ad5ef2bf28493b6d #site-slideshow_b7fcccbe1aa24098ad5ef2bf28493b6d .site-slide");
  const stageContents = $("#GalleryFeature_b7fcccbe1aa24098ad5ef2bf28493b6d #site-slideshow_tab_b7fcccbe1aa24098ad5ef2bf28493b6d .site-slider-tab-content");
  homeContent.stages.forEach((stage, index) => {
    const slide = stageSlides.eq(index);
    setImageSlide(slide, stage.image, stage.label);
    slide.find(".site-slider-capton-data p").text(stage.label);
    stageContents.eq(index).html(`
      <h2>${stage.title}</h2>
      <p><strong>${stage.body}</strong></p>
      <p><a class="site-button-primary" href="${stage.href}">${stage.buttonLabel}</a></p>
    `);
  });

  const finalBannerSlide = $("#GalleryFeature_1c184909e65b40b2930a1ebacbfdbb53 .site-slide").first();
  if (homeContent.finalBanner.imageSrc) {
    setImageSlide(finalBannerSlide, homeContent.finalBanner.imageSrc, homeContent.finalBanner.title);
    finalBannerSlide.find(".site-slider-capton-data").html(`
      <h2 style="text-align: center;">${escapeHtml(homeContent.finalBanner.title)}</h2>
      <p style="text-align: center;">
        <a class="site-button-primary" href="${homeContent.finalBanner.buttonPrimary.href}">${escapeHtml(homeContent.finalBanner.buttonPrimary.label)}</a>
        &nbsp; &nbsp;&nbsp;
        <a class="site-button-primary" href="${homeContent.finalBanner.buttonSecondary.href}">${escapeHtml(homeContent.finalBanner.buttonSecondary.label)}</a>
      </p>
    `);
  } else if (homeContent.finalBanner.videoSrc) {
    setVideoSlide(finalBannerSlide, {
      src: homeContent.finalBanner.videoSrc,
      poster: homeContent.finalBanner.poster ?? "/paideia/media/frame-88.jpg",
      title: homeContent.finalBanner.title,
      primaryButton: homeContent.finalBanner.buttonPrimary,
      secondaryButton: homeContent.finalBanner.buttonSecondary,
    });
  }

  appendHomeScrollbar($);

  return $.html();
}

function buildSubpageBlocks(page: WalkerSubpageContent) {
  if (page.slug === "team") {
    return [
      `<h3><font color="${PAIDEIA_PRIMARY_HEX}">MENSCHEN</font></h3>
      <p>Die Reihenfolge folgt bewusst dem abgestimmten Aufbau für Version 1. Zusätzliche Texte lassen sich pro Person aufklappen, damit die Seite klar bleibt und trotzdem mehr Tiefe bietet.</p>`,
      buildTeamGroupsHtml(teamGroups),
    ];
  }

  if (page.slug === "presse") {
    return [
      `<h3><font color="${PAIDEIA_PRIMARY_HEX}">CHRONIK</font></h3>
      <p>Die sichtbaren Medienmomente der Schule werden hier chronologisch von neu nach alt als öffentliche Wegmarken geordnet.</p>`,
      buildPressHtml(),
    ];
  }

  if (page.slug === "kreativwerkblatt") {
    return [
      ...page.sections,
      `<h3><font color="${PAIDEIA_PRIMARY_HEX}">AUSGABEN</font></h3>
      <p>Die vorhandenen Ausgaben bleiben sichtbar und lassen sich direkt öffnen.</p>`,
      buildSchoolPaperHtml(),
    ];
  }

  return page.sections;
}

function renderSubpageBody(page: WalkerSubpageContent) {
  return buildSubpageBlocks(page)
    .map(
      (section) => `
      <div class="cms-text-feature cms-text-feature-wrapper cms-feature-wrapper featureMainDiv site-feature-bottom-no-space-wrapper cms-tag-feature-text-wrapper">
        <div class="cms-text-feature-data">
          <div class="cms-feature-datablock cms-text-feature-content site-feature-bottom-no-space cms-tag-feature-text">
            ${replaceLegacyAccentMarkup(section)}
          </div>
        </div>
      </div>`,
    )
    .join("");
}

function renderBottomBanner(
  title: string,
  image: string,
  buttons: WalkerLink[],
) {
  return `
    <div class="cms-gallery-feature cms-gallery-feature-wrapper cms-feature-wrapper featureMainDiv drop-target site-slide-caption-dt-mc-wrapper site-slide-height-mob-fixed-wrapper site-slide-height-dt-cover-wrapper site-slider-slideshow-wrapper site-color-white-wrapper site-full-width-content-wrapper site-feature-bottom-no-space-wrapper site-padding-dt-top-100-wrapper site-padding-mob-top-1-wrapper site-custom-banner-size-150-wrapper cms-tag-feature-gallery-wrapper cms-tag-feature-banner-wrapper">
      <div class="cms-feature-datablock site-slider site-slide-caption-dt-mc site-slide-height-mob-fixed site-slide-height-dt-cover site-slider-slideshow site-color-white site-full-width-content site-feature-bottom-no-space site-padding-dt-top-100 site-padding-mob-top-1 site-custom-banner-size-150 cms-tag-feature-gallery cms-tag-feature-banner">
        <div class="site-slick-wrapper">
          <div class="site-slide site-slider-with-image" style="background-image: url(${image})">
            <div class="site-slider-image-block">
              <img src="${image}" class="site-slider-image" alt="${escapeHtml(title)}" />
            </div>
            <div class="site-slider-caption">
              <div class="site-slider-caption-block">
                <div class="site-container">
                  <div class="site-slider-capton-data">
                    <h2 style="text-align: center;">${escapeHtml(title)}</h2>
                    <p style="text-align: center;">
                      ${buttons
                        .map(
                          (button) =>
                            `<a class="site-button-primary" href="${button.href}"${linkAttributes(button)}>${escapeHtml(button.label)}</a>`,
                        )
                        .join("&nbsp; &nbsp;&nbsp;")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getBottomBannerLinks(pathname: string): WalkerLink[] {
  if (pathname === "/infoabend") {
    return [
      { label: "Aufnahme", href: "/aufnahme" },
      { label: "Kontakt", href: "/kontakt" },
    ];
  }

  if (pathname === "/aufnahme") {
    return [{ label: "Kontakt", href: "/kontakt" }];
  }

  return [
    { label: "Aufnahme", href: "/aufnahme" },
    { label: "Kontakt", href: "/kontakt" },
  ];
}

export async function renderSubpage(slug: string) {
  const page = pages[slug];
  if (!page) {
    return null;
  }

  const $ = applyBaseDocument(await loadMirrorHtml("why-walker.html"), {
    title: `${page.title} | Paideia`,
    description: page.description,
    pathname: `/${slug}`,
    isHome: false,
  });

  $(".site-page-title-block").text(page.title);
  setImageSlide($("#hero-banner .site-slide").first(), page.heroImage, page.heroAlt);

  $(".site-breadcrum").html(`
    <li class="site-breadcrumbs-item">
      <a class="site-breadcrumbs-link" href="/">Home</a>
    </li>
    <li class="site-breadcrumbs-item">
      ${escapeHtml(page.breadcrumbLabel)}
    </li>
    <li class="site-breadcrumbs-item site-breadcrumbs-active">
      ${escapeHtml(page.navLabel)}
    </li>
  `);

  $("#site-top-content").html(buildSubpageTopContent(page));

  $("#site-main-content-left").html(`
    <div class="cms-text-feature cms-text-feature-wrapper cms-feature-wrapper featureMainDiv cms-tag-feature-text-wrapper">
      <div class="cms-text-feature-data">
        <div class="cms-feature-datablock cms-text-feature-content cms-tag-feature-text">
          <p><strong><span style="color:${PAIDEIA_PRIMARY_HEX};">${page.lead}</span></strong></p>
        </div>
      </div>
    </div>
  `);

  $("#site-main-content").html(renderSubpageBody(page));
  $("#site-main-content-right-two").empty();
  $(".site-sidebar-menu").empty();
  $("#site-main-content-right").empty();
  $("#MainContent").html(
    renderBottomBanner(
      "KENNENLERNEN",
      "/paideia/home/campus-wide.jpg",
      getBottomBannerLinks(`/${slug}`),
    ),
  );
  appendSubpagePanelScript($);

  return $.html();
}

export async function renderGalleryPage(year: string) {
  const gallery = galleries[year];
  if (!gallery) {
    return null;
  }

  const page: WalkerSubpageContent = {
    slug: `fotos-${year}`,
    navLabel: `Fotos ${year.replace("-", "/")}`,
    breadcrumbLabel: "Gemeinschaft",
    title: `Fotos ${year.replace("-", "/")}`,
    description: gallery.description,
    eyebrow: "DIE",
    heroImage: gallery.heroImage,
    heroAlt: gallery.heroAlt,
    lead: gallery.description,
    sideButtons: [
      { label: "Team", href: "/team" },
      { label: "Aufnahme", href: "/aufnahme" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    sideCard: {
      eyebrow: "Galerie",
      title: "Dokumentarische Bilder statt Stock-Momente",
      href: "/lernen-alltag",
      image: gallery.items[0]?.src ?? gallery.heroImage,
      alt: gallery.items[0]?.alt ?? gallery.heroAlt,
    },
    sections: [
      `<h3><font color="${PAIDEIA_PRIMARY_HEX}">${escapeHtml(gallery.title.toUpperCase())}</font></h3>
       <p>${gallery.description}</p>`,
      buildGalleryHtml(gallery),
    ],
  };

  const html = await renderSubpageFromContent(page, `/fotos/${year}`);
  return html;
}

async function renderSubpageFromContent(page: WalkerSubpageContent, pathname: string) {
  const $ = applyBaseDocument(await loadMirrorHtml("why-walker.html"), {
    title: `${page.title} | Paideia`,
    description: page.description,
    pathname,
    isHome: false,
  });

  $(".site-page-title-block").text(page.title);
  setImageSlide($("#hero-banner .site-slide").first(), page.heroImage, page.heroAlt);
  $(".site-breadcrum").html(`
    <li class="site-breadcrumbs-item">
      <a class="site-breadcrumbs-link" href="/">Home</a>
    </li>
    <li class="site-breadcrumbs-item">
      ${escapeHtml(page.breadcrumbLabel)}
    </li>
    <li class="site-breadcrumbs-item site-breadcrumbs-active">
      ${escapeHtml(page.navLabel)}
    </li>
  `);
  $("#site-top-content").html(buildSubpageTopContent(page));
  $("#site-main-content-left").html(`
    <div class="cms-text-feature cms-text-feature-wrapper cms-feature-wrapper featureMainDiv cms-tag-feature-text-wrapper">
      <div class="cms-text-feature-data">
        <div class="cms-feature-datablock cms-text-feature-content cms-tag-feature-text">
          <p><strong><span style="color:${PAIDEIA_PRIMARY_HEX};">${page.lead}</span></strong></p>
        </div>
      </div>
    </div>
  `);
  $("#site-main-content").html(renderSubpageBody(page));
  $("#site-main-content-right-two").empty();
  $(".site-sidebar-menu").empty();
  $("#site-main-content-right").empty();
  $("#MainContent").html(
    renderBottomBanner(
      "KENNENLERNEN",
      "/paideia/home/campus-wide.jpg",
      getBottomBannerLinks(pathname),
    ),
  );
  appendSubpagePanelScript($);

  return $.html();
}

export async function renderSearchPage(query: string) {
  const page: WalkerSubpageContent = {
    slug: "suche",
    navLabel: "Suche",
    breadcrumbLabel: "Paideia",
    title: "Suche",
    description: `Suchergebnisse für ${query || "Paideia"}`,
    eyebrow: "DIE",
    heroImage: "/paideia/home/campus.jpg",
    heroAlt: "Suche",
    lead: "Finde Inhalte, Seiten und Bildgalerien innerhalb der Paideia-Version der Walker-Struktur.",
    sideButtons: [
      { label: "Philosophie", href: "/philosophie" },
      { label: "Aufnahme", href: "/aufnahme" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    sideCard: {
      eyebrow: "Schnellzugriff",
      title: "Zur Startseite",
      href: "/",
      image: "/paideia/home/group.jpg",
      alt: "Zur Startseite",
    },
    sections: [
      `<h3><font color="${PAIDEIA_PRIMARY_HEX}">ERGEBNISSE</font></h3>${buildSearchHtml(query)}`,
    ],
  };

  return renderSubpageFromContent(page, `/suche?q=${encodeURIComponent(query)}`);
}
