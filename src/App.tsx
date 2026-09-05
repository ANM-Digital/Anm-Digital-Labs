import React from "react";
import { Route, Routes } from "./router";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";

import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ProductsPage } from "./pages/Products";
import { ProductDetailPage } from "./pages/ProductDetail";
import { ServicesPage } from "./pages/Services";
import { ServiceDetailPage } from "./pages/ServiceDetail";
import { EcosystemPage } from "./pages/Ecosystem";
import { StandardsPage } from "./pages/Standards";
import { BlogPage } from "./pages/Blog";
import { BlogPostPage } from "./pages/BlogPost";
import { IndustryNewsPage } from "./pages/IndustryNews";
import { MemberLoginPage } from "./pages/Members/Login";
import { MemberRegisterPage } from "./pages/Members/Register";
import { MemberForgotPasswordPage } from "./pages/Members/ForgotPassword";
import { MemberDashboardPage } from "./pages/Members/Dashboard";
import { ContactPage } from "./pages/Contact";
import { PrivacyPolicyPage } from "./pages/Legal/PrivacyPolicy";
import { TermsOfUsePage } from "./pages/Legal/TermsOfUse";
import { CookiePolicyPage } from "./pages/Legal/CookiePolicy";
import { AccessibilityStatementPage } from "./pages/Legal/AccessibilityStatement";
import { LegalNoticePage } from "./pages/Legal/LegalNotice";
import { DataDeletionPage } from "./pages/Legal/DataDeletion";
import { NotFoundPage } from "./pages/NotFound";

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="site-layout">
          <a className="skip-link" href="#main-content">
            Skip to main content
          </a>

          <Header />

          <main id="main-content" className="site-main" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route path="/ecosystem" element={<EcosystemPage />} />
              <Route path="/standards" element={<StandardsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/industry-news" element={<IndustryNewsPage />} />
              <Route path="/members" element={<MemberLoginPage />} />
              <Route path="/members/login" element={<MemberLoginPage />} />
              <Route path="/members/register" element={<MemberRegisterPage />} />
              <Route path="/members/forgot-password" element={<MemberForgotPasswordPage />} />
              <Route path="/members/dashboard" element={<MemberDashboardPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfUsePage />} />
              <Route path="/cookies" element={<CookiePolicyPage />} />
              <Route path="/accessibility" element={<AccessibilityStatementPage />} />
              <Route path="/legal-notice" element={<LegalNoticePage />} />
              <Route path="/data-deletion" element={<DataDeletionPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
          <CookieBanner />
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}
