import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Privacy Policy | Tribe26",
  description: "Tribe26 Privacy Policy – how we collect, use, and protect your data.",
}

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Privacy Policy</h1>
          <p className="text-white/50 font-mono text-sm">Last updated: April 16, 2026</p>
        </div>

        <div className="space-y-10 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p>
              When you use Tribe26, we collect information you provide directly — such as your name, email address,
              and business details when you register or contact us. We also collect usage data automatically,
              including device identifiers, IP addresses, and how you interact with our app and website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Operate and improve the Tribe26 platform</li>
              <li>Connect members with local businesses in the directory</li>
              <li>Send you updates, rewards notifications, and promotional content (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share data with trusted service providers who help us
              operate our platform (e.g., hosting, analytics), and with business partners only as necessary to
              deliver the services you request. We may also disclose information when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active or as needed to provide services.
              You may request deletion of your data at any time by contacting us at{" "}
              <a href="mailto:privacy@tribe26.com" className="text-[#CFFF5E] hover:underline">
                privacy@tribe26.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience. See our{" "}
              <Link href="/legal/cookie-policy" className="text-[#CFFF5E] hover:underline">
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, or delete your personal data,
              object to processing, or request data portability. To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@tribe26.com" className="text-[#CFFF5E] hover:underline">
                privacy@tribe26.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Security</h2>
            <p>
              We implement industry-standard security measures to protect your information. However, no method of
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by
              posting the new policy on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, reach out at{" "}
              <a href="mailto:privacy@tribe26.com" className="text-[#CFFF5E] hover:underline">
                privacy@tribe26.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-6 font-mono text-xs text-white/40">
          <Link href="/legal/privacy-policy" className="text-[#CFFF5E]">Privacy Policy</Link>
          <Link href="/legal/terms-of-service" className="hover:text-[#CFFF5E] transition-colors">Terms of Service</Link>
          <Link href="/legal/cookie-policy" className="hover:text-[#CFFF5E] transition-colors">Cookie Policy</Link>
        </div>
      </main>
    </div>
  )
}
