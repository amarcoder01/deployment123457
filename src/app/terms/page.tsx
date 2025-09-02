import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Vidality Trading Platform',
  description: 'Terms of Service governing access to and use of the Vidality Trading Platform.',
  keywords: 'terms of service, trading platform, legal, conditions, vidality, australia',
}

export default function TermsPage() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Terms of Service | Vidality</title>
          <meta name="description" content="Terms of Service governing access to and use of the Vidality Trading Platform." />
          <style>
            :root {
              --maxw: 820px;
              --fg: #0f172a;      /* slate-900 */
              --muted: #475569;   /* slate-600 */
              --border: #e2e8f0;  /* slate-200 */
              --accent: #0ea5e9;  /* sky-500 */
            }
            html, body { margin:0; padding:0; }
            body {
              font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
              color: var(--fg);
              line-height: 1.6;
              background: #fff;
            }
            .container {
              max-width: var(--maxw);
              margin: 40px auto;
              padding: 0 20px 80px;
            }
            header { margin-bottom: 24px; }
            h1 {
              font-size: clamp(28px, 4vw, 36px);
              line-height: 1.2;
              margin: 0 0 6px;
            }
            .meta {
              font-size: 14px;
              color: var(--muted);
            }
            nav.toc {
              border: 1px solid var(--border);
              border-radius: 12px;
              padding: 16px;
              background: #fafafa;
              margin: 24px 0 32px;
            }
            nav.toc strong { display:block; margin-bottom: 8px; }
            nav.toc a {
              color: var(--accent);
              text-decoration: none;
            }
            nav.toc a:hover { text-decoration: underline; }
            section { margin: 28px 0; }
            h2 {
              font-size: clamp(20px, 3vw, 24px);
              margin: 0 0 8px;
              line-height: 1.3;
            }
            h3 { margin: 16px 0 6px; font-size: 17px; }
            p { margin: 10px 0; }
            ol { padding-left: 20px; }
            ul { padding-left: 20px; }
            hr { border: 0; border-top: 1px solid var(--border); margin: 24px 0; }
            .note { color: var(--muted); font-size: 14px; }
            footer.page-end {
              border-top: 1px solid var(--border);
              margin-top: 40px;
              padding-top: 16px;
              font-size: 14px;
              color: var(--muted);
            }
            a { color: var(--accent); }
          </style>
        </head>
        <body>
          <main class="container" role="main">
            <header>
              <h1>Terms of Service</h1>
              <div class="meta">Effective Date: August 31, 2025</div>
            </header>

            <!-- Table of Contents -->
            <nav class="toc" aria-label="Table of contents">
              <strong>Contents</strong>
              <ol>
                <li><a href="#scope-of-service">Scope of Service</a></li>
                <li><a href="#eligibility">Eligibility</a></li>
                <li><a href="#user-obligations">User Obligations</a></li>
                <li><a href="#accounts-security">Accounts &amp; Security</a></li>
                <li><a href="#ai-bot-tools">AI Bot &amp; Automated Tools</a></li>
                <li><a href="#ai-paper-disclaimer">AI &amp; Paper Trading Disclaimer</a></li>
                <li><a href="#intellectual-property">Intellectual Property</a></li>
                <li><a href="#compliance-regulatory">Compliance &amp; Regulatory Status</a></li>
                <li><a href="#payments-subscriptions">Payments &amp; Subscriptions</a></li>
                <li><a href="#limitation-liability">Limitation of Liability</a></li>
                <li><a href="#indemnification">Indemnification</a></li>
                <li><a href="#suspension-termination">Suspension &amp; Termination</a></li>
                <li><a href="#governing-law-disputes">Governing Law &amp; Dispute Resolution</a></li>
                <li><a href="#modifications">Modifications</a></li>
                <li><a href="#contact">Contact Information</a></li>
              </ol>
            </nav>

            <section id="intro">
              <p>These Terms of Service ("Terms") govern access to and use of the Vidality Trading Platform ("Vidality" or the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms and all applicable laws and regulations.</p>
            </section>

            <hr />

            <section id="scope-of-service" aria-labelledby="h-scope">
              <h2 id="h-scope">1. Scope of Service</h2>
              <ol>
                <li>The Platform provides AI-powered market insights, simulated paper trading environments, and related tools designed for educational and informational purposes only.</li>
                <li>The Platform does <strong>not</strong> facilitate or execute real-money transactions, securities trading, or investment brokerage.</li>
              </ol>
          </section>

            <section id="eligibility" aria-labelledby="h-eligibility">
              <h2 id="h-eligibility">2. Eligibility</h2>
              <ol>
                <li>Users must be at least 18 years of age and legally permitted to enter into binding agreements under applicable law.</li>
                <li>Use of the Platform may be restricted in jurisdictions where AI-powered trading simulations or related activities are prohibited.</li>
              </ol>
          </section>

            <section id="user-obligations" aria-labelledby="h-obligations">
              <h2 id="h-obligations">3. User Obligations</h2>
              <ol>
                <li>Provide accurate information when creating accounts and maintain the confidentiality of login credentials.</li>
                <li>Do not misuse the Platform, including (without limitation):
                  <ul>
                    <li>Reverse engineering, unauthorized scraping, or tampering with system functionality;</li>
                    <li>Using the Platform for unlawful, deceptive, or misleading purposes.</li>
                  </ul>
                  </li>
              </ol>
          </section>

            <section id="accounts-security" aria-labelledby="h-accounts">
              <h2 id="h-accounts">4. Accounts &amp; Security</h2>
              <ol>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree to notify us immediately of any unauthorized use of your account.</li>
                <li>We are not liable for any loss or damage resulting from failure to secure your account.</li>
              </ol>
          </section>

            <section id="ai-bot-tools" aria-labelledby="h-bot">
              <h2 id="h-bot">5. AI Bot &amp; Automated Tools</h2>
              <ol>
                <li><strong>Disclaimer.</strong> The AI-powered bot is provided for informational and assistive purposes only. It does not provide legal, medical, financial, or professional advice.</li>
                <li><strong>Accuracy.</strong> Responses may be incomplete, outdated, or inaccurate. Users are solely responsible for verifying any information provided.</li>
                <li><strong>Monitoring.</strong> Interactions with the bot may be monitored for quality, compliance, and security.</li>
              </ol>
            </section>

            <section id="ai-paper-disclaimer" aria-labelledby="h-ai-paper">
              <h2 id="h-ai-paper">6. AI Features &amp; Paper Trading Disclaimer</h2>
              <ol>
                <li>All AI-generated insights, predictions, or simulations are provided for <strong>educational and research purposes only</strong> and do not constitute financial advice, investment recommendations, or guarantees of performance.</li>
                <li>Paper trading results are hypothetical and may not reflect actual market conditions.</li>
                <li>Vidality assumes no liability for reliance on AI outputs or simulated results.</li>
              </ol>
          </section>

            <section id="intellectual-property" aria-labelledby="h-ip">
              <h2 id="h-ip">7. Intellectual Property</h2>
              <ol>
                <li>All content, algorithms, design elements, and data available through the Platform are the exclusive property of Vidality or its licensors.</li>
                <li>Users are granted a limited, non-transferable, revocable license to access and use the Platform strictly in accordance with these Terms.</li>
              </ol>
          </section>

            <section id="compliance-regulatory" aria-labelledby="h-compliance">
              <h2 id="h-compliance">8. Compliance &amp; Regulatory Status</h2>
              <ol>
                <li>Vidality is not a registered broker-dealer, investment advisor, or financial institution.</li>
                <li>Nothing in these Terms or on the Platform constitutes financial, legal, or tax advice. Users are solely responsible for compliance with applicable laws.</li>
              </ol>
              <p class="note">Global use: certain features may be restricted or unavailable in some jurisdictions.</p>
          </section>

            <section id="payments-subscriptions" aria-labelledby="h-payments">
              <h2 id="h-payments">9. Payments &amp; Subscriptions</h2>
              <p class="note">If applicable now or in the future:</p>
              <ol>
                <li>Certain services may require payment or subscription fees; pricing and inclusions will be disclosed at the point of purchase.</li>
                <li>Unless otherwise stated, fees are billed in advance and are non-refundable except as required by law.</li>
                <li>Vidality may modify pricing or subscription terms with prior notice.</li>
              </ol>
          </section>

            <section id="limitation-liability" aria-labelledby="h-ll">
              <h2 id="h-ll">10. Limitation of Liability</h2>
              <ol>
                <li>The Services are provided "AS IS" and "AS AVAILABLE," without warranties of any kind, express or implied.</li>
                <li>We do not guarantee uninterrupted, error-free, or completely secure Services.</li>
                <li>To the maximum extent permitted by law, Vidality shall not be liable for:
                  <ul>
                    <li>Losses arising from use of AI insights or simulated trading results;</li>
                    <li>Technical errors, interruptions, or unauthorized access;</li>
                    <li>Any indirect, consequential, or punitive damages.</li>
                  </ul>
                </li>
              </ol>
          </section>

            <section id="indemnification" aria-labelledby="h-indemn">
              <h2 id="h-indemn">11. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless Vidality and its affiliates, officers, employees, and agents from any claims, damages, liabilities, and expenses arising from (a) your use of the Services; (b) your violation of these Terms; or (c) your infringement of third-party rights.</p>
          </section>

            <section id="suspension-termination" aria-labelledby="h-st">
              <h2 id="h-st">12. Suspension &amp; Termination</h2>
              <ol>
                <li>Vidality may suspend or terminate access to the Platform at its sole discretion for violations of these Terms or misuse of the Platform.</li>
                <li>Users may discontinue use of the Platform at any time.</li>
              </ol>
          </section>

            <section id="governing-law-disputes" aria-labelledby="h-law">
              <h2 id="h-law">13. Governing Law &amp; Dispute Resolution</h2>
              <ol>
                <li>These Terms shall be governed by and construed in accordance with applicable law of the relevant jurisdiction, without regard to conflict-of-law rules.</li>
                <li>Any disputes shall be resolved exclusively through arbitration or courts in a competent forum, subject to applicable law.</li>
              </ol>
              <p class="note">If you need a specific jurisdiction named (e.g., Western Australia), replace this section's language accordingly.</p>
          </section>

            <section id="modifications" aria-labelledby="h-mods">
              <h2 id="h-mods">14. Modifications</h2>
              <p>Vidality may update or amend these Terms at any time. Continued use of the Platform following such updates constitutes acceptance of the revised Terms.</p>
          </section>

            <section id="contact" aria-labelledby="h-contact">
              <h2 id="h-contact">15. Contact Information</h2>
              <p>For questions or concerns regarding these Terms, contact:</p>
              <ul>
                <li><a href="mailto:amar@vidality.com">amar@vidality.com</a></li>
                <li><a href="mailto:contact.support.vidality@gmail.com">contact.support.vidality@gmail.com</a></li>
              </ul>
          </section>

            <footer class="page-end">
              © 2025 Vidality. All rights reserved.
            </footer>
          </main>
        </body>
        </html>
      `
    }} />
  )
}
