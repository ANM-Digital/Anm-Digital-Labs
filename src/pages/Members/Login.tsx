import React, { useState } from "react";
import { Link, useNavigate } from "../../router";
import { SEOHead } from "../../components/SEOHead";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ArrowRight, ShieldCheckIcon } from "../../components/Icons";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";

export function MemberLoginPage() {
  const { t } = useLanguage();
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    navigate("/members/dashboard", { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please provide your email address and password.");
      return;
    }

    setIsSubmitting(true);
    const result = await login(email, password);
    setIsSubmitting(false);

    if (result.success) {
      navigate("/members/dashboard");
    } else {
      setError(result.error || "Authentication failed. Please check your credentials.");
    }
  };

  return (
    <div className="page-members-auth">
      <SEOHead
        title="Member Login — ANM Digital Client Portal"
        description="Access your ANM Digital client dashboard, active software licenses, API keys, and deployment telemetry."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs
            items={[
              { label: t.nav.members, to: "/members/login" },
              { label: t.nav.login },
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
                <span>Member Authentication</span>
              </div>
              <h2>Sign in to Member Portal</h2>
              <p>Manage your active enterprise licenses, operational dashboards, and development roadmaps.</p>
            </div>

            {error && <div className="auth-error-banner">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form" noValidate>
              <div className="form-group">
                <label htmlFor="login-email">Work Email Address</label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <div className="label-split">
                  <label htmlFor="login-password">Password</label>
                  <Link to="/members/forgot-password" className="forgot-pass-link">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
              </div>

              <button type="submit" className="button full-width" disabled={isSubmitting}>
                <span>{isSubmitting ? "Authenticating..." : "Sign In to Dashboard"}</span>
                <ArrowRight size={15} />
              </button>
            </form>

            <div className="auth-footer-note">
              <p>
                Don't have an enterprise account? <Link to="/members/register">Register for access</Link> or{" "}
                <Link to="/contact">contact support</Link>.
              </p>
            </div>

            <div className="auth-security-notice">
              <ShieldCheckIcon size={16} />
              <span>Protected by Firebase Authentication &amp; TLS 1.3 encryption.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
