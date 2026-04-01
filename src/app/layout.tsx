import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Paideia | Freie Schule Salzburg",
    template: "%s | Paideia",
  },
  description:
    "Paideia ist eine freie Schule in Salzburg, die Beziehung, Freiheit, Struktur und wirksames Lernen zusammenführt.",
  icons: {
    icon: "/paideia/logos/mark-color-tight.png",
    shortcut: "/paideia/logos/mark-color-tight.png",
    apple: "/paideia/logos/mark-color-tight.png",
  },
  openGraph: {
    title: "Paideia | Freie Schule Salzburg",
    description:
      "Paideia ist eine freie Schule in Salzburg, die Beziehung, Freiheit, Struktur und wirksames Lernen zusammenführt.",
    images: ["/paideia/home/hero-cool.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
