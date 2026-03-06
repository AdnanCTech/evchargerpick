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
  {
    name: "Hyundai Ioniq 6",
    slug: "hyundai-ioniq-6",
    brand: "Hyundai",
    batteryKwh: 77.4,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2023-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for Hyundai Ioniq 6 (2025) - Top 4 Picks",
    metaDescription:
      "Find the best home EV charger for your Hyundai Ioniq 6. 800V architecture with an 11kW onboard charger — matched to the right Level 2 charger.",
  },
  {
    name: "Rivian R1S",
    slug: "rivian-r1s",
    brand: "Rivian",
    batteryKwh: 135,
    onboardChargerKw: 11.5,
    maxAmps: 48,
    type: "BEV",
    year: "2022-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for Rivian R1S (2025) - Top 4 Picks",
    metaDescription:
      "Home chargers for the Rivian R1S and its massive battery. A 48A charger is essential for overnight charging the 135kWh pack.",
  },
  {
    name: "BMW iX",
    slug: "bmw-ix",
    brand: "BMW",
    batteryKwh: 106.3,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2022-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for BMW iX (2025) - Top 4 Picks",
    metaDescription:
      "Top home chargers for the BMW iX. Skip the included 9.6kW BMW charger and upgrade to a 48A aftermarket unit for faster overnight charging.",
  },
  {
    name: "Audi Q8 e-tron",
    slug: "audi-q8-etron",
    brand: "Audi",
    batteryKwh: 114,
    onboardChargerKw: 9.6,
    maxAmps: 40,
    type: "BEV",
    year: "2023-2024",
    recommendedChargers: [
      "grizzl-e-classic-40a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "lectron-v-box-48a",
    ],
    metaTitle:
      "Best EV Chargers for Audi Q8 e-tron (2025) - Top 4 Picks",
    metaDescription:
      "Best home chargers for the Audi Q8 e-tron. Standard 9.6kW onboard charger means a 40A unit maxes it out — check your trim before buying.",
  },
  {
    name: "Nissan Ariya",
    slug: "nissan-ariya",
    brand: "Nissan",
    batteryKwh: 87,
    onboardChargerKw: 7.2,
    maxAmps: 30,
    type: "BEV",
    year: "2023-2025",
    recommendedChargers: [
      "grizzl-e-classic-40a",
      "emporia-smart-evse-48a",
      "lectron-v-box-48a",
    ],
    metaTitle: "Best EV Chargers for Nissan Ariya (2025) - Top 3 Picks",
    metaDescription:
      "The best home chargers for the Nissan Ariya. With a 7.2kW onboard charger, a 32A charger is all you need — save money and skip the overkill.",
  },
  {
    name: "Polestar 2",
    slug: "polestar-2",
    brand: "Polestar",
    batteryKwh: 82,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2021-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for Polestar 2 (2025) - Top 4 Picks",
    metaDescription:
      "Compare the best home EV chargers for the Polestar 2. Premium performance sedan with an 11kW onboard charger — 48A charger recommended.",
  },
  {
    name: "Lucid Air",
    slug: "lucid-air",
    brand: "Lucid",
    batteryKwh: 112,
    onboardChargerKw: 19.2,
    maxAmps: 80,
    type: "BEV",
    year: "2022-2025",
    recommendedChargers: [
      "chargepoint-home-flex",
      "autel-maxicharger-50a",
      "emporia-smart-evse-48a",
      "lectron-v-box-48a",
    ],
    metaTitle: "Best EV Chargers for Lucid Air (2025) - Top 4 Picks",
    metaDescription:
      "Home chargers for the Lucid Air's industry-leading 19.2kW onboard charger. Up to 80 miles of range per hour on Level 2 — here are the fastest options.",
  },
  {
    name: "Mercedes EQS",
    slug: "mercedes-eqs",
    brand: "Mercedes-Benz",
    batteryKwh: 107.8,
    onboardChargerKw: 9.6,
    maxAmps: 40,
    type: "BEV",
    year: "2022-2025",
    recommendedChargers: [
      "grizzl-e-classic-40a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "lectron-v-box-48a",
    ],
    metaTitle: "Best EV Chargers for Mercedes EQS (2025) - Top 4 Picks",
    metaDescription:
      "Best home chargers for the Mercedes EQS. Despite its premium price, the 9.6kW onboard charger means a 40A unit is all you need.",
  },
  {
    name: "Subaru Solterra",
    slug: "subaru-solterra",
    brand: "Subaru",
    batteryKwh: 65.4,
    onboardChargerKw: 6.6,
    maxAmps: 28,
    type: "BEV",
    year: "2023-2025",
    recommendedChargers: [
      "grizzl-e-classic-40a",
      "emporia-smart-evse-48a",
      "lectron-v-box-48a",
    ],
    metaTitle: "Best EV Chargers for Subaru Solterra (2025) - Top 3 Picks",
    metaDescription:
      "Home chargers for the Subaru Solterra. With a 6.6kW onboard charger, a 32A charger maxes it out — save money and skip the 48A overkill.",
  },
  {
    name: "Volvo EX40",
    slug: "volvo-ex40",
    brand: "Volvo",
    batteryKwh: 78,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2022-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for Volvo EX40 (2025) - Top 4 Picks",
    metaDescription:
      "Best home chargers for the Volvo EX40 (formerly XC40 Recharge). 11kW onboard charger matched to the right 48A Level 2 charger.",
  },
  // --- Batch 3 ---
  {
    name: "Ford F-150 Lightning",
    slug: "ford-f150-lightning",
    brand: "Ford",
    batteryKwh: 131,
    onboardChargerKw: 11.3,
    maxAmps: 48,
    type: "BEV",
    year: "2022-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle:
      "Best EV Chargers for Ford F-150 Lightning (2025) - Top 4 Picks",
    metaDescription:
      "Best home chargers for the Ford F-150 Lightning. 2024-2025 models have an 11.3kW onboard charger (48A) — 2022-2023 Lariat/Platinum had 19.2kW.",
  },
  {
    name: "Ford Mustang Mach-E",
    slug: "ford-mustang-mach-e",
    brand: "Ford",
    batteryKwh: 98.8,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2023-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle:
      "Best EV Chargers for Ford Mustang Mach-E (2025) - Top 5 Picks",
    metaDescription:
      "Find the best home EV charger for the Ford Mustang Mach-E. 11kW onboard charger matched to the right 48A Level 2 charger for overnight charging.",
  },
  {
    name: "Chrysler Pacifica PHEV",
    slug: "chrysler-pacifica-phev",
    brand: "Chrysler",
    batteryKwh: 16,
    onboardChargerKw: 6.6,
    maxAmps: 28,
    type: "PHEV",
    year: "2021-2024",
    recommendedChargers: [
      "grizzl-e-classic-40a",
      "emporia-smart-evse-48a",
      "lectron-v-box-48a",
    ],
    metaTitle:
      "Best EV Chargers for Chrysler Pacifica PHEV (2025) - Top 3 Picks",
    metaDescription:
      "You do not need an expensive charger for the Chrysler Pacifica PHEV. 6.6kW onboard charger means a budget 32A unit charges it in 2 hours.",
  },
  {
    name: "Toyota bZ4X",
    slug: "toyota-bz4x",
    brand: "Toyota",
    batteryKwh: 71.4,
    onboardChargerKw: 6.6,
    maxAmps: 28,
    type: "BEV",
    year: "2023-2025",
    recommendedChargers: [
      "grizzl-e-classic-40a",
      "emporia-smart-evse-48a",
      "lectron-v-box-48a",
    ],
    metaTitle: "Best EV Chargers for Toyota bZ4X (2025) - Top 3 Picks",
    metaDescription:
      "Best home chargers for the Toyota bZ4X. With a 6.6kW onboard charger, a 32A unit maxes it out. AWD models capped at 100kW DCFC.",
  },
  {
    name: "Genesis GV60",
    slug: "genesis-gv60",
    brand: "Genesis",
    batteryKwh: 77.4,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2023-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle: "Best EV Chargers for Genesis GV60 (2025) - Top 4 Picks",
    metaDescription:
      "Best home chargers for the Genesis GV60. 800V architecture with 350kW DCFC, but home L2 is limited by the 11kW onboard charger.",
  },
  {
    name: "Genesis Electrified GV70",
    slug: "genesis-electrified-gv70",
    brand: "Genesis",
    batteryKwh: 77.4,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2023-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle:
      "Best EV Chargers for Genesis Electrified GV70 (2025) - Top 4 Picks",
    metaDescription:
      "Best home chargers for the Genesis Electrified GV70. 11kW onboard charger, 800V architecture with 233kW DCFC. NACS coming 2026.",
  },
  {
    name: "GMC Sierra EV",
    slug: "gmc-sierra-ev",
    brand: "GMC",
    batteryKwh: 205,
    onboardChargerKw: 19.2,
    maxAmps: 80,
    type: "BEV",
    year: "2024-2025",
    recommendedChargers: [
      "chargepoint-home-flex",
      "autel-maxicharger-50a",
      "emporia-smart-evse-48a",
      "lectron-v-box-48a",
    ],
    metaTitle: "Best EV Chargers for GMC Sierra EV (2025) - Top 4 Picks",
    metaDescription:
      "Home chargers for the GMC Sierra EV and its massive 205kWh battery. 19.2kW onboard charger needs a high-amperage EVSE for fastest charging.",
  },
  {
    name: "Cadillac Escalade IQ",
    slug: "cadillac-escalade-iq",
    brand: "Cadillac",
    batteryKwh: 200,
    onboardChargerKw: 11.5,
    maxAmps: 48,
    type: "BEV",
    year: "2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle:
      "Best EV Chargers for Cadillac Escalade IQ (2025) - Top 4 Picks",
    metaDescription:
      "Best home chargers for the Cadillac Escalade IQ. 11.5kW standard or 19.2kW optional onboard charger — find out which you have.",
  },
  {
    name: "Dodge Charger Daytona EV",
    slug: "dodge-charger-daytona",
    brand: "Dodge",
    batteryKwh: 93.9,
    onboardChargerKw: 11,
    maxAmps: 48,
    type: "BEV",
    year: "2024-2025",
    recommendedChargers: [
      "lectron-v-box-48a",
      "emporia-smart-evse-48a",
      "chargepoint-home-flex",
      "grizzl-e-classic-40a",
    ],
    metaTitle:
      "Best EV Chargers for Dodge Charger Daytona EV (2025) - Top 4 Picks",
    metaDescription:
      "Best home chargers for the Dodge Charger Daytona EV. 11kW onboard charger, 400V architecture, CCS1 with NACS coming 2027.",
  },
  {
    name: "Lexus RZ450e",
    slug: "lexus-rz450e",
    brand: "Lexus",
    batteryKwh: 71.4,
    onboardChargerKw: 6.6,
    maxAmps: 28,
    type: "BEV",
    year: "2023-2025",
    recommendedChargers: [
      "grizzl-e-classic-40a",
      "emporia-smart-evse-48a",
      "lectron-v-box-48a",
    ],
    metaTitle: "Best EV Chargers for Lexus RZ450e (2025) - Top 3 Picks",
    metaDescription:
      "Best home chargers for the Lexus RZ450e. The 6.6kW onboard charger is the slowest in its class — save money with a 32A unit. 2026 fixes everything.",
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
