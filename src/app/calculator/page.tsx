"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { carModels, calculateChargeTime } from "@/data/car-models";
import { chargers } from "@/data/chargers";

const AVG_ELECTRICITY_RATE = 0.16; // $/kWh national average

export default function CalculatorPage() {
  const [selectedCarSlug, setSelectedCarSlug] = useState(carModels[0].slug);
  const [selectedChargerSlug, setSelectedChargerSlug] = useState(
    chargers[0].slug
  );
  const [currentPercent, setCurrentPercent] = useState(20);

  const selectedCar = useMemo(
    () => carModels.find((c) => c.slug === selectedCarSlug)!,
    [selectedCarSlug]
  );
  const selectedCharger = useMemo(
    () => chargers.find((c) => c.slug === selectedChargerSlug)!,
    [selectedChargerSlug]
  );

  const effectiveKw = Math.min(
    selectedCar.onboardChargerKw,
    selectedCharger.maxKw
  );
  const kwhNeeded =
    selectedCar.batteryKwh * ((100 - currentPercent) / 100);
  const chargeTimeHours = calculateChargeTime(
    selectedCar.batteryKwh,
    selectedCar.onboardChargerKw,
    selectedCharger.maxKw,
    currentPercent,
    100
  );
  const estimatedCost = Math.round(kwhNeeded * AVG_ELECTRICITY_RATE * 100) / 100;
  const chargeTimeFormatted = `${Math.floor(chargeTimeHours)}h ${Math.round(
    (chargeTimeHours % 1) * 60
  )}m`;

  // Level 1 comparison
  const level1Kw = 1.4;
  const level1Hours = Math.round((kwhNeeded / level1Kw) * 10) / 10;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-zinc-500 mb-8">
        <Link href="/" className="hover:text-zinc-300">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-300">Charging Calculator</span>
      </nav>

      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50">
          EV Charging Time Calculator
        </h1>
        <p className="mt-3 text-zinc-400">
          Calculate exactly how long it takes to charge your EV with any home
          charger. Select your car and charger below.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="car-select"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Your Car
            </label>
            <select
              id="car-select"
              value={selectedCarSlug}
              onChange={(e) => setSelectedCarSlug(e.target.value)}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            >
              {carModels.map((car) => (
                <option key={car.slug} value={car.slug}>
                  {car.name} ({car.batteryKwh}kWh, {car.onboardChargerKw}kW
                  onboard)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="charger-select"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Your Charger
            </label>
            <select
              id="charger-select"
              value={selectedChargerSlug}
              onChange={(e) => setSelectedChargerSlug(e.target.value)}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            >
              {chargers.map((charger) => (
                <option key={charger.slug} value={charger.slug}>
                  {charger.name} ({charger.amperage}A, ${charger.price})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="battery-percent"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Current Battery Level: {currentPercent}%
            </label>
            <input
              id="battery-percent"
              type="range"
              min="0"
              max="95"
              step="5"
              value={currentPercent}
              onChange={(e) => setCurrentPercent(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>95%</span>
            </div>
          </div>

          {/* Car & Charger specs */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
            <h3 className="text-sm font-medium text-zinc-300 mb-3">
              Configuration Details
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-zinc-500">Battery Size</span>
                <div className="text-zinc-200 font-medium">
                  {selectedCar.batteryKwh} kWh
                </div>
              </div>
              <div>
                <span className="text-zinc-500">Onboard Charger</span>
                <div className="text-zinc-200 font-medium">
                  {selectedCar.onboardChargerKw} kW
                </div>
              </div>
              <div>
                <span className="text-zinc-500">Charger Output</span>
                <div className="text-zinc-200 font-medium">
                  {selectedCharger.maxKw} kW
                </div>
              </div>
              <div>
                <span className="text-zinc-500">Effective Rate</span>
                <div className="text-emerald-400 font-medium">
                  {effectiveKw} kW
                </div>
              </div>
            </div>
            {effectiveKw < selectedCharger.maxKw && (
              <p className="text-xs text-zinc-500 mt-3">
                Note: Your {selectedCar.name}&apos;s onboard charger limits
                intake to {selectedCar.onboardChargerKw}kW, even though the{" "}
                {selectedCharger.name} can output {selectedCharger.maxKw}kW.
              </p>
            )}
            {effectiveKw < selectedCar.onboardChargerKw && (
              <p className="text-xs text-zinc-500 mt-3">
                Note: The {selectedCharger.name} outputs {selectedCharger.maxKw}
                kW, which is below your car&apos;s {selectedCar.onboardChargerKw}
                kW max. A higher-output charger would charge faster.
              </p>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
            <h3 className="text-sm font-medium text-emerald-400 mb-4">
              Charging Results
            </h3>
            <div className="space-y-5">
              <div>
                <div className="text-xs text-zinc-500">
                  Time to Full ({currentPercent}% → 100%)
                </div>
                <div className="text-3xl font-bold text-zinc-50 mt-1">
                  {chargeTimeFormatted}
                </div>
              </div>
              <div>
                <div className="text-xs text-zinc-500">Energy Needed</div>
                <div className="text-xl font-semibold text-zinc-200 mt-1">
                  {Math.round(kwhNeeded * 10) / 10} kWh
                </div>
              </div>
              <div>
                <div className="text-xs text-zinc-500">
                  Estimated Cost (@ ${AVG_ELECTRICITY_RATE}/kWh avg)
                </div>
                <div className="text-xl font-semibold text-emerald-400 mt-1">
                  ${estimatedCost.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* Visual charge bar */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <h3 className="text-sm font-medium text-zinc-300 mb-3">
              Battery Visualization
            </h3>
            <div className="w-full bg-zinc-800 rounded-full h-8 overflow-hidden relative">
              <div
                className="h-full bg-emerald-500/30 rounded-full transition-all duration-500"
                style={{ width: `${currentPercent}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-zinc-300">
                {currentPercent}% → 100%
              </div>
            </div>
          </div>

          {/* Level 1 comparison */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <h3 className="text-sm font-medium text-zinc-300 mb-3">
              vs. Level 1 Charging (120V outlet)
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-zinc-500">Level 2</div>
                <div className="text-lg font-semibold text-emerald-400">
                  {chargeTimeFormatted}
                </div>
              </div>
              <div>
                <div className="text-zinc-500">Level 1 (120V)</div>
                <div className="text-lg font-semibold text-red-400">
                  {Math.floor(level1Hours)}h {Math.round((level1Hours % 1) * 60)}m
                </div>
              </div>
            </div>
            <p className="text-xs text-zinc-500 mt-3">
              A Level 2 charger is{" "}
              <strong className="text-zinc-300">
                {Math.round(level1Hours / chargeTimeHours)}x faster
              </strong>{" "}
              than a standard wall outlet for your {selectedCar.name}.
            </p>
          </div>

          {/* Charger link */}
          <a
            href={selectedCharger.affiliateUrl}
            className="block text-center rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
            rel="nofollow noopener"
          >
            Check {selectedCharger.name} Price — ${selectedCharger.price}
          </a>

          {/* See all chargers for this car */}
          <Link
            href={`/best-ev-charger-for/${selectedCar.slug}`}
            className="block text-center text-sm text-emerald-400 hover:text-emerald-300"
          >
            See all charger recommendations for {selectedCar.name} →
          </Link>
        </div>
      </div>

      {/* How it works */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-50 mb-6">
          How EV Charging Speed Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <div className="text-emerald-400 text-2xl mb-3">1</div>
            <h3 className="font-semibold text-zinc-200 text-sm">
              Onboard Charger Limits Speed
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Your car&apos;s onboard charger (AC-to-DC converter) determines
              the maximum power it can accept. A higher-output EVSE won&apos;t
              charge faster than this limit.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <div className="text-emerald-400 text-2xl mb-3">2</div>
            <h3 className="font-semibold text-zinc-200 text-sm">
              Match Charger to Car
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              The effective charging rate is the lower of your EVSE output and
              your car&apos;s onboard charger. No point paying for 50A if your
              car maxes out at 32A.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <div className="text-emerald-400 text-2xl mb-3">3</div>
            <h3 className="font-semibold text-zinc-200 text-sm">
              Battery Size Matters
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Larger batteries take longer to charge at the same power level. A
              60kWh battery charges twice as fast as a 120kWh battery with the
              same charger.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <div className="mt-12 text-xs text-zinc-600 border-t border-zinc-800 pt-6">
        <strong className="text-zinc-500">Affiliate Disclosure:</strong> Links
        on this page may be affiliate links. EVChargerPick earns a commission
        from qualifying purchases at no extra cost to you.
      </div>
    </div>
  );
}
