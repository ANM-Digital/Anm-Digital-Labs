import React, { useState } from "react";
import { Link } from "../../router";
import { SEOHead } from "../../components/SEOHead";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ArrowRight, CheckIcon, ShieldCheckIcon } from "../../components/Icons";
import { useLanguage } from "../../context/LanguageContext";

export function DataDeletionPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [appName, setAppName] = useState("all");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please provide a valid email address associated with your account.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="page-legal">
      <SEOHead
        title="User Data Deletion Request — ANM Digital Labs"
        description="Submit a verified user data deletion request for any ANM Digital Labs mobile app, website, or SaaS platform in compliance with GDPR and Google Play policies."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.footer.dataDeletion }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>User Rights</span>
            </div>
            <h1>Data Deletion Request</h1>
            <p className="page-lead">
              In accordance with Google Play Developer Policy and GDPR regulations, you may submit a request to permanently delete all personal data associated with your use of our apps or services.
            </p>
          </div>
        </div>
      </div>

      <section className="section section-legal-content">
        <div className="section-container legal-container">
          <article className="legal-article">
            <h2>Data Deletion Protocol</h2>
            <p>
              When you submit a deletion request, our engineering team will identify and permanently purge all associated authentication credentials, contact records, and stored cloud preferences within <b>30 calendar days</b>.
            </p>
            <p>
              Note: For offline mobile applications (such as <i>Proud Muslim</i> and <i>PhotoBeautify</i>), personal prayer records or edited photos are stored exclusively on your local device and are permanently deleted as soon as you uninstall the application or clear app storage in Android Settings.
            </p>

            <div className="data-deletion-form-wrap">
              <h3>Submit Deletion Request</h3>
              {submitted ? (
                <div className="auth-success-box">
                  <CheckIcon size={24} className="success-icon" />
                  <h4>Deletion Request Received</h4>
                  <p>
                    We have recorded your deletion request for <b>{email}</b>. A confirmation email will be dispatched once the records have been purged.
                  </p>
                  <Link to="/" className="button small">
                    <span>Return to Home</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="auth-form" noValidate>
                  {error && <div className="auth-error-banner">{error}</div>}

                  <div className="form-group">
                    <label htmlFor="del-email">Account / Contact Email *</label>
                    <input
                      id="del-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="user@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="del-app">Application / Service</label>
                    <select id="del-app" value={appName} onChange={(e) => setAppName(e.target.value)}>
                      <option value="all">All ANM Digital Services &amp; Accounts</option>
                      <option value="orion-hq">Orion HQ</option>
                      <option value="textspeeder">TextSpeeder</option>
                      <option value="accountpilot">AccountPilot</option>
                      <option value="minipost">Mini Post App</option>
                      <option value="proud-muslim">Proud Muslim</option>
                      <option value="photobeautify">PhotoBeautify</option>
                      <option value="members-portal">ANM Digital Member Portal</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="del-details">Additional Details (Optional)</label>
                    <textarea
                      id="del-details"
                      rows={3}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Any specific account identifiers or user IDs..."
                    ></textarea>
                  </div>

                  <button type="submit" className="button small full-width">
                    <span>Submit Deletion Request</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
