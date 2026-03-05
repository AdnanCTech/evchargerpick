export interface Charger {
  name: string;
  slug: string;
  price: number;
  amperage: number;
  maxKw: number;
  voltage: number;
  cordLength: number;
  features: string[];
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  rating: number;
}

export const chargers: Charger[] = [
  {
    name: "Lectron V-Box 48A",
    slug: "lectron-v-box-48a",
    price: 379,
    amperage: 48,
    maxKw: 11.52,
    voltage: 240,
    cordLength: 25,
    features: [
      "NEMA 14-50 plug",
      "WiFi connectivity",
      "Energy monitoring",
      "Adjustable amperage (16A-48A)",
      "Indoor/outdoor rated (NEMA 4)",
    ],
    pros: [
      "Best value for a 48A charger",
      "Long 25-foot cable",
      "WiFi with energy tracking app",
      "Adjustable amperage for different circuits",
    ],
    cons: [
      "App can be buggy",
      "No hardwire option without adapter",
      "Newer brand with less track record",
    ],
    affiliateUrl: "https://www.awin1.com/cread.php?awinmid=91891&awinaffid=2800074&ued=https%3A%2F%2Fev-lectron.com%2Fproducts%2Flectron-240v-48a-electric-vehicle-ev-charging-station",
    rating: 4.5,
  },
  {
    name: "Autel MaxiCharger 50A",
    slug: "autel-maxicharger-50a",
    price: 549,
    amperage: 50,
    maxKw: 12.0,
    voltage: 240,
    cordLength: 25,
    features: [
      "Hardwired or NEMA 14-50",
      "WiFi & Bluetooth",
      "ENERGY STAR certified",
      "Built-in holster",
      "Scheduling & energy monitoring",
      "CSA & FCC certified",
    ],
    pros: [
      "50A output for fastest Level 2 charging",
      "Excellent build quality",
      "ENERGY STAR certified",
      "Flexible installation (plug or hardwire)",
    ],
    cons: [
      "Higher price point",
      "Requires 60A circuit for full output",
      "Larger unit size",
    ],
    affiliateUrl: "https://www.amazon.com/dp/B0B712M5VY?tag=evchargerpick-20",
    rating: 4.7,
  },
  {
    name: "ChargePoint Home Flex",
    slug: "chargepoint-home-flex",
    price: 699,
    amperage: 50,
    maxKw: 12.0,
    voltage: 240,
    cordLength: 23,
    features: [
      "Hardwired or NEMA 14-50",
      "WiFi connectivity",
      "ChargePoint app integration",
      "Alexa compatible",
      "UL listed",
      "ENERGY STAR certified",
    ],
    pros: [
      "Top-tier app experience",
      "Works with ChargePoint network",
      "Excellent reliability track record",
      "Alexa voice control",
    ],
    cons: [
      "Most expensive option",
      "23-foot cord (shorter than some)",
      "Premium price for brand name",
    ],
    affiliateUrl: "https://www.amazon.com/dp/B07WXZDHGV?tag=evchargerpick-20",
    rating: 4.6,
  },
  {
    name: "Emporia Smart EVSE 48A",
    slug: "emporia-smart-evse-48a",
    price: 459,
    amperage: 48,
    maxKw: 11.52,
    voltage: 240,
    cordLength: 24,
    features: [
      "NEMA 14-50 plug",
      "WiFi connectivity",
      "Energy monitoring with Emporia app",
      "Scheduling",
      "Works with Emporia Vue energy monitor",
      "UL listed",
    ],
    pros: [
      "Great integration with Emporia energy ecosystem",
      "Solid build quality",
      "Good app with energy insights",
      "Mid-range pricing",
    ],
    cons: [
      "Best features require Emporia Vue monitor",
      "No hardwire option",
      "Less known brand",
    ],
    affiliateUrl: "https://www.amazon.com/dp/B0CKKPTDPK?tag=evchargerpick-20",
    rating: 4.4,
  },
  {
    name: "Grizzl-E Classic 40A",
    slug: "grizzl-e-classic-40a",
    price: 399,
    amperage: 40,
    maxKw: 9.6,
    voltage: 240,
    cordLength: 24,
    features: [
      "NEMA 14-50 plug",
      "No WiFi (simple & reliable)",
      "Premium build quality",
      "NEMA 4 outdoor rated",
      "Avalanche edition available",
      "UL & cUL listed",
    ],
    pros: [
      "Tank-like durability",
      "Works in extreme weather (-30C to 50C)",
      "No WiFi means no connectivity issues",
      "Simple plug-and-play setup",
    ],
    cons: [
      "No smart features or app",
      "40A max (slower than 48A options)",
      "No energy monitoring",
    ],
    affiliateUrl: "https://www.amazon.com/dp/B08Q22651D?tag=evchargerpick-20",
    rating: 4.5,
  },
];

export function getChargerBySlug(slug: string): Charger | undefined {
  return chargers.find((c) => c.slug === slug);
}
