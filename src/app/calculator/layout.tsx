import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Time Calculator - How Long to Charge Your Car?",
  description:
    "Calculate exactly how long it takes to charge your EV at home. Select your car model and charger to see charge time, cost estimate, and Level 1 vs Level 2 comparison.",
  alternates: {
    canonical: "https://evchargerpick.com/calculator",
  },
  openGraph: {
    title: "EV Charging Time Calculator",
    description:
      "Calculate how long it takes to charge your EV at home with any charger.",
    url: "https://evchargerpick.com/calculator",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
