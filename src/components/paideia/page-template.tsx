import Image from "next/image";
import Link from "next/link";
import { brand, extendedNav, mainNav } from "@/lib/paideia-content";
import type { PageContent, PageSection, TeamMember } from "@/types/paideia";
import { Reveal } from "@/components/paideia/reveal";
import { GalleryGrid } from "@/components/paideia/gallery-grid";
import { SiteFooter } from "@/components/paideia/site-footer";
import { SiteHeader } from "@/components/paideia/site-header";

function toneClasses(section: PageSection["theme"]) {
  switch (section) {
    case "ink":
      return "bg-[color:var(--paideia-ink)] text-white";
    case "tint":
      return "bg-[color:var(--paideia-stone)]";
    default:
      return "bg-transparent";
  }
}

function SectionIntro({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif-display text-4xl leading-tight text-[color:var(--paideia-ink)] sm:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="text-base leading-8 text-[color:var(--paideia-ink)]/74 sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="overflow-hidden rounded-[1.9rem] border border-black/6 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      {member.image ? (
        <div className="relative aspect-[0.92]">
          <Image src={member.image} alt={member.name} fill className="object-cover" />
        </div>
      ) : null}
      <div className="space-y-3 px-5 py-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--paideia-red)]">
            {member.role}
          </p>
          {member.status ? (
            <span className="rounded-full bg-[color:var(--paideia-stone)] px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-[color:var(--paideia-ink)]/62">
              {member.status}
            </span>
          ) : null}
        </div>
        <h3 className="text-2xl font-medium text-[color:var(--paideia-ink)]">
          {member.name}
        </h3>
        <p className="text-sm leading-7 text-[color:var(--paideia-ink)]/72">
          {member.shortBio}
        </p>
        {member.longBio?.length ? (
          <div className="space-y-2 border-t border-black/6 pt-3 text-sm leading-7 text-[color:var(--paideia-ink)]/68">
            {member.longBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function PageTemplate({ page }: { page: PageContent }) {
  return (
    <div className="min-h-screen bg-[color:var(--paideia-paper)] text-[color:var(--paideia-ink)]">
      <SiteHeader nav={mainNav} secondaryNav={extendedNav} />

      <main>
        <section className="relative overflow-hidden border-b border-black/6">
          {page.hero.image ? (
            <div className="absolute inset-0">
              <Image
                src={page.hero.image}
                alt={page.hero.imageAlt ?? page.hero.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,12,20,0.74),rgba(7,12,20,0.3)_52%,rgba(250,246,239,0.08))]" />
            </div>
          ) : null}
          <div className="relative mx-auto grid max-w-[1600px] gap-12 px-4 py-28 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.75fr)] lg:px-10 lg:py-36">
            <Reveal className="max-w-3xl space-y-6">
              <p className="text-[0.68rem] uppercase tracking-[0.36em] text-white/68">
                {page.hero.eyebrow}
              </p>
              <h1 className="font-serif-display text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                {page.hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
                {page.hero.description}
              </p>
              {page.hero.kicker ? (
                <p className="max-w-2xl border-l border-white/18 pl-5 text-sm uppercase tracking-[0.16em] text-white/62 sm:text-base">
                  {page.hero.kicker}
                </p>
              ) : null}
              <div className="flex flex-wrap gap-3 pt-2">
                {page.hero.ctas?.map((cta) => (
                  <Link
                    key={cta.href}
                    href={cta.href}
                    target={cta.external ? "_blank" : undefined}
                    rel={cta.external ? "noreferrer" : undefined}
                    className="rounded-full border border-white/14 bg-white px-5 py-3 text-sm uppercase tracking-[0.18em] text-[color:var(--paideia-ink)] transition-colors hover:bg-[color:var(--paideia-stone)]"
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="flex items-end justify-start lg:justify-end">
              <div className="max-w-md rounded-[2rem] border border-white/14 bg-white/10 p-6 text-white backdrop-blur-md">
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/56">
                  {brand.name}
                </p>
                <p className="mt-3 text-2xl font-medium">{brand.claim}</p>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  {brand.strapline}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {page.ribbon?.length ? (
          <section className="border-b border-black/6 bg-[color:var(--paideia-stone)]">
            <div className="mx-auto grid max-w-[1600px] gap-4 px-4 py-5 sm:px-6 lg:grid-cols-4 lg:px-10">
              {page.ribbon.map((item, index) => (
                <Reveal key={item.value + index} delay={index * 0.04}>
                  <article className="rounded-[1.5rem] bg-white px-5 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--paideia-red)]">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--paideia-ink)]/74">
                      {item.label}
                    </p>
                    {item.detail ? (
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[color:var(--paideia-ink)]/44">
                        {item.detail}
                      </p>
                    ) : null}
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        <div className="space-y-0">
          {page.sections.map((section, sectionIndex) => (
            <section
              key={`${page.slug}-${section.type}-${sectionIndex}`}
              className={`border-b border-black/6 ${toneClasses(section.theme)}`}
            >
              <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
                {section.type === "prose" ? (
                  <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.8fr)]">
                    <Reveal>
                      <SectionIntro
                        eyebrow={section.eyebrow}
                        title={section.title}
                        intro={section.body[0]}
                      />
                    </Reveal>
                    <Reveal delay={0.08} className="space-y-5">
                      {section.body.slice(1).map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-[color:var(--paideia-ink)]/74"
                        >
                          {paragraph}
                        </p>
                      ))}
                      {section.bullets?.length ? (
                        <ul className="space-y-3 pt-2 text-sm leading-7 text-[color:var(--paideia-ink)]/72">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--paideia-red)]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {section.ctas?.length ? (
                        <div className="flex flex-wrap gap-3 pt-3">
                          {section.ctas.map((cta) => (
                            <Link
                              key={cta.href}
                              href={cta.href}
                              target={cta.external ? "_blank" : undefined}
                              rel={cta.external ? "noreferrer" : undefined}
                              className="rounded-full border border-[color:var(--paideia-red)]/18 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[color:var(--paideia-red)] transition-colors hover:bg-[color:var(--paideia-red)] hover:text-white"
                            >
                              {cta.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                      {section.quote ? (
                        <blockquote className="rounded-[1.8rem] border border-black/6 bg-white p-6">
                          <p className="font-serif-display text-2xl leading-tight text-[color:var(--paideia-ink)]">
                            “{section.quote.quote}”
                          </p>
                          <footer className="mt-4 text-sm uppercase tracking-[0.18em] text-[color:var(--paideia-ink)]/56">
                            {section.quote.attribution}
                          </footer>
                        </blockquote>
                      ) : null}
                    </Reveal>
                    {section.image ? (
                      <Reveal className="lg:col-span-2">
                        <div className="relative mt-2 min-h-[22rem] overflow-hidden rounded-[2rem]">
                          <Image
                            src={section.image}
                            alt={section.imageAlt ?? section.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Reveal>
                    ) : null}
                  </div>
                ) : null}

                {section.type === "pillars" ? (
                  <div className="space-y-10">
                    <Reveal>
                      <SectionIntro eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                    </Reveal>
                    <div className="grid gap-4 lg:grid-cols-3">
                      {section.items.map((item, index) => (
                        <Reveal key={item.title} delay={index * 0.06}>
                          <article className="h-full rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
                              {item.greek}
                            </p>
                            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[color:var(--paideia-ink)]/56">
                              {item.translation}
                            </p>
                            <h3 className="mt-6 text-3xl font-medium text-[color:var(--paideia-ink)]">
                              {item.title}
                            </h3>
                            <p className="mt-4 text-sm leading-7 text-[color:var(--paideia-ink)]/72">
                              {item.body}
                            </p>
                          </article>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ) : null}

                {section.type === "facts" ? (
                  <div className="space-y-10">
                    <Reveal>
                      <SectionIntro eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                    </Reveal>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                      {section.items.map((item, index) => (
                        <Reveal key={item.value + index} delay={index * 0.05}>
                          <article className="rounded-[1.85rem] bg-white px-5 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--paideia-red)]">
                              {item.value}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-[color:var(--paideia-ink)]/72">
                              {item.label}
                            </p>
                            {item.detail ? (
                              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--paideia-ink)]/48">
                                {item.detail}
                              </p>
                            ) : null}
                          </article>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ) : null}

                {section.type === "process" ? (
                  <div className="space-y-10">
                    <Reveal>
                      <SectionIntro eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                    </Reveal>
                    <div className="grid gap-4 xl:grid-cols-5">
                      {section.steps.map((step, index) => (
                        <Reveal key={step.step} delay={index * 0.05}>
                          <article className="h-full rounded-[1.85rem] border border-black/6 bg-white px-5 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--paideia-red)]">
                              {step.step}
                            </p>
                            <h3 className="mt-4 text-2xl font-medium text-[color:var(--paideia-ink)]">
                              {step.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[color:var(--paideia-ink)]/72">
                              {step.body}
                            </p>
                          </article>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ) : null}

                {section.type === "team" ? (
                  <div className="space-y-10">
                    <Reveal>
                      <SectionIntro eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                    </Reveal>
                    <div className="space-y-12">
                      {section.groups.map((group, groupIndex) => (
                        <div key={group.title} className="space-y-5">
                          <Reveal delay={groupIndex * 0.04}>
                            <div className="max-w-2xl space-y-3">
                              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
                                {group.title}
                              </p>
                              <p className="text-base leading-8 text-[color:var(--paideia-ink)]/72">
                                {group.description}
                              </p>
                            </div>
                          </Reveal>
                          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {group.members.map((member, memberIndex) => (
                              <Reveal key={member.name} delay={memberIndex * 0.04}>
                                <TeamCard member={member} />
                              </Reveal>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {section.type === "partners" ? (
                  <div className="space-y-10">
                    <Reveal>
                      <SectionIntro eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                    </Reveal>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                      {section.items.map((item, index) => (
                        <Reveal key={item.name} delay={index * 0.05}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-[1.8rem] border border-black/6 bg-white px-5 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-1"
                          >
                            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--paideia-red)]">
                              Bildungspartner
                            </p>
                            <h3 className="mt-4 text-2xl font-medium text-[color:var(--paideia-ink)]">
                              {item.name}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[color:var(--paideia-ink)]/72">
                              {item.note}
                            </p>
                          </a>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ) : null}

                {section.type === "press" ? (
                  <div className="space-y-10">
                    <Reveal>
                      <SectionIntro eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                    </Reveal>
                    <div className="grid gap-5 xl:grid-cols-2">
                      {section.items.map((item, index) => (
                        <Reveal key={item.title} delay={index * 0.06}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="grid gap-5 overflow-hidden rounded-[2rem] border border-black/6 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]"
                          >
                            <div className="relative min-h-[18rem] overflow-hidden rounded-[1.4rem]">
                              <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>
                            <div className="space-y-4">
                              <div className="flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--paideia-red)]">
                                <span>{item.year}</span>
                                <span>{item.date}</span>
                              </div>
                              <h3 className="text-3xl font-medium text-[color:var(--paideia-ink)]">
                                {item.title}
                              </h3>
                              <p className="text-sm leading-7 text-[color:var(--paideia-ink)]/72">
                                {item.body}
                              </p>
                            </div>
                          </a>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ) : null}

                {section.type === "logos" ? (
                  <div className="space-y-10">
                    <Reveal>
                      <SectionIntro eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                    </Reveal>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                      {section.items.map((item, index) => (
                        <Reveal key={item.label} delay={index * 0.05}>
                          <article
                            className={`rounded-[2rem] border border-black/6 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] ${
                              item.tone === "ink"
                                ? "bg-[color:var(--paideia-ink)] text-white"
                                : "bg-white text-[color:var(--paideia-ink)]"
                            }`}
                          >
                            <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-[1.5rem] border border-black/6 bg-[color:var(--paideia-paper)] p-4">
                              <Image
                                src={item.src}
                                alt={item.label}
                                width={220}
                                height={180}
                                className="h-auto max-h-full w-auto max-w-full object-contain"
                              />
                            </div>
                            <h3 className="mt-4 text-xl font-medium">{item.label}</h3>
                            <p className="mt-2 text-sm leading-7 opacity-72">
                              {item.description}
                            </p>
                          </article>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ) : null}

                {section.type === "gallery" ? (
                  <div className="space-y-10">
                    <Reveal>
                      <SectionIntro eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                    </Reveal>
                    <GalleryGrid collection={section.collection} />
                  </div>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
