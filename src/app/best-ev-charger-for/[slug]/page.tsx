import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, X, Plus, Minus, ArrowUpRight, ArrowRight } from "lucide-react";
import {
  carModels,
  getCarBySlug,
  getRecommendedChargers,
  calculateChargeTime,
} from "@/data/car-models";
import { type Charger } from "@/data/chargers";

const carSvgMap: Record<string, string> = {
  "chevy-equinox-ev": "/images/cars/chevy-equinox-ev.svg",
  "hyundai-ioniq-5": "/images/cars/hyundai-ioniq-5.svg",
  "toyota-rav4-prime": "/images/cars/toyota-rav4-prime.svg",
  "rivian-r1t": "/images/cars/rivian-r1t.svg",
  "vw-id4": "/images/cars/vw-id4.svg",
  "kia-ev9": "/images/cars/kia-ev9.svg",
  "jeep-wrangler-4xe": "/images/cars/jeep-wrangler-4xe.svg",
  "honda-prologue": "/images/cars/honda-prologue.svg",
  "bmw-i4": "/images/cars/bmw-i4.svg",
  "cadillac-lyriq": "/images/cars/cadillac-lyriq.svg",
  "hyundai-ioniq-6": "/images/cars/hyundai-ioniq-6.svg",
  "rivian-r1s": "/images/cars/rivian-r1s.svg",
  "bmw-ix": "/images/cars/bmw-ix.svg",
  "audi-q8-etron": "/images/cars/audi-q8-etron.svg",
  "nissan-ariya": "/images/cars/nissan-ariya.svg",
  "polestar-2": "/images/cars/polestar-2.svg",
  "lucid-air": "/images/cars/lucid-air.svg",
  "mercedes-eqs": "/images/cars/mercedes-eqs.svg",
  "subaru-solterra": "/images/cars/subaru-solterra.svg",
  "volvo-ex40": "/images/cars/volvo-ex40.svg",
  "ford-f150-lightning": "/images/cars/ford-f150-lightning.svg",
  "ford-mustang-mach-e": "/images/cars/ford-mustang-mach-e.svg",
  "chrysler-pacifica-phev": "/images/cars/chrysler-pacifica-phev.svg",
  "toyota-bz4x": "/images/cars/toyota-bz4x.svg",
  "genesis-gv60": "/images/cars/genesis-gv60.svg",
  "genesis-electrified-gv70": "/images/cars/genesis-gv70-electrified.svg",
  "gmc-sierra-ev": "/images/cars/gmc-sierra-ev.svg",
  "cadillac-escalade-iq": "/images/cars/cadillac-escalade-iq.svg",
  "dodge-charger-daytona": "/images/cars/dodge-charger-daytona.svg",
  "lexus-rz450e": "/images/cars/lexus-rz450e.svg",
};

const chargerSvgMap: Record<string, string> = {
  "lectron-v-box-48a": "/images/chargers/lectron-v-box.svg",
  "autel-maxicharger-50a": "/images/chargers/autel-maxicharger.svg",
  "chargepoint-home-flex": "/images/chargers/chargepoint-flex.svg",
  "emporia-smart-evse-48a": "/images/chargers/emporia-classic.svg",
  "grizzl-e-classic-40a": "/images/chargers/grizzl-e-classic.svg",
};

function getStoreLabel(url: string): string {
  if (url.includes("awin1.com") || url.includes("lectron")) return "Check Price at Lectron";
  return "Check Price on Amazon";
}

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

