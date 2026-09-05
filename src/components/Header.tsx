import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "../router";
import { Mark } from "./Mark";
import { GlobeIcon, UserIcon, ArrowUpRight } from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { LanguageCode } from "../types";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t, options } = useLanguage();
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Handle ESC key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentLangObj = options.find((o) => o.code === language) || options[0];

  return (
    <header className="nav" role="banner">
      <div className="nav-inner">
        {/* Brand */}
        <Link className="brand" to="/" aria-label="ANM Digital Labs — Home">
          <Mark />
          <span className="brand-text">
            <b>ANM Digital</b>
            <small>Product systems studio</small>
          </span>
        </Link>

        {/* Desktop Primary Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink to="/" end>
            {t.nav.home}
          </NavLink>
          <NavLink to="/about">{t.nav.about}</NavLink>
          <NavLink to="/products">{t.nav.products}</NavLink>
          <NavLink to="/services">{t.nav.services}</NavLink>
          <NavLink to="/ecosystem">{t.nav.ecosystem}</NavLink>
          <NavLink to="/standards">{t.nav.standards}</NavLink>
          <NavLink to="/blog">{t.nav.blog}</NavLink>
          <NavLink to="/industry-news">{t.nav.industryNews}</NavLink>
          <NavLink to="/contact">{t.nav.contact}</NavLink>
        </nav>

        {/* Header Right Actions */}
        <div className="nav-actions">
          {/* Header Language Selector */}
          <div className="lang-selector" ref={dropdownRef}>
            <button
              className="lang-trigger"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              aria-expanded={langDropdownOpen}
              aria-label={`Language selector. Current language: ${currentLangObj.nativeName}. Click to change.`}
            >
              <GlobeIcon size={14} />
              <span>{currentLangObj.code.toUpperCase()}</span>
            </button>

            {langDropdownOpen && (
              <div className="lang-menu" role="menu">
                {options.map((opt) => (
                  <button
                    key={opt.code}
                    className={`lang-option ${language === opt.code ? "active" : ""}`}
                    role="menuitem"
                    onClick={() => {
                      setLanguage(opt.code as LanguageCode);
                      setLangDropdownOpen(false);
                    }}
                  >
                    <b>{opt.nativeName}</b>
                    <small>{opt.name}</small>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Member Login / Dashboard Link */}
          <Link
            className="members-nav-btn"
            to={isAuthenticated ? "/members/dashboard" : "/members/login"}
            aria-label={isAuthenticated ? t.nav.dashboard : t.nav.login}
          >
            <UserIcon size={13} />
            <span>{isAuthenticated ? t.nav.dashboard : t.nav.login}</span>
          </Link>

          {/* Primary CTA */}
          <Link className="button small desktop-cta" to="/contact">
            <span>{t.nav.buildWithUs}</span>
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </Link>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Off-Canvas Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer-content">
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              {t.nav.home}
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              {t.nav.about}
            </NavLink>
            <NavLink to="/products" onClick={() => setMenuOpen(false)}>
              {t.nav.products}
            </NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)}>
              {t.nav.services}
            </NavLink>
            <NavLink to="/ecosystem" onClick={() => setMenuOpen(false)}>
              {t.nav.ecosystem}
            </NavLink>
            <NavLink to="/standards" onClick={() => setMenuOpen(false)}>
              {t.nav.standards}
            </NavLink>
            <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
              {t.nav.blog}
            </NavLink>
            <NavLink to="/industry-news" onClick={() => setMenuOpen(false)}>
              {t.nav.industryNews}
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              {t.nav.contact}
            </NavLink>
            <NavLink to={isAuthenticated ? "/members/dashboard" : "/members/login"} onClick={() => setMenuOpen(false)}>
              {isAuthenticated ? t.nav.dashboard : t.nav.login}
            </NavLink>
          </nav>

          <div className="mobile-drawer-footer">
            <div className="mobile-lang-grid">
              {options.map((opt) => (
                <button
                  key={opt.code}
                  className={`mobile-lang-chip ${language === opt.code ? "active" : ""}`}
                  onClick={() => {
                    setLanguage(opt.code as LanguageCode);
                    setMenuOpen(false);
                  }}
                >
                  {opt.nativeName}
                </button>
              ))}
            </div>

            <Link
              className="button mobile-cta-full"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              <span>{t.nav.buildWithUs} ↗</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
