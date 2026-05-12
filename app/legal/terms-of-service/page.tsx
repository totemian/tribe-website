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
            <Image src="/log-green-tribre.png" alt="Tribe26" width={100} height={34} className="h-8 w-auto object-contain" />
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
          <p className="text-white/50 font-mono text-sm">Effective Date: May 1, 2026 &nbsp;|&nbsp; Last Updated: May 1, 2026</p>
        </div>

        <div className="space-y-10 text-white/70 leading-relaxed">

          {/* Preamble */}
          <section className="space-y-4">
            <p>
              These Terms of Service ("Terms") constitute a binding legal agreement between you ("Member", "you", or "your") and Totemian Brandboards Inc. ("Totemian", "we", "us", or "our"), a corporation existing under the laws of the Province of British Columbia, Canada (BC Registration No. BC1522220), having its registered office at 1771 Robson Street, Suite 1132, Vancouver, BC V6G 3B7. "Tribe26" is a brand and platform operated by Totemian.
            </p>
            <p>
              These Terms govern your access to and use of the Tribe26 platform, including the website at tribe26.app, the Tribe26 mobile applications for iOS and Android, and all related services, content, features, and functionality (collectively, the "Services").
            </p>
            <p className="uppercase text-white/60 text-sm font-semibold">
              BY CREATING AN ACCOUNT, DOWNLOADING THE APPLICATION, OR OTHERWISE ACCESSING OR USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND BY THE TRIBE26 PRIVACY POLICY (AT tribe26.app/legal/privacy-policy), WHICH IS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE, DO NOT USE THE SERVICES.
            </p>
          </section>

          {/* 1. Definitions */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Definitions</h2>
            <p className="mb-3">In these Terms, capitalized terms have the following meanings:</p>
            <ul className="space-y-2 pl-2">
              <li><span className="text-white font-medium">"Account"</span> means a Member account on the Services.</li>
              <li><span className="text-white font-medium">"Brandboard"</span> means a brand partner that has entered into a written agreement with Totemian to participate in the Tribe26 network.</li>
              <li><span className="text-white font-medium">"Cashback Reward"</span> means a Reward issued by Totemian to a Member as a result of a Qualifying Purchase made by the Member at a Node.</li>
              <li><span className="text-white font-medium">"Loyalty Program"</span> means the closed-loop loyalty and engagement program operated by Totemian under these Terms.</li>
              <li><span className="text-white font-medium">"Member"</span> means an individual who has created an Account in compliance with these Terms.</li>
              <li><span className="text-white font-medium">"Node"</span> means a local business that has entered into a written Master Promotional Partner Agreement, or other written agreement, with Totemian to participate in the Tribe26 network.</li>
              <li><span className="text-white font-medium">"Offer"</span> means a promotional offer, discount, cashback opportunity, or other benefit made available through the Services. The economic terms of each Offer originate from a Node (or, in some cases, from Totemian) and are administered by Totemian.</li>
              <li><span className="text-white font-medium">"Qualifying Purchase"</span> means a bona fide retail purchase made by a Member at a Node in respect of which the Member submits a valid invoice or receipt through the Services and which is validated by Totemian under these Terms.</li>
              <li><span className="text-white font-medium">"Rewards"</span> means all points, stamps, tokens (including "T-Coin"), badges, and similar in-platform recognition mechanisms made available through the Loyalty Program, individually and collectively.</li>
              <li><span className="text-white font-medium">"User Content"</span> has the meaning given in Section 7.1.</li>
            </ul>
          </section>

          {/* 2. Nature of the Services */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Nature of the Services</h2>
            <p className="mb-3">
              Tribe26 is a community engagement and loyalty platform. Through the Services, Totemian operates the Loyalty Program and facilitates Members' discovery of, and engagement with, Nodes and Brandboards in the Tribe26 network. The Services include, without limitation:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
              <li>discovery of Nodes, Brandboards, and Offers;</li>
              <li>submission of receipts and invoices by Members for validation;</li>
              <li>earning, holding, and redemption of Rewards within the Tribe26 ecosystem;</li>
              <li>proof-of-presence check-ins at participating Nodes;</li>
              <li>community features such as missions, badges, and content contribution.</li>
            </ul>
            <p>
              The Services do not include, and Tribe26 does not provide, the sale of goods or services offered by Nodes. The underlying commercial transaction between a Member and a Node is governed solely by the terms applicable at the Node.
            </p>
          </section>

          {/* 3. Eligibility and Account */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Eligibility and Account</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">3.1 Minimum Age</h3>
                <p>
                  The Services are available only to individuals who are at least nineteen (19) years of age, being the age of majority in the Province of British Columbia. By creating an Account, you represent and warrant that you meet this age requirement.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">3.2 Accurate Information</h3>
                <p>
                  You agree to provide accurate, current, and complete information at registration and to keep your Account information updated. You are responsible for maintaining the confidentiality of your Account credentials and for all activity occurring under your Account.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">3.3 One Account per Person</h3>
                <p>
                  You may maintain only one (1) Account. Creating, controlling, or operating multiple Accounts, or sharing an Account with others, is prohibited.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">3.4 Verification</h3>
                <p>
                  Totemian may require you to verify your identity, age, or other Account information at any time, and may suspend access pending such verification.
                </p>
              </div>
            </div>
          </section>

          {/* 4. The Loyalty Program */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. The Loyalty Program</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">4.1 Operator</h3>
                <p>
                  Totemian, through Tribe26, is the sole operator of the Loyalty Program. Rewards are issued, recognized, recorded, redeemed, and administered exclusively by Totemian. Your loyalty relationship is with Totemian. You earn Rewards from, and redeem Rewards with, Totemian — not from or with any Node. Nothing in the Services creates a direct loyalty, credit, or financial obligation between any Node and any Member.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">4.2 Closed-Loop; No Cash Value</h3>
                <p className="mb-2">Rewards:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>are usable solely within the Tribe26 ecosystem and the network of participating Nodes and Brandboards;</li>
                  <li>have no cash value;</li>
                  <li>are not legal tender;</li>
                  <li>cannot be redeemed for fiat currency, withdrawn as money, transferred to a bank account, or converted into any external asset by Members;</li>
                  <li>are not securities, deposits, e-money, stored-value instruments, foreign exchange, commodities, or cryptocurrencies in the legal sense; and</li>
                  <li>do not constitute the offering of regulated financial services, money services, payment services, or investment products by Totemian.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">4.3 No Peer-to-Peer Transfer</h3>
                <p>
                  Rewards are personal to the Member and may not be sold, transferred, assigned, gifted, bequeathed, pledged, encumbered, or otherwise disposed of, except as expressly permitted by Totemian in writing. Any attempted transfer is void.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">4.4 Earning Rewards</h3>
                <p className="mb-2">Members may earn Rewards through, without limitation:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>submission of a valid invoice or receipt evidencing a Qualifying Purchase at a participating Node (a "Cashback Reward");</li>
                  <li>check-ins, proof-of-presence, and other engagement activities at Nodes;</li>
                  <li>completion of missions, surveys, reviews, or community contributions;</li>
                  <li>promotions, contests, or special events run by Totemian.</li>
                </ul>
                <p className="mt-2">
                  Eligibility criteria, accrual rates, caps, validation methods, and other terms applicable to each type of earning are determined by Totemian in its sole discretion and may be modified at any time.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">4.5 Cashback Rewards — Invoice Submission</h3>
                <p className="mb-2">
                  To earn a Cashback Reward, the Member must submit a clear copy of the invoice or receipt through the Services within the timeframe specified for the applicable Offer, and in the absence of such specification, within thirty (30) days of the date of purchase. Each invoice or receipt may be submitted only once and only by the Member to whom it was issued. The Member represents and warrants that all submitted invoices or receipts are authentic, accurate, complete, and reflect a genuine purchase made by the Member.
                </p>
                <p>
                  Totemian, in its sole discretion, validates submissions and may reject any submission that is, in its reasonable opinion, illegible, duplicated, altered, suspicious, fraudulent, non-compliant with the applicable Offer terms, or otherwise unverifiable.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">4.6 Expiry of Rewards</h3>
                <p>
                  Rewards expire and are forfeited automatically and without notice if your Account has been inactive for twelve (12) consecutive months. "Inactive" means no login, no purchase submission, no check-in, no Reward earning or redemption, and no other engagement with the Services for the duration of that period. Totemian may, but is not obligated to, provide reminders prior to expiry.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">4.7 Redemption</h3>
                <p>
                  Members may redeem Rewards for in-platform benefits made available by Totemian from time to time, which may include in-app discounts at participating Nodes, access to special Offers, badge unlocks, or other rewards Totemian may offer. Redemption mechanics, eligibility, availability, and equivalence are determined by Totemian in its sole discretion and may be changed at any time.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">4.8 Adjustment, Reversal, and Forfeiture</h3>
                <p className="mb-2">
                  Totemian may, at its sole discretion and without notice, adjust, reverse, void, or forfeit Rewards where it reasonably believes that the Rewards were:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>issued in error;</li>
                  <li>obtained through fraud, abuse, manipulation, or violation of these Terms;</li>
                  <li>subject to a reversal of the underlying transaction (e.g., a refund, return, chargeback, or cancellation at the Node); or</li>
                  <li>otherwise improperly accrued or held.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">4.9 Taxes</h3>
                <p>
                  Members are solely responsible for any taxes, duties, levies, or other governmental charges that may apply to their receipt or redemption of Rewards under applicable law.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">4.10 Modification or Discontinuation of the Loyalty Program</h3>
                <p>
                  Totemian may, at any time and for any reason, modify, suspend, or discontinue the Loyalty Program (or any part of it), including the accrual rates, redemption mechanics, expiry rules, or terms applicable to any Reward. Where reasonably practicable, Totemian will provide notice through the Services before material changes take effect. No Member has any vested right in the continuation of the Loyalty Program on any specific terms.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Offers and Member-Node Interactions */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Offers and Member-Node Interactions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">5.1 Offers Are Not Tribe26's Products</h3>
                <p>
                  Offers and any goods or services made available by Nodes are products and services of those Nodes, not of Tribe26 or Totemian. Tribe26's role is limited to facilitating discovery and administration of Offers and operating the Loyalty Program.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">5.2 No Privity in Underlying Transactions</h3>
                <p>
                  The underlying commercial transaction between a Member and a Node — including without limitation the purchase of food, beverages, goods, or services — is a transaction solely between that Member and that Node. Tribe26 is not a party to such transactions, does not act as agent for either party, and does not collect, hold, transmit, escrow, or guarantee any payment between Members and Nodes.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">5.3 No Endorsement</h3>
                <p>
                  The inclusion of a Node, Brandboard, or Offer in the Services does not constitute an endorsement by Tribe26 of that Node, Brandboard, or its products or services. Tribe26 makes no representation as to the quality, safety, legality, or compliance of any Node, Brandboard, or Offer.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">5.4 Disputes Concerning Nodes</h3>
                <p>
                  If a Member experiences a dispute with a Node concerning a purchase, the terms of an Offer, product quality, service, or any other matter relating to the underlying commercial transaction, the Member may report the matter to Tribe26 at{" "}
                  <a href="mailto:support@tribe26.app" className="text-[#CFFF5E] hover:underline">support@tribe26.app</a>.
                  {" "}Tribe26 may, at its sole discretion, mediate, suspend or remove the relevant Offer, suspend the Node's participation in the Tribe26 network, or take other reasonable action; however, Tribe26 has no obligation to resolve, and assumes no liability for, the outcome of any such dispute. Resolution of the underlying dispute remains between the Member and the Node.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">5.5 Non-Honor of Offers</h3>
                <p>
                  If a Node refuses or fails to honor a published Offer, the Member is encouraged to report the matter through the Services or to{" "}
                  <a href="mailto:support@tribe26.app" className="text-[#CFFF5E] hover:underline">support@tribe26.app</a>.
                  {" "}Tribe26 may, in its discretion, credit the Member with an equivalent in-platform Reward, but is under no contractual obligation to the Member to do so.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Acceptable Use */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Acceptable Use</h2>
            <p className="mb-3">You agree not to, and not to attempt to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>use the Services in violation of any applicable law or regulation;</li>
              <li>submit any false, fraudulent, misleading, altered, or duplicate invoices, receipts, or other content;</li>
              <li>submit any content that is unlawful, defamatory, harassing, discriminatory, hateful, sexually explicit, threatening, or otherwise inappropriate;</li>
              <li>impersonate any person or entity, or misrepresent your affiliation with any person or entity;</li>
              <li>harvest, scrape, crawl, mine, or otherwise extract data from the Services without our prior written permission;</li>
              <li>interfere with, disrupt, overload, or attempt to gain unauthorized access to the Services, our systems, or other Members' accounts;</li>
              <li>reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code or underlying logic of the Services, except to the extent such restriction is prohibited by applicable law;</li>
              <li>use the Services for any commercial purpose other than as expressly permitted under these Terms;</li>
              <li>engage in any activity intended to artificially inflate Rewards, engagement, ratings, reviews, or other metrics;</li>
              <li>circumvent any restriction, limitation, technical measure, or security mechanism of the Services.</li>
            </ul>
          </section>

          {/* 7. User Content */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. User Content</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">7.1 License Grant</h3>
                <p>
                  "User Content" means any content (including text, images, photographs of receipts or invoices, reviews, ratings, comments, messages, and other materials) that you submit, post, upload, transmit, or otherwise make available through the Services. By submitting User Content, you grant to Totemian a worldwide, non-exclusive, royalty-free, fully paid, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, perform, display, and create derivative works of such User Content, in any media now known or later developed, in connection with the Services and Totemian's business, including for analytics, marketing, and promotional purposes.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">7.2 Member Representations</h3>
                <p>
                  You represent and warrant that (a) you own or have all necessary rights to grant the license in Section 7.1; (b) your User Content does not violate the intellectual property, privacy, publicity, or other rights of any third party, or any applicable law; and (c) information in submitted receipts and invoices reflects genuine purchases made by you and has not been altered.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">7.3 Moderation</h3>
                <p>
                  Totemian may, but is not obligated to, monitor, review, edit, refuse, remove, or disable User Content at any time and for any reason, including content that violates these Terms. Totemian does not endorse and is not responsible for any User Content posted by other Members.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Intellectual Property */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Intellectual Property</h2>
            <p className="mb-3">
              Excluding User Content, the Services and all materials made available through the Services — including software, design, text, graphics, photographs, illustrations, logos, trademarks, service marks, trade dress, sound files, animations, and the selection and arrangement thereof — are owned by Totemian or its licensors and are protected by Canadian and international copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              Subject to your continued compliance with these Terms, Totemian grants you a limited, personal, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services for your personal, non-commercial purposes. All rights not expressly granted are reserved by Totemian.
            </p>
          </section>

          {/* 9. Privacy */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Privacy</h2>
            <p>
              Your use of the Services is subject to the Tribe26 Privacy Policy, available at{" "}
              <Link href="/legal/privacy-policy" className="text-[#CFFF5E] hover:underline">tribe26.app/legal/privacy-policy</Link>,
              {" "}which is incorporated by reference into these Terms. The Privacy Policy describes how Totemian collects, uses, discloses, and safeguards your personal information.
            </p>
          </section>

          {/* 10. Third-Party Services and Links */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Third-Party Services and Links</h2>
            <p>
              The Services may contain links to, or integrations with, third-party websites, applications, or services, including those of Nodes and Brandboards. Tribe26 does not control such third-party services and is not responsible for their content, accuracy, privacy practices, or any loss or damage arising from your use of them. Your interactions with any third party are solely between you and that third party.
            </p>
          </section>

          {/* 11. Disclaimers */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Disclaimers</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">11.1 As-Is Basis</h3>
                <p className="uppercase text-sm">
                  THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS FOR A PARTICULAR PURPOSE, DURABILITY, TITLE, NON-INFRINGEMENT, OR THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. TOTEMIAN MAKES NO WARRANTY THAT THE SERVICES WILL MEET YOUR REQUIREMENTS.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">11.2 No Warranty as to Nodes or Offers</h3>
                <p className="uppercase text-sm">
                  TOTEMIAN MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND CONCERNING ANY NODE, BRANDBOARD, OR OFFER, INCLUDING WITHOUT LIMITATION CONCERNING THE QUALITY, SAFETY, LEGALITY, AVAILABILITY, ACCURACY, OR COMPLIANCE OF ANY GOODS, SERVICES, OR PROMOTIONS MADE AVAILABLE BY OR THROUGH A NODE OR BRANDBOARD. MEMBERS INTERACT WITH NODES AND BRANDBOARDS AT THEIR OWN RISK.
                </p>
              </div>
            </div>
          </section>

          {/* 12. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Limitation of Liability</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">12.1 Exclusion of Indirect Damages</h3>
                <p className="uppercase text-sm">
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL TOTEMIAN, ITS AFFILIATES, OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, BUSINESS, DATA, GOODWILL, OR ANTICIPATED SAVINGS, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF (OR INABILITY TO USE) THE SERVICES, WHETHER BASED ON CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE, AND WHETHER OR NOT TOTEMIAN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">12.2 Aggregate Cap</h3>
                <p className="uppercase text-sm">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, THE TOTAL AGGREGATE LIABILITY OF TOTEMIAN AND ITS AFFILIATES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF THE SERVICES SHALL NOT EXCEED THE GREATER OF (A) ONE HUNDRED CANADIAN DOLLARS (CAD $100), OR (B) THE TOTAL AMOUNTS, IF ANY, PAID BY YOU TO TOTEMIAN IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY. AS THE SERVICES ARE GENERALLY MADE AVAILABLE TO MEMBERS WITHOUT FEE, THIS CAP WILL TYPICALLY BE CAD $100.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">12.3 Essential Basis</h3>
                <p>
                  You acknowledge that the limitations of liability in this Section 12 are a fundamental element of the basis of the bargain between you and Totemian, and that Totemian would not provide the Services without these limitations.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">12.4 Consumer Protections</h3>
                <p>
                  Nothing in these Terms is intended to exclude or limit any right that cannot be excluded or limited under applicable consumer protection law. Where any limitation or exclusion in these Terms is held to be unenforceable, it shall apply to the maximum extent permitted by law.
                </p>
              </div>
            </div>
          </section>

          {/* 13. Indemnification */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Indemnification</h2>
            <p className="mb-3">
              To the fullest extent permitted by law, you agree to defend, indemnify, and hold harmless Totemian, its affiliates, and their respective directors, officers, employees, and agents from and against any and all claims, demands, damages, losses, liabilities, costs, and expenses (including reasonable legal fees and disbursements) arising out of or in connection with:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>your breach or alleged breach of these Terms;</li>
              <li>your User Content;</li>
              <li>your interactions or transactions with any Node, Brandboard, or other Member;</li>
              <li>your violation of any applicable law or any rights of any third party; or</li>
              <li>your fraudulent, negligent, or wilful misconduct.</li>
            </ul>
          </section>

          {/* 14. Suspension and Termination */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">14. Suspension and Termination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">14.1 By You</h3>
                <p>
                  You may terminate your Account at any time through the Services or by contacting{" "}
                  <a href="mailto:support@tribe26.app" className="text-[#CFFF5E] hover:underline">support@tribe26.app</a>.
                  {" "}Upon termination, all Rewards held in your Account are forfeited without compensation.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">14.2 By Us</h3>
                <p className="mb-2">
                  Totemian may suspend or terminate your Account or your access to the Services at any time, with or without notice, for any reason, including without limitation:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>breach or suspected breach of these Terms;</li>
                  <li>suspected fraud, abuse, or misuse of the Services;</li>
                  <li>inactivity (as defined in Section 4.6);</li>
                  <li>legal, regulatory, or risk-management requirements; or</li>
                  <li>modification or discontinuation of the Services or the Loyalty Program.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">14.3 Effect of Termination</h3>
                <p>
                  Upon termination, your right to access and use the Services ceases immediately, and any Rewards in your Account are forfeited. The following provisions survive termination: Sections 1, 7.1, 8, 9, 11, 12, 13, 14.3, 15, and 16.
                </p>
              </div>
            </div>
          </section>

          {/* 15. Changes to the Services and these Terms */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">15. Changes to the Services and these Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">15.1 Right to Modify Services</h3>
                <p className="uppercase text-sm">
                  TOTEMIAN RESERVES THE RIGHT, AT ANY TIME, IN ITS SOLE DISCRETION, AND FOR ANY REASON OR NO REASON, TO MODIFY, SUSPEND, OR DISCONTINUE THE SERVICES, THE LOYALTY PROGRAM, OR ANY FEATURE OR PORTION THEREOF, WITH OR WITHOUT NOTICE. TOTEMIAN WILL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY SUCH MODIFICATION, SUSPENSION, OR DISCONTINUATION.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">15.2 Right to Update Terms</h3>
                <p className="mb-2">
                  Totemian reserves the right, at any time, in its sole discretion, and for any reason or no reason, to update, modify, replace, or supplement these Terms. The most current version will be posted at tribe26.app/legal/terms-of-service with a revised "Last Updated" date. Where the change is material, Totemian will use commercially reasonable efforts to notify Members through the Services or by email before the change takes effect.
                </p>
                <p>
                  Your continued use of the Services after the effective date of any update constitutes your acceptance of the updated Terms. If you do not agree to the updated Terms, your sole and exclusive remedy is to stop using the Services and to delete your Account.
                </p>
              </div>
            </div>
          </section>

          {/* 16. Governing Law and Dispute Resolution */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">16. Governing Law and Dispute Resolution</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">16.1 Governing Law</h3>
                <p>
                  These Terms, and any non-contractual obligations arising out of or in connection with them, are governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein, without regard to conflict-of-laws principles.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">16.2 Good-Faith Resolution</h3>
                <p>
                  In the event of any dispute, controversy, or claim arising out of or relating to these Terms or your use of the Services (a "Dispute"), the parties shall first attempt in good faith to resolve the matter informally by written notice to{" "}
                  <a href="mailto:legal@tribe26.app" className="text-[#CFFF5E] hover:underline">legal@tribe26.app</a>,
                  {" "}with at least thirty (30) days to negotiate before pursuing any formal proceeding.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">16.3 Arbitration</h3>
                <p>
                  If a Dispute is not resolved through informal negotiation within thirty (30) days, the Dispute shall be finally resolved by binding arbitration administered by the Vancouver International Arbitration Centre (VANIAC, formerly BCICAC) under its rules then in effect. The arbitration shall be conducted in Vancouver, British Columbia, in the English language, before a single arbitrator. Judgment on the award may be entered in any court of competent jurisdiction.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">16.4 Court Jurisdiction for Injunctive Relief</h3>
                <p>
                  Notwithstanding Section 16.3, either party may seek injunctive or other equitable relief from the courts of British Columbia to protect its intellectual property rights or confidential information.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">16.5 Class-Action Waiver</h3>
                <p>
                  To the fullest extent permitted by law, the parties waive any right to participate in a class action, collective action, or representative proceeding against the other party. Disputes shall be resolved on an individual basis.
                </p>
              </div>
            </div>
          </section>

          {/* 17. General Provisions */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">17. General Provisions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">17.1 Entire Agreement</h3>
                <p>
                  These Terms, together with the Tribe26 Privacy Policy and any additional terms expressly incorporated by reference, constitute the entire agreement between you and Totemian concerning the Services and supersede all prior or contemporaneous understandings.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">17.2 Severability</h3>
                <p>
                  If any provision of these Terms is held by a court or arbitrator of competent jurisdiction to be invalid, illegal, or unenforceable, that provision shall be modified to the minimum extent necessary to render it enforceable, or, if such modification is not possible, severed; the remaining provisions shall continue in full force.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">17.3 No Waiver</h3>
                <p>
                  No failure or delay by Totemian to enforce any right or provision of these Terms shall constitute a waiver. Any waiver shall be effective only if expressly made in writing.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">17.4 Assignment</h3>
                <p>
                  You may not assign or transfer these Terms, in whole or in part, without Totemian's prior written consent. Totemian may assign or transfer these Terms freely, including in connection with a merger, acquisition, financing, reorganization, or sale of assets.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">17.5 Notices</h3>
                <p>
                  Notices to Totemian must be sent to{" "}
                  <a href="mailto:legal@tribe26.app" className="text-[#CFFF5E] hover:underline">legal@tribe26.app</a>
                  {" "}or to Totemian's registered office at the address shown above. Notices to you will be sent to the email address associated with your Account, or delivered through the Services by in-app message or push notification.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">17.6 Force Majeure</h3>
                <p>
                  Totemian shall not be liable for any delay or failure in performance caused by events beyond its reasonable control, including acts of God, war, civil unrest, governmental action, pandemic, internet or telecommunications failure, or other force majeure.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">17.7 Language</h3>
                <p>
                  These Terms are drafted in English. Any translation provided for convenience does not modify the English version, which shall prevail in case of any conflict.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">17.8 Relationship of the Parties</h3>
                <p>
                  Nothing in these Terms creates a partnership, joint venture, employment, fiduciary, or agency relationship between you and Totemian.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">17.9 Contact</h3>
                <p>
                  For questions regarding these Terms, please contact{" "}
                  <a href="mailto:legal@tribe26.app" className="text-[#CFFF5E] hover:underline">legal@tribe26.app</a>.
                  {" "}For general support, please contact{" "}
                  <a href="mailto:support@tribe26.app" className="text-[#CFFF5E] hover:underline">support@tribe26.app</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <section className="pt-4 border-t border-white/10">
            <p className="text-white/40 font-mono text-xs">
              Tribe26 is a brand and platform operated by Totemian Brandboards Inc., 1771 Robson Street, Suite 1132, Vancouver, BC V6G 3B7, Canada.
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
