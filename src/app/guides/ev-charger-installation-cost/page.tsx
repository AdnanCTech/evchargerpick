import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "EV Charger Installation Cost Guide (2026): What to Expect",
  description:
    "How much does it cost to install an EV charger at home? Full breakdown of Level 1 vs Level 2 installation costs, panel upgrades, permits, labor, the 30% federal tax credit, and top charger picks.",
  alternates: { canonical: "https://www.evchargerpick.com/guides/ev-charger-installation-cost" },
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

export default function EvChargerInstallationCostGuide() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/guides/ev-charger-installation-cost" className="text-zinc-300">EV Charger Installation Cost</Link>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
        EV Charger Installation Cost: What You&apos;ll Actually Pay in 2026
      </h1>
      <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
        The charger itself is only part of the equation. Electrical work, permits, and panel upgrades can double or triple your total cost. Here&apos;s what to budget for, how to save, and which chargers are worth the money after installation.
      </p>

      {/* Quick answer box */}
      <div className="mt-8 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
        <h2 className="text-base font-semibold text-zinc-200 mb-3">Quick answer</h2>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
            <span><strong className="text-zinc-200">Level 1:</strong> $0 if you already have a standard outlet. Up to $200 if you need a dedicated 120V circuit installed near your parking spot.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
            <span><strong className="text-zinc-200">Level 2:</strong> $350-$1,900 total. That breaks down to $150-$900 for the charger plus $200-$1,000 for electrician labor and materials.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
            <span><strong className="text-zinc-200">Tax credit:</strong> The federal 30C tax credit covers 30% of equipment and installation costs (up to $1,000 for individuals). File with Form 8911.</span>
          </li>
        </ul>
      </div>

      <SectionTitle>Level 1 vs Level 2: installation costs compared</SectionTitle>

      <SubSection>Level 1 charging: the zero-cost option</SubSection>
      <Prose>
        Level 1 charging uses a standard 120V household outlet and the portable charger that came with your EV. If you already have an outlet within cord reach of your parking spot, the installation cost is $0. You plug in and start charging.
      </Prose>
      <Prose>
        The only scenario where Level 1 costs money is if you need a new dedicated 120V circuit run to your garage or driveway. An electrician will charge $100-$200 for this, depending on how far the panel is from your parking spot. That said, most garages already have at least one outlet.
      </Prose>
      <Prose>
        Level 1 adds 3-5 miles of range per hour. If you drive under 40 miles per day and can charge overnight, this works. For anything more, you need Level 2.
      </Prose>

      <SubSection>Level 2 charging: where the real costs are</SubSection>
      <Prose>
        Level 2 requires a 240V circuit, similar to what your dryer or oven uses. The charger itself costs $150-$900 depending on features. The electrical work costs $200-$1,000 depending on your home&apos;s setup. That puts your total anywhere from $350 to $1,900 before the tax credit.
      </Prose>
      <Prose>
        A Level 2 charger adds 25-50 miles of range per hour, meaning a full charge in 4-8 hours for most EVs. Once installed, you will never think about charging again. You plug in when you get home and wake up to a full battery.
      </Prose>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#2a2a2a]">
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Cost component</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Level 1</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Level 2</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Charger/EVSE</td>
              <td className="py-3 px-4">$0 (included with car)</td>
              <td className="py-3 px-4">$150-$900</td>
            </tr>
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Electrician labor</td>
              <td className="py-3 px-4">$0-$100</td>
              <td className="py-3 px-4">$200-$600</td>
            </tr>
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Materials (wire, breaker, conduit)</td>
              <td className="py-3 px-4">$0-$50</td>
              <td className="py-3 px-4">$50-$200</td>
            </tr>
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Permit fees</td>
              <td className="py-3 px-4">$0</td>
              <td className="py-3 px-4">$0-$200</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-300">Total</td>
              <td className="py-3 px-4 font-medium text-zinc-300">$0-$200</td>
              <td className="py-3 px-4 font-medium text-zinc-300">$350-$1,900</td>
            </tr>
          </tbody>
        </table>
      </div>

      <SectionTitle>What drives the cost up (or down)</SectionTitle>

      <SubSection>Electrical panel capacity</SubSection>
      <Prose>
        This is the biggest wildcard. A Level 2 charger needs a 40A or 50A breaker. If your panel is already near capacity (common in older homes), you&apos;ll need a panel upgrade. A 200A panel upgrade costs $1,500-$3,000 and adds significant time to the project.
      </Prose>
      <Prose>
        Before you panic: most homes built after 2000 have 200A panels with room to spare. Ask your electrician to check your panel capacity during the initial quote. If you have space for a 50A breaker, you skip the upgrade entirely.
      </Prose>

      <ProTip title="Panel alternative">
        If your panel is full but you don&apos;t want to upgrade, consider a charger with built-in load management like the Emporia EV Charger. It monitors your home&apos;s total electrical usage and automatically adjusts charging speed to avoid overloading the panel. This can save you $1,500+ by avoiding a panel upgrade.
      </ProTip>

      <SubSection>Distance from panel to charger</SubSection>
      <Prose>
        Electricians charge by the foot for conduit runs. If your electrical panel is in the basement and your charger is on the outside wall of an attached garage, you might need only 10-20 feet of conduit ($100-$200 in materials). If the panel is on the opposite side of the house from a detached garage, you could need 50-100+ feet, pushing materials and labor into the $500-$800 range.
      </Prose>
      <Prose>
        Shorter runs save money. Pick a charger location as close to your panel as possible, and ask the electrician about the most direct route for conduit.
      </Prose>

      <SubSection>Permit and inspection fees</SubSection>
      <Prose>
        Many cities require an electrical permit for a new 240V circuit. Permit costs range from $50-$200 depending on your municipality. Some areas also require a separate inspection after installation. Your electrician usually handles the permit process, but confirm this upfront.
      </Prose>
      <Prose>
        A few areas (mostly rural counties) don&apos;t require permits for charger installations at all. Others, like parts of California, have streamlined online permitting that takes 24 hours. Check with your city&apos;s building department or ask your electrician what&apos;s required in your area.
      </Prose>

      <SubSection>Labor rates by region</SubSection>
      <Prose>
        Electrician rates vary significantly by geography. In the Midwest and South, expect $50-$80/hour. In the Northeast, Pacific Northwest, and major metro areas, rates run $80-$150/hour. California&apos;s Bay Area and New York City are at the top of that range.
      </Prose>
      <Prose>
        A typical Level 2 charger installation takes 2-4 hours of labor. At $75/hour that&apos;s $150-$300 in labor. At $125/hour that&apos;s $250-$500. Always get at least two quotes, and make sure the electrician is licensed and experienced with EV charger installs.
      </Prose>

      <Warning>
        Do not attempt to install a 240V circuit yourself unless you are a licensed electrician. Improper wiring is a fire hazard, will void your charger&apos;s warranty, and may violate your homeowner&apos;s insurance policy. The $200-$600 you save is not worth the risk.
      </Warning>

      <SectionTitle>The federal tax credit: how to save 30%</SectionTitle>
      <Prose>
        The Alternative Fuel Vehicle Refueling Property Credit (Section 30C) covers 30% of the cost of purchasing and installing an EV charger at your home. For individuals, the maximum credit is $1,000. For commercial installations, the cap is $100,000.
      </Prose>
      <Prose>
        The credit applies to the charger, the wiring, the conduit, the breaker, the permit, and the electrician&apos;s labor. If your total cost is $1,200 for charger plus installation, you get $360 back on your taxes. If your total is $3,000+ (with a panel upgrade), you hit the $1,000 cap.
      </Prose>

      <div className="my-6 space-y-3">
        {[
          "Buy and install the charger between January 1 and December 31 of the tax year",
          "The charger must be installed at your primary residence (not a rental property you own)",
          "Your home must be in an eligible census tract (low-income or non-urban area) as of 2023 rules",
          "File IRS Form 8911 with your tax return to claim the credit",
          "Keep all receipts: charger purchase, electrician invoice, permit fees",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-zinc-400">
            <span className="text-green-400 font-mono text-xs mt-0.5">{i + 1}.</span>
            <span>{step}</span>
          </div>
        ))}
      </div>

      <ProTip title="Census tract check">
        Use the Department of Energy&apos;s Alternative Fuels Station Locator tool to see if your address qualifies. The census tract requirement tripped up a lot of people in 2024 and 2025, so verify before counting on the credit.
      </ProTip>

      <SectionTitle>Recommended chargers for home installation</SectionTitle>
      <Prose>
        After researching dozens of chargers and reading thousands of owner reviews, these three stand out for home installation. They cover a range of budgets and all work with every EV sold in the US (J1772 connector, which Tesla adapts to with the included adapter).
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
          <p className="text-sm text-zinc-400">48A, NEMA 14-50 plug or hardwired, 25ft cable, WiFi and app control. The best balance of power, features, and price. Plug-in version means easier install (just a 14-50 outlet). $299.</p>
        </a>

        <a
          href="https://www.amazon.com/dp/B09NZM3GCM?tag=evchargerpick-20"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 hover:border-green-500/30 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-zinc-200">ChargePoint Home Flex</h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500" />
          </div>
          <p className="text-sm text-zinc-400">16-50A adjustable, hardwired or NEMA 14-50, 23ft cable, WiFi, works with ChargePoint app and Alexa. The premium pick with the best software. $699.</p>
        </a>

        <a
          href="https://www.amazon.com/dp/B0C73X95MR?tag=evchargerpick-20"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 hover:border-green-500/30 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-zinc-200">Emporia EV Charger</h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500" />
          </div>
          <p className="text-sm text-zinc-400">48A, NEMA 14-50, 24ft cable, built-in energy monitoring and load management. The budget-friendly smart option. Load management can save you from a panel upgrade. $199.</p>
        </a>
      </div>

      <SubSection>Charger comparison table</SubSection>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#2a2a2a]">
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Charger</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Price</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Amperage</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Install complexity</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Link</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Lectron V-Box 48A</td>
              <td className="py-3 px-4">$299</td>
              <td className="py-3 px-4">48A</td>
              <td className="py-3 px-4"><span className="text-green-400">Easy (plug-in)</span></td>
              <td className="py-3 px-4">
                <a href="https://www.amazon.com/dp/B09V2Z5SFZ?tag=evchargerpick-20" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  Amazon <ArrowUpRight className="inline h-3 w-3" />
                </a>
              </td>
            </tr>
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">ChargePoint Home Flex</td>
              <td className="py-3 px-4">$699</td>
              <td className="py-3 px-4">16-50A</td>
              <td className="py-3 px-4"><span className="text-amber-400">Moderate (hardwire option)</span></td>
              <td className="py-3 px-4">
                <a href="https://www.amazon.com/dp/B09NZM3GCM?tag=evchargerpick-20" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  Amazon <ArrowUpRight className="inline h-3 w-3" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4">Emporia EV Charger</td>
              <td className="py-3 px-4">$199</td>
              <td className="py-3 px-4">48A</td>
              <td className="py-3 px-4"><span className="text-green-400">Easy (plug-in)</span></td>
              <td className="py-3 px-4">
                <a href="https://www.amazon.com/dp/B0C73X95MR?tag=evchargerpick-20" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  Amazon <ArrowUpRight className="inline h-3 w-3" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <SectionTitle>Real-world installation cost examples</SectionTitle>
      <Prose>
        Abstract cost ranges are helpful, but here are four common scenarios with realistic total costs to help you estimate your own situation.
      </Prose>

      <div className="my-6 space-y-4">
        {[
          { scenario: "Best case: panel near garage, existing 240V outlet", charger: "$199 (Emporia)", electrical: "$0", permit: "$0", total: "$199", note: "If you already have a NEMA 14-50 outlet in your garage (common if you had a welder or RV), you just plug in." },
          { scenario: "Typical: panel in garage, new 240V circuit needed", charger: "$299 (Lectron)", electrical: "$300-$500", permit: "$75", total: "$674-$874", note: "Short conduit run, no panel upgrade. This is what most homeowners pay." },
          { scenario: "Moderate: panel inside house, charger in detached garage", charger: "$299 (Lectron)", electrical: "$600-$900", permit: "$100", total: "$999-$1,299", note: "Longer conduit run (40-60 feet) and possibly a small trench for underground conduit." },
          { scenario: "Expensive: old home, panel upgrade needed", charger: "$699 (ChargePoint)", electrical: "$2,000-$3,500", permit: "$150", total: "$2,849-$4,349", note: "Homes with 100A panels often need a full upgrade. This is where the 30% tax credit helps most." },
        ].map(({ scenario, charger, electrical, permit, total, note }, i) => (
          <div key={i} className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
            <h4 className="font-semibold text-zinc-200 text-sm mb-2">{scenario}</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-zinc-400 mb-3">
              <span>Charger:</span><span>{charger}</span>
              <span>Electrical work:</span><span>{electrical}</span>
              <span>Permit:</span><span>{permit}</span>
              <span className="font-medium text-zinc-300">Total:</span><span className="font-medium text-zinc-300">{total}</span>
            </div>
            <p className="text-xs text-zinc-500">{note}</p>
          </div>
        ))}
      </div>

      <SectionTitle>How to save on installation</SectionTitle>
      <div className="my-4 space-y-3">
        {[
          "Get at least 3 quotes from licensed electricians. Prices vary wildly even in the same city.",
          "Choose a plug-in charger (NEMA 14-50) over hardwired. A 14-50 outlet install costs less than a hardwired connection and lets you take the charger if you move.",
          "Pick a charger location close to your electrical panel. Every foot of conduit adds $5-$15 to your install cost.",
          "Claim the 30% federal tax credit (Form 8911). On a $1,000 install, that saves you $300.",
          "Check your utility company for EV charger rebates. Many offer $200-$500 toward purchase or installation.",
          "If your panel is near capacity, consider an Emporia charger with load management instead of a $2,000+ panel upgrade.",
          "Bundle your charger install with other electrical work (panel upgrade, outdoor outlets) to save on the service call fee.",
        ].map((tip, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-zinc-400">
            <span className="text-green-400 font-mono text-xs mt-0.5">{i + 1}.</span>
            <span>{tip}</span>
          </div>
        ))}
      </div>

      <SectionTitle>FAQ</SectionTitle>

      <div className="space-y-6 my-6">
        {[
          {
            q: "How much does it cost to install a Level 2 EV charger at home?",
            a: "The total cost ranges from $350 to $1,900 for most homes. That includes the charger ($150-$900) and electrical work ($200-$1,000). If you need a panel upgrade, add $1,500-$3,000. The federal 30% tax credit (up to $1,000) reduces your out-of-pocket cost.",
          },
          {
            q: "Can I install an EV charger myself?",
            a: "You can mount the charger unit yourself and plug it into an existing 240V outlet. But installing a new 240V circuit requires a licensed electrician in most jurisdictions. DIY 240V wiring is dangerous, usually requires a permit, and will void most charger warranties.",
          },
          {
            q: "How long does installation take?",
            a: "A straightforward install (panel in garage, short conduit run) takes 2-3 hours. A complex install (long conduit run, panel upgrade, trenching to detached garage) can take a full day or require two visits.",
          },
          {
            q: "Do I need a permit to install an EV charger?",
            a: "Most cities require an electrical permit for a new 240V circuit. Permit costs range from $50-$200. Your electrician typically handles the permitting process. Some rural areas and a few states have exemptions for EV charger installations.",
          },
          {
            q: "Is a hardwired or plug-in charger better for home installation?",
            a: "Plug-in (NEMA 14-50) is better for most homeowners. It costs less to install, you can unplug and take it if you move, and it charges just as fast. Hardwired is required for chargers above 50A and can look cleaner on the wall, but the installation is more involved.",
          },
        ].map(({ q, a }, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold text-zinc-200 mb-2">{q}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does it cost to install a Level 2 EV charger at home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The total cost ranges from $350 to $1,900 for most homes. That includes the charger ($150-$900) and electrical work ($200-$1,000). If you need a panel upgrade, add $1,500-$3,000. The federal 30% tax credit (up to $1,000) reduces your out-of-pocket cost.",
                },
              },
              {
                "@type": "Question",
                name: "Can I install an EV charger myself?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can mount the charger unit yourself and plug it into an existing 240V outlet. But installing a new 240V circuit requires a licensed electrician in most jurisdictions. DIY 240V wiring is dangerous, usually requires a permit, and will void most charger warranties.",
                },
              },
              {
                "@type": "Question",
                name: "How long does installation take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A straightforward install (panel in garage, short conduit run) takes 2-3 hours. A complex install (long conduit run, panel upgrade, trenching to detached garage) can take a full day or require two visits.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a permit to install an EV charger?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most cities require an electrical permit for a new 240V circuit. Permit costs range from $50-$200. Your electrician typically handles the permitting process. Some rural areas and a few states have exemptions for EV charger installations.",
                },
              },
              {
                "@type": "Question",
                name: "Is a hardwired or plug-in charger better for home installation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Plug-in (NEMA 14-50) is better for most homeowners. It costs less to install, you can unplug and take it if you move, and it charges just as fast. Hardwired is required for chargers above 50A and can look cleaner on the wall, but the installation is more involved.",
                },
              },
            ],
          }),
        }}
      />

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
          <Link href="/guides/apartment-ev-charging" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
            <ArrowRight className="h-4 w-4" />
            How to charge an EV at an apartment
          </Link>
          <Link href="/guides/best-ev-charger-for-renters" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
            <ArrowRight className="h-4 w-4" />
            Best EV charger for renters and apartments
          </Link>
          <Link href="/calculator" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
            <ArrowRight className="h-4 w-4" />
            EV charging time calculator
          </Link>
          <Link href="/compare/emporia-vs-lectron" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
            <ArrowRight className="h-4 w-4" />
            Emporia vs Lectron comparison
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
