import React from "react";
import { Link } from "../../router";
import { SEOHead } from "../../components/SEOHead";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { useLanguage } from "../../context/LanguageContext";

export function TermsOfUsePage() {
  const { t } = useLanguage();

  return (
    <div className="page-legal">
      <SEOHead
        title="Terms of Use — ANM Digital Labs"
        description="Terms and conditions governing the use of the ANM Digital Labs website, software applications, and client portal."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.footer.termsOfUse }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Legal Agreement</span>
            </div>
            <h1>Terms of Use</h1>
            <p className="page-lead">The legal terms governing your access to and use of the ANM Digital Labs website and services.</p>
            <div className="legal-date-tag">Last Updated: 26 August 2026</div>
          </div>
        </div>
      </div>

      <section className="section section-legal-content">
        <div className="section-container legal-container">
          <article className="legal-article">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the website at <code>anmdigital.online</code>, our client portal, or any digital product published by ANM Digital Labs (operated by <b>Yoga Products Ltd</b>), you agree to be bound by these Terms of Use and our <Link to="/privacy">Privacy Policy</Link>.
            </p>

            <h2>2. Acceptable Use Policy</h2>
            <p>You agree to use our website and software exclusively for lawful purposes. You must not:</p>
            <ul>
              <li>Attempt unauthorized access to our servers, user accounts, or connected Firebase databases.</li>
              <li>Deploy automated vulnerability scanners, scrapers, or DDoS attacks against our domain or APIs.</li>
              <li>Reverse engineer, decompile, or disassemble production application packages except to the extent permitted by applicable law.</li>
              <li>Misrepresent your identity, affiliation, or authority when submitting business inquiries.</li>
            </ul>

            <h2>3. Intellectual Property Rights</h2>
            <p>
              All trademarks, product names (including <i>Proud Muslim</i>, <i>PhotoBeautify</i>, <i>Orion HQ</i>, <i>Mini Post App</i>, <i>TextSpeeder</i>, <i>AccountPilot</i>, <i>Caelum HQ</i>, and <i>Roman Times</i>), proprietary source code, interface designs, 3D visual artwork, and documentation are the exclusive intellectual property of Yoga Products Ltd and ANM Digital Labs.
            </p>

            <h2>4. Software Availability &amp; Development Status</h2>
            <p>
              Descriptions of software products marked as "Active Development" or "Beta" represent ongoing engineering roadmaps. Features and release timelines are subject to enhancement without prior notice.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by the laws of England and Wales, ANM Digital Labs and Yoga Products Ltd shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use this website or associated software.
            </p>

            <h2>6. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of <b>England and Wales</b>. Any legal disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              For legal inquiries regarding these terms:
              <br />
              <b>Email:</b> <a href="mailto:info@anmdigital.online">info@anmdigital.online</a>
              <br />
              <b>Corporate Office:</b> Yoga Products Ltd / ANM Digital Labs · London, United Kingdom
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
