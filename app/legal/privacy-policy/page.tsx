"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicyPage() {
  const [lang, setLang] = useState<"en" | "fa">("en");

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="/log-green-tribre.png"
              alt="Tribe26"
              width={100}
              height={34}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 font-mono text-xs border border-white/20 rounded-full overflow-hidden">
              <button
                onClick={() => setLang("en")}
                className={`cursor-pointer px-3 py-1.5 transition-colors ${lang === "en" ? "bg-[#CFFF5E] text-black font-bold" : "text-white/50 hover:text-white"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("fa")}
                className={`cursor-pointer px-3 py-1.5 transition-colors ${lang === "fa" ? "bg-[#CFFF5E] text-black font-bold" : "text-white/50 hover:text-white"}`}
              >
                FA
              </button>
            </div>
            <Link
              href="/"
              className="text-white/60 hover:text-[#CFFF5E] font-mono text-sm transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main
        className={`max-w-4xl mx-auto px-6 py-16 ${lang === "fa" ? "text-right" : ""}`}
        dir={lang === "fa" ? "rtl" : "ltr"}
      >
        {lang === "en" ? <EnglishContent /> : <PersianContent />}

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-6 font-mono text-xs text-white/40">
          <Link href="/legal/privacy-policy" className="text-[#CFFF5E]">
            Privacy Policy
          </Link>
          <Link
            href="/legal/terms-of-service"
            className="hover:text-[#CFFF5E] transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/legal/cookie-policy"
            className="hover:text-[#CFFF5E] transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </main>
    </div>
  );
}

function EnglishContent() {
  return (
    <div>
      <div className="mb-10">
        <p className="text-[#CFFF5E] font-mono text-xs uppercase tracking-widest mb-3">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
          Privacy Policy
        </h1>
        <p className="text-white/50 font-mono text-sm">
          <strong className="text-white/70">Last Updated:</strong> May 6, 2026
        </p>
      </div>

      <div className="space-y-10 text-white/70 leading-relaxed">
        <p>
          This Privacy Policy (&#34;Policy&#34;) describes how{" "}
          <strong className="text-white">Totemian Brandboards Inc.</strong>{" "}
          (&#34;Totemian&#34;, &#34;we&#34;, &#34;us&#34;, or &#34;our&#34;), a
          corporation headquartered in British Columbia, Canada, and the
          operator of the <strong className="text-white">Tribe26</strong>{" "}
          platform (the &#34;Platform&#34;), including the website at
          tribe26.app, the related corporate website at totemian.com, and the
          Tribe26 mobile applications for iOS and Android (collectively, the
          &#34;Services&#34;), collects, uses, discloses, and safeguards
          information about you (&#34;you&#34; or &#34;User&#34;) when you
          access or use the Services.
        </p>
        <p>
          By creating an account, downloading the application, or otherwise
          using the Services, you acknowledge that you have read, understood,
          and agreed to the practices described in this Policy. If you do not
          agree with this Policy, please do not use the Services.
        </p>
        <p>
          This Policy is primarily designed to comply with Canadian federal and
          provincial privacy legislation, including the{" "}
          <strong className="text-white">
            Personal Information Protection and Electronic Documents Act
            (PIPEDA)
          </strong>{" "}
          and the{" "}
          <strong className="text-white">
            British Columbia Personal Information Protection Act (BC PIPA)
          </strong>
          . Where you reside outside Canada, additional rights and protections
          may apply, as described in Section 12 below.
        </p>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            1. Data Controller and Contact
          </h2>
          <p className="mb-4">
            The organization responsible for the personal information processed
            under this Policy is:
          </p>
          <address className="not-italic space-y-1 text-white/70 mb-4">
            <p>
              <strong className="text-white">Totemian Brandboards Inc.</strong>
            </p>
            <p>1771 Robson Street, Suite 1132</p>
            <p>Vancouver, BC V6G 3B7</p>
            <p>Canada</p>
          </address>
          <p className="mb-1">
            Email:{" "}
            <a
              href="mailto:privacy@tribe26.app"
              className="text-[#CFFF5E] hover:underline"
            >
              privacy@tribe26.app
            </a>
          </p>
          <p className="mb-1">
            Platform website:{" "}
            <a
              href="https://tribe26.app"
              className="text-[#CFFF5E] hover:underline"
            >
              https://tribe26.app
            </a>
          </p>
          <p className="mb-4">
            Corporate website:{" "}
            <a
              href="https://totemian.com"
              className="text-[#CFFF5E] hover:underline"
            >
              https://totemian.com
            </a>
          </p>
          <p>
            Our Privacy Officer can be reached at the email address above for
            any privacy-related question, request, or complaint.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            2. Scope of This Policy
          </h2>
          <p className="mb-4">
            This Policy applies to personal information we collect through the
            Services and in the course of our business operations. It does not
            apply to:
          </p>
          <ul className="list-disc list-outside space-y-2 pl-5">
            <li>
              Third-party websites, applications, or services that may be linked
              to or integrated with our Services;
            </li>
            <li>
              Information collected by our partners, including local businesses
              (&#34;Nodes&#34;), brand partners (&#34;Brandboards&#34;), or
              independent contributors, except to the extent we jointly process
              such information; or
            </li>
            <li>
              Information that has been anonymized or aggregated such that it
              can no longer reasonably be associated with an identified or
              identifiable individual.
            </li>
          </ul>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            3. Information We Collect
          </h2>

          <h3 className="text-base font-semibold text-white/90 mb-3">
            3.1 Information You Provide to Us
          </h3>
          <ul className="list-disc list-outside space-y-2 pl-5 mb-6">
            <li>
              <strong className="text-white/90">Account Information:</strong>{" "}
              name, email address, phone number, password (in hashed form), date
              of birth, profile photo, and city of residence.
            </li>
            <li>
              <strong className="text-white/90">
                Profile and Preferences:
              </strong>{" "}
              display name, biography, language preference, interests, and any
              other information you choose to add to your profile.
            </li>
            <li>
              <strong className="text-white/90">Identity Verification:</strong>{" "}
              where required (for example, to redeem certain rewards or to act
              as a Contributor or Node), we may collect government-issued
              identification, business registration documents, or tax-related
              information.
            </li>
            <li>
              <strong className="text-white/90">Activity Records:</strong>{" "}
              records of points, stamps, tokens, rewards, and redemptions earned
              or used on the Platform.
            </li>
            <li>
              <strong className="text-white/90">User Content:</strong> photos,
              reviews, ratings, comments, messages, and other content you post,
              send, or share through the Services.
            </li>
            <li>
              <strong className="text-white/90">Communications:</strong> records
              of correspondence with our support team, feedback, survey
              responses, and other communications.
            </li>
          </ul>

          <h3 className="text-base font-semibold text-white/90 mb-3">
            3.2 Information Collected Automatically
          </h3>
          <ul className="list-disc list-outside space-y-2 pl-5 mb-6">
            <li>
              <strong className="text-white/90">Device Information:</strong>{" "}
              device model, operating system and version, unique device
              identifiers, mobile network information, language settings, and
              time zone.
            </li>
            <li>
              <strong className="text-white/90">Log and Usage Data:</strong> IP
              address, access times, pages and screens viewed, features used,
              referring/exit pages, crash reports, and diagnostic data.
            </li>
            <li>
              <strong className="text-white/90">Location Information:</strong>{" "}
              with your permission, we collect precise geolocation data (GPS) to
              enable proof-of-presence, check-ins at Nodes, and location-based
              rewards. You may also choose to share approximate location only,
              or to disable location access entirely through your device
              settings. Disabling location may limit core functionality of the
              Services.
            </li>
            <li>
              <strong className="text-white/90">
                Cookies and Similar Technologies:
              </strong>{" "}
              see Section 14 below.
            </li>
            <li>
              <strong className="text-white/90">
                Camera, Photo Library, and Microphone:
              </strong>{" "}
              with your permission, to scan QR codes, upload images, or
              participate in features that require media capture.
            </li>
            <li>
              <strong className="text-white/90">
                Bluetooth and Nearby-Device Sensors:
              </strong>{" "}
              with your permission, to enable proximity-based features at
              participating venues.
            </li>
            <li>
              <strong className="text-white/90">
                Push Notification Tokens:
              </strong>{" "}
              to deliver notifications relevant to your account and activities.
            </li>
          </ul>

          <h3 className="text-base font-semibold text-white/90 mb-3">
            3.3 Information We Receive from Third Parties
          </h3>
          <ul className="list-disc list-outside space-y-2 pl-5">
            <li>
              <strong className="text-white/90">
                Authentication Providers:
              </strong>{" "}
              if you sign in using a third-party service (such as Apple, Google,
              or a similar identity provider), we receive basic profile
              information from that provider in accordance with your privacy
              settings on that service.
            </li>
            <li>
              <strong className="text-white/90">Nodes and Partners:</strong>{" "}
              participating businesses and partners may share information about
              your visits or participation in their programs as it relates to
              your use of the Services.
            </li>
            <li>
              <strong className="text-white/90">Analytics Partners:</strong>{" "}
              aggregated or pseudonymized information about how Users interact
              with the Services.
            </li>
            <li>
              <strong className="text-white/90">
                Public and Commercial Sources:
              </strong>{" "}
              to validate business registrations, detect fraud, and comply with
              legal obligations.
            </li>
          </ul>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            4. How We Use Your Information
          </h2>
          <p className="mb-4">
            We use the information described above for the following purposes:
          </p>
          <ol className="list-decimal list-outside space-y-3 pl-5 mb-4">
            <li>
              <strong className="text-white/90">
                To Provide and Operate the Services
              </strong>{" "}
              including creating and maintaining your account, recording and
              recognizing rewards and redemptions, enabling check-ins and
              proof-of-presence, displaying personalized content, and
              facilitating communications between Members, Contributors, and
              Nodes.
            </li>
            <li>
              <strong className="text-white/90">
                To Personalize Your Experience
              </strong>{" "}
              recommending Nodes, missions, and rewards relevant to your
              location, preferences, and prior activity.
            </li>
            <li>
              <strong className="text-white/90">To Communicate With You</strong>{" "}
              sending transactional messages, service announcements, security
              alerts, and, with your consent where required, marketing
              communications. Marketing communications are sent in accordance
              with{" "}
              <strong className="text-white">
                Canada&#39;s Anti-Spam Legislation (CASL)
              </strong>
              .
            </li>
            <li>
              <strong className="text-white/90">
                To Improve and Develop the Services
              </strong>{" "}
              performing analytics, debugging, A/B testing, research, and
              product development.
            </li>
            <li>
              <strong className="text-white/90">
                To Ensure Safety and Security
              </strong>{" "}
              detecting and preventing fraud, abuse, unauthorized access, and
              violations of our Terms of Service, and protecting the rights,
              property, and safety of our Users, partners, and the public.
            </li>
            <li>
              <strong className="text-white/90">
                To Comply With Legal Obligations
              </strong>{" "}
              including tax, accounting, and other regulatory requirements
              applicable to us or to our partners.
            </li>
            <li>
              <strong className="text-white/90">
                For Aggregate and De-identified Analysis
              </strong>{" "}
              producing statistical insights that do not identify any individual
              User.
            </li>
          </ol>
          <p>
            We collect, use, and disclose personal information only for purposes
            that a reasonable person would consider appropriate in the
            circumstances, in accordance with PIPEDA&#39;s accountability
            principles.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            5. Nature of Tribe26 Rewards, Points, and Tokens
          </h2>
          <p className="mb-4">
            The Tribe26 platform operates a{" "}
            <strong className="text-white">
              closed-loop loyalty and engagement program
            </strong>{" "}
            that includes points, stamps, tokens (such as &#34;T-Coin&#34;),
            badges, and similar in-platform recognition mechanisms
            (collectively, &#34;Rewards&#34;). For the avoidance of doubt:
          </p>
          <ol className="list-decimal list-outside space-y-3 pl-5 mb-4">
            <li>
              <strong className="text-white/90">Closed-Loop Only.</strong>{" "}
              Rewards are issued, recognized, and usable solely within the
              Tribe26 platform and the network of participating Nodes and
              Brandboards.
            </li>
            <li>
              <strong className="text-white/90">No Cash Value.</strong> Rewards
              have no cash value, are not legal tender, and cannot be redeemed
              for fiat currency, withdrawn as money, transferred to a bank
              account, or converted into any external asset by Users.
            </li>
            <li>
              <strong className="text-white/90">
                Not Financial Instruments.
              </strong>{" "}
              Rewards are not securities, deposits, e-money, stored-value
              instruments, foreign exchange, commodities, or cryptocurrencies in
              the legal sense. The operation of the Rewards system does not
              constitute the offering of regulated financial services, money
              services, or investment products.
            </li>
            <li>
              <strong className="text-white/90">
                No Peer-to-Peer Money Transfer.
              </strong>{" "}
              The Services do not facilitate the transfer of money or monetary
              value between Users. Tribe26 itself does not function as a payment
              system, money remitter, or financial intermediary.
            </li>
            <li>
              <strong className="text-white/90">
                No Direct Financial Transactions.
              </strong>{" "}
              Tribe26 does not, on its own behalf, process direct financial
              transactions between Users and Nodes. Where a Node chooses to
              honor a reward (for example, providing a discount or complimentary
              item to a Member), the underlying commercial transaction is
              between the User and that Node and is governed by the Node&#39;s
              own terms.
            </li>
            <li>
              <strong className="text-white/90">
                Governed by Terms of Service.
              </strong>{" "}
              All issuance, accrual, expiry, transfer (where permitted), and
              redemption of Rewards is governed exclusively by the Tribe26 Terms
              of Service.
            </li>
          </ol>
          <p>
            This Privacy Policy describes how we handle personal information
            generated through Users&#39; participation in the Rewards program.
            Questions about the economic terms of the program (rates, expiry,
            eligibility, etc.) are addressed in the Terms of Service.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            6. Consent and Legal Basis for Processing
          </h2>
          <p className="mb-4">
            Under Canadian privacy legislation, we process personal information
            on the basis of your consent either{" "}
            <strong className="text-white/90">express consent</strong> (for
            sensitive information, marketing communications, and precise
            location data) or{" "}
            <strong className="text-white/90">implied consent</strong> (for
            collection and use that is reasonable and consistent with the
            purpose for which the information was provided, such as operating
            your account).
          </p>
          <p className="mb-4">
            You may withdraw your consent at any time, subject to legal or
            contractual restrictions and reasonable notice. Withdrawing consent
            for certain processing activities may limit or prevent your use of
            the Services.
          </p>
          <p>
            For Users located in the European Economic Area, the United Kingdom,
            or Switzerland, we additionally rely on the legal bases set out in
            the General Data Protection Regulation (GDPR), including performance
            of a contract, legitimate interests, consent, and compliance with
            legal obligations.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            7. How We Share Your Information
          </h2>
          <p className="mb-4">
            <strong className="text-white">
              We do not sell your personal information.
            </strong>{" "}
            We may share your information in the following circumstances:
          </p>
          <ul className="list-disc list-outside space-y-3 pl-5">
            <li>
              <strong className="text-white/90">
                With Nodes and Brandboards:
              </strong>{" "}
              when you check in, redeem a reward, or otherwise interact with a
              participating business or brand, we share information necessary to
              deliver the relevant service or reward (for example, your display
              name, the redemption code, and the time of the transaction).
            </li>
            <li>
              <strong className="text-white/90">With Other Users:</strong>{" "}
              information you choose to make public (such as your display name,
              profile photo, public posts, and ratings) is visible to other
              Users of the Services.
            </li>
            <li>
              <strong className="text-white/90">With Service Providers:</strong>{" "}
              including cloud hosting, analytics, customer support, identity
              verification, communications, and security providers acting on our
              behalf and bound by contractual confidentiality and
              data-protection obligations.
            </li>
            <li>
              <strong className="text-white/90">For Legal Reasons:</strong>{" "}
              where we believe in good faith that disclosure is necessary to
              comply with applicable Canadian or foreign law, court order, or
              governmental request; to protect our rights, property, or safety;
              or to investigate fraud or violations of our policies.
            </li>
            <li>
              <strong className="text-white/90">
                In Connection With Corporate Transactions:
              </strong>{" "}
              in the context of a merger, acquisition, financing,
              reorganization, bankruptcy, or sale of assets, subject to
              appropriate confidentiality protections.
            </li>
            <li>
              <strong className="text-white/90">
                With Your Consent or at Your Direction:
              </strong>{" "}
              for any other purpose disclosed to you at the time we collect the
              information.
            </li>
          </ul>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            8. Storage Location and Cross-Border Data Transfers
          </h2>
          <p className="mb-4">
            Personal information collected through the Services may be{" "}
            <strong className="text-white">
              stored, processed, or accessed in Canada and in other countries
            </strong>
            , including the United States and other jurisdictions where our
            service providers operate. While information is stored or processed
            in another country, it is subject to the laws of that country, which
            may differ from those of Canada and which may permit access by
            foreign courts, law-enforcement agencies, or governmental
            authorities under their applicable laws.
          </p>
          <p>
            We take contractual and organizational steps to require our service
            providers to protect personal information at a level of protection
            comparable to what we maintain ourselves. Where required by law, we
            implement additional safeguards such as standard contractual clauses
            or other recognized transfer mechanisms.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            9. Data Retention
          </h2>
          <p className="mb-4">
            We retain personal information for as long as necessary to provide
            the Services and fulfill the purposes described in this Policy,
            unless a longer retention period is required or permitted by law.
            Specific retention periods depend on the type of information and the
            context of collection. For example:
          </p>
          <ul className="list-disc list-outside space-y-2 pl-5 mb-4">
            <li>
              Account information is retained for the duration of your account
              and for a reasonable period thereafter to support recovery, fraud
              prevention, and legal compliance.
            </li>
            <li>
              Activity and transactional records are retained for the period
              required by applicable tax and accounting laws.
            </li>
            <li>
              Marketing preferences and consent records are retained until you
              withdraw consent or for a reasonable period thereafter.
            </li>
            <li>
              Anonymized and aggregated information may be retained
              indefinitely.
            </li>
          </ul>
          <p>
            When personal information is no longer required, we will delete or
            anonymize it in accordance with our internal retention policies.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            10. Data Security
          </h2>
          <p className="mb-4">
            We implement reasonable technical, administrative, and physical
            safeguards designed to protect personal information against loss,
            theft, and unauthorized access, disclosure, copying, use, or
            modification, in line with the safeguards principle under PIPEDA and
            BC PIPA. These measures include encryption of data in transit,
            access controls, secure development practices, and regular security
            reviews. However, no method of electronic transmission or storage is
            entirely secure, and we cannot guarantee absolute security.
          </p>
          <p>
            You are responsible for keeping your account credentials
            confidential and for promptly notifying us of any suspected
            unauthorized access. In the event of a breach of security safeguards
            involving a real risk of significant harm, we will notify affected
            Users and the Office of the Privacy Commissioner of Canada in
            accordance with PIPEDA&#39;s breach-notification requirements.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">11. Accuracy</h2>
          <p>
            We make reasonable efforts to keep personal information accurate,
            complete, and up to date for the purposes for which it is to be
            used. You can review and update much of your account information
            directly within the Tribe26 application. If you become aware that
            information we hold about you is inaccurate or incomplete, please
            contact us so that we can correct it.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            12. Your Rights and Choices
          </h2>

          <h3 className="text-base font-semibold text-white/90 mb-3">
            12.1 Rights Under Canadian Privacy Law
          </h3>
          <p className="mb-3">
            Subject to certain legal exceptions, you have the right to:
          </p>
          <ul className="list-disc list-outside space-y-2 pl-5 mb-6">
            <li>
              <strong className="text-white/90">Access</strong> the personal
              information we hold about you, and request information about how
              it is being used and to whom it has been disclosed;
            </li>
            <li>
              <strong className="text-white/90">Request Correction</strong> of
              personal information that is inaccurate or incomplete;
            </li>
            <li>
              <strong className="text-white/90">Withdraw Consent</strong> to our
              continued collection, use, or disclosure of your personal
              information, subject to legal or contractual restrictions and
              reasonable notice;
            </li>
            <li>
              <strong className="text-white/90">File a Complaint</strong> with
              us, and, if not resolved to your satisfaction, with the{" "}
              <strong className="text-white">
                Office of the Privacy Commissioner of Canada (OPC)
              </strong>{" "}
              at{" "}
              <a
                href="https://www.priv.gc.ca"
                className="text-[#CFFF5E] hover:underline"
              >
                www.priv.gc.ca
              </a>
              , the{" "}
              <strong className="text-white">
                Office of the Information and Privacy Commissioner for British
                Columbia (OIPC BC)
              </strong>{" "}
              at{" "}
              <a
                href="https://www.oipc.bc.ca"
                className="text-[#CFFF5E] hover:underline"
              >
                www.oipc.bc.ca
              </a>
              , or your applicable provincial privacy regulator.
            </li>
          </ul>
          <p className="mb-6">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:privacy@tribe26.app"
              className="text-[#CFFF5E] hover:underline"
            >
              privacy@tribe26.app
            </a>
            . We will respond within the timeframes required by applicable law
            (generally within 30 days under PIPEDA). We may need to verify your
            identity before responding.
          </p>

          <h3 className="text-base font-semibold text-white/90 mb-3">
            12.2 Additional Rights for International Users
          </h3>
          <p className="mb-4">
            If you are located in the{" "}
            <strong className="text-white">
              European Economic Area, the United Kingdom, or Switzerland
            </strong>
            , you additionally have the right to data portability, restriction
            of processing, objection to processing based on legitimate
            interests, and the right to lodge a complaint with your local
            data-protection authority.
          </p>
          <p className="mb-4">
            If you are a{" "}
            <strong className="text-white">California resident</strong>, you
            have rights under the California Consumer Privacy Act (CCPA/CPRA),
            including the right to know, delete, correct, and opt out of
            &#34;sale&#34; or &#34;sharing&#34; of personal information (we do
            not sell personal information as that term is conventionally
            understood) and the right not to be discriminated against for
            exercising your privacy rights.
          </p>
          <p>
            You may also manage many of your settings, communications
            preferences, and account data directly within the Tribe26
            application.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            13. Children&#39;s Privacy
          </h2>
          <p>
            The Services are not directed to children under the age of 13 (or
            the equivalent minimum age in the relevant jurisdiction, such as 14
            in Quebec under Law 25 or 16 in parts of the EEA). We do not
            knowingly collect personal information from children under that age
            without verifiable parental consent. If we become aware that we have
            collected personal information from a child without such consent, we
            will take appropriate steps to delete that information. If you
            believe a child has provided us with personal information, please
            contact us at{" "}
            <a
              href="mailto:privacy@tribe26.app"
              className="text-[#CFFF5E] hover:underline"
            >
              privacy@tribe26.app
            </a>
            .
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            14. Cookies and Similar Technologies
          </h2>
          <p>
            We and our service providers use cookies, software development kits
            (SDKs), pixels, local storage, and similar technologies to operate
            the Services, remember your preferences, analyze usage, and deliver
            relevant content. You can control cookies through your browser
            settings and, where required by law, through the cookie consent
            banner displayed on our website. Disabling certain cookies may
            impair the functionality of the Services.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            15. Push Notifications and Marketing Communications
          </h2>
          <p className="mb-4">
            With your permission, we send push notifications to your device
            regarding your account, rewards, missions, and other Platform
            activity. You may opt out at any time through your device or in-app
            notification settings.
          </p>
          <p>
            We may also send marketing emails or messages where permitted by
            applicable law, including{" "}
            <strong className="text-white">
              Canada&#39;s Anti-Spam Legislation (CASL)
            </strong>
            . You may opt out by following the unsubscribe instructions included
            in such communications, and we will honor your request without undue
            delay.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            16. Third-Party Links and Services
          </h2>
          <p>
            The Services may contain links to, or integrations with, third-party
            websites and services, including those of Nodes and Brandboards.
            This Policy does not apply to information collected by such third
            parties. We encourage you to review their privacy practices before
            providing them with personal information.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            17. App Store and Platform-Specific Disclosures
          </h2>

          <h3 className="text-base font-semibold text-white/90 mb-3">
            17.1 Apple App Tracking Transparency (iOS)
          </h3>
          <p className="mb-6">
            On iOS devices, we will request your permission before tracking your
            activity across other companies&#39; apps and websites for
            advertising or measurement purposes. You may grant or decline this
            permission, and you may change your choice at any time in your
            device settings.
          </p>

          <h3 className="text-base font-semibold text-white/90 mb-3">
            17.2 Google Play Data Safety (Android)
          </h3>
          <p className="mb-6">
            The data types we collect, the purposes of collection, and our
            security practices are disclosed in the Data Safety section of our
            Google Play listing. Such disclosures are aligned with this Policy.
          </p>

          <h3 className="text-base font-semibold text-white/90 mb-3">
            17.3 Device Permissions
          </h3>
          <p className="mb-3">
            The Services may request access to the following device features.
            You may grant, decline, or revoke each permission through your
            device settings:
          </p>
          <ul className="list-disc list-outside space-y-2 pl-5">
            <li>
              <strong className="text-white/90">Location</strong> (precise
              and/or approximate) for proof-of-presence, check-ins, and
              location-based rewards.
            </li>
            <li>
              <strong className="text-white/90">Camera</strong> for scanning QR
              codes and uploading content.
            </li>
            <li>
              <strong className="text-white/90">Photo Library</strong> for
              selecting and uploading images.
            </li>
            <li>
              <strong className="text-white/90">Microphone</strong> for features
              that require audio capture.
            </li>
            <li>
              <strong className="text-white/90">Notifications</strong> for
              delivering account and activity updates.
            </li>
            <li>
              <strong className="text-white/90">
                Bluetooth and Nearby Devices
              </strong>{" "}
              for proximity-based features.
            </li>
            <li>
              <strong className="text-white/90">Contacts</strong> only with
              explicit user action, for inviting friends.
            </li>
          </ul>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            18. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Policy from time to time to reflect changes in
            our practices, technology, legal requirements, or other factors.
            When we make material changes, we will provide notice through the
            Services or by other appropriate means before the changes take
            effect. The &#34;Effective Date&#34; at the top of this Policy
            indicates when it was last revised. Your continued use of the
            Services after the effective date constitutes acceptance of the
            updated Policy.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">19. Contact Us</h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this
            Policy or our privacy practices, please contact our Privacy Officer
            at:
          </p>
          <address className="not-italic space-y-1 text-white/70 mb-6">
            <p>
              <strong className="text-white">Totemian Brandboards Inc.</strong>
            </p>
            <p>Attention: Privacy Officer</p>
            <p>1771 Robson Street, Suite 1132</p>
            <p>Vancouver, BC V6G 3B7</p>
            <p>Canada</p>
          </address>
          <p className="mb-1">
            Email:{" "}
            <a
              href="mailto:privacy@tribe26.app"
              className="text-[#CFFF5E] hover:underline"
            >
              privacy@tribe26.app
            </a>
          </p>
          <p className="mb-1">
            Platform website:{" "}
            <a
              href="https://tribe26.app"
              className="text-[#CFFF5E] hover:underline"
            >
              https://tribe26.app
            </a>
          </p>
          <p className="mb-6">
            Corporate website:{" "}
            <a
              href="https://totemian.com"
              className="text-[#CFFF5E] hover:underline"
            >
              https://totemian.com
            </a>
          </p>
          <p className="mb-3">
            If you are not satisfied with our response, you may also contact:
          </p>
          <ul className="list-disc list-outside space-y-2 pl-5">
            <li>
              <strong className="text-white/90">
                Office of the Privacy Commissioner of Canada (OPC)
              </strong>{" "}
              <a
                href="https://www.priv.gc.ca"
                className="text-[#CFFF5E] hover:underline"
              >
                www.priv.gc.ca
              </a>
            </li>
            <li>
              <strong className="text-white/90">
                Office of the Information and Privacy Commissioner for British
                Columbia (OIPC BC)
              </strong>{" "}
              <a
                href="https://www.oipc.bc.ca"
                className="text-[#CFFF5E] hover:underline"
              >
                www.oipc.bc.ca
              </a>
            </li>
          </ul>
        </section>

        <hr className="border-white/10" />

        <p className="text-white/40 text-sm italic">
          This document is provided for the Tribe26 platform operated by
          Totemian Brandboards Inc. and is intended to comply with applicable
          privacy legislation, including PIPEDA, BC PIPA, Canada&#39;s Anti-Spam
          Legislation (CASL), and the publication requirements of the Apple App
          Store and the Google Play Store. Where applicable, it also addresses
          the rights of Users in the EEA/UK (GDPR) and California (CCPA/CPRA).
          We recommend that this document be reviewed by qualified legal counsel
          before publication to ensure alignment with your specific
          data-processing operations.
        </p>
      </div>
    </div>
  );
}

function PersianContent() {
  return (
    <div className="font-(family-name:--font-vazir)">
      <div className="mb-10">
        <p className="text-[#CFFF5E] font-mono text-xs uppercase tracking-widest mb-3">
          حقوقی
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
          سیاست حفظ حریم خصوصی
        </h1>
        <p className="text-white/50 text-sm">
          <strong className="text-white/70">آخرین بروزرسانی:</strong> 6 می، 2026
        </p>
      </div>

      <div className="space-y-10 text-white/70 leading-loose">
        <p>
          این سیاست حفظ حریم خصوصی توضیح میدهد که شرکت{" "}
          <strong className="text-white">
            توتمیان (Totemian Brandboards Inc.)
          </strong>{" "}
          شرکتی ثبت شده در استان بریتیش کلمبیا کانادا به عنوان اپراتور پلتفرم{" "}
          <strong className="text-white">Tribe26</strong> (شامل وبسایت پلتفرم به
          نشانی tribe26.app وبسایت شرکت به نشانی totemian.com و اپلیکیشنهای
          موبایل iOS و Android) چه اطلاعاتی از شما جمع آوری میکند چگونه از آنها
          استفاده میکند و حقوق شما در این زمینه چیست.
        </p>
        <p>
          با ایجاد حساب کاربری یا استفاده از خدمات ما تأیید میکنید که این سیاست
          را خوانده و پذیرفته اید.
        </p>
        <p>
          این سیاست در درجه ی اول بر اساس قوانین حفاظت از داده ی کانادا تدوین
          شده است از جمله{" "}
          <strong className="text-white">
            قانون حفاظت از اطلاعات شخصی و اسناد الکترونیکی (PIPEDA)
          </strong>{" "}
          و{" "}
          <strong className="text-white">
            قانون حفاظت از اطلاعات شخصی استان بریتیش کلمبیا (BC PIPA)
          </strong>
          . کاربران ساکن خارج از کانادا نیز ممکن است از حقوق اضافی مطابق قوانین
          محلی خود برخوردار باشند.
        </p>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            . چه اطلاعاتی جمع آوری میکنیم
          </h2>

          <p className="font-semibold text-white/90 mb-2">
            اطلاعاتی که خودتان ارائه میدهید:
          </p>
          <ul className="list-disc list-outside space-y-2 pr-5 mb-6">
            <li>
              نام ایمیل شماره تلفن رمز عبور تاریخ تولد تصویر پروفایل و شهر سکونت
            </li>
            <li>
              محتوایی که در پلتفرم منتشر میکنید (نظرات تصاویر امتیازها پیامها)
            </li>
            <li>
              اطلاعات احراز هویت در صورت نیاز (مثلا برای فعالیت بهعنوان
              Contributor یا Node)
            </li>
            <li>مکاتبات شما با تیم پشتیبانی</li>
          </ul>

          <p className="font-semibold text-white/90 mb-2">
            اطلاعاتی که به صورت خودکار جمع میشود:
          </p>
          <ul className="list-disc list-outside space-y-2 pr-5 mb-6">
            <li>اطلاعات دستگاه (مدل سیستم عامل شناسه دستگاه)</li>
            <li>آدرس IP گزارش کاربری و دادههای تشخیصی</li>
            <li>
              موقعیت مکانی (با اجازه شما) برای تأیید حضور (proof-of-presence) و
              چک این در نودها
            </li>
            <li>داده های کوکی و فناوریهای مشابه</li>
          </ul>

          <p className="font-semibold text-white/90 mb-2">
            اطلاعاتی که از طرف ثالث دریافت میکنیم:
          </p>
          <ul className="list-disc list-outside space-y-2 pr-5">
            <li>
              اطلاعات ورود از طریق Apple Google یا سایر سرویس ها (در صورت
              استفاده)
            </li>
            <li>
              اطلاعات تعامل شما با کسب و کارهای شریک (Nodes) و برندها
              (Brandboards)
            </li>
          </ul>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            . چگونه از اطلاعات شما استفاده میکنیم
          </h2>
          <ul className="list-disc list-outside space-y-2 pr-5 mb-4">
            <li>ارائه و عملیاتی نگهداشتن خدمات پلتفرم</li>
            <li>مدیریت حساب کاربری امتیازها رویدادها و پاداشها</li>
            <li>شخصی سازی تجربه شما بر اساس علاقهمندی ها و موقعیت</li>
            <li>
              ارسال پیامهای ضروری اطلاع رسانی ها و با اجازه شما پیامهای
              بازاریابی مطابق با{" "}
              <strong className="text-white">
                قانون ضد اسپم کانادا (CASL)
              </strong>
            </li>
            <li>بهبود کیفیت امنیت و توسعه خدمات</li>
            <li>شناسایی و جلوگیری از تقلب و سوءاستفاده</li>
            <li>رعایت تعهدات قانونی</li>
          </ul>
          <p>
            ما اطلاعات شخصی شما را تنها برای مقاصدی جمعآوری استفاده و افشا
            میکنیم که از نظر یک فرد منطقی در شرایط موجود مناسب باشد مطابق با
            اصول پاسخگویی PIPEDA.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            . ماهیت امتیازها استمپ ها و توکن های Tribe26
          </h2>
          <p className="mb-4">
            پلتفرم Tribe26 یک{" "}
            <strong className="text-white">
              برنامه ی وفاداری و مشارکت بسته (closed-loop)
            </strong>{" "}
            را اجرا میکند که شامل امتیازها استمپ ها توکن ها (مانند T-Coin)
            نشانها و سایر مکانیزم های شناسایی درون پلتفرمی است (مجموعا پاداشها).
            برای رفع هرگونه ابهام:
          </p>
          <ol className="list-decimal list-outside space-y-3 pr-5">
            <li>
              <strong className="text-white/90">منحصرا درون پلتفرمی.</strong>{" "}
              پاداش ها تنها در داخل پلتفرم Tribe26 و شبکه ی نودها و
              Brandboardهای شریک قابل صدور شناسایی و استفاده هستند.
            </li>
            <li>
              <strong className="text-white/90">بدون ارزش نقدی.</strong> پاداش
              ها هیچ ارزش نقدی ندارند پول قانونی محسوب نمی شوند و قابل تبدیل به
              ارز رایج برداشت به صورت پول انتقال به حساب بانکی یا تبدیل به هیچ
              دارایی خارج از پلتفرم نیستند.
            </li>
            <li>
              <strong className="text-white/90">ابزار مالی نیستند.</strong>{" "}
              پاداش ها از نظر حقوقی اوراق بهادار سپرده پول الکترونیک ابزار ذخیره
              ی ارزش ارز خارجی کالا یا رمزارز محسوب نمیشوند. سیستم پاداش ارائه ی
              خدمات مالی تنظیم شده خدمات پولی یا محصولات سرمایه گذاری به شمار
              نمی آید.
            </li>
            <li>
              <strong className="text-white/90">
                بدون انتقال پول بین کاربران.
              </strong>{" "}
              خدمات Tribe26 امکان انتقال پول یا ارزش پولی بین کاربران را فراهم
              نمی کند. Tribe26 خود به عنوان سیستم پرداخت ارسال کننده ی پول یا
              واسط مالی عمل نمی کند.
            </li>
            <li>
              <strong className="text-white/90">
                بدون تراکنش مالی مستقیم.
              </strong>{" "}
              Tribe26 از طرف خود تراکنش های مالی مستقیم بین کاربران و نودها را
              پردازش نمیکند. اگر یک نود تصمیم به اعطای پاداش (مثلا تخفیف یا یک
              قلم رایگان) بگیرد تراکنش تجاری زیربنایی بین کاربر و آن نود است و
              تابع شرایط خود نود میباشد.
            </li>
            <li>
              <strong className="text-white/90">تابع شرایط خدمات.</strong> صدور
              انباشت انقضا انتقال (در صورت مجاز بودن) و استفاده از پاداشه ا صرفا
              بر اساس شرایط استفاده ی خدمات (Terms of Service) Tribe26 انجام
              میشود.
            </li>
          </ol>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            . اشتراک گذاری اطلاعات
          </h2>
          <p className="mb-4">
            <strong className="text-white">
              ما اطلاعات شخصی شما را نمیفروشیم.
            </strong>{" "}
            اطلاعات شما تنها در موارد زیر به اشتراک گذاشته میشود:
          </p>
          <ul className="list-disc list-outside space-y-3 pr-5">
            <li>
              <strong className="text-white/90">
                با کسب و کارهای شریک (Nodes و Brandboards):
              </strong>{" "}
              هنگام چک این یا استفاده از پاداش اطلاعات لازم برای تکمیل تراکنش
            </li>
            <li>
              <strong className="text-white/90">با سایر کاربران:</strong>{" "}
              اطلاعات عمومی پروفایل شما (نام نمایشی تصویر نظرات عمومی)
            </li>
            <li>
              <strong className="text-white/90">
                با ارائه دهندگان خدمات ما:
              </strong>{" "}
              میزبانی ابری تحلیل داده احراز هویت پشتیبانی تحت تعهدات محرمانگی
            </li>
            <li>
              <strong className="text-white/90">برای الزامات قانونی:</strong> در
              صورت درخواست مراجع قانونی کانادا یا کشورهای دیگر یا برای حفاظت از
              حقوق و امنیت
            </li>
            <li>
              <strong className="text-white/90">
                در صورت تغییر مالکیت شرکت:
              </strong>{" "}
              ادغام تملک یا فروش با حفظ تعهدات این سیاست
            </li>
          </ul>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            . محل ذخیرهسازی و انتقال دادهها به خارج از کانادا
          </h2>
          <p>
            اطلاعات شخصی ممکن است در{" "}
            <strong className="text-white">کانادا و کشورهای دیگر</strong> (از
            جمله ایالات متحده) که ارائه دهندگان خدمات ما در آنها فعالیت میکنند
            ذخیره یا پردازش شود. در این کشورها اطلاعات تابع قوانین آن کشور است
            که ممکن است با قوانین کانادا متفاوت باشد و امکان دسترسی مراجع قانونی
            آن کشور به اطلاعات وجود دارد. ما با اخذ تعهدات قراردادی از ارائه
            دهندگان خدمات سطح حفاظتی قابل قیاس با کانادا را تضمین میکنیم.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">. امنیت اطلاعات</h2>
          <p>
            ما از تدابیر فنی اداری و فیزیکی متعارف از جمله رمزنگاری کنترل دسترسی
            و بازبینی های امنیتی منظم برای حفاظت از اطلاعات شما استفاده میکنیم
            مطابق با اصل safeguards در PIPEDA و BC PIPA. در صورت وقوع رخنه ی
            امنیتی با خطر معنادار آسیب طبق الزامات PIPEDA به کاربران آسیب دیده و
            دفتر کمیسر حریم خصوصی کانادا اطلاع رسانی خواهیم کرد. مسئولیت حفظ
            محرمانگی رمز عبور بر عهده شما است.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">. حقوق شما</h2>
          <p className="mb-4">
            طبق قوانین حریم خصوصی کانادا (PIPEDA و BC PIPA) شما حق دارید:
          </p>
          <ul className="list-disc list-outside space-y-2 pr-5 mb-4">
            <li>
              به اطلاعات شخصی نگهداری شده توسط ما{" "}
              <strong className="text-white/90">دسترسی</strong> داشته باشید و یک
              نسخه از آن را دریافت کنید
            </li>
            <li>
              اطلاعات نادرست یا ناقص خود را{" "}
              <strong className="text-white/90">اصلاح</strong> کنید
            </li>
            <li>
              <strong className="text-white/90">رضایت</strong> قبلی خود برای جمع
              آوری استفاده یا افشای اطلاعات را پس بگیرید (با رعایت محدودیتهای
              قانونی و قراردادی و اطلاع متعارف)
            </li>
            <li>
              در صورت عدم رضایت از پاسخ ما{" "}
              <strong className="text-white/90">شکایت</strong> خود را به مراجع
              زیر ارائه دهید:
              <ul className="list-disc list-outside space-y-1 pr-5 mt-2">
                <li>
                  <strong className="text-white/90">
                    دفتر کمیسر حریم خصوصی کانادا (OPC)
                  </strong>{" "}
                  <a
                    href="https://www.priv.gc.ca"
                    className="text-[#CFFF5E] hover:underline"
                  >
                    www.priv.gc.ca
                  </a>
                </li>
                <li>
                  <strong className="text-white/90">
                    دفتر کمیسر اطلاعات و حریم خصوصی استان بریتیش کلمبیا (OIPC
                    BC)
                  </strong>{" "}
                  <a
                    href="https://www.oipc.bc.ca"
                    className="text-[#CFFF5E] hover:underline"
                  >
                    www.oipc.bc.ca
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <p className="mb-4">
            برای اعمال این حقوق با{" "}
            <a
              href="mailto:privacy@tribe26.app"
              className="text-[#CFFF5E] hover:underline"
            >
              privacy@tribe26.app
            </a>{" "}
            تماس بگیرید. ما ظرف روز (طبق PIPEDA) پاسخ خواهیم داد و ممکن است برای
            تأیید هویت اطلاعات اضافی درخواست کنیم. بسیاری از تنظیمات نیز مستقیما
            از طریق اپلیکیشن قابل مدیریت است.
          </p>
          <p>
            کاربران ساکن اتحادیه اروپا بریتانیا و سوئیس از حقوق اضافی تحت GDPR
            (از جمله انتقالپذیری داده و مخالفت با پردازش) برخوردار هستند و
            کاربران ساکن کالیفرنیا از حقوق CCPA/CPRA بهرهمند میشوند.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            . دسترسی های اپلیکیشن
          </h2>
          <p className="mb-4">
            اپ ممکن است درخواست دسترسیهای زیر را داشته باشد. هر دسترسی را
            میتوانید از تنظیمات دستگاه خود فعال یا غیرفعال کنید:
          </p>
          <ul className="list-disc list-outside space-y-2 pr-5 mb-4">
            <li>
              <strong className="text-white/90">موقعیت مکانی:</strong> برای چک
              این و پاداشهای مبتنی بر مکان
            </li>
            <li>
              <strong className="text-white/90">دوربین و گالری:</strong> برای
              اسکن QR و آپلود تصاویر
            </li>
            <li>
              <strong className="text-white/90">
                اعلانها (Notifications):
              </strong>{" "}
              برای اطلاع رسانی فعالیت حساب
            </li>
            <li>
              <strong className="text-white/90">بلوتوث:</strong> برای ویژگی های
              مبتنی بر مجاورت
            </li>
            <li>
              <strong className="text-white/90">مخاطبین:</strong> فقط با اقدام
              صریح شما برای دعوت دوستان
            </li>
          </ul>
          <p>
            در iOS طبق سیاست{" "}
            <strong className="text-white">App Tracking Transparency</strong>{" "}
            اپل قبل از هرگونه ردیابی فعالیت شما در سایر اپها/سایتها از شما اجازه
            گرفته خواهد شد. در Android انواع دادههای جمع آوری شده در بخش{" "}
            <strong className="text-white">Data Safety</strong> صفحه ی Google
            Play اعلام میشود.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            . حریم خصوصی کودکان
          </h2>
          <p>
            خدمات Tribe26 برای افراد زیر سال (یا حداقل سن قانونی در منطقه ی شما
            مانند سال در کبک طبق Law 25 یا سال در بخشهایی از اتحادیه اروپا)
            طراحی نشدهاند. اگر متوجه شویم که اطلاعات کودکی بدون رضایت قابل تأیید
            والدین جمعآوری شده آن را حذف خواهیم کرد.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            . کوکیها و فناوری های مشابه
          </h2>
          <p>
            برای عملکرد سایت تحلیل استفاده و شخصی سازی محتوا از کوکی ها و فناوری
            های مشابه استفاده میکنیم. میتوانید آنها را از طریق تنظیمات مرورگر یا
            بنر رضایت کوکی مدیریت کنید.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            . تغییرات این سیاست
          </h2>
          <p>
            ممکن است این سیاست را به مرور به روزرسانی کنیم. تغییرات مهم از طریق
            اپ یا وبسایت اطلاعرسانی میشود. ادامه استفاده شما از خدمات پس از
            تاریخ اجرای نسخه جدید به منزله پذیرش آن خواهد بود.
          </p>
        </section>

        <hr className="border-white/10" />

        <section>
          <h2 className="text-xl font-bold text-white mb-4">. تماس با ما</h2>
          <p className="mb-4">
            برای هرگونه سؤال درخواست یا شکایت در مورد حریم خصوصی با مسئول حریم
            خصوصی (Privacy Officer) ما تماس بگیرید:
          </p>
          <address className="not-italic space-y-1 text-white/70 mb-4">
            <p>
              <strong className="text-white">Totemian Brandboards Inc.</strong>
            </p>
            <p>1771 Robson Street, Suite 1132</p>
            <p>Vancouver, BC V6G 3B7</p>
            <p>Canada</p>
          </address>
          <p className="mb-1">
            ایمیل:{" "}
            <a
              href="mailto:privacy@tribe26.app"
              className="text-[#CFFF5E] hover:underline"
            >
              privacy@tribe26.app
            </a>
          </p>
          <p className="mb-1">
            وبسایت پلتفرم:{" "}
            <a
              href="https://tribe26.app"
              className="text-[#CFFF5E] hover:underline"
            >
              https://tribe26.app
            </a>
          </p>
          <p className="mb-6">
            وبسایت شرکت:{" "}
            <a
              href="https://totemian.com"
              className="text-[#CFFF5E] hover:underline"
            >
              https://totemian.com
            </a>
          </p>
        </section>

        <hr className="border-white/10" />

        <p className="text-white/40 text-sm italic">
          این سند خلاصه ای از سیاست حفظ حریم خصوصی Tribe26 است. نسخه کامل و رسمی
          به زبان انگلیسی در tribe26.app/legal/privacy-policy منتشر شده و در
          صورت بروز هرگونه ابهام یا تعارض نسخه انگلیسی مرجع است.
        </p>
      </div>
    </div>
  );
}
