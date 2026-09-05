import React, { useState } from "react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, ArrowUpRight, CheckIcon, ShieldCheckIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";

export function ContactPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    enquiryType: "general",
    message: "",
    consent: false,
    honeypot: "", // hidden spam field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = t.contact.requiredField;
    }

    if (!formData.email.trim()) {
      errs.email = t.contact.requiredField;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t.contact.invalidEmail;
    }

    if (!formData.subject.trim()) {
      errs.subject = t.contact.requiredField;
    }

    if (!formData.message.trim()) {
      errs.message = t.contact.requiredField;
    }

    if (!formData.consent) {
      errs.consent = t.contact.consentRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (formData.honeypot) {
      setIsSubmitted(true);
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      enquiryType: "general",
      message: "",
      consent: false,
      honeypot: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="page-contact">
      <SEOHead
        title="Contact — ANM Digital Labs"
        description="Get in touch with ANM Digital Labs for software development partnerships, mobile app architecture, and technical consulting. Verified offices in London and Istanbul."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.nav.contact }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>{t.contact.tag}</span>
            </div>
            <h1>{t.contact.title}</h1>
            <p className="page-lead">{t.contact.lead}</p>
          </div>
        </div>
      </div>

      <section className="section section-contact-body">
        <div className="section-container">
          <div className="contact-layout-grid">
            {/* Contact Form Container */}
            <div className="contact-form-card">
              <div className="form-header">
                <h3>{t.contact.formTitle}</h3>
                <p>Please provide structured information regarding your scope, timeline, and intended technical deliverables.</p>
              </div>

              {isSubmitted ? (
                <div className="contact-success-box">
                  <div className="success-icon-wrap">
                    <CheckIcon size={28} />
                  </div>
                  <h3>{t.contact.successTitle}</h3>
                  <p>{t.contact.successMessage}</p>
                  <button className="button small" onClick={handleReset}>
                    <span>{t.contact.sendAnother}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  {/* Spam honeypot (hidden from human users) */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="hp-field">Leave empty</label>
                    <input
                      id="hp-field"
                      type="text"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-name">{t.contact.fullName} *</label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Smith"
                        required
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "name-error" : undefined}
                      />
                      {errors.fullName && (
                        <span id="name-error" className="field-error">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email">{t.contact.emailAddress} *</label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className="field-error">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-phone">{t.contact.phoneNumber}</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 20 ..."
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-company">{t.contact.companyName}</label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Organization Name"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-subject">{t.contact.subject} *</label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Partnership / Scope Overview"
                        required
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                      />
                      {errors.subject && (
                        <span id="subject-error" className="field-error">
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-type">{t.contact.enquiryType}</label>
                      <select
                        id="contact-type"
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      >
                        <option value="general">{t.contact.enquiryTypeGeneral}</option>
                        <option value="mobile">{t.contact.enquiryTypeMobile}</option>
                        <option value="web">{t.contact.enquiryTypeWeb}</option>
                        <option value="ai">{t.contact.enquiryTypeAi}</option>
                        <option value="consulting">{t.contact.enquiryTypeConsulting}</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-msg">{t.contact.message} *</label>
                    <textarea
                      id="contact-msg"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the target audience, systems, and desired outcome..."
                      required
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "msg-error" : undefined}
                    ></textarea>
                    {errors.message && (
                      <span id="msg-error" className="field-error">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        required
                      />
                      <span>{t.contact.consentText}</span>
                    </label>
                    {errors.consent && <span className="field-error">{errors.consent}</span>}
                  </div>

                  <button type="submit" className="button full-width" disabled={isSubmitting}>
                    <span>{isSubmitting ? t.contact.sending : t.contact.submitButton}</span>
                    <ArrowUpRight size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar: Verified Office Information */}
            <div className="contact-info-sidebar">
              <div className="contact-office-card">
                <span className="office-badge">UK HEADQUARTERS</span>
                <h4>{t.contact.londonOffice}</h4>
                <p>{t.contact.londonAddress}</p>
                <div className="office-meta">
                  <small>Operating Corporate Entity</small>
                  <b>Yoga Products Ltd</b>
                </div>
              </div>

              <div className="contact-office-card">
                <span className="office-badge">TURKEY OPERATIONS</span>
                <h4>{t.contact.istanbulOffice}</h4>
                <p>{t.contact.istanbulAddress}</p>
                <div className="office-meta">
                  <small>Technical Engineering Facility</small>
                  <b>ANM Digital Labs</b>
                </div>
              </div>

              <div className="contact-email-card">
                <span className="office-badge">DIRECT COMMUNICATION</span>
                <h4>{t.contact.officialEmail}</h4>
                <a href="mailto:info@anmdigital.online" className="direct-email-link">
                  info@anmdigital.online
                </a>
                <p>Standard response window: Within 1 business day.</p>
              </div>

              <div className="contact-guidelines-box">
                <h4>Recommended First Message Details</h4>
                <ul className="guidelines-list">
                  <li>
                    <span>01</span>
                    <b>The problem or commercial opportunity</b>
                  </li>
                  <li>
                    <span>02</span>
                    <b>Target platforms (Android, Web, SaaS, Cloud)</b>
                  </li>
                  <li>
                    <span>03</span>
                    <b>Target delivery milestones and timeline</b>
                  </li>
                  <li>
                    <span>04</span>
                    <b>Existing cloud infrastructure constraints</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
