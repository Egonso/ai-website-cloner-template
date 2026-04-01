# Walker School Behaviors

Generated on 2026-03-28 from live inspection of `https://www.thewalkerschool.org/` plus source review of `Templates/TheWalkerSchool/js/site-script.js`.

## Front-end stack

- jQuery
- Bootstrap bundle
- Slick slider
- Magnific Popup
- AOS
- midnight.js
- mapster.js
- Custom `site-script.js`
- Vimeo embeds and locally hosted MP4 assets

## Global behaviors

- Search icon opens an inline search panel and focuses the input.
- Mobile menu toggles `stop-scrolling`, `active-header`, `active-footer` and `site-navigation-active`.
- Level 1 and level 2 navigation groups expand/collapse independently.
- Current-year text is injected dynamically.
- Buttons receive an appended arrow icon in JS.
- A site-wide popup is loaded asynchronously from `/site-wide-popup`.

## Home and landing page behaviors

- Desktop home/landing pages use a horizontal scroll container rather than standard vertical page flow.
- The intro banner fades in, zooms its heading, then fades out automatically after a delay or immediately after wheel/scroll/touch/click interaction.
- On desktop, wheel input is converted into horizontal scrolling once the intro banner has cleared.
- Footer visibility is tied to reaching the end of the horizontal scroller.
- `midnight.js` changes header/logo treatment over red sections.

## Animation system

- AOS powers most reveal animations on desktop home/landing templates.
- Common motions are `fade`, `fade-up` and `fade-down`.
- Staggering is applied through incremental `data-aos-delay` values.
- A custom `IntersectionObserver` re-applies `aos-animate` with a `0.3` threshold.
- AOS is initialized with `duration: 500` and `once: true`.

## Media and popups

- Video popup buttons open Vimeo, YouTube or MP4 media in an overlay.
- Intro/home content includes embedded Vimeo plus hosted MP4 media.
- Image and team/number galleries rely on Slick instances.

## Gallery and layout behaviors

- Team gallery is unslicked on desktop home/landing layouts.
- Number gallery is unslicked on desktop and uses adaptive height on small screens.
- Image-grid sliders run as continuous vertical carousels on desktop.
- Custom slide galleries toggle an `active` state on click.

## Content template behaviors

- Map/hotspot pages convert image-map areas into positioned buttons and associated popup tables.
- Accordion/integration blocks toggle active state and slide content open/closed.
- Mobile table stacks inject header labels into `data-label` attributes.
- Directory cards expose a `Read more` toggle for hidden description content.

## Precision notes for cloning

- The strongest Walker-specific behaviors are the opening hero fade, the desktop horizontal scroller, staged AOS reveals, slider timing and the popup/menu class toggles.
- Preserving `Templates/TheWalkerSchool/css/style.css` and `Templates/TheWalkerSchool/js/site-script.js` is essential for fidelity.
