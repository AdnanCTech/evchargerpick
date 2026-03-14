import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Best EV Charger for Renters and Apartments (2026)",
  description:
    "The best portable EV chargers for renters who can't install permanent equipment. Level 1 and Level 2 options, how to ask your landlord, and public charging strategies for apartment dwellers.",
  alternates: { canonical: "https://www.evchargerpick.com/guides/best-ev-charger-for-renters" },
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

export default function BestEvChargerForRentersGuide() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/guides/best-ev-charger-for-renters" className="text-zinc-300">Best EV Charger for Renters</Link>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
        Best EV Charger for Renters and Apartments in 2026
      </h1>
      <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
        You rent. You drive electric. You can&apos;t bolt a charger to a wall you don&apos;t own. Here are the portable chargers, outlet adapters, and charging strategies that actually work for renters, tested and ranked by people who have been in your exact situation.
      </p>

      {/* Quick answer box */}
      <div className="mt-8 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
        <h2 className="text-base font-semibold text-zinc-200 mb-3">Quick answer</h2>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
            <span><strong className="text-zinc-200">Best overall:</strong> Lectron Portable Level 2 ($199). Plugs into a NEMA 14-50 outlet, charges at 32A, and packs up when you move.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
            <span><strong className="text-zinc-200">Best budget:</strong> AmazingE Portable ($89). Basic Level 1 charger that works with any standard 120V outlet. No landlord permission needed.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
            <span><strong className="text-zinc-200">Best if no outlet access:</strong> Use public charging. The PlugShare and ChargePoint apps show every charger near you, including free ones at grocery stores and malls.</span>
          </li>
        </ul>
      </div>

      <SectionTitle>Why renters face unique charging challenges</SectionTitle>
      <Prose>
        Owning an EV as a renter is completely doable, but it comes with constraints that homeowners never think about. Understanding these upfront helps you pick the right charger and avoid wasting money.
      </Prose>

      <SubSection>No access to the electrical panel</SubSection>
      <Prose>
        In most rental situations, you cannot install a new 240V circuit. The electrical panel belongs to your landlord or the building, and modifying it requires their permission plus a licensed electrician. Even if your landlord agrees, you risk paying $500+ for electrical work in a place you might leave in a year.
      </Prose>
      <Prose>
        This rules out hardwired Level 2 chargers. Your options are portable chargers that plug into existing outlets, or chargers that your landlord installs for the building.
      </Prose>

      <SubSection>Landlord permission and security deposits</SubSection>
      <Prose>
        Drilling holes, running cables, or making any permanent modification to your rental can violate your lease. Even something as simple as mounting a cable organizer on the garage wall might trigger a security deposit deduction. The safest approach: portable equipment that leaves zero trace when you move out.
      </Prose>

      <SubSection>Shared parking and outlet access</SubSection>
      <Prose>
        Many apartment parking spots don&apos;t have a nearby outlet. If you do have access to a shared outlet in the garage, you need your landlord&apos;s OK to use it for charging (electricity costs money), and you need a way to secure your charger from theft.
      </Prose>
      <Prose>
        If you have a dedicated garage or carport with an outlet, you are in the best position. If you park in an open lot with no outlets, portable chargers won&apos;t help and you will need to rely on public charging or workplace charging.
      </Prose>

      <SectionTitle>Understanding your outlet options</SectionTitle>

      <SubSection>NEMA 5-15: the standard household outlet</SubSection>
      <Prose>
        Every apartment has these. They deliver 120V at 12A continuous (1.4kW), which gives you 3-5 miles of range per hour. That means 30-50 miles overnight. If you drive under 40 miles a day and can charge for 10-12 hours overnight, a Level 1 charger on a standard outlet works fine.
      </Prose>

      <SubSection>NEMA 14-50: the 240V outlet</SubSection>
      <Prose>
        This is the outlet used by RVs, welders, and some electric dryers. It delivers 240V at up to 50A, which supports Level 2 charging at 25-40 miles of range per hour. Some apartment garages have these, especially in complexes that were built with RV parking or in converted commercial spaces.
      </Prose>
      <Prose>
        If you spot one near your parking spot, you have hit the jackpot. A portable Level 2 charger that plugs into a NEMA 14-50 outlet gives you homeowner-speed charging with zero installation.
      </Prose>

      <SubSection>NEMA 14-30: the dryer outlet</SubSection>
      <Prose>
        If your apartment has an in-unit dryer or a shared laundry room nearby, you might be able to use the dryer outlet for charging when the dryer is not running. You will need a portable EVSE with a NEMA 14-30 adapter. This gives you about 24A (5.7kW), adding roughly 20 miles of range per hour.
      </Prose>

      <Warning>
        Never charge from a dryer outlet while the dryer is running. The circuit is not rated for both loads simultaneously. Also, confirm with your landlord before using shared laundry outlets for EV charging.
      </Warning>

      <SectionTitle>Best portable chargers for renters</SectionTitle>
      <Prose>
        These chargers require zero installation. They plug into existing outlets and pack up when you move. All three have been verified to work with every J1772-compatible EV (which includes Tesla via the included NACS adapter).
      </Prose>

      <div className="my-6 space-y-4">
        <a
          href="https://www.amazon.com/dp/B09V2Z5SFZ?tag=evchargerpick-20"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 hover:border-green-500/30 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-zinc-200">Lectron Portable Level 2 EVSE</h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500" />
          </div>
          <p className="text-sm text-zinc-400 mb-3">NEMA 14-50 plug, 32A/7.7kW, 21ft cable. The best portable Level 2 charger for renters with 240V outlet access. Compact enough to store in your trunk. $199.</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400">Best overall</span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">Level 2</span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">Portable</span>
          </div>
        </a>

        <a
          href="https://www.amazon.com/dp/B09LCQJHZQ?tag=evchargerpick-20"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 hover:border-green-500/30 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-zinc-200">Blink HQ 150</h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500" />
          </div>
          <p className="text-sm text-zinc-400 mb-3">NEMA 5-15 plug (standard outlet), 12A/1.4kW, 21ft cable. Reliable Level 1 charger with a longer cable than most included chargers. Good for apartments where you need extra reach. $179.</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">Level 1</span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">No permission needed</span>
          </div>
        </a>

        <a
          href="https://www.amazon.com/dp/B07YB1FLKZ?tag=evchargerpick-20"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 hover:border-green-500/30 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-zinc-200">AmazingE Portable EVSE</h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500" />
          </div>
          <p className="text-sm text-zinc-400 mb-3">NEMA 5-15 plug, 12A/1.4kW, 25ft cable. The most affordable portable EVSE on the market. No frills, no app, just plug in and charge. Perfect as a backup or budget primary charger. $89.</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400">Best budget</span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">Level 1</span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">Ultra-portable</span>
          </div>
        </a>
      </div>

      <SubSection>Portable charger comparison</SubSection>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#2a2a2a]">
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Charger</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Price</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Level</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Miles/hour</th>
              <th className="text-left py-3 px-4 text-zinc-300 font-medium">Link</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Lectron Portable L2</td>
              <td className="py-3 px-4">$199</td>
              <td className="py-3 px-4">Level 2 (240V)</td>
              <td className="py-3 px-4">25-30</td>
              <td className="py-3 px-4">
                <a href="https://www.amazon.com/dp/B09V2Z5SFZ?tag=evchargerpick-20" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  Amazon <ArrowUpRight className="inline h-3 w-3" />
                </a>
              </td>
            </tr>
            <tr className="border-b border-[#2a2a2a]/50">
              <td className="py-3 px-4">Blink HQ 150</td>
              <td className="py-3 px-4">$179</td>
              <td className="py-3 px-4">Level 1 (120V)</td>
              <td className="py-3 px-4">3-5</td>
              <td className="py-3 px-4">
                <a href="https://www.amazon.com/dp/B09LCQJHZQ?tag=evchargerpick-20" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  Amazon <ArrowUpRight className="inline h-3 w-3" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4">AmazingE Portable</td>
              <td className="py-3 px-4">$89</td>
              <td className="py-3 px-4">Level 1 (120V)</td>
              <td className="py-3 px-4">3-5</td>
              <td className="py-3 px-4">
                <a href="https://www.amazon.com/dp/B07YB1FLKZ?tag=evchargerpick-20" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  Amazon <ArrowUpRight className="inline h-3 w-3" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <SectionTitle>How to ask your landlord about EV charging</SectionTitle>
      <Prose>
        If you want to use an existing outlet or ask about installing one, approach it the right way. Landlords respond better to solutions than problems. Here is a template you can adapt:
      </Prose>

      <div className="my-6 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
        <h4 className="font-semibold text-zinc-200 text-sm mb-3">Sample landlord request</h4>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-3 italic">
          <p>&quot;Hi [Landlord name],&quot;</p>
          <p>&quot;I recently got an electric vehicle and wanted to ask about charging options at the property. I have a portable charger that plugs into a standard 120V outlet, similar to plugging in a space heater. It draws about 1.4kW, which adds roughly $15-20/month to the electric bill.&quot;</p>
          <p>&quot;Would it be possible to use the outlet in [garage/carport/parking area] for overnight charging? I&apos;m happy to cover the electricity cost, either as an addition to rent or through a metered arrangement.&quot;</p>
          <p>&quot;No modifications to the property are needed. The charger plugs in and unplugs just like any other appliance.&quot;</p>
          <p>&quot;If you&apos;re open to it, adding EV charging capability is also a selling point for future tenants as EV adoption continues to grow.&quot;</p>
          <p>&quot;Thanks, [Your name]&quot;</p>
        </div>
      </div>

      <div className="my-4 space-y-3">
        {[
          "Lead with the fact that no permanent modifications are needed",
          "Offer to pay for electricity costs upfront",
          "Mention the low power draw (comparable to a space heater or hair dryer)",
          "Frame EV charging capability as a property value increase",
          "If you want a 240V outlet, offer to pay for installation and get a quote from a licensed electrician first",
          "Mention right-to-charge laws if your state has them (California, Colorado, Florida, and 10 other states)",
        ].map((tip, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-zinc-400">
            <span className="text-green-400 font-mono text-xs mt-0.5">{i + 1}.</span>
            <span>{tip}</span>
          </div>
        ))}
      </div>

      <ProTip title="Right-to-charge states">
        13 states (California, Colorado, Connecticut, Delaware, Florida, Hawaii, Illinois, Maryland, New Jersey, New York, Oregon, Virginia, Washington) have laws preventing landlords and HOAs from unreasonably blocking EV charger installation. If you are in one of these states, your landlord may be legally required to allow it, especially if you pay for the installation yourself.
      </ProTip>

      <SectionTitle>Public charging as your backup plan</SectionTitle>
      <Prose>
        Even with a portable charger, public charging will likely be part of your routine as a renter. The good news: the public charging network has grown significantly, and there are free chargers at more locations than you might expect.
      </Prose>

      <SubSection>Apps every renter should have</SubSection>
      <div className="my-6 space-y-4">
        {[
          { name: "PlugShare", desc: "The largest database of charging stations. Shows every charger type, real-time availability, user reviews, and photos. Filter by free chargers, Level 2, DC fast, and specific networks. This is the one app you absolutely need." },
          { name: "ChargePoint", desc: "ChargePoint operates the largest Level 2 network in the US. Many are at grocery stores, malls, and office buildings. Some are free, most are $0.20-0.35/kWh. The app shows real-time availability and lets you start/stop sessions." },
          { name: "A Better Route Planner (ABRP)", desc: "Plans road trips with charging stops optimized for your specific car and battery level. Less relevant for daily use, but essential for longer drives where you need to chain multiple charging stops." },
        ].map(({ name, desc }, i) => (
          <div key={i} className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
            <h4 className="font-semibold text-zinc-200 text-sm mb-2">{name}</h4>
            <p className="text-sm text-zinc-400">{desc}</p>
          </div>
        ))}
      </div>

      <SubSection>Where to find free charging</SubSection>
      <Prose>
        Many grocery stores, shopping malls, hotels, and municipal parking garages offer free Level 2 charging. Some employers provide free workplace charging as a benefit. Use PlugShare&apos;s &quot;free&quot; filter to find them near you. Free chargers are slower (Level 2, not DC fast), but if you are shopping or working for a few hours anyway, you get 20-40 miles of range at no cost.
      </Prose>

      <SubSection>DC fast charging for renters</SubSection>
      <Prose>
        DC fast chargers (like Tesla Superchargers, Electrify America, and EVgo) can add 100-200 miles in 20-30 minutes. At $0.30-0.50/kWh, this is the most expensive way to charge, but it is the fastest option when you have no home charging at all.
      </Prose>
      <Prose>
        Some renter EV owners use DC fast charging once a week as their primary method. It costs about $40-60/month for typical driving. That is more than home charging but still less than gasoline. The key is finding a DC fast charger near a place you already go (grocery store, gym, coffee shop) so charging does not feel like an errand.
      </Prose>

      <SectionTitle>Charging strategies that work for renters</SectionTitle>
      <div className="my-6 space-y-4">
        {[
          { strategy: "Overnight Level 1 at home", details: "If you have any outlet access, plug in your portable EVSE every night. 10 hours at Level 1 gives you 30-50 miles. For most commutes, this is enough.", best: "Daily commuters under 40 miles" },
          { strategy: "Workplace charging", details: "If your employer has Level 2 chargers, an 8-hour workday gives you a full charge. Ask your employer about adding chargers if they don't have them yet.", best: "Office workers with EV-friendly employers" },
          { strategy: "Weekly DC fast charge", details: "One 30-minute DC fast charge per week covers 150+ miles of driving. Schedule it alongside a regular errand.", best: "Renters with zero outlet access" },
          { strategy: "Free public Level 2", details: "Charge at free chargers while grocery shopping, at the mall, or at the library. Plan your errands around charger locations.", best: "Budget-conscious renters near free chargers" },
        ].map(({ strategy, details, best }, i) => (
          <div key={i} className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
            <h4 className="font-semibold text-zinc-200 text-sm mb-2">{strategy}</h4>
            <p className="text-sm text-zinc-400 mb-2">{details}</p>
            <p className="text-xs text-zinc-500">Best for: {best}</p>
          </div>
        ))}
      </div>

      <SectionTitle>FAQ</SectionTitle>

      <div className="space-y-6 my-6">
        {[
          {
            q: "Can I charge an EV if I rent an apartment?",
            a: "Yes. If you have access to any outlet (even a standard 120V), a portable Level 1 charger works with no installation or landlord permission. If you have no outlet access, public charging and workplace charging are viable alternatives. Millions of renters own EVs.",
          },
          {
            q: "Do I need my landlord's permission to charge from a standard outlet?",
            a: "Technically, using an existing outlet is no different from plugging in any other appliance. However, it's good practice to inform your landlord, especially about the ongoing electricity cost (~$15-20/month). If the outlet is in a shared area, you definitely need permission.",
          },
          {
            q: "What's the cheapest EV charger for a renter?",
            a: "The AmazingE Portable EVSE at $89 is the most affordable option. It plugs into a standard 120V outlet and adds 3-5 miles of range per hour. The charger that came with your EV (if included) is technically free and does the same thing.",
          },
          {
            q: "Can I take my EV charger when I move?",
            a: "All portable chargers (plug-in) come with you when you move. That's their main advantage over hardwired chargers. You unplug it, put it in your trunk, and plug it in at your next place. This is why portable chargers are ideal for renters.",
          },
          {
            q: "Is it worth buying an EV if I can only use public charging?",
            a: "It depends on your area. If you have DC fast chargers within 10 minutes of your home, it works. Budget $40-60/month for charging (still less than gas). If the nearest fast charger is 30+ minutes away, the inconvenience may outweigh the savings until your charging infrastructure improves.",
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
                name: "Can I charge an EV if I rent an apartment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. If you have access to any outlet (even a standard 120V), a portable Level 1 charger works with no installation or landlord permission. If you have no outlet access, public charging and workplace charging are viable alternatives. Millions of renters own EVs.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need my landlord's permission to charge from a standard outlet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Technically, using an existing outlet is no different from plugging in any other appliance. However, it's good practice to inform your landlord, especially about the ongoing electricity cost (~$15-20/month). If the outlet is in a shared area, you definitely need permission.",
                },
              },
              {
                "@type": "Question",
                name: "What's the cheapest EV charger for a renter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The AmazingE Portable EVSE at $89 is the most affordable option. It plugs into a standard 120V outlet and adds 3-5 miles of range per hour. The charger that came with your EV (if included) is technically free and does the same thing.",
                },
              },
              {
                "@type": "Question",
                name: "Can I take my EV charger when I move?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All portable chargers (plug-in) come with you when you move. That's their main advantage over hardwired chargers. You unplug it, put it in your trunk, and plug it in at your next place. This is why portable chargers are ideal for renters.",
                },
              },
              {
                "@type": "Question",
                name: "Is it worth buying an EV if I can only use public charging?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on your area. If you have DC fast chargers within 10 minutes of your home, it works. Budget $40-60/month for charging (still less than gas). If the nearest fast charger is 30+ minutes away, the inconvenience may outweigh the savings until your charging infrastructure improves.",
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
          <Link href="/guides/ev-charger-installation-cost" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
            <ArrowRight className="h-4 w-4" />
            EV charger installation cost guide
          </Link>
          <Link href="/best-ev-charger-for/hyundai-ioniq-5" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
            <ArrowRight className="h-4 w-4" />
            Best EV charger for Hyundai Ioniq 5
          </Link>
          <Link href="/best-ev-charger-for/nissan-ariya" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
            <ArrowRight className="h-4 w-4" />
            Best EV charger for Nissan Ariya
          </Link>
          <Link href="/calculator" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors">
            <ArrowRight className="h-4 w-4" />
            EV charging time calculator
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
