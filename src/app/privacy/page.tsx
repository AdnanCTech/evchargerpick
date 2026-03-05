import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EVChargerPick",
  description: "Privacy policy for EVChargerPick.com — affiliate disclosures, Google Analytics, Google AdSense, and cookie policies.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-zinc-300">
      <h1 className="mb-8 text-3xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-4 text-sm text-zinc-500">Last updated: March 5, 2026</p>

      <section className="space-y-8 text-sm leading-relaxed">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Overview</h2>
          <p>EVChargerPick.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and share information when you visit our website. By using this site, you agree to the practices described below.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Information We Collect</h2>
          <p className="mb-2">We do not require account creation or directly collect personal information such as your name, email, or phone number unless you voluntarily contact us. However, certain information may be collected automatically through third-party services:</p>
          <ul className="ml-4 list-disc space-y-1 text-zinc-400">
            <li>IP address and approximate geographic location</li>
            <li>Browser type, operating system, and device information</li>
            <li>Pages visited, time spent on pages, and referral sources</li>
            <li>Clicks on affiliate links and advertisements</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Google Analytics</h2>
          <p className="mb-2">We use Google Analytics, a web analytics service provided by Google LLC, to understand how visitors interact with our website. Google Analytics uses cookies and similar technologies to collect and analyze traffic data.</p>
          <p className="mb-2">Information collected by Google Analytics includes your IP address (which may be anonymized), browser type, referring pages, pages visited, and time spent on each page. This data is aggregated and used to improve our content and user experience.</p>
          <p>Google&apos;s use of this data is governed by the <a href="https://policies.google.com/privacy" className="text-emerald-400 underline hover:text-emerald-300" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-emerald-400 underline hover:text-emerald-300" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Google AdSense</h2>
          <p className="mb-2">We use Google AdSense to display advertisements on our website. Google AdSense uses cookies and web beacons to serve ads based on your prior visits to this and other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your browsing history.</p>
          <p className="mb-2">You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-emerald-400 underline hover:text-emerald-300" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. Alternatively, you may opt out of third-party vendor cookies by visiting the <a href="https://optout.networkadvertising.org/" className="text-emerald-400 underline hover:text-emerald-300" target="_blank" rel="noopener noreferrer">Network Advertising Initiative opt-out page</a>.</p>
          <p>For more information on how Google uses data from partner sites, see <a href="https://policies.google.com/technologies/partner-sites" className="text-emerald-400 underline hover:text-emerald-300" target="_blank" rel="noopener noreferrer">How Google uses information from sites that use our services</a>.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Affiliate Disclosure</h2>
          <p className="mb-2">EVChargerPick.com is a participant in affiliate advertising programs, including but not limited to:</p>
          <ul className="ml-4 list-disc space-y-1 text-zinc-400">
            <li><strong className="text-zinc-300">Amazon Associates Program</strong> — As an Amazon Associate, we earn from qualifying purchases. Amazon may use cookies with a typical 24-hour attribution window.</li>
            <li><strong className="text-zinc-300">Lectron (via Awin)</strong> — We may earn commissions on sales referred through our links to Lectron products. Awin uses cookies with up to a 30-day attribution window.</li>
            <li><strong className="text-zinc-300">Autel Energy</strong> — We may earn commissions on sales referred through our links to Autel Energy products.</li>
            <li><strong className="text-zinc-300">Other affiliate partners</strong> — We may participate in additional affiliate programs. Each partner&apos;s cookie and tracking policies are governed by their respective privacy policies.</li>
          </ul>
          <p className="mt-2">When you click an affiliate link on our site and make a purchase, we may receive a commission at no additional cost to you. Affiliate relationships do not influence our editorial content or product recommendations. We recommend products based on research, specifications, and user feedback.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Cookies</h2>
          <p className="mb-2">Cookies are small text files stored on your device when you visit a website. We and our third-party partners use cookies for the following purposes:</p>
          <ul className="ml-4 list-disc space-y-1 text-zinc-400">
            <li><strong className="text-zinc-300">Essential cookies:</strong> Required for basic site functionality.</li>
            <li><strong className="text-zinc-300">Analytics cookies:</strong> Used by Google Analytics to measure site traffic and usage patterns.</li>
            <li><strong className="text-zinc-300">Advertising cookies:</strong> Used by Google AdSense and advertising partners to serve relevant ads.</li>
            <li><strong className="text-zinc-300">Affiliate cookies:</strong> Used by affiliate partners (Amazon, Awin, etc.) to track referrals and attribute sales.</li>
          </ul>
          <p className="mt-2">You can control cookies through your browser settings. Disabling cookies may affect site functionality and the ability to track affiliate referrals.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Data Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. Information may be shared with third-party service providers (Google, affiliate networks) solely for the purposes described in this policy. We may also disclose information if required by law or to protect our rights.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Children&apos;s Privacy</h2>
          <p>Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to remove that information.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Your Rights</h2>
          <p className="mb-2">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="ml-4 list-disc space-y-1 text-zinc-400">
            <li>Access, correct, or delete your personal data</li>
            <li>Opt out of personalized advertising</li>
            <li>Request information about data we hold about you</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
          <p className="mt-2">For California residents: Under the CCPA, you have additional rights including the right to know what personal information is collected and the right to request deletion. We do not sell personal information as defined by the CCPA.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of the site after changes constitutes acceptance of the updated policy.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Contact Us</h2>
          <p>For questions about this Privacy Policy, contact us at <a href="mailto:privacy@evchargerpick.com" className="text-emerald-400 underline hover:text-emerald-300">privacy@evchargerpick.com</a>.</p>
        </div>
      </section>
    </main>
  );
}
