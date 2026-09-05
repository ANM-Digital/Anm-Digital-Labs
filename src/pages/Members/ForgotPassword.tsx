import React, { useState } from "react";
import { Link } from "../../router";
import { SEOHead } from "../../components/SEOHead";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ArrowRight, CheckIcon } from "../../components/Icons";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";

export function MemberForgotPasswordPage() {
  const { t } = useLanguage();
  const { resetPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    const res = await resetPassword(email);
    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
    } else {
      setError(res.error || "Password reset failed.");
    }
  };

  return (
    <div className="page-members-auth">
      <SEOHead
        title="Reset Password — ANM Digital Client Portal"
        description="Reset your ANM Digital client portal password."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs
            items={[
              { label: t.nav.members, to: "/members/login" },
              { label: "Password Reset" },
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
                <span>Account Recovery</span>
              </div>
              <h2>Reset Your Password</h2>
              <p>Enter your registered work email and we will send password recovery instructions.</p>
            </div>

            {submitted ? (
              <div className="auth-success-box">
                <CheckIcon size={24} className="success-icon" />
                <h3>Recovery Instructions Sent</h3>
                <p>
                  If an account exists for <b>{email}</b>, you will receive password reset instructions shortly.
                </p>
                <Link to="/members/login" className="button small full-width">
                  <span>Return to Sign In</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="auth-form" noValidate>
                {error && <div className="auth-error-banner">{error}</div>}

                <div className="form-group">
                  <label htmlFor="reset-email">Work Email Address</label>
                  <input
                    id="reset-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <button type="submit" className="button full-width" disabled={isSubmitting}>
                  <span>{isSubmitting ? "Sending..." : "Send Reset Link"}</span>
                  <ArrowRight size={15} />
                </button>

                <div className="auth-footer-note">
                  <p>
                    Remember your password? <Link to="/members/login">Sign in</Link>.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
