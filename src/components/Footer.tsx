import React from "react";
import { Link } from "../router";
import { Mark } from "./Mark";
import { LinkedInIcon, GitHubIcon, YouTubeIcon, MailIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-main">
        {/* Column 1 — ANM DIGITAL LABS */}
        <div className="footer-intro">
          <Link className="brand" to="/" aria-label="ANM Digital Labs — Home">
            <Mark />
            <span className="brand-text">
              <b>ANM Digital Labs</b>
              <small>Software &amp; Systems Studio</small>
            </span>
          </Link>
          <p>
            We design and operate software products, digital platforms, and applied AI systems with commercial purpose.
          </p>
          <span className="status">
            <i></i> Operational System · 2026
          </span>

          <div className="footer-contact-block">
            <a href="mailto:info@anmdigital.online" className="footer-email-link">
              info@anmdigital.online
            </a>
            <div className="footer-social-links" aria-label="Social links">
              <a
                href="https://www.linkedin.com/company/anm-digital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-icon"
              >
                <LinkedInIcon size={15} />
              </a>
              <a
                href="https://github.com/ANM-Digital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-social-icon"
              >
                <GitHubIcon size={15} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="footer-social-icon"
              >
                <YouTubeIcon size={15} />
              </a>
              <a
                href="mailto:info@anmdigital.online"
                aria-label="Email Contact"
                className="footer-social-icon"
              >
                <MailIcon size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 — SOLUTIONS */}
        <div className="footer-group">
          <b>Solutions</b>
          <Link to="/products">Products Directory</Link>
          <Link to="/services">Capabilities &amp; Services</Link>
          <Link to="/ecosystem">Technology Ecosystem</Link>
          <Link to="/standards">Creation Standards</Link>
        </div>

        {/* Column 3 — COMPANY */}
        <div className="footer-group">
          <b>Company</b>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Engineering Blog</Link>
          <Link to="/industry-news">Industry News</Link>
          <Link to="/contact">Contact Us</Link>
          <a href="https://github.com/ANM-Digital" target="_blank" rel="noopener noreferrer">
            GitHub Organization ↗
          </a>
          <a href="https://yogaproductstop.com" target="_blank" rel="noopener noreferrer">
            Yoga Products Top ↗
          </a>
          <a href="https://anmconsultancy.com" target="_blank" rel="noopener noreferrer">
            A&amp;M Consultancy ↗
          </a>
        </div>

        {/* Column 4 — LEGAL & GOVERNANCE */}
        <div className="footer-group">
          <b>Legal &amp; Governance</b>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/cookies">Cookie Policy</Link>
          <Link to="/terms#acceptable-use">Acceptable Use</Link>
          <Link to="/standards#open-source">Open Source Licenses</Link>
          <Link to="/standards#ai-policy">AI Usage Policy</Link>
          <Link to="/data-deletion">Data &amp; Security</Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-base">
        <div className="footer-copyright">
          © 2026 ANM Digital Labs. All rights reserved.
        </div>
        <div className="footer-tagline">
          BUILDING FOR A BETTER TOMORROW
        </div>
        <div className="footer-bottom-links">
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
            Sitemap
          </a>
          <Link to="/accessibility">Accessibility</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
