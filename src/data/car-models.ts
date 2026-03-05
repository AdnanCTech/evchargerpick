import { chargers, type Charger } from "./chargers";

export interface CarModel {
  name: string;
  slug: string;
  brand: string;
  batteryKwh: number;
  onboardChargerKw: number;
  maxAmps: number;
  type: "BEV" | "PHEV";
  year: string;
  recommendedChargers: string[]; // charger slugs, ordered by recommendation
  metaTitle: string;
  metaDescription: string;
}

export const carModels: CarModel[] = [
  {
    name: "Chevy Equinox EV",
    slug: "chevy-equinox-ev",
    brand: "Chevrolet",
    batteryKwh: 85,
    onboardChargerKw: 11.5,
    maxAmps: 48,
    type: "BEV",
    year: "2024-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "autel-maxicharger-50a",
      "chargepoint-home-flex",
      "emporia-smart-evse-48a",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for Chevy Equinox EV (2025) - Top 5 Picks",
    metaDescription:
      "Find the best home EV charger for your Chevy Equinox EV. We compare the top Level 2 chargers with 48A output to maximize your 11.5kW onboard charger.",
  },
  {
    name: "Hyundai Ioniq 5",
    slug: "hyundai-ioniq-5",
    brand: "Hyundai",
    batteryKwh: 77.4,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2024-2025",
    recommendedChargers: [
      "autel-maxicharger-50a",
      "lectron-v-box-48a",
      "chargepoint-home-flex",
      "emporia-smart-evse-48a",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for Hyundai Ioniq 5 (2025) - Top 5 Picks",
    metaDescription:
      "Compare the best home EV chargers for your Hyundai Ioniq 5. Level 2 chargers rated for 11kW onboard charging with real-world performance data.",
  },
  {
    name: "Toyota RAV4 Prime PHEV",
    slug: "toyota-rav4-prime",
    brand: "Toyota",
    batteryKwh: 18.1,
    onboardChargerKw: 6.6,
    maxAmps: 28,
    type: "PHEV",
    year: "2024-2025",
    recommendedChargers: [
      "grizzl-e-classic-40a",
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "autel-maxicharger-50a",
      "chargepoint-home-flex",
    ],
    metaTitle:
      "Best EV Chargers for Toyota RAV4 Prime (2025) - Top 5 Picks",
    metaDescription:
      "The best Level 2 home chargers for your Toyota RAV4 Prime PHEV. Full charge in under 3 hours with our top-rated 6.6kW compatible chargers.",
  },
  {
    name: "Rivian R1T",
    slug: "rivian-r1t",
    brand: "Rivian",
    batteryKwh: 135,
    onboardChargerKw: 11.5,
    maxAmps: 48,
    type: "BEV",
    year: "2024-2025",
    recommendedChargers: [
      "autel-maxicharger-50a",
      "chargepoint-home-flex",
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for Rivian R1T (2025) - Top 5 Picks",
    metaDescription:
      "Find the fastest home charger for your Rivian R1T. We compare 48A+ Level 2 chargers to charge your 135kWh battery overnight.",
  },
  {
    name: "VW ID.4",
    slug: "vw-id4",
    brand: "Volkswagen",
    batteryKwh: 82,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2024-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "autel-maxicharger-50a",
      "grizzl-e-classic-40a",
      "chargepoint-home-flex",
    ],
    metaTitle: "Best EV Chargers for VW ID.4 (2025) - Top 5 Picks",
    metaDescription:
      "Top-rated home EV chargers for your Volkswagen ID.4. Compare Level 2 chargers matched to the ID.4's 11kW onboard charger.",
  },
  {
    name: "Kia EV9",
    slug: "kia-ev9",
    brand: "Kia",
    batteryKwh: 99.8,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2024-2025",
    recommendedChargers: [
      "autel-maxicharger-50a",
      "chargepoint-home-flex",
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for Kia EV9 (2025) - Top 5 Picks",
    metaDescription:
      "Best home chargers for the Kia EV9's massive 99.8kWh battery. Compare 48A Level 2 chargers for reliable overnight charging.",
  },
  {
    name: "Jeep Wrangler 4xe PHEV",
    slug: "jeep-wrangler-4xe",
    brand: "Jeep",
    batteryKwh: 17.3,
    onboardChargerKw: 7.7,
    maxAmps: 32,
    type: "PHEV",
    year: "2024-2025",
    recommendedChargers: [
      "grizzl-e-classic-40a",
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "autel-maxicharger-50a",
      "chargepoint-home-flex",
    ],
    metaTitle:
      "Best EV Chargers for Jeep Wrangler 4xe (2025) - Top 5 Picks",
    metaDescription:
      "Top home chargers for your Jeep Wrangler 4xe PHEV. Full charge in about 2 hours with our recommended Level 2 chargers.",
  },
  {
    name: "Honda Prologue",
    slug: "honda-prologue",
    brand: "Honda",
    batteryKwh: 85,
    onboardChargerKw: 11.5,
    maxAmps: 48,
    type: "BEV",
    year: "2024-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "autel-maxicharger-50a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for Honda Prologue (2025) - Top 5 Picks",
    metaDescription:
      "Compare the best home EV chargers for the Honda Prologue. Maximize your 11.5kW onboard charger with our top Level 2 picks.",
  },
  {
    name: "BMW i4",
    slug: "bmw-i4",
    brand: "BMW",
    batteryKwh: 83.9,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2024-2025",
    recommendedChargers: [
      "autel-maxicharger-50a",
      "chargepoint-home-flex",
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for BMW i4 (2025) - Top 5 Picks",
    metaDescription:
      "The best Level 2 home chargers for your BMW i4. Smart chargers with scheduling and energy monitoring to complement your BMW experience.",
  },
  {
    name: "Cadillac Lyriq",
    slug: "cadillac-lyriq",
    brand: "Cadillac",
    batteryKwh: 102,
    onboardChargerKw: 19.2,
    maxAmps: 80,
    type: "BEV",
    year: "2024-2025",
    recommendedChargers: [
      "autel-maxicharger-50a",
      "chargepoint-home-flex",
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for Cadillac Lyriq (2025) - Top 5 Picks",
    metaDescription:
      "Home chargers for the Cadillac Lyriq's powerful 19.2kW onboard charger. Note: no residential Level 2 charger fully saturates this — here are the fastest options.",
  },
];

export function getCarBySlug(slug: string): CarModel | undefined {
  return carModels.find((c) => c.slug === slug);
}

export function getRecommendedChargers(car: CarModel): Charger[] {
  return car.recommendedChargers
    .map((slug) => chargers.find((c) => c.slug === slug))
    .filter((c): c is Charger => c !== undefined);
}

export function calculateChargeTime(
  batteryKwh: number,
  onboardChargerKw: number,
  chargerMaxKw: number,
  currentPercent: number = 10,
  targetPercent: number = 100
): number {
  const effectiveKw = Math.min(onboardChargerKw, chargerMaxKw);
  const kwhNeeded = batteryKwh * ((targetPercent - currentPercent) / 100);
  const hours = kwhNeeded / effectiveKw;
  return Math.round(hours * 10) / 10;
}
