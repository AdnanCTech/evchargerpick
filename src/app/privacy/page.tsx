import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EVChargerPick",
  description: "Privacy policy for EVChargerPick.com",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-zinc-300">
      <h1 className="mb-8 text-3xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-4 text-sm text-zinc-500">Last updated: March 5, 2026</p>
      
      <section className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">Information We Collect</h2>
          <p>EVChargerPick.com does not collect personal information directly. We use standard web analytics to understand how visitors use our site. We do not require account creation or collect emails unless you voluntarily contact us.</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">Affiliate Links</h2>
          <p>This site contains affiliate links to products on Amazon and other retailers. When you click these links and make a purchase, we may earn a commission at no additional cost to you. These affiliate partners may use cookies to track referrals.</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">Cookies</h2>
          <p>We use minimal cookies for site functionality and analytics. Third-party affiliate partners may set their own cookies when you click affiliate links.</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">Third-Party Services</h2>
          <p>We may use third-party services such as Google Analytics for website traffic analysis. These services have their own privacy policies governing data collection.</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">Contact</h2>
          <p>For privacy-related questions, contact us at privacy@evchargerpick.com.</p>
        </div>
      </section>
    </main>
  );
}
