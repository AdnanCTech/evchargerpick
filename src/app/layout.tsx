import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EVChargerPick - Find the Best EV Charger for Your Car",
    template: "%s | EVChargerPick",
  },
  description:
    "Compare the best home EV chargers for your specific car model. Expert reviews, charging time calculators, and side-by-side comparisons.",
  metadataBase: new URL("https://evchargerpick.com"),
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
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-emerald-400 text-2xl" aria-hidden="true">
            &#9889;
          </span>
          <span className="font-bold text-lg text-zinc-50">
            EVChargerPick
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-zinc-400 hover:text-zinc-50 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/calculator"
            className="text-zinc-400 hover:text-zinc-50 transition-colors"
          >
            Calculator
          </Link>
          <Link
            href="/#browse"
            className="text-zinc-400 hover:text-zinc-50 transition-colors"
          >
            Browse by Car
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-emerald-400 text-xl" aria-hidden="true">
                &#9889;
              </span>
              <span className="font-bold text-zinc-50">EVChargerPick</span>
            </div>
            <p className="text-sm text-zinc-500">
              Helping EV owners find the perfect home charger since 2024.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-300 mb-3 text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
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
            <h3 className="font-semibold text-zinc-300 mb-3 text-sm">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-zinc-500">Privacy Policy</span>
              </li>
              <li>
                <span className="text-zinc-500">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-8 pt-8">
          <p className="text-xs text-zinc-600 leading-relaxed">
            <strong className="text-zinc-500">Affiliate Disclosure:</strong>{" "}
            EVChargerPick earns commissions from qualifying purchases through
            affiliate links on this site. This does not affect our reviews or
            recommendations — we only recommend products we genuinely believe
            are the best options for EV owners. Prices shown may vary.
          </p>
          <p className="text-xs text-zinc-600 mt-4">
            &copy; {new Date().getFullYear()} EVChargerPick. All rights
            reserved.
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