function ChargerReview({
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
    <div id={charger.slug} className="scroll-mt-24">
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="sm:w-36 shrink-0 flex items-start justify-center pt-1">
          <Image
            src={chargerSvgMap[charger.slug] || "/images/chargers/lectron-v-box.svg"}
            alt={charger.name}
            width={100}
            height={100}
            className="object-contain rounded-xl"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              {rank === 1 && (
                <span className="text-[11px] font-medium text-green-500 tracking-[0.1em] uppercase">
                  Our Pick
                </span>
              )}
              <h3 className="text-xl font-semibold text-zinc-100 mt-0.5">
                #{rank}. {charger.name}
              </h3>
            </div>
            <div className="text-right shrink-0">
              <div className="text-2xl font-bold text-zinc-100">${charger.price}</div>
              <div className="text-xs text-zinc-500">{charger.rating}/5.0</div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs text-zinc-400 bg-zinc-700/30 px-3 py-1 rounded-full">{charger.amperage}A</span>
            <span className="text-xs text-zinc-400 bg-zinc-700/30 px-3 py-1 rounded-full">{charger.maxKw}kW</span>
            <span className="text-xs text-zinc-400 bg-zinc-700/30 px-3 py-1 rounded-full">{charger.cordLength}ft cord</span>
            <span className="text-xs text-zinc-400 bg-zinc-700/30 px-3 py-1 rounded-full">~{chargeTime}h charge</span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[11px] font-medium text-zinc-500 uppercase tracking-[0.15em] mb-3">Pros</h4>
              <ul className="space-y-2">
                {charger.pros.map((p) => (
                  <li key={p} className="text-sm text-zinc-400 flex items-start gap-2 leading-[1.7]">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-medium text-zinc-500 uppercase tracking-[0.15em] mb-3">Cons</h4>
              <ul className="space-y-2">
                {charger.cons.map((c) => (
                  <li key={c} className="text-sm text-zinc-400 flex items-start gap-2 leading-[1.7]">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={charger.affiliateUrl}
            target="_blank"
            className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-green-500 hover:text-green-400 transition"
            rel="nofollow noopener noreferrer sponsored"
          >
            {getStoreLabel(charger.affiliateUrl)}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-[#2a2a2a]">
      <summary className="cursor-pointer py-5 text-zinc-200 font-medium text-sm flex items-center justify-between">
        {question}
        <span className="text-zinc-500 ml-4 shrink-0">
          <Plus className="w-4 h-4 group-open:hidden" />
          <Minus className="w-4 h-4 hidden group-open:block" />
        </span>
      </summary>
      <div className="faq-content">
        <div>
          <div className="pb-5 text-sm text-zinc-400 leading-[1.7]">
            {answer}
          </div>
        </div>
      </div>
    </details>
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

  const chargingTimes = [16, 20, 24, 32, 40, 48].map((amps) => {
    const kw = (amps * 240) / 1000;
    const effectiveKw = Math.min(car.onboardChargerKw, kw);
    const hours = (car.batteryKwh * 0.9) / effectiveKw;
    return { amps, kw, effectiveKw, hours: Math.round(hours * 10) / 10 };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-zinc-500 mb-10">
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#browse" className="hover:text-zinc-300 transition-colors">
            Best EV Charger for
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-300">{car.name}</span>
        </nav>

        {/* Hero */}
        <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 tracking-tight leading-[1.1]">
              Best Home Chargers for the {car.name}
            </h1>
            <p className="mt-3 text-sm text-zinc-500">Updated March 2026</p>
            <p className="mt-2 text-base text-zinc-400 leading-[1.7]">
              {car.batteryKwh}kWh battery &middot; {car.onboardChargerKw}kW onboard charger &middot; {car.type === "PHEV" ? "Plug-in Hybrid" : car.type}
            </p>
          </div>
          <div className="sm:w-44 shrink-0 flex justify-center">
            <Image
              src={carSvgMap[car.slug] || "/images/cars/chevy-equinox-ev.svg"}
              alt={car.name}
              width={176}
              height={70}
              className="object-contain opacity-80 rounded-xl"
            />
          </div>
        </header>

        {/* Quick Pick */}
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-[#1a1a1a] p-8 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500" />
          <h2 className="text-sm font-semibold text-green-500 mb-3">
            Our #1 Pick: {topCharger.name}
          </h2>
          <p className="text-base text-zinc-400 leading-[1.7]">
            At ${topCharger.price}, the {topCharger.name} delivers {topCharger.maxKw}kW
            and charges your {car.name} from 10-100% in about {topChargeTime} hours.
            {" "}{topCharger.pros[0]}.
          </p>
          <a
            href={topCharger.affiliateUrl}
            target="_blank"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-green-500 hover:text-green-400 transition"
            rel="nofollow noopener noreferrer sponsored"
          >
            {getStoreLabel(topCharger.affiliateUrl)}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Comparison Table */}
        <section className="mt-24">
          <div className="mb-10">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-green-500">
              Our Top Picks
            </span>
            <h2 className="text-3xl sm:text-[36px] font-semibold text-zinc-100 mt-3 tracking-tight">
              Charger Comparison for {car.name}
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-3.5 px-4 text-zinc-500 font-medium">Charger</th>
                  <th className="text-center py-3.5 px-4 text-zinc-500 font-medium">Price</th>
                  <th className="text-center py-3.5 px-4 text-zinc-500 font-medium">Amps</th>
                  <th className="text-center py-3.5 px-4 text-zinc-500 font-medium">Power</th>
                  <th className="text-center py-3.5 px-4 text-zinc-500 font-medium">Cord</th>
                  <th className="text-center py-3.5 px-4 text-zinc-500 font-medium">Charge Time*</th>
                  <th className="text-center py-3.5 px-4 text-zinc-500 font-medium">Rating</th>
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
                      className={i % 2 === 0 ? "bg-[#111111]" : "bg-[#161616]"}
                    >
                      <td className="py-3.5 px-4">
                        <a
                          href={`#${charger.slug}`}
                          className="text-zinc-200 hover:text-zinc-50 transition-colors"
                        >
                          {i === 0 && (
                            <span className="text-green-500 text-xs font-medium mr-1.5">
                              Our Pick
                            </span>
                          )}
                          {charger.name}
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-center text-zinc-300">${charger.price}</td>
                      <td className="py-3.5 px-4 text-center text-zinc-300">{charger.amperage}A</td>
                      <td className="py-3.5 px-4 text-center text-zinc-300">{charger.maxKw}kW</td>
                      <td className="py-3.5 px-4 text-center text-zinc-300">{charger.cordLength}ft</td>
                      <td className="py-3.5 px-4 text-center text-zinc-300">~{ct}h</td>
                      <td className="py-3.5 px-4 text-center text-zinc-300">{charger.rating}/5.0</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-600 mt-4">
            * Estimated from 10% to 100% for the {car.name}&apos;s {car.batteryKwh}kWh
            battery. Actual times may vary.
          </p>
        </section>

        {/* Detailed Reviews */}
        <section className="mt-24">
          <div className="mb-10">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-green-500">
              In-Depth Reviews
            </span>
            <h2 className="text-3xl sm:text-[36px] font-semibold text-zinc-100 mt-3 tracking-tight">
              Detailed Reviews
            </h2>
          </div>
          <div className="space-y-10">
            {recommendedChargers.map((charger, i) => (
              <div key={charger.slug}>
                <ChargerReview charger={charger} rank={i + 1} car={car} />
                {i < recommendedChargers.length - 1 && (
                  <hr className="mt-10 border-[#2a2a2a]" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Charging Times Table */}
        <section className="mt-24">
          <div className="mb-10">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-green-500">
              Charging Times
            </span>
            <h2 className="text-3xl sm:text-[36px] font-semibold text-zinc-100 mt-3 tracking-tight">
              Charging Times for Your {car.name}
            </h2>
          </div>
          <p className="text-base text-zinc-400 mb-8 leading-[1.7]">
            Estimated time to charge from 10% to 100% at different amperage levels.
            {car.onboardChargerKw < 12 && (
              <> Your {car.name}&apos;s onboard charger limits intake to {car.onboardChargerKw}kW.</>
            )}
          </p>
          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-3.5 px-4 text-zinc-500 font-medium">Amps</th>
                  <th className="text-center py-3.5 px-4 text-zinc-500 font-medium">Charger kW</th>
                  <th className="text-center py-3.5 px-4 text-zinc-500 font-medium">Effective kW</th>
                  <th className="text-center py-3.5 px-4 text-zinc-500 font-medium">Charge Time</th>
                </tr>
              </thead>
              <tbody>
                {chargingTimes.map((row, i) => (
                  <tr key={row.amps} className={i % 2 === 0 ? "bg-[#111111]" : "bg-[#161616]"}>
                    <td className="py-3.5 px-4 text-zinc-300">{row.amps}A</td>
                    <td className="py-3.5 px-4 text-center text-zinc-300">{row.kw.toFixed(1)}kW</td>
                    <td className="py-3.5 px-4 text-center text-zinc-300">{row.effectiveKw.toFixed(1)}kW</td>
                    <td className="py-3.5 px-4 text-center text-zinc-300">~{row.hours}h</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Charging Info */}
        <section className="mt-24 rounded-2xl border border-zinc-800 bg-[#1a1a1a] p-8">
          <h2 className="text-2xl font-semibold text-zinc-100 mb-5 tracking-tight">
            Understanding {car.name} Charging
          </h2>
          <div className="space-y-4 text-base text-zinc-400 leading-[1.7]">
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
            className="inline-flex items-center gap-1.5 mt-5 text-sm text-green-500 hover:text-green-400 transition"
          >
            Use our calculator for custom charge estimates
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* FAQ */}
        <section className="mt-24">
          <div className="mb-10">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-green-500">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-[36px] font-semibold text-zinc-100 mt-3 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div>
            {faqItems.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <div className="mt-24 text-[11px] text-zinc-600 border-t border-[#2a2a2a] pt-8">
          <strong className="text-zinc-500">Affiliate Disclosure:</strong>{" "}
          Links on this page may be affiliate links. EVChargerPick earns a
          commission from qualifying purchases at no extra cost to you. This
          doesn&apos;t influence our recommendations.
        </div>
      </div>
    </>
  );
}
