import React, { useState, useEffect } from "react";
import { Link } from "../router";
import { useLanguage } from "../context/LanguageContext";

declare global {
  interface Window {
    updateGoogleConsent?: (consent: any) => any;
    acceptAllGoogleConsent?: () => any;
    rejectOptionalGoogleConsent?: () => any;
  }
}

const CONSENT_DISMISSED_KEY = "anm_cookie_banner_dismissed";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [marketingAllowed, setMarketingAllowed] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(CONSENT_DISMISSED_KEY);
      if (!dismissed) {
        setVisible(true);
      }
    } catch {
      // storage unavailable
    }
  }, []);

  const handleAcceptAll = () => {
    if (typeof window.acceptAllGoogleConsent === "function") {
      window.acceptAllGoogleConsent();
    }
    dismiss();
  };

  const handleRejectOptional = () => {
    if (typeof window.rejectOptionalGoogleConsent === "function") {
      window.rejectOptionalGoogleConsent();
    }
    dismiss();
  };

  const handleSaveCustom = () => {
    if (typeof window.updateGoogleConsent === "function") {
      window.updateGoogleConsent({
        ad_storage: marketingAllowed ? "granted" : "denied",
        analytics_storage: analyticsAllowed ? "granted" : "denied",
        ad_user_data: marketingAllowed ? "granted" : "denied",
        ad_personalization: marketingAllowed ? "granted" : "denied",
        personalization_storage: marketingAllowed ? "granted" : "denied",
        functionality_storage: "granted",
        security_storage: "granted",
      });
    }
    dismiss();
  };

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(CONSENT_DISMISSED_KEY, "true");
    } catch {
      // storage unavailable
    }
  };

  if (!visible) return null;

  return (
    <aside className="cookie-banner" role="dialog" aria-modal="false" aria-label="Privacy & Cookie Preferences">
      <div className="cookie-banner-container">
        <div className="cookie-banner-content">
          <div className="cookie-banner-header">
            <span className="tag">
              <i></i> Privacy &amp; Consent
            </span>
            <h3>We respect your data privacy</h3>
          </div>
          <p>
            ANM Digital uses essential cookies for site security and functionality. With your consent, we also utilize privacy-preserving analytics (Google Consent Mode v2) to understand system performance. Learn more in our{" "}
            <Link to="/cookies">Cookie Policy</Link> and <Link to="/privacy">Privacy Policy</Link>.
          </p>

          {showSettings && (
            <div className="cookie-settings-panel">
              <div className="cookie-toggle-row">
                <div>
                  <strong>Essential &amp; Security Cookies</strong>
                  <p>Required for basic platform security, authentication, and routing integrity.</p>
                </div>
                <span className="cookie-badge-always">Always Active</span>
              </div>
              <div className="cookie-toggle-row">
                <div>
                  <strong>Performance &amp; Analytics Cookies</strong>
                  <p>Helps us measure traffic volume and optimize user interface speeds.</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="cookie-toggle-row">
                <div>
                  <strong>Ad Attribution &amp; Measurement</strong>
                  <p>Provides aggregated measurement for campaign attribution.</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={marketingAllowed}
                    onChange={(e) => setMarketingAllowed(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          )}
        </div>

        <div className="cookie-banner-actions">
          {showSettings ? (
            <>
              <button className="button small" onClick={handleSaveCustom}>
                Save Preferences
              </button>
              <button className="ghost-button" onClick={() => setShowSettings(false)}>
                Back
              </button>
            </>
          ) : (
            <>
              <button className="button small" onClick={handleAcceptAll}>
                Accept All
              </button>
              <button className="ghost-button" onClick={handleRejectOptional}>
                Reject Optional
              </button>
              <button className="text-button" onClick={() => setShowSettings(true)}>
                Customize Settings
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
