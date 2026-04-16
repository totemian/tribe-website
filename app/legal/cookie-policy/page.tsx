import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Cookie Policy | Tribe26",
  description: "Tribe26 Cookie Policy – how we use cookies and tracking technologies.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src="/logo-green.png" alt="Tribe26" width={100} height={34} className="h-8 w-auto object-contain" />
          </Link>
          <Link href="/" className="text-white/60 hover:text-[#CFFF5E] font-mono text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-[#CFFF5E] font-mono text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Cookie Policy</h1>
          <p className="text-white/50 font-mono text-sm">Last updated: April 16, 2026</p>
        </div>

        <div className="space-y-10 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help the site
              remember your preferences, understand how you use it, and deliver a more personalized experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Cookies</h2>
            <p className="mb-3">Tribe26 uses cookies for the following purposes:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="text-white font-medium">Essential cookies</span> — required for the platform to
                function (e.g., keeping you logged in, maintaining session state)
              </li>
              <li>
                <span className="text-white font-medium">Analytics cookies</span> — help us understand how visitors
                interact with our site so we can improve it (e.g., Vercel Analytics)
              </li>
              <li>
                <span className="text-white font-medium">Preference cookies</span> — remember your settings and
                choices to provide a consistent experience
              </li>
              <li>
                <span className="text-white font-medium">Marketing cookies</span> — used to deliver relevant
                content and measure the effectiveness of our campaigns (only with your consent)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Types of Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-2">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white py-2 pr-4 font-semibold">Cookie</th>
                    <th className="text-left text-white py-2 pr-4 font-semibold">Type</th>
                    <th className="text-left text-white py-2 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">session_id</td>
                    <td className="py-2 pr-4">Essential</td>
                    <td className="py-2">Maintains your login session</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">_vercel_analytics</td>
                    <td className="py-2 pr-4">Analytics</td>
                    <td className="py-2">Tracks page views and interactions</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">theme_pref</td>
                    <td className="py-2 pr-4">Preference</td>
                    <td className="py-2">Stores your display preferences</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Third-Party Cookies</h2>
            <p>
              Some cookies are set by third-party services we use, such as analytics providers. These third parties
              have their own privacy policies governing how they use the data collected. We do not control these
              cookies directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Managing Cookies</h2>
            <p className="mb-3">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>View cookies stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block cookies from specific or all websites</li>
              <li>Set preferences for certain types of cookies</li>
            </ul>
            <p className="mt-3">
              Note that disabling essential cookies may affect the functionality of the Tribe26 platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Consent</h2>
            <p>
              By continuing to use the Tribe26 platform, you consent to our use of cookies as described in this
              policy. You can withdraw consent at any time by adjusting your browser settings or contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically. Any changes will be posted on this page with an
              updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact Us</h2>
            <p>
              Questions about our use of cookies? Contact us at{" "}
              <a href="mailto:privacy@tribe26.com" className="text-[#CFFF5E] hover:underline">
                privacy@tribe26.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-6 font-mono text-xs text-white/40">
          <Link href="/legal/privacy-policy" className="hover:text-[#CFFF5E] transition-colors">Privacy Policy</Link>
          <Link href="/legal/terms-of-service" className="hover:text-[#CFFF5E] transition-colors">Terms of Service</Link>
          <Link href="/legal/cookie-policy" className="text-[#CFFF5E]">Cookie Policy</Link>
        </div>
      </main>
    </div>
  )
}
