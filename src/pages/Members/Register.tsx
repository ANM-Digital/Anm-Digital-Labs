import React, { useState } from "react";
import { Link, useNavigate } from "../../router";
import { SEOHead } from "../../components/SEOHead";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ArrowRight, ShieldCheckIcon } from "../../components/Icons";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";

export function MemberRegisterPage() {
  const { t } = useLanguage();
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isAuthenticated) {
    navigate("/members/dashboard", { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all mandatory fields.");
      return;
    }
    if (!consent) {
      setError("You must accept the Terms of Use and Privacy Policy.");
      return;
    }

    setIsSubmitting(true);
    const res = await register(name, email, password, company);
    setIsSubmitting(false);

    if (res.success) {
      navigate("/members/dashboard");
    } else {
      setError(res.error || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="page-members-auth">
      <SEOHead
        title="Register — ANM Digital Client Portal"
        description="Register for the ANM Digital client dashboard to manage active software licenses and project roadmaps."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs
            items={[
              { label: t.nav.members, to: "/members/login" },
              { label: t.nav.register },
            ]}
          />
        </div>
      </div>

      <section className="section section-auth-body">
        <div className="section-container auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <div className="tag">
                <i></i>
                <span>Account Registration</span>
              </div>
              <h2>Create Client Account</h2>
              <p>Register for access to ANM Digital development telemetry, product licenses, and support channels.</p>
            </div>

            {error && <div className="auth-error-banner">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form" noValidate>
              <div className="form-group">
                <label htmlFor="reg-name">Full Name *</label>
                <input
                  id="reg-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reg-email">Work Email Address *</label>
                <input
                  id="reg-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reg-company">Company / Organization</label>
                <input
                  id="reg-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Corp Ltd"
                />
              </div>

              <div className="form-group">
                <label htmlFor="reg-password">Password (min. 6 characters) *</label>
                <input
                  id="reg-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                  />
                  <span>
                    I agree to the <Link to="/terms">Terms of Use</Link> and have read the{" "}
                    <Link to="/privacy">Privacy Policy</Link>.
                  </span>
                </label>
              </div>

              <button type="submit" className="button full-width" disabled={isSubmitting}>
                <span>{isSubmitting ? "Creating Account..." : "Complete Registration"}</span>
                <ArrowRight size={15} />
              </button>
            </form>

            <div className="auth-footer-note">
              <p>
                Already have an account? <Link to="/members/login">Sign in here</Link>.
              </p>
            </div>

            <div className="auth-security-notice">
              <ShieldCheckIcon size={16} />
              <span>Strict enterprise privacy. No marketing spam.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
