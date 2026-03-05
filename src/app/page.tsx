import Link from "next/link";
import { carModels } from "@/data/car-models";
import { chargers } from "@/data/chargers";
import { comparisons } from "@/data/comparisons";

const brandIcons: Record<string, string> = {
  Chevrolet: "\u{1F697}",
  Hyundai: "\u{1F698}",
  Toyota: "\u{1F699}",
  Rivian: "\u{1F6FB}",
  Volkswagen: "\u{1F697}",
  Kia: "\u{1F698}",
  Jeep: "\u{1F699}",
  Honda: "\u{1F697}",
  BMW: "\u{1F3CE}",
  Cadillac: "\u{1F695}",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-50 leading-tight">
              Find the Perfect{" "}
              <span className="text-emerald-400">EV Charger</span> for Your Car
            </h1>
            <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
              We match your car&apos;s specs to the best home charger. No
              guesswork, no overspending — just the right charger at the right
              price.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#browse"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors w-full sm:w-auto"
              >
                Find Your Charger
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition-colors w-full sm:w-auto"
              >
                Charging Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                {chargers.length}
              </div>
              <div className="text-sm text-zinc-500 mt-1">
                Chargers Reviewed
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                {carModels.length}
              </div>
              <div className="text-sm text-zinc-500 mt-1">
                Car Models Covered
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                {comparisons.length}
              </div>
              <div className="text-sm text-zinc-500 mt-1">
                Head-to-Head Comparisons
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">100%</div>
              <div className="text-sm text-zinc-500 mt-1">
                Independent Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Car */}
      <section id="browse" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-50">
              Browse by Car Model
            </h2>
            <p className="mt-3 text-zinc-400">
              Select your car to see the best charger recommendations
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {carModels.map((car) => (
              <Link
                key={car.slug}
                href={`/best-ev-charger-for/${car.slug}`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all"
              >
                <span
                  className="text-3xl"
                  role="img"
                  aria-label={car.brand}
                >
                  {brandIcons[car.brand] || "\u{1F697}"}
                </span>
                <div className="text-center">
                  <div className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">
                    {car.name}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">
                    {car.batteryKwh}kWh &middot; {car.type}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Chargers */}
      <section className="bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-50">
              Top-Rated EV Chargers
            </h2>
            <p className="mt-3 text-zinc-400">
              Our most recommended home chargers across all car models
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chargers.slice(0, 3).map((charger, i) => (
              <div
                key={charger.slug}
                className="relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                {i === 0 && (
                  <div className="absolute -top-3 left-4 bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full">
                    Best Value
                  </div>
                )}
                {i === 1 && (
                  <div className="absolute -top-3 left-4 bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full">
                    Top Pick
                  </div>
                )}
                {i === 2 && (
                  <div className="absolute -top-3 left-4 bg-zinc-600 text-zinc-200 text-xs font-bold px-3 py-1 rounded-full">
                    Premium
                  </div>
                )}
                <div className="flex items-start justify-between mt-2">
                  <div>
                    <h3 className="font-semibold text-zinc-100">
                      {charger.name}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">
                      {charger.amperage}A &middot; {charger.maxKw}kW &middot;{" "}
                      {charger.cordLength}ft cord
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-emerald-400">
                      ${charger.price}
                    </div>
                    <div className="text-xs text-zinc-500 flex items-center gap-1 justify-end mt-1">
                      {"★".repeat(Math.floor(charger.rating))}
                      <span className="ml-1">{charger.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {charger.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href={charger.affiliateUrl}
                  className="mt-5 block text-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-4 py-2.5 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  rel="nofollow noopener"
                >
                  Check Price
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-50">
              Head-to-Head Comparisons
            </h2>
            <p className="mt-3 text-zinc-400">
              See how the top chargers stack up against each other
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparisons.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-emerald-500/50 transition-all"
              >
                <div className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">
                  {comp.title}
                </div>
                <p className="text-xs text-zinc-500 mt-2 line-clamp-2">
                  {comp.verdict.slice(0, 120)}...
                </p>
                <span className="inline-block mt-3 text-xs text-emerald-400">
                  Read comparison &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-zinc-900/50 to-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-zinc-50">
            Not Sure Which Charger You Need?
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
            Use our charging calculator to see exactly how long each charger
            takes to charge your specific car.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors mt-6"
          >
            Try the Calculator
          </Link>
        </div>
      </section>
    </>
  );
}
