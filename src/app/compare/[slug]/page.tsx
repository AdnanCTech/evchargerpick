import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisons, getComparisonBySlug } from "@/data/comparisons";
import { getChargerBySlug, type Charger } from "@/data/chargers";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) return {};
  return {
    title: comp.metaTitle,
    description: comp.metaDescription,
    alternates: {
      canonical: `https://evchargerpick.com/compare/${comp.slug}`,
    },
    openGraph: {
      title: comp.metaTitle,
      description: comp.metaDescription,
      url: `https://evchargerpick.com/compare/${comp.slug}`,
      type: "article",
    },
  };
}

function SpecRow({
  label,
  val1,
  val2,
  highlight,
}: {
  label: string;
  val1: string;
  val2: string;
  highlight?: "1" | "2" | "tie";
}) {
  return (
    <tr className="border-b border-zinc-800/50">
      <td className="py-3 px-4 text-sm text-zinc-400 font-medium">{label}</td>
      <td
        className={`py-3 px-4 text-sm text-center ${
          highlight === "1" ? "text-emerald-400 font-semibold" : "text-zinc-300"
        }`}
      >
        {val1}
      </td>
      <td
        className={`py-3 px-4 text-sm text-center ${
          highlight === "2" ? "text-emerald-400 font-semibold" : "text-zinc-300"
        }`}
      >
        {val2}
      </td>
    </tr>
  );
}

function getHighlight(
  v1: number,
  v2: number,
  lowerBetter = false
): "1" | "2" | "tie" {
  if (v1 === v2) return "tie";
  if (lowerBetter) return v1 < v2 ? "1" : "2";
  return v1 > v2 ? "1" : "2";
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) notFound();

  const c1 = getChargerBySlug(comp.charger1Slug);
  const c2 = getChargerBySlug(comp.charger2Slug);
  if (!c1 || !c2) notFound();

  const winner = comp.verdictWinner === c1.slug ? c1 : c2;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [c1, c2].map((charger: Charger) => ({
      "@type": "Product",
      name: charger.name,
      offers: {
        "@type": "Offer",
        price: charger.price,
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: charger.rating,
        bestRating: 5,
        reviewCount: 1,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-zinc-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-300">{comp.title}</span>
        </nav>

        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50">
            {comp.title}
          </h1>
          <p className="mt-3 text-zinc-400">
            An honest, detailed comparison to help you choose the right charger.
          </p>
        </header>

        {/* Quick Summary */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[c1, c2].map((c) => (
            <div
              key={c.slug}
              className={`rounded-xl border p-5 ${
                c.slug === winner.slug
                  ? "border-emerald-500/30 bg-emerald-500/5"
                  : "border-zinc-800 bg-zinc-900/50"
              }`}
            >
              {c.slug === winner.slug && (
                <span className="text-xs font-bold text-emerald-400 mb-2 block">
                  Our Pick
                </span>
              )}
              <h2 className="text-lg font-semibold text-zinc-100">{c.name}</h2>
              <div className="text-2xl font-bold text-emerald-400 mt-1">
                ${c.price}
              </div>
              <div className="text-sm text-zinc-500 mt-1">
                {c.amperage}A &middot; {c.maxKw}kW &middot; {c.cordLength}ft
                cord
              </div>
              <div className="mt-2 text-sm text-zinc-400">
                {"★".repeat(Math.floor(c.rating))}{" "}
                <span className="text-zinc-500">{c.rating}/5</span>
              </div>
            </div>
          ))}
        </div>

        {/* Specs Comparison Table */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-50 mb-6">
            Side-by-Side Specs
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-3 px-4 text-zinc-400 font-medium text-sm w-1/3">
                    Specification
                  </th>
                  <th className="text-center py-3 px-4 text-zinc-200 font-semibold text-sm w-1/3">
                    {c1.name}
                  </th>
                  <th className="text-center py-3 px-4 text-zinc-200 font-semibold text-sm w-1/3">
                    {c2.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                <SpecRow
                  label="Price"
                  val1={`$${c1.price}`}
                  val2={`$${c2.price}`}
                  highlight={getHighlight(c1.price, c2.price, true)}
                />
                <SpecRow
                  label="Amperage"
                  val1={`${c1.amperage}A`}
                  val2={`${c2.amperage}A`}
                  highlight={getHighlight(c1.amperage, c2.amperage)}
                />
                <SpecRow
                  label="Max Power"
                  val1={`${c1.maxKw}kW`}
                  val2={`${c2.maxKw}kW`}
                  highlight={getHighlight(c1.maxKw, c2.maxKw)}
                />
                <SpecRow
                  label="Voltage"
                  val1={`${c1.voltage}V`}
                  val2={`${c2.voltage}V`}
                />
                <SpecRow
                  label="Cord Length"
                  val1={`${c1.cordLength}ft`}
                  val2={`${c2.cordLength}ft`}
                  highlight={getHighlight(c1.cordLength, c2.cordLength)}
                />
                <SpecRow
                  label="Rating"
                  val1={`${c1.rating}/5`}
                  val2={`${c2.rating}/5`}
                  highlight={getHighlight(c1.rating, c2.rating)}
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-50 mb-6">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[c1, c2].map((c) => (
              <div
                key={c.slug}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
              >
                <h3 className="font-semibold text-zinc-200 mb-3">{c.name}</h3>
                <ul className="space-y-2">
                  {c.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-zinc-400 flex items-start gap-2"
                    >
                      <span className="text-emerald-400 shrink-0">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-50 mb-6">
            Pros &amp; Cons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[c1, c2].map((c) => (
              <div
                key={c.slug}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
              >
                <h3 className="font-semibold text-zinc-200 mb-4">{c.name}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {c.pros.map((p) => (
                        <li
                          key={p}
                          className="text-sm text-zinc-400 flex items-start gap-2"
                        >
                          <span className="text-emerald-400 shrink-0">+</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {c.cons.map((con) => (
                        <li
                          key={con}
                          className="text-sm text-zinc-400 flex items-start gap-2"
                        >
                          <span className="text-red-400 shrink-0">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verdict */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-50 mb-6">Our Verdict</h2>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-emerald-400">&#9733;</span>
              <span className="font-semibold text-emerald-400">
                Winner: {winner.name}
              </span>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {comp.verdict}
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href={c1.affiliateUrl}
                className="flex-1 text-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
                rel="nofollow noopener"
              >
                Check {c1.name} Price
              </a>
              <a
                href={c2.affiliateUrl}
                className="flex-1 text-center rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-semibold text-zinc-300 hover:border-zinc-500 transition-colors"
                rel="nofollow noopener"
              >
                Check {c2.name} Price
              </a>
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <div className="mt-12 text-xs text-zinc-600 border-t border-zinc-800 pt-6">
          <strong className="text-zinc-500">Affiliate Disclosure:</strong>{" "}
          Links on this page may be affiliate links. EVChargerPick earns a
          commission from qualifying purchases at no extra cost to you.
        </div>
      </div>
    </>
  );
}
