import Link from "next/link";
import { brand, extendedNav, mainNav, supportInfo } from "@/lib/paideia-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/8 bg-[color:var(--paideia-paper)]">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-10">
        <div className="space-y-4">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-ink)]/58">
            {brand.name}
          </p>
          <h2 className="max-w-xl text-2xl font-medium text-[color:var(--paideia-ink)] sm:text-3xl">
            {brand.subtitle}
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--paideia-ink)]/72 sm:text-base">
            {brand.strapline}
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-[color:var(--paideia-ink)]/70">
            <a className="hover:text-[color:var(--paideia-red)]" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
            <span>{brand.address}</span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-ink)]/58">
            Navigation
          </p>
          <div className="grid gap-2 text-sm text-[color:var(--paideia-ink)]/72">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-[color:var(--paideia-red)]">
                {item.label}
              </Link>
            ))}
            {extendedNav.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-[color:var(--paideia-red)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--paideia-ink)]/58">
            Unterstuetzen
          </p>
          <div className="space-y-3 text-sm leading-7 text-[color:var(--paideia-ink)]/72">
            <p>Registrierungsnummer: {supportInfo.registrationNumber}</p>
            <p>Spendenkonto: {supportInfo.bankAccount}</p>
            <a
              href={supportInfo.paypalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-[color:var(--paideia-red)]/20 px-4 py-2 uppercase tracking-[0.18em] text-[color:var(--paideia-red)] transition-colors hover:bg-[color:var(--paideia-red)] hover:text-white"
            >
              Per PayPal unterstuetzen
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
