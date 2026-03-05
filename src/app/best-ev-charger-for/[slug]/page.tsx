import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  carModels,
  getCarBySlug,
  getRecommendedChargers,
  calculateChargeTime,
} from "@/data/car-models";
import { type Charger } from "@/data/chargers";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return carModels.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return {};
  return {
    title: car.metaTitle,
    description: car.metaDescription,
    alternates: {
      canonical: `https://evchargerpick.com/best-ev-charger-for/${car.slug}`,
    },
    openGraph: {
      title: car.metaTitle,
      description: car.metaDescription,
      url: `https://evchargerpick.com/best-ev-charger-for/${car.slug}`,
      type: "article",
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-emerald-400 text-sm" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(Math.floor(rating))}
      {rating % 1 >= 0.5 ? "½" : ""}
      <span className="text-zinc-500 ml-1 text-xs">{rating}/5</span>
    </span>
  );
}

function ChargerCard({
  charger,
  rank,
  car,
}: {
  charger: Charger;
  rank: number;
  car: { batteryKwh: number; onboardChargerKw: number; name: string };
}) {
  const chargeTime = calculateChargeTime(
    car.batteryKwh,
    car.onboardChargerKw,
    charger.maxKw,
    10,
    100
  );

  return (
    <div
      id={charger.slug}
      className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 scroll-mt-24"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold">
              {rank}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-zinc-100">
                {charger.name}
              </h3>
              <StarRating rating={charger.rating} />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {charger.features.map((f) => (
              <span
                key={f}
                className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="sm:text-right shrink-0">
          <div className="text-2xl font-bold text-emerald-400">
            ${charger.price}
          </div>
          <div className="text-xs text-zinc-500 mt-1">
            {charger.amperage}A &middot; {charger.maxKw}kW
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
          <div className="text-xs text-zinc-500">Amperage</div>
          <div className="text-sm font-semibold text-zinc-200">
            {charger.amperage}A
          </div>
        </div>
        <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
          <div className="text-xs text-zinc-500">Max Power</div>
          <div className="text-sm font-semibold text-zinc-200">
            {charger.maxKw}kW
          </div>
        </div>
        <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
          <div className="text-xs text-zinc-500">Cord Length</div>
          <div className="text-sm font-semibold text-zinc-200">
            {charger.cordLength}ft
          </div>
        </div>
        <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
          <div className="text-xs text-zinc-500">Charge Time*</div>
          <div className="text-sm font-semibold text-emerald-400">
            ~{chargeTime}h
          </div>
        </div>
      </div>

      {/* Pros/Cons */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-medium text-zinc-300 mb-2">Pros</h4>
          <ul className="space-y-1">
            {charger.pros.map((p) => (
              <li key={p} className="text-sm text-zinc-400 flex items-start gap-2">
                <span className="text-emerald-400 shrink-0 mt-0.5">+</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium text-zinc-300 mb-2">Cons</h4>
          <ul className="space-y-1">
            {charger.cons.map((c) => (
              <li key={c} className="text-sm text-zinc-400 flex items-start gap-2">
                <span className="text-red-400 shrink-0 mt-0.5">-</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={charger.affiliateUrl}
        className="mt-5 block text-center rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
        rel="nofollow noopener"
      >
        Check Price on {charger.name.split(" ")[0]}
      </a>
    </div>
  );
}

export default async function CarModelPage({ params }: Props) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  const recommendedChargers = getRecommendedChargers(car);
  const topCharger = recommendedChargers[0];
  const topChargeTime = calculateChargeTime(
    car.batteryKwh,
    car.onboardChargerKw,
    topCharger.maxKw,
    10,
    100
  );

  const faqItems = [
    {
      question: `What is the best EV charger for the ${car.name}?`,
      answer: `We recommend the ${topCharger.name} as the best overall charger for the ${car.name}. At $${topCharger.price}, it provides ${topCharger.maxKw}kW of power and can charge your ${car.batteryKwh}kWh battery from 10% to 100% in approximately ${topChargeTime} hours.`,
    },
    {
      question: `How long does it take to charge a ${car.name} at home?`,
      answer: `With a Level 2 charger matched to the ${car.name}'s ${car.onboardChargerKw}kW onboard charger, you can expect a full charge (10-100%) in about ${topChargeTime} hours. A standard 120V outlet (Level 1) would take significantly longer.`,
    },
    {
      question: `What amp charger do I need for the ${car.name}?`,
      answer: `The ${car.name} has a ${car.onboardChargerKw}kW onboard charger, which means it can accept up to ${car.maxAmps}A at 240V. We recommend a charger with at least ${Math.min(car.maxAmps, 48)}A output to maximize charging speed.`,
    },
    {
      question: `Can I use a Level 1 charger for my ${car.name}?`,
      answer: `Yes, but it's very slow. A Level 1 charger (standard 120V outlet) delivers about 1.4kW, which would take roughly ${Math.round(car.batteryKwh / 1.4)} hours for a full charge of the ${car.name}'s ${car.batteryKwh}kWh battery. A Level 2 charger is highly recommended.`,
    },
    {
      question: `Do I need to hardwire my EV charger for the ${car.name}?`,
      answer: `Not necessarily. Most chargers we recommend come with a NEMA 14-50 plug that works with a standard 240V outlet on a 50A circuit. Hardwiring is an option for some models and may be required by local code in certain areas.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...recommendedChargers.map((charger, i) => ({
        "@type": "Product",
        name: charger.name,
        description: `${charger.name} - ${charger.amperage}A Level 2 EV charger with ${charger.cordLength}ft cord`,
        offers: {
          "@type": "Offer",
          price: charger.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: charger.rating,
            bestRating: 5,
          },
          author: {
            "@type": "Organization",
            name: "EVChargerPick",
          },
          reviewBody: `Ranked #${i + 1} for the ${car.name}. ${charger.pros[0]}. ${charger.maxKw}kW output with ${charger.cordLength}ft cord.`,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: charger.rating,
          bestRating: 5,
          reviewCount: 1,
        },
      })),
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
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
          <span className="text-zinc-300">Best EV Charger for {car.name}</span>
        </nav>

        {/* Quick Recommendation */}
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50">
            Best EV Chargers for the {car.name}
          </h1>
          <p className="mt-3 text-zinc-400">
            Updated {car.year} &middot; {car.batteryKwh}kWh battery &middot;{" "}
            {car.onboardChargerKw}kW onboard charger &middot; {car.type}
          </p>
        </header>

        {/* Quick Pick */}
        <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-emerald-400 text-lg">&#9889;</span>
            <h2 className="text-lg font-semibold text-emerald-400">
              Quick Pick
            </h2>
          </div>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">{topCharger.name}</strong> ($
            {topCharger.price}) is our #1 recommendation for the {car.name}. It
            delivers {topCharger.maxKw}kW and charges from 10-100% in about{" "}
            {topChargeTime} hours.
          </p>
          <a
            href={topCharger.affiliateUrl}
            className="inline-block mt-4 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
            rel="nofollow noopener"
          >
            Check Price
          </a>
        </div>

        {/* Comparison Table */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-50 mb-6">
            Charger Comparison for {car.name}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-3 px-3 text-zinc-400 font-medium">
                    Charger
                  </th>
                  <th className="text-center py-3 px-3 text-zinc-400 font-medium">
                    Price
                  </th>
                  <th className="text-center py-3 px-3 text-zinc-400 font-medium">
                    Amps
                  </th>
                  <th className="text-center py-3 px-3 text-zinc-400 font-medium">
                    Power
                  </th>
                  <th className="text-center py-3 px-3 text-zinc-400 font-medium">
                    Cord
                  </th>
                  <th className="text-center py-3 px-3 text-zinc-400 font-medium">
                    Charge Time*
                  </th>
                  <th className="text-center py-3 px-3 text-zinc-400 font-medium">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {recommendedChargers.map((charger, i) => {
                  const ct = calculateChargeTime(
                    car.batteryKwh,
                    car.onboardChargerKw,
                    charger.maxKw,
                    10,
                    100
                  );
                  return (
                    <tr
                      key={charger.slug}
                      className="border-b border-zinc-800/50 hover:bg-zinc-800/30"
                    >
                      <td className="py-3 px-3">
                        <a
                          href={`#${charger.slug}`}
                          className="text-zinc-200 hover:text-emerald-400"
                        >
                          {i === 0 && (
                            <span className="text-emerald-400 text-xs mr-1">
                              &#9733;
                            </span>
                          )}
                          {charger.name}
                        </a>
                      </td>
                      <td className="py-3 px-3 text-center font-medium text-emerald-400">
                        ${charger.price}
                      </td>
                      <td className="py-3 px-3 text-center text-zinc-300">
                        {charger.amperage}A
                      </td>
                      <td className="py-3 px-3 text-center text-zinc-300">
                        {charger.maxKw}kW
                      </td>
                      <td className="py-3 px-3 text-center text-zinc-300">
                        {charger.cordLength}ft
                      </td>
                      <td className="py-3 px-3 text-center text-zinc-300">
                        ~{ct}h
                      </td>
                      <td className="py-3 px-3 text-center text-zinc-300">
                        {charger.rating}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-600 mt-2">
            * Charge time estimated from 10% to 100% for the {car.name}&apos;s{" "}
            {car.batteryKwh}kWh battery. Actual times may vary based on
            temperature and other factors.
          </p>
        </section>

        {/* Detailed Reviews */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-50 mb-6">
            Detailed Reviews
          </h2>
          <div className="space-y-6">
            {recommendedChargers.map((charger, i) => (
              <ChargerCard
                key={charger.slug}
                charger={charger}
                rank={i + 1}
                car={car}
              />
            ))}
          </div>
        </section>

        {/* Charging Info */}
        <section className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-xl font-bold text-zinc-50 mb-4">
            Understanding {car.name} Charging
          </h2>
          <div className="space-y-3 text-sm text-zinc-400">
            <p>
              The {car.name} has a <strong className="text-zinc-200">{car.batteryKwh}kWh</strong> battery
              with a <strong className="text-zinc-200">{car.onboardChargerKw}kW</strong> onboard charger.
              This means the car can accept up to {car.onboardChargerKw}kW from
              a Level 2 (240V) home charger.
            </p>
            <p>
              {car.onboardChargerKw > 11
                ? `With a ${car.onboardChargerKw}kW onboard charger, the ${car.name} can take advantage of higher-amperage chargers. A 48A charger delivers 11.52kW, which is close to the car's maximum acceptance rate.`
                : `The ${car.name}'s ${car.onboardChargerKw}kW onboard charger means you won't benefit from chargers rated above ~48A at 240V, as the car itself limits the charging speed.`}
            </p>
            {car.type === "PHEV" && (
              <p>
                As a plug-in hybrid, the {car.name} has a smaller battery that
                charges quickly even at lower power levels. A 40A charger is more
                than sufficient for overnight charging.
              </p>
            )}
          </div>
          <Link
            href="/calculator"
            className="inline-block mt-4 text-sm text-emerald-400 hover:text-emerald-300"
          >
            Use our calculator for custom charge estimates &rarr;
          </Link>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-50 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/50"
              >
                <summary className="cursor-pointer p-5 text-zinc-200 font-medium text-sm flex items-center justify-between">
                  {faq.question}
                  <span className="text-zinc-500 group-open:rotate-180 transition-transform ml-2">
                    &#9662;
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-zinc-400">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <div className="mt-12 text-xs text-zinc-600 border-t border-zinc-800 pt-6">
          <strong className="text-zinc-500">Affiliate Disclosure:</strong>{" "}
          Links on this page may be affiliate links. EVChargerPick earns a
          commission from qualifying purchases at no extra cost to you. This
          doesn&apos;t influence our recommendations.
        </div>
      </div>
    </>
  );
}
