"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { SiteNavItem } from "@/types/paideia";
import { cn } from "@/lib/utils";

function NavLink({
  item,
  invert,
  onClick,
}: {
  item: SiteNavItem;
  invert?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === item.href;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-2 text-sm tracking-[0.16em] uppercase transition-colors",
        invert
          ? "text-white/78 hover:text-white"
          : "text-[color:var(--paideia-ink)]/72 hover:text-[color:var(--paideia-ink)]",
        active &&
          (invert
            ? "bg-white/14 text-white"
            : "bg-[color:var(--paideia-stone)] text-[color:var(--paideia-ink)]")
      )}
    >
      {item.label}
    </Link>
  );
}

export function SiteHeader({
  nav,
  secondaryNav = [],
  invert = false,
  currentLabel,
  fixed = false,
}: {
  nav: SiteNavItem[];
  secondaryNav?: SiteNavItem[];
  invert?: boolean;
  currentLabel?: string;
  fixed?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "z-40 w-full",
          fixed ? "pointer-events-none fixed inset-x-0 top-0" : "sticky top-0",
          invert
            ? "text-white"
            : "text-[color:var(--paideia-ink)]"
        )}
      >
        <div className="pointer-events-auto mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <Link
            href="/"
            className={cn(
              "rounded-full border px-4 py-3 backdrop-blur-sm transition-colors",
              invert
                ? "border-white/18 bg-[rgba(5,10,19,0.34)] text-white"
                : "border-black/8 bg-[rgba(250,246,239,0.82)] text-[color:var(--paideia-ink)]"
            )}
          >
            <span className="block text-[0.68rem] uppercase tracking-[0.34em] opacity-70">
              Paideia
            </span>
            <span className="block text-sm font-medium sm:text-base">
              Freie Schule Salzburg
            </span>
          </Link>

          <div
            className={cn(
              "hidden items-center gap-1 rounded-full border px-3 py-2 backdrop-blur-sm lg:flex",
              invert
                ? "border-white/18 bg-[rgba(5,10,19,0.34)]"
                : "border-black/8 bg-[rgba(250,246,239,0.82)]"
            )}
          >
            {nav.map((item) => (
              <NavLink key={item.href} item={item} invert={invert} />
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            {currentLabel ? (
              <span
                className={cn(
                  "rounded-full border px-3 py-2 text-[0.68rem] uppercase tracking-[0.26em]",
                  invert
                    ? "border-white/16 bg-white/8 text-white/78"
                    : "border-black/8 bg-[color:var(--paideia-paper)] text-[color:var(--paideia-ink)]/68"
                )}
              >
                {currentLabel}
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={cn(
                "rounded-full border px-4 py-3 text-sm uppercase tracking-[0.22em] transition-colors",
                invert
                  ? "border-white/18 bg-[rgba(5,10,19,0.34)] text-white hover:bg-white/12"
                  : "border-black/8 bg-[rgba(250,246,239,0.82)] text-[color:var(--paideia-ink)] hover:bg-[color:var(--paideia-stone)]"
              )}
            >
              Uebersicht
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={cn(
              "rounded-full border px-4 py-3 text-sm uppercase tracking-[0.22em] lg:hidden",
              invert
                ? "border-white/18 bg-[rgba(5,10,19,0.34)] text-white"
                : "border-black/8 bg-[rgba(250,246,239,0.82)] text-[color:var(--paideia-ink)]"
            )}
          >
            Menue
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[rgba(7,13,22,0.68)] p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto flex min-h-full max-w-4xl flex-col rounded-[2rem] border border-white/14 bg-[color:var(--paideia-ink)] px-5 py-5 text-white sm:px-8"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/56">
                    Paideia
                  </p>
                  <p className="text-lg">Freie Schule Salzburg</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-white/16 px-4 py-2 text-sm uppercase tracking-[0.18em] text-white/80"
                >
                  Schliessen
                </button>
              </div>

              <div className="grid gap-10 py-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                <div className="space-y-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/56">
                    Hauptseiten
                  </p>
                  <div className="grid gap-2">
                    {nav.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-[1.5rem] border border-white/10 px-5 py-4 text-xl transition-colors hover:bg-white/6"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/56">
                    Weitere Seiten
                  </p>
                  <div className="grid gap-2">
                    {secondaryNav.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 + 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-[1.5rem] border border-white/10 px-5 py-4 text-base text-white/82 transition-colors hover:bg-white/6"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
