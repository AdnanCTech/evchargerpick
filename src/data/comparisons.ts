export interface Comparison {
  slug: string;
  charger1Slug: string;
  charger2Slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  verdict: string;
  verdictWinner: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "lectron-vs-autel",
    charger1Slug: "lectron-v-box-48a",
    charger2Slug: "autel-maxicharger-50a",
    title: "Lectron V-Box 48A vs Autel MaxiCharger 50A",
    metaTitle: "Lectron V-Box vs Autel MaxiCharger (2025) - Which Is Better?",
    metaDescription:
      "Detailed comparison of the Lectron V-Box 48A ($379) vs Autel MaxiCharger 50A ($549). We compare specs, features, and value to help you choose.",
    verdict:
      "The Lectron V-Box 48A offers the best value at $379 with nearly identical charging speeds. The Autel MaxiCharger 50A justifies its $549 price with superior build quality, ENERGY STAR certification, and a more polished app experience. Choose Lectron for budget, Autel for premium features.",
    verdictWinner: "lectron-v-box-48a",
  },
  {
    slug: "chargepoint-vs-autel",
    charger1Slug: "chargepoint-home-flex",
    charger2Slug: "autel-maxicharger-50a",
    title: "ChargePoint Home Flex vs Autel MaxiCharger 50A",
    metaTitle:
      "ChargePoint Home Flex vs Autel MaxiCharger (2025) - Full Comparison",
    metaDescription:
      "ChargePoint Home Flex ($699) vs Autel MaxiCharger 50A ($549) — which premium EV charger wins? We compare features, app quality, and reliability.",
    verdict:
      "Both are excellent 50A chargers with similar charging speeds. The ChargePoint Home Flex has the best app and network integration but costs $150 more. The Autel MaxiCharger offers better value with ENERGY STAR certification. Choose ChargePoint for the ecosystem, Autel for the better deal.",
    verdictWinner: "autel-maxicharger-50a",
  },
  {
    slug: "lectron-vs-grizzle",
    charger1Slug: "lectron-v-box-48a",
    charger2Slug: "grizzl-e-classic-40a",
    title: "Lectron V-Box 48A vs Grizzl-E Classic 40A",
    metaTitle: "Lectron V-Box vs Grizzl-E Classic (2025) - Smart vs Simple",
    metaDescription:
      "Lectron V-Box 48A ($379) vs Grizzl-E Classic 40A ($399). Smart WiFi charger vs bulletproof simplicity — which approach is right for you?",
    verdict:
      "The Lectron V-Box 48A charges faster (48A vs 40A) and includes WiFi for $20 less. The Grizzl-E Classic wins on durability and simplicity — it works in extreme conditions with zero connectivity issues. Choose Lectron for smart features, Grizzl-E for reliability.",
    verdictWinner: "lectron-v-box-48a",
  },
  {
    slug: "emporia-vs-lectron",
    charger1Slug: "emporia-smart-evse-48a",
    charger2Slug: "lectron-v-box-48a",
    title: "Emporia Smart EVSE 48A vs Lectron V-Box 48A",
    metaTitle: "Emporia vs Lectron EV Charger (2025) - Budget Showdown",
    metaDescription:
      "Emporia Smart EVSE ($459) vs Lectron V-Box ($379) — two budget-friendly 48A chargers compared on features, app quality, and value.",
    verdict:
      "Both are solid 48A chargers at competitive prices. The Lectron V-Box wins on price at $80 less. The Emporia Smart EVSE is better if you already use the Emporia Vue energy monitoring ecosystem. For most buyers, the Lectron offers better standalone value.",
    verdictWinner: "lectron-v-box-48a",
  },
  {
    slug: "chargepoint-vs-grizzle",
    charger1Slug: "chargepoint-home-flex",
    charger2Slug: "grizzl-e-classic-40a",
    title: "ChargePoint Home Flex vs Grizzl-E Classic 40A",
    metaTitle:
      "ChargePoint Home Flex vs Grizzl-E Classic (2025) - Premium vs Value",
    metaDescription:
      "ChargePoint Home Flex ($699) vs Grizzl-E Classic 40A ($399). Is the ChargePoint worth $300 more? Full comparison of features, speed, and reliability.",
    verdict:
      "The ChargePoint Home Flex charges faster (50A vs 40A) and has the best smart features and app. The Grizzl-E Classic costs $300 less and is nearly indestructible. Choose ChargePoint if you want smart scheduling and energy tracking, Grizzl-E if you want simple, reliable charging.",
    verdictWinner: "chargepoint-home-flex",
  },
];

export function getComparisonBySlug(
  slug: string
): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
