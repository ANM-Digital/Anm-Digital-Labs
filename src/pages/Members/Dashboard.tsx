import React, { useState } from "react";
import { Link, useNavigate } from "../../router";
import { SEOHead } from "../../components/SEOHead";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ArrowRight, ArrowUpRight, CheckIcon, ShieldCheckIcon, UserIcon } from "../../components/Icons";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";

export function MemberDashboardPage() {
  const { t } = useLanguage();
  const { user, isAuthenticated, logout, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<"licenses" | "profile" | "security">("licenses");
  const [name, setName] = useState(user?.name || "");
  const [company, setCompany] = useState(user?.company || "");
  const [saveMessage, setSaveMessage] = useState("");

  if (!isAuthenticated || !user) {
    navigate("/members/login", { replace: true });
    return null;
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, company });
    setSaveMessage("Profile updated successfully.");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate("/members/login");
  };

  return (
    <div className="page-members-dashboard">
      <SEOHead
        title="Client Dashboard — ANM Digital Portal"
        description="Manage active enterprise software licenses, deployment telemetry, and account security."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs
            items={[
              { label: t.nav.members, to: "/members/dashboard" },
              { label: t.nav.dashboard },
            ]}
          />

          <div className="dashboard-header-bar">
            <div className="user-profile-summary">
              <div className="user-avatar-badge">
                <UserIcon size={24} />
              </div>
              <div>
                <h2>Welcome, {user.name}</h2>
                <p>
                  <span>{user.email}</span> · <b>{user.role} Account</b> · <span>Member since {user.joinedDate}</span>
                </p>
              </div>
            </div>

            <button onClick={handleLogout} className="ghost-button logout-btn" aria-label="Sign out">
              <span>{t.nav.logout}</span>
            </button>
          </div>
        </div>
      </div>

      <section className="section section-dashboard-body">
        <div className="section-container">
          {/* Dashboard Navigation Tabs */}
          <div className="dashboard-tabs" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === "licenses"}
              className={`dash-tab ${activeTab === "licenses" ? "active" : ""}`}
              onClick={() => setActiveTab("licenses")}
            >
              Active Products &amp; Licenses
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "profile"}
              className={`dash-tab ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              Organization &amp; Profile
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "security"}
              className={`dash-tab ${activeTab === "security" ? "active" : ""}`}
              onClick={() => setActiveTab("security")}
            >
              Security &amp; Privacy Logs
            </button>
          </div>

          {/* Tab 1: Licenses */}
          {activeTab === "licenses" && (
            <div className="dashboard-tab-panel">
              <div className="panel-header">
                <h3>Subscribed Software &amp; Platform Access</h3>
                <p>Overview of active cloud deployments and application licenses provisioned for your organization.</p>
              </div>

              <div className="licenses-grid">
                {user.activeLicenses.map((lic) => (
                  <div key={lic.productId} className="license-card">
                    <div className="license-top">
                      <span className="license-badge-pill">{lic.status}</span>
                      <span className="license-tier">{lic.tier}</span>
                    </div>
                    <h4>{lic.productName}</h4>
                    <div className="license-specs">
                      <p>
                        <span>License Status:</span> <b>{lic.status}</b>
                      </p>
                      <p>
                        <span>Renewal / Evaluation:</span> <b>{lic.renewalDate}</b>
                      </p>
                    </div>
                    <div className="license-actions">
                      <Link to={`/products/${lic.productId}`} className="button small">
                        <span>Launch Application</span>
                        <ArrowUpRight size={13} />
                      </Link>
                      <Link to="/contact" className="ghost-button">
                        <span>Manage License</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dashboard-help-box">
                <div className="help-box-content">
                  <h4>Need to provision additional seats or custom software?</h4>
                  <p>Contact our engineering delivery team to request dedicated enterprise staging environments.</p>
                </div>
                <Link to="/contact" className="button small">
                  <span>Contact Delivery Lead</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}

          {/* Tab 2: Profile Settings */}
          {activeTab === "profile" && (
            <div className="dashboard-tab-panel">
              <div className="panel-header">
                <h3>Profile &amp; Contact Information</h3>
                <p>Update your primary commercial contact details.</p>
              </div>

              {saveMessage && <div className="auth-success-banner">{saveMessage}</div>}

              <form onSubmit={handleSaveProfile} className="profile-form">
                <div className="form-group">
                  <label htmlFor="prof-name">Full Name</label>
                  <input
                    id="prof-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="prof-email">Email Address (Read-only)</label>
                  <input id="prof-email" type="email" value={user.email} disabled />
                </div>

                <div className="form-group">
                  <label htmlFor="prof-company">Organization</label>
                  <input
                    id="prof-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <button type="submit" className="button small">
                  <span>Save Profile Changes</span>
                </button>
              </form>
            </div>
          )}

          {/* Tab 3: Security & Privacy */}
          {activeTab === "security" && (
            <div className="dashboard-tab-panel">
              <div className="panel-header">
                <h3>Security &amp; Data Privacy Settings</h3>
                <p>Manage authenticated session policies and privacy preferences.</p>
              </div>

              <div className="security-cards-list">
                <div className="security-item-card">
                  <ShieldCheckIcon size={20} />
                  <div>
                    <b>Two-Factor Authentication (2FA)</b>
                    <p>Enforce secondary verification via TOTP authenticator app upon sign in.</p>
                  </div>
                  <span className="status-chip active">Enabled</span>
                </div>

                <div className="security-item-card">
                  <ShieldCheckIcon size={20} />
                  <div>
                    <b>Data Export &amp; Portability</b>
                    <p>Request a complete JSON bundle of all telemetry and project configuration data.</p>
                  </div>
                  <button className="ghost-button" onClick={() => alert("Data export bundle generated.")}>
                    Export Data
                  </button>
                </div>

                <div className="security-item-card">
                  <ShieldCheckIcon size={20} />
                  <div>
                    <b>Account &amp; Telemetry Deletion</b>
                    <p>Permanently remove account credentials and associated staging data.</p>
                  </div>
                  <Link to="/data-deletion" className="text-button danger">
                    Request Deletion
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Architecture Status Note */}
          <div className="dashboard-backend-notice">
            <small>FIREBASE AUTH &amp; PORTAL ARCHITECTURE</small>
            <p>
              This Member Portal interface is connected with local state storage and conforms to the ANM Digital Firebase Authentication provider schema. For production cluster activation, configure the dedicated Firebase Auth domain in <code>firebase.json</code>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
