import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Terms of Service | Tribe26",
  description: "Tribe26 Terms of Service – the rules and guidelines for using our platform.",
}

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Terms of Service</h1>
          <p className="text-white/50 font-mono text-sm">Last updated: April 16, 2026</p>
        </div>

        <div className="space-y-10 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Tribe26 platform — including our website, mobile application, and related
              services — you agree to be bound by these Terms of Service. If you do not agree, please do not use
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
            <p>
              Tribe26 is a community platform that connects Vancouver residents with local businesses through a
              physical-to-digital ecosystem. Members earn rewards by engaging with partner businesses, and
              businesses gain visibility, reviews, and digital presence through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Eligibility</h2>
            <p>
              You must be at least 13 years old to use Tribe26. By using our services, you represent that you meet
              this requirement. Business accounts require the account holder to be at least 18 years old and
              authorized to act on behalf of the business.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. User Accounts</h2>
            <p className="mb-3">
              You are responsible for maintaining the confidentiality of your account credentials and for all
              activity that occurs under your account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Provide accurate and complete registration information</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Not share your account with others or create multiple accounts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Acceptable Use</h2>
            <p className="mb-3">You agree not to use Tribe26 to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Post false, misleading, or fraudulent content</li>
              <li>Harass, abuse, or harm other users or businesses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Scrape, crawl, or otherwise extract data from the platform without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Rewards Program</h2>
            <p>
              Tribe26 rewards are earned through eligible interactions with partner businesses. Rewards have no
              cash value unless explicitly stated, are non-transferable, and may expire. We reserve the right to
              modify or discontinue the rewards program at any time with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Business Partners</h2>
            <p>
              Businesses that join the Tribe26 ecosystem agree to honor the rewards and offers listed on the
              platform. Tribe26 is not responsible for the products, services, or conduct of partner businesses.
              Any disputes between members and businesses should be resolved directly between the parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Intellectual Property</h2>
            <p>
              All content on the Tribe26 platform — including logos, text, graphics, and software — is owned by
              Tribe26 or its licensors. You may not reproduce, distribute, or create derivative works without our
              express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Disclaimer of Warranties</h2>
            <p>
              Tribe26 is provided "as is" without warranties of any kind. We do not guarantee that the platform
              will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Tribe26 shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for violations of these Terms.
              You may also delete your account at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the platform after changes are posted
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Contact Us</h2>
            <p>
              Questions about these Terms? Contact us at{" "}
              <a href="mailto:legal@tribe26.com" className="text-[#CFFF5E] hover:underline">
                legal@tribe26.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-6 font-mono text-xs text-white/40">
          <Link href="/legal/privacy-policy" className="hover:text-[#CFFF5E] transition-colors">Privacy Policy</Link>
          <Link href="/legal/terms-of-service" className="text-[#CFFF5E]">Terms of Service</Link>
          <Link href="/legal/cookie-policy" className="hover:text-[#CFFF5E] transition-colors">Cookie Policy</Link>
        </div>
      </main>
    </div>
  )
}
