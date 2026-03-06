import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, X, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Charge an EV at an Apartment (2026 Guide)",
  description:
    "Complete guide to charging your electric car at an apartment or condo. Level 1 vs Level 2 options, talking to your landlord, right-to-charge laws, public charging strategies, and the best portable chargers for renters.",
  alternates: { canonical: "https://evchargerpick.com/guides/apartment-ev-charging" },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-zinc-100 mt-16 mb-4">{children}</h2>
  );
}

function SubSection({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-zinc-200 mt-10 mb-3">{children}</h3>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-zinc-400 leading-relaxed mb-4">{children}</p>
  );
}

function ProTip({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 my-6">
      <div className="flex items-center gap-2 mb-2">
        <Check className="h-4 w-4 text-green-400" />
        <span className="text-sm font-semibold text-green-400">{title}</span>
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed">{children}</p>
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 my-6">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="h-4 w-4 text-amber-400" />
        <span className="text-sm font-semibold text-amber-400">Important</span>
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed">{children}</p>
    </div>
  );
}

export default function ApartmentEvChargingGuide() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/guides/apartment-ev-charging" className="text-zinc-300">Apartment EV Charging Guide</Link>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
        How to Charge an EV at an Apartment
      </h1>
      <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
        You don&apos;t need a garage to own an electric car. Here&apos;s every option for charging at an apartment, condo, or rental — from plugging into a standard outlet to getting a Level 2 charger installed in your parking spot.
      </p>

      {/* Quick answer box */}
      <div className="mt-8 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
        <h2 className="text-base font-semibold text-zinc-200 mb-3">Quick answer</h2>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
            <span><strong className="text-zinc-200">Easiest:</strong> Plug into a standard 120V outlet in your garage or parking area (Level 1). Gets you 3-5 miles of range per hour.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
            <span><strong className="text-zinc-200">Best:</strong> Ask your landlord or HOA to install a 240V outlet or charger. 13 states have &quot;right to charge&quot; laws that require them to allow it.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
            <span><strong className="text-zinc-200">Backup plan:</strong> Rely on workplace charging + occasional public DC fast charging. Many apartment EV owners charge at work and rarely need home charging.</span>
          </li>
        </ul>
      </div>

      <SectionTitle>Your charging options, ranked</SectionTitle>

      <SubSection>Option 1: Level 1 charging (standard outlet)</SubSection>
      <Prose>
        Every EV comes with a portable Level 1 charger that plugs into a standard 120V household outlet. If your apartment has a garage with an outlet, or your parking spot is near an exterior outlet, you can start charging tonight.
      </Prose>
      <Prose>
        Level 1 is slow — you get about 3-5 miles of range per hour, which means 30-50 miles overnight. That works fine if your daily commute is under 40 miles. It doesn&apos;t work if you drive 80+ miles a day or need to fully charge a large battery regularly.
      </Prose>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#2a2a2a]">
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Daily driving</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Level 1 enough?</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Hours needed</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Under 30 miles</td>
              <td className="py-3 px-4"><span className="text-green-400">Yes, easily</span></td>
              <td className="py-3 px-4">6-8 hours</td>
            </tr>
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">30-50 miles</td>
              <td className="py-3 px-4"><span className="text-green-400">Yes, overnight</span></td>
              <td className="py-3 px-4">8-12 hours</td>
            </tr>
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">50-80 miles</td>
              <td className="py-3 px-4"><span className="text-amber-400">Tight</span></td>
              <td className="py-3 px-4">12-20 hours</td>
            </tr>
            <tr>
              <td className="py-3 px-4">80+ miles</td>
              <td className="py-3 px-4"><span className="text-red-400">No</span></td>
              <td className="py-3 px-4">20+ hours</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ProTip title="Extension cord warning">
        Don&apos;t use a regular household extension cord for EV charging. If you need to extend your reach, use a heavy-duty 12-gauge outdoor extension cord rated for 15A continuous duty, and keep it under 25 feet. Better yet, get a longer EVSE with a 25ft cord built in.
      </ProTip>

      <SubSection>Option 2: Level 2 charger in your parking spot</SubSection>
      <Prose>
        Level 2 charges 5-10x faster than Level 1. A 32A Level 2 charger adds 25-30 miles of range per hour — that&apos;s a full charge overnight for any EV. The catch: it needs a 240V outlet (like a dryer outlet) installed in your parking area.
      </Prose>
      <Prose>
        Getting this installed at an apartment requires your landlord or HOA&apos;s cooperation. The good news: 13 states now have &quot;right to charge&quot; laws that prevent landlords and HOAs from unreasonably blocking EV charger installation.
      </Prose>

      <SubSection>Right-to-charge states (as of 2026)</SubSection>
      <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {["California", "Colorado", "Connecticut", "Delaware", "Florida", "Hawaii", "Illinois", "Maryland", "New Jersey", "New York", "Oregon", "Virginia", "Washington"].map(state => (
          <div key={state} className="flex items-center gap-2 text-sm text-zinc-400">
            <Check className="h-3.5 w-3.5 text-green-400 shrink-0" />
            <span>{state}</span>
          </div>
        ))}
      </div>
      <Prose>
        Even in states without these laws, many landlords will say yes if you offer to pay for installation and agree to remove the equipment when you leave. Frame it as an improvement to the property — because it is.
      </Prose>

      <SubSection>How to ask your landlord</SubSection>
      <Prose>
        Don&apos;t just ask &quot;can I install an EV charger?&quot; — that sounds expensive and complicated. Instead:
      </Prose>
      <div className="my-4 space-y-3">
        {[
          "Research the installation cost first ($500-1,500 for a 240V outlet near your spot)",
          "Offer to pay for installation yourself",
          "Get a quote from a licensed electrician to show them",
          "Mention the 30% federal tax credit (Section 30C) that applies to the install",
          "Offer to remove the equipment when you move out (or leave it as a property upgrade)",
          "Mention right-to-charge laws if you're in one of those states",
          "Frame it as increasing property value for future tenants",
        ].map((tip, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-zinc-400">
            <span className="text-green-400 font-mono text-xs mt-0.5">{i + 1}.</span>
            <span>{tip}</span>
          </div>
        ))}
      </div>

      <Warning>
        Never install a 240V outlet yourself or hire someone to do it without your landlord&apos;s written permission. This is a lease violation that can get you evicted, and unauthorized electrical work is a fire hazard and insurance liability.
      </Warning>

      <SubSection>Option 3: Workplace charging</SubSection>
      <Prose>
        If your employer has EV chargers in the parking lot, this might be all you need. An 8-hour workday on a Level 2 charger gives you a full charge. Many apartment-dwelling EV owners rely entirely on workplace charging and skip home charging altogether.
      </Prose>
      <Prose>
        If your workplace doesn&apos;t have chargers yet, ask. Many companies are adding them as employee benefits, and there are federal tax credits for businesses that install them too.
      </Prose>

      <SubSection>Option 4: Public charging network</SubSection>
      <Prose>
        DC fast chargers can add 100-200 miles in 20-30 minutes. If there&apos;s a fast charger near your apartment or on your commute, one 20-minute stop per week might cover your driving. Apps like PlugShare, ChargePoint, and A Better Route Planner show every charger near you.
      </Prose>
      <Prose>
        The downsides: public fast charging costs $0.30-0.50/kWh (2-3x more than home charging), you need to plan around it, and chargers can be occupied or broken. It works as a supplement, not as your only plan.
      </Prose>

      <SectionTitle>Best portable chargers for apartment dwellers</SectionTitle>
      <Prose>
        If you have access to a 120V or 240V outlet but can&apos;t install a permanent wall charger, a portable EVSE is your best option. These plug in and unplug — nothing permanent, no landlord permission needed for 120V.
      </Prose>

      <div className="my-6 space-y-4">
        <a
          href="https://www.amazon.com/dp/B09V2Z5SFZ?tag=evchargerpick-20"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 hover:border-green-500/30 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-zinc-200">Lectron V-Box 48A</h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500" />
          </div>
          <p className="text-sm text-zinc-400">NEMA 14-50 plug, 48A/11.5kW, 25ft cable, WiFi. Best if your apartment has a 240V outlet (dryer outlet) accessible from your parking spot. $379.</p>
        </a>

        <a
          href="https://www.amazon.com/dp/B0C73X95MR?tag=evchargerpick-20"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 hover:border-green-500/30 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-zinc-200">Emporia Smart EVSE</h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500" />
          </div>
          <p className="text-sm text-zinc-400">NEMA 14-50 plug, adjustable amps via app, 24ft cable. Great for shared outlets — you can dial down the amperage to avoid tripping shared circuits. $249.</p>
        </a>

        <a
          href="https://www.amazon.com/dp/B08GSWVJVW?tag=evchargerpick-20"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 hover:border-green-500/30 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-zinc-200">Grizzl-E Classic 40A</h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500" />
          </div>
          <p className="text-sm text-zinc-400">NEMA 14-50 plug, 40A/9.6kW, 24ft cable. No WiFi — just plug in and charge. Best for outdoor or uncovered parking since it handles -30°C to 50°C. $399.</p>
        </a>
      </div>

      <SectionTitle>Cost breakdown: apartment EV charging</SectionTitle>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#2a2a2a]">
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Method</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Cost/kWh</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Monthly (1,000 mi)</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Setup cost</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Level 1 (120V outlet)</td>
              <td className="py-3 px-4">$0.12-0.16</td>
              <td className="py-3 px-4">$36-48</td>
              <td className="py-3 px-4">$0 (included with car)</td>
            </tr>
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Level 2 (own charger)</td>
              <td className="py-3 px-4">$0.12-0.16</td>
              <td className="py-3 px-4">$36-48</td>
              <td className="py-3 px-4">$750-2,000</td>
            </tr>
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Workplace (free)</td>
              <td className="py-3 px-4">$0</td>
              <td className="py-3 px-4">$0</td>
              <td className="py-3 px-4">$0</td>
            </tr>
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Public Level 2</td>
              <td className="py-3 px-4">$0.20-0.35</td>
              <td className="py-3 px-4">$60-105</td>
              <td className="py-3 px-4">$0</td>
            </tr>
            <tr>
              <td className="py-3 px-4">DC fast charging</td>
              <td className="py-3 px-4">$0.30-0.50</td>
              <td className="py-3 px-4">$90-150</td>
              <td className="py-3 px-4">$0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        Even at the most expensive option (DC fast charging only), you&apos;re still spending less than gas. A comparable gas car driving 1,000 miles at 30 MPG and $3.50/gallon costs about $117/month.
      </Prose>

      <SectionTitle>FAQ</SectionTitle>

      <div className="space-y-6 my-6">
        {[
          {
            q: "Can I run an extension cord from my apartment to my car?",
            a: "Technically yes, but it's usually against building rules, it's a trip hazard, and regular extension cords can overheat during the sustained 12A draw of EV charging. If you must extend your reach, use a heavy-duty outdoor cord rated for continuous 15A duty and keep it under 25 feet.",
          },
          {
            q: "What if my landlord says no to installing a charger?",
            a: "If you're in a right-to-charge state, they may not be able to refuse if you're paying for the installation. Outside those states, try framing it as a property improvement. If they still refuse, workplace + public charging is your fallback.",
          },
          {
            q: "Is it worth buying an EV if I live in an apartment?",
            a: "Yes, if you have access to any charging option (outlet in garage, workplace charger, or nearby public charger). Millions of apartment dwellers own EVs. It takes more planning than a house with a garage, but the fuel savings still work out.",
          },
          {
            q: "Can I use my dryer outlet for EV charging?",
            a: "If your parking spot is near your laundry room and you have a NEMA 14-30 dryer outlet, you can get a portable EVSE with a 14-30 adapter. You'll get about 24A/5.7kW, which adds 20 miles per hour. Just don't run the dryer and charger at the same time.",
          },
          {
            q: "How do I handle electricity costs if I'm charging on shared power?",
            a: "If you're plugging into a shared outlet, talk to your landlord about a metered arrangement or a flat monthly fee. Smart chargers like the Emporia EVSE track exactly how much energy you use, which makes splitting costs straightforward.",
          },
        ].map(({ q, a }, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold text-zinc-200 mb-2">{q}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      {/* Gumroad CTA */}
      <section className="mt-16 rounded-xl border border-green-500/20 bg-green-500/5 p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-zinc-100">Get the complete EV charger decision guide</h3>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
          All our charger research in one printable PDF. Comparison tables, a decision flowchart based on your car&apos;s onboard charger, electrical requirements, installation cost calculator, and a guide to rebates and tax credits that could save you $400+.
        </p>
        <a
          href="https://insensate.gumroad.com/l/ev-home-charger-guide"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-500"
        >
          Get the PDF — $4.99
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </section>

      {/* Related content */}
      <div className="mt-16 border-t border-[#2a2a2a] pt-10">
        <h2 className="text-lg font-semibold text-zinc-200 mb-4">Related guides</h2>
        <div className="space-y-3">
          <Link href="/calculator" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
            <ArrowRight className="h-4 w-4" />
            EV charging time calculator
          </Link>
          <Link href="/compare/chargepoint-vs-grizzle" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
            <ArrowRight className="h-4 w-4" />
            ChargePoint vs Grizzl-E comparison
          </Link>
          <Link href="/compare/emporia-vs-lectron" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
            <ArrowRight className="h-4 w-4" />
            Emporia vs Lectron — budget charger showdown
          </Link>
        </div>
      </div>

      {/* Affiliate Disclosure */}
      <div className="mt-24 text-[11px] text-zinc-600 border-t border-[#2a2a2a] pt-8">
        <strong className="text-zinc-500">Affiliate Disclosure:</strong>{" "}
        Links on this page may be affiliate links. EVChargerPick earns a
        commission from qualifying purchases at no extra cost to you. This
        doesn&apos;t influence our recommendations.
      </div>
    </main>
  );
}
