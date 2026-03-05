import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { carModels } from "@/data/car-models";
import { chargers } from "@/data/chargers";
import { comparisons } from "@/data/comparisons";

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
};

const chargerSvgMap: Record<string, string> = {
  "lectron-v-box-48a": "/images/chargers/lectron-v-box.svg",
  "autel-maxicharger-50a": "/images/chargers/autel-maxicharger.svg",
  "chargepoint-home-flex": "/images/chargers/chargepoint-flex.svg",
  "emporia-smart-evse-48a": "/images/chargers/emporia-classic.svg",
  "grizzl-e-classic-40a": "/images/chargers/grizzl-e-classic.svg",
};

function getStoreLabel(chargerName: string, url: string): string {
  if (url.includes("awin1.com") || url.includes("lectron")) return `Check Price at Lectron`;
  return `Check Price on Amazon`;
}

export default function Home() {
  const topChargers = chargers.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#0a0a0a]" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 leading-[1.1]">
                Find the Right Charger for Your Car
              </h1>
              <p className="mt-5 text-lg text-zinc-400 leading-relaxed max-w-lg">
                We match your car&apos;s specs to the best home charger. No
                guesswork, no overspending.
              </p>
              <div className="mt-8">
                <Link
                  href="#browse"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-[#111111] hover:brightness-110 transition-all"
                >
                  Browse by Car
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center animate-fade-in">
              <Image
                src="/images/illustrations/hero-car-charging.svg"
                alt="Electric car charging at home"
                width={460}
                height={368}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Car */}
      <section id="browse" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-500">
              Select Your Model
            </span>
            <h2 className="text-3xl font-bold text-zinc-100 mt-2">
              Browse by Car
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {carModels.map((car) => (
              <Link
                key={car.slug}
                href={`/best-ev-charger-for/${car.slug}`}
                className="group flex flex-col items-center gap-3 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-5 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-full h-12 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image
                    src={carSvgMap[car.slug] || "/images/cars/chevy-equinox-ev.svg"}
                    alt={car.name}
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-zinc-200 group-hover:text-zinc-50 transition-colors">
                    {car.name}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">
                    {car.batteryKwh}kWh
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Chargers — Editorial Style */}
      <section className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-500">
              Expert Picks
            </span>
            <h2 className="text-3xl font-bold text-zinc-100 mt-2">
              Top-Rated EV Chargers
            </h2>
          </div>
          <div className="space-y-6">
            {topChargers.map((charger, i) => (
              <div
                key={charger.slug}
                className="flex flex-col sm:flex-row gap-6 rounded-lg border border-[#2a2a2a] bg-[#111111] p-6"
              >
                <div className="sm:w-40 shrink-0 flex items-center justify-center">
                  <Image
                    src={chargerSvgMap[charger.slug] || "/images/chargers/lectron-v-box.svg"}
                    alt={charger.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {i === 0 && (
                        <span className="inline-block text-xs font-semibold text-green-500 mb-1">
                          Our Pick
                        </span>
                      )}
                      <h3 className="text-lg font-semibold text-zinc-100">
                        {charger.name}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-1">
                        {charger.amperage}A &middot; {charger.maxKw}kW &middot;{" "}
                        {charger.cordLength}ft cord
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xl font-bold text-zinc-100">
                        ${charger.price}
                      </div>
                      <div className="text-xs text-zinc-500 mt-1">
                        {charger.rating}/5.0
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {charger.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="text-xs bg-[#1a1a1a] text-zinc-400 px-2 py-1 rounded border border-[#2a2a2a]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href={charger.affiliateUrl}
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-green-500 hover:brightness-110 transition-all"
                    rel="nofollow noopener"
                  >
                    {getStoreLabel(charger.name, charger.affiliateUrl)}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section id="comparisons" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-500">
              Head to Head
            </span>
            <h2 className="text-3xl font-bold text-zinc-100 mt-2">
              Comparisons
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {comparisons.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="group flex items-start justify-between gap-4 py-4 border-b border-[#2a2a2a] hover:border-zinc-600 transition-colors"
              >
                <div>
                  <div className="text-sm font-medium text-zinc-200 group-hover:text-zinc-50 transition-colors">
                    {comp.title}
                  </div>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                    {comp.verdict.slice(0, 100)}...
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 shrink-0 mt-1 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-zinc-100">
                Not sure which charger fits your car?
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                Calculate charge times and costs for any car + charger combo.
              </p>
            </div>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-100 hover:brightness-110 transition-all shrink-0"
            >
              Try the Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
