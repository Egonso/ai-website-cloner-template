import type { Metadata } from "next";
import { SITE_ACCESS_ROUTE, SITE_ACCESS_UNLOCK_ROUTE, normalizeNextPath } from "@/lib/site-access";

type AccessPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Zugang",
  robots: {
    index: false,
    follow: false,
  },
};

function takeSingleValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export default async function AccessPage({ searchParams }: AccessPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const nextPath = normalizeNextPath(takeSingleValue(resolvedSearchParams.next));
  const hasError = takeSingleValue(resolvedSearchParams.error) === "1";

  return (
    <main className="min-h-screen bg-[#f6f3ee] text-[#1e2430]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-12">
        <section className="grid w-full overflow-hidden rounded-[28px] border border-[#d8d2c6] bg-white shadow-[0_30px_80px_rgba(30,36,48,0.10)] md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-between bg-[#28364d] px-8 py-10 text-white md:px-12 md:py-14">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">
                {SITE_ACCESS_ROUTE === "/zugang" ? "Geschützter Vorschauzugang" : "Geschützter Bereich"}
              </p>
              <h1 className="font-[var(--font-cormorant)] text-5xl leading-none md:text-7xl">
                PAIDEIA
              </h1>
              <p className="max-w-md text-lg leading-8 text-white/82 md:text-xl">
                Die Website ist derzeit nur intern sichtbar. Bitte gib das vereinbarte Passwort ein, um die Vorschau zu öffnen.
              </p>
            </div>
            <p className="mt-10 max-w-sm text-sm leading-7 text-white/60">
              Die Inhalte sind noch in Arbeit. Bitte den Link und das Passwort nur intern teilen.
            </p>
          </div>

          <div className="flex items-center px-8 py-10 md:px-12 md:py-14">
            <form action={SITE_ACCESS_UNLOCK_ROUTE} method="post" className="w-full space-y-6">
              <div className="space-y-2">
                <label htmlFor="site-password" className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#7f2e2d]">
                  Passwort
                </label>
                <input
                  id="site-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-2xl border border-[#d9d1c1] bg-[#faf8f4] px-5 py-4 text-lg text-[#1e2430] outline-none transition focus:border-[#7f2e2d] focus:bg-white"
                />
                <input type="hidden" name="next" value={nextPath} />
              </div>

              {hasError ? (
                <p className="rounded-2xl border border-[#e7c5c0] bg-[#fff6f4] px-4 py-3 text-sm leading-6 text-[#7f2e2d]">
                  Das Passwort war leider nicht korrekt. Bitte versuch es noch einmal.
                </p>
              ) : null}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#7f2e2d] px-6 py-4 text-base font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#662524]"
              >
                Website öffnen
              </button>

              <p className="text-sm leading-7 text-[#6d7178]">
                Nach dem Öffnen bleibt der Zugang auf diesem Gerät gespeichert, bis das Passwort geändert oder der Browser-Cache gelöscht wird.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
