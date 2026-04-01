"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  admissionFacts,
  brand,
  extendedNav,
  homeFacts,
  mainNav,
  philosophyPillars,
  supportInfo,
  teamGroups,
} from "@/lib/paideia-content";
import { SiteFooter } from "@/components/paideia/site-footer";
import { SiteHeader } from "@/components/paideia/site-header";

const panels = [
  { id: "hero", label: "Paideia", tone: "light" as const },
  { id: "philosophy", label: "Philosophie", tone: "light" as const },
  { id: "alltag", label: "Alltag", tone: "light" as const },
  { id: "culture", label: "Kulturarbeit", tone: "ink" as const },
  { id: "admissions", label: "Aufnahme", tone: "light" as const },
];

export function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(panels[0]);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Record<string, HTMLElement | null>>({});
  const isInverted = activePanel.tone === "ink";

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowIntro(false), 2600);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleWheel = (event: WheelEvent) => {
      if (!mediaQuery.matches || showIntro) return;
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      event.preventDefault();
      scroller.scrollBy({ left: event.deltaY, behavior: "auto" });
    };

    scroller.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      scroller.removeEventListener("wheel", handleWheel);
    };
  }, [showIntro]);

  useEffect(() => {
    const elements = panels
      .map((panel) => panelRefs.current[panel.id])
      .filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const nextPanel = panels.find((panel) => panel.id === visible.target.id);
        if (nextPanel) setActivePanel(nextPanel);
      },
      {
        threshold: [0.35, 0.55, 0.75],
        root: scrollerRef.current,
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const coreTeam = useMemo(() => teamGroups[0]?.members ?? [], []);

  return (
    <div className="min-h-screen bg-[color:var(--paideia-paper)] text-[color:var(--paideia-ink)]">
      <SiteHeader
        nav={mainNav}
        secondaryNav={extendedNav}
        invert={isInverted}
        currentLabel={activePanel.label}
        fixed
      />

      <AnimatePresence>
        {showIntro ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--paideia-paper)] px-6"
            onClick={() => setShowIntro(false)}
            onWheel={() => setShowIntro(false)}
            onTouchStart={() => setShowIntro(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(180,47,54,0.18),rgba(180,47,54,0.03)_66%,transparent)]"
              >
                <Image
                  src="/paideia/logos/mark-red.png"
                  alt="Paideia Mark"
                  width={84}
                  height={84}
                />
              </motion.div>
              <p className="text-[0.7rem] uppercase tracking-[0.4em] text-[color:var(--paideia-red)]">
                Paideia
              </p>
              <h1 className="mt-4 font-serif-display text-5xl leading-[0.94] text-[color:var(--paideia-ink)] sm:text-7xl">
                Gesehen werden. Herausgefordert werden. Wirksam werden.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[color:var(--paideia-ink)]/72 sm:text-lg">
                Die erste Version der neuen Seite baut auf der Walker-Praezision auf,
                bleibt aber in Haltung, Bildsprache und Ton ganz bei Paideia.
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main>
        <div
          ref={scrollerRef}
          className="hidden h-screen overflow-x-auto overflow-y-hidden lg:block paideia-horizontal-scroll"
        >
          <div className="flex h-full">
            <section
              id="hero"
              ref={(node) => {
                panelRefs.current.hero = node;
              }}
              className="relative flex min-w-full items-end overflow-hidden border-r border-black/6"
            >
              <Image
                src="/paideia/home/campus-wide.jpg"
                alt="Paideia Hero"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(6,10,18,0.82),rgba(6,10,18,0.36)_48%,rgba(250,246,239,0.04)_72%)]" />
              <div className="relative grid h-full w-full grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-end px-10 pb-12 pt-32 text-white">
                <div className="max-w-3xl space-y-7">
                  <p className="text-[0.7rem] uppercase tracking-[0.4em] text-white/58">
                    Paideia / Freie Schule Salzburg
                  </p>
                  <h2 className="font-serif-display text-7xl leading-[0.9]">
                    Bildung, die Freiheit und Anspruch endlich zusammenhaelt.
                  </h2>
                  <p className="max-w-2xl text-lg leading-8 text-white/72">
                    Eine Schule fuer Kinder und Jugendliche, die getragen,
                    herausgefordert und auf ein gelingendes Leben vorbereitet
                    werden wollen.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/aufnahme"
                      className="rounded-full bg-white px-5 py-3 text-sm uppercase tracking-[0.2em] text-[color:var(--paideia-ink)] transition-colors hover:bg-[color:var(--paideia-stone)]"
                    >
                      Aufnahme ansehen
                    </Link>
                    <Link
                      href="/philosophie"
                      className="rounded-full border border-white/14 px-5 py-3 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
                    >
                      Philosophie
                    </Link>
                  </div>
                </div>

                <div className="ml-auto grid max-w-[34rem] gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.82, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-[2.1rem] border border-white/12 bg-white/10 p-6 backdrop-blur-md"
                  >
                    <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/54">
                      First principles
                    </p>
                    <p className="mt-4 text-3xl leading-tight">
                      Beziehung als Fundament. Sinnvolles Schaffen als Weg.
                      Weisheit plus Kompetenz als Ziel.
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-2 gap-4">
                    {homeFacts.map((fact, index) => (
                      <motion.article
                        key={fact.value}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.68,
                          delay: 0.18 + index * 0.06,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="rounded-[1.7rem] border border-white/12 bg-[rgba(255,255,255,0.08)] p-4"
                      >
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/52">
                          {fact.value}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-white/72">
                          {fact.label}
                        </p>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section
              id="philosophy"
              ref={(node) => {
                panelRefs.current.philosophy = node;
              }}
              className="relative flex min-w-full items-center border-r border-black/6 bg-[color:var(--paideia-paper)] px-10 py-24"
            >
              <div className="absolute inset-y-0 right-12 my-10 w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(180,47,54,0.11),transparent_70%)]" />
              <div className="relative grid w-full grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-12">
                <div className="space-y-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
                    Der Dreiklang
                  </p>
                  <h2 className="font-serif-display text-6xl leading-[0.94] text-[color:var(--paideia-ink)]">
                    Die Website spricht dieselbe Sprache wie das Leitbild.
                  </h2>
                  <p className="max-w-xl text-lg leading-8 text-[color:var(--paideia-ink)]/72">
                    Paideia positioniert sich bewusst zwischen Freiheit und
                    Struktur, Naehe und Herausforderung, Charakterbildung und
                    Zukunftskompetenz.
                  </p>
                  <blockquote className="max-w-xl rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                    <p className="font-serif-display text-3xl leading-tight text-[color:var(--paideia-ink)]">
                      “Warmherzig. Anspruchsvoll. Zukunftsfaehig.”
                    </p>
                    <footer className="mt-4 text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--paideia-ink)]/48">
                      Art direction fuer Version 1
                    </footer>
                  </blockquote>
                </div>

                <div className="grid gap-4">
                  {philosophyPillars.map((pillar, index) => (
                    <motion.article
                      key={pillar.title}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.72,
                        delay: index * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
                          {pillar.greek}
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--paideia-ink)]/46">
                          {pillar.translation}
                        </p>
                      </div>
                      <h3 className="mt-5 text-3xl font-medium text-[color:var(--paideia-ink)]">
                        {pillar.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--paideia-ink)]/72">
                        {pillar.body}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="alltag"
              ref={(node) => {
                panelRefs.current.alltag = node;
              }}
              className="grid min-w-full grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] border-r border-black/6 bg-[color:var(--paideia-stone)]"
            >
              <div className="flex flex-col justify-between px-10 py-20">
                <div className="space-y-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
                    Lernen & Alltag
                  </p>
                  <h2 className="font-serif-display text-6xl leading-[0.94] text-[color:var(--paideia-ink)]">
                    Rhythmus, Raum und reale Projekte bilden den Boden fuer Freiheit.
                  </h2>
                  <p className="max-w-xl text-lg leading-8 text-[color:var(--paideia-ink)]/72">
                    Morgenbewegung, Freiarbeit, altersgemischte Zeit und
                    sichtbare Kulturarbeit geben dem Alltag Takt, ohne ihn eng
                    zu machen.
                  </p>
                </div>

                <div className="grid gap-4">
                  {admissionFacts.map((fact, index) => (
                    <motion.article
                      key={fact.value}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{
                        duration: 0.68,
                        delay: index * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="rounded-[1.8rem] bg-white px-5 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                    >
                      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--paideia-red)]">
                        {fact.value}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[color:var(--paideia-ink)]/74">
                        {fact.label}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden">
                <Image
                  src="/paideia/home/hero-warm.jpg"
                  alt="Lernen im Alltag"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,246,239,0)_18%,rgba(250,246,239,0.42)_72%,rgba(250,246,239,0.84))]" />
                <div className="absolute inset-x-8 bottom-8 rounded-[2rem] border border-black/6 bg-white/86 p-6 backdrop-blur-md">
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
                    Tagesform
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--paideia-ink)]/74">
                    Der aktuelle Standort bietet Klassenraeume, Bewegungsraeume,
                    einen Kreativraum, eine Toepferwerkstatt und eine grosse
                    Kueche. Das Gebaeude liegt in einer autofreien Siedlung mit
                    Spielplatz direkt vor dem Eingang.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="culture"
              ref={(node) => {
                panelRefs.current.culture = node;
              }}
              className="relative grid min-w-full grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] bg-[color:var(--paideia-ink)] text-white"
            >
              <div className="relative overflow-hidden">
                <Image
                  src="/paideia/media/frame-32.jpg"
                  alt="RHABARBER Filmstill"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,12,20,0.18),rgba(7,12,20,0.66)_68%,rgba(7,12,20,0.84))]" />
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="absolute inset-x-8 bottom-8 rounded-[2rem] border border-white/14 bg-white/10 p-5 text-left backdrop-blur-md transition-colors hover:bg-white/14"
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/54">
                    RHABARBER RHABARBER
                  </p>
                  <p className="mt-4 text-3xl leading-tight">
                    Kulturarbeit ist hier kein Zusatz, sondern Bildungsqualitaet.
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/64">
                    Filmischen Einblick oeffnen
                  </p>
                </button>
              </div>
              <div className="flex flex-col justify-between px-10 py-20">
                <div className="space-y-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/54">
                    Werk statt Claim
                  </p>
                  <h2 className="font-serif-display text-6xl leading-[0.94]">
                    Was die Schule behauptet, wird in Buehne, Zeitung und Alltag sichtbar.
                  </h2>
                  <p className="max-w-xl text-lg leading-8 text-white/72">
                    Gute Schule erklaert sich nicht nur ueber Worte. Sie zeigt
                    sich im Ton der Erwachsenen, im Werk der Kinder und in den
                    Formen gemeinsamer Verantwortung.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {coreTeam.map((member) => (
                    <div
                      key={member.name}
                      className="rounded-[1.7rem] border border-white/10 bg-white/6 p-4"
                    >
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/54">
                        {member.role}
                      </p>
                      <p className="mt-3 text-lg leading-snug">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="admissions"
              ref={(node) => {
                panelRefs.current.admissions = node;
              }}
              className="relative flex min-w-full items-center bg-[color:var(--paideia-paper)] px-10 py-24"
            >
              <div className="grid w-full grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12">
                <div className="space-y-7">
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
                    Aufnahme & Unterstuetzung
                  </p>
                  <h2 className="font-serif-display text-6xl leading-[0.94] text-[color:var(--paideia-ink)]">
                    Familien waehlen bewusst. Unterstuetzer wirken konkret mit.
                  </h2>
                  <p className="max-w-xl text-lg leading-8 text-[color:var(--paideia-ink)]/72">
                    Die erste Version fuehrt Aufnahmeprozess, Kontakt und
                    Foerderlogik bewusst zusammen. Klar, ruhig und ohne
                    WordPress-Streuverluste.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/aufnahme"
                      className="rounded-full bg-[color:var(--paideia-red)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:bg-[color:var(--paideia-red-deep)]"
                    >
                      Aufnahmeprozess
                    </Link>
                    <a
                      href={supportInfo.paypalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[color:var(--paideia-red)]/18 px-5 py-3 text-sm uppercase tracking-[0.18em] text-[color:var(--paideia-red)] transition-colors hover:bg-[color:var(--paideia-red)] hover:text-white"
                    >
                      Unterstuetzen
                    </a>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                    <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
                      Info-Abend 2026/27
                    </p>
                    <p className="mt-4 text-3xl text-[color:var(--paideia-ink)]">
                      Montag, 13. April 2026, 19:00 Uhr
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--paideia-ink)]/72">
                      Ortsbekanntgabe bei Anmeldung per Mail an {brand.email}.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <article className="rounded-[1.8rem] bg-[color:var(--paideia-stone)] p-5">
                      <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--paideia-red)]">
                        Vereinsnummer
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--paideia-ink)]/72">
                        {supportInfo.registrationNumber}
                      </p>
                    </article>
                    <article className="rounded-[1.8rem] bg-[color:var(--paideia-stone)] p-5">
                      <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--paideia-red)]">
                        Spendenkonto
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--paideia-ink)]/72">
                        {supportInfo.bankAccount}
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="space-y-0 lg:hidden">
          <section className="relative overflow-hidden px-4 pb-14 pt-32 sm:px-6">
            <div className="absolute inset-0">
              <Image src="/paideia/home/campus-wide.jpg" alt="Paideia Hero" fill className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,20,0.82),rgba(7,12,20,0.52)_52%,rgba(7,12,20,0.9))]" />
            </div>
            <div className="relative space-y-6 text-white">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/58">
                Paideia / Freie Schule Salzburg
              </p>
              <h1 className="font-serif-display text-5xl leading-[0.92]">
                Bildung, die Freiheit und Anspruch endlich zusammenhaelt.
              </h1>
              <p className="text-base leading-8 text-white/74">
                Eine Schule fuer Kinder und Jugendliche, die getragen,
                herausgefordert und auf ein gelingendes Leben vorbereitet werden
                wollen.
              </p>
              <div className="grid gap-3">
                {homeFacts.map((fact) => (
                  <article key={fact.value} className="rounded-[1.6rem] border border-white/14 bg-white/8 p-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/54">
                      {fact.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      {fact.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-5 border-t border-black/6 bg-[color:var(--paideia-paper)] px-4 py-14 sm:px-6">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
              Der Dreiklang
            </p>
            <h2 className="font-serif-display text-4xl leading-tight text-[color:var(--paideia-ink)]">
              Beziehung, Struktur und Wirksamkeit bilden eine gemeinsame Bewegung.
            </h2>
            <div className="grid gap-4">
              {philosophyPillars.map((pillar) => (
                <article key={pillar.title} className="rounded-[1.8rem] border border-black/6 bg-white p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--paideia-red)]">
                    {pillar.greek}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium text-[color:var(--paideia-ink)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--paideia-ink)]/72">
                    {pillar.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-5 border-t border-black/6 bg-[color:var(--paideia-stone)] px-4 py-14 sm:px-6">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
              Kulturarbeit
            </p>
            <h2 className="font-serif-display text-4xl leading-tight text-[color:var(--paideia-ink)]">
              Werk statt Behauptung.
            </h2>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="relative min-h-[18rem] w-full overflow-hidden rounded-[2rem] text-left"
            >
              <Image src="/paideia/media/frame-32.jpg" alt="RHABARBER Still" fill className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,20,0.16),rgba(7,12,20,0.74))]" />
              <div className="absolute inset-x-5 bottom-5 space-y-3 text-white">
                <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/56">
                  RHABARBER RHABARBER
                </p>
                <p className="text-3xl leading-tight">
                  Filmischen Einblick in die Kulturarbeit oeffnen.
                </p>
              </div>
            </button>
            <div className="grid gap-4">
              {coreTeam.map((member) => (
                <article key={member.name} className="rounded-[1.8rem] border border-black/6 bg-white p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--paideia-red)]">
                    {member.role}
                  </p>
                  <p className="mt-3 text-lg text-[color:var(--paideia-ink)]">{member.name}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-5 border-t border-black/6 bg-[color:var(--paideia-paper)] px-4 py-14 sm:px-6">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-red)]">
              Aufnahme & Unterstuetzung
            </p>
            <h2 className="font-serif-display text-4xl leading-tight text-[color:var(--paideia-ink)]">
              Familien waehlen bewusst. Unterstuetzer wirken konkret mit.
            </h2>
            <div className="grid gap-3">
              <Link
                href="/aufnahme"
                className="rounded-full bg-[color:var(--paideia-red)] px-5 py-3 text-center text-sm uppercase tracking-[0.18em] text-white"
              >
                Aufnahmeprozess
              </Link>
              <a
                href={supportInfo.paypalUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[color:var(--paideia-red)]/18 px-5 py-3 text-center text-sm uppercase tracking-[0.18em] text-[color:var(--paideia-red)]"
              >
                Unterstuetzen
              </a>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />

      <AnimatePresence>
        {videoOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[rgba(5,10,18,0.84)] p-4 backdrop-blur-md"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto flex h-full max-w-5xl flex-col justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="mb-4 ml-auto rounded-full border border-white/18 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/82"
              >
                Schliessen
              </button>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black">
                <video
                  className="w-full"
                  controls
                  playsInline
                  poster="/paideia/media/frame-08.jpg"
                >
                  <source src="/paideia/media/rhabarber-highlight.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
