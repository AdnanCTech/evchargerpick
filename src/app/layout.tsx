import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Search } from "lucide-react";
import MobileNav from "./MobileNav";
import "./globals.css";

const GA_ID = "G-9WB581JQQQ";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EVChargerPick - Find the Best EV Charger for Your Car",
    template: "%s | EVChargerPick",
  },
  description:
    "Compare the best home EV chargers for your specific car model. Expert reviews, charging time calculators, and side-by-side comparisons.",
  metadataBase: new URL("https://www.evchargerpick.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "EVChargerPick",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-[#2a2a2a]">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
          <span className="font-bold text-lg text-zinc-100 tracking-tight">
            EVChargerPick
          </span>
        </Link>
        <div className="hidden sm:flex items-center gap-7 text-sm">
          <Link
            href="/"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#browse"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Browse by Car
          </Link>
          <Link
            href="/#comparisons"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Comparisons
          </Link>
          <Link
            href="/calculator"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Calculator
          </Link>
          <Link
            href="/guides/apartment-ev-charging"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Guides
          </Link>
          <Search className="w-5 h-5 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer" />
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
              <span className="font-bold text-zinc-100">EVChargerPick</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Independent EV charger reviews and recommendations matched to your car.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-300 mb-4 text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Charging Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/#browse"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Browse by Car
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-300 mb-4 text-sm">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2a2a2a] mt-10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[11px] text-zinc-600 leading-relaxed max-w-2xl">
            EVChargerPick earns commissions from qualifying purchases through
            affiliate links. This does not affect our reviews or
            recommendations.
          </p>
          <p className="text-[11px] text-zinc-600 shrink-0">
            &copy; {new Date().getFullYear()} EVChargerPick
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
