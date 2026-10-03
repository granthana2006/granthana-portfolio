import React, { useState, useEffect } from 'react';
import { IconMenu, IconClose, IconDownload, IconArrowUpRight } from './Icons';

export const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 30);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'leadership', 'events', 'journey', 'learning', 'thoughts', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Leadership", href: "#leadership", id: "leadership" },
    { label: "Events", href: "#events", id: "events", badge: "15+" },
    { label: "Journey", href: "#journey", id: "journey" },
    { label: "Learning", href: "#learning", id: "learning" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} role="banner">
      {/* Scroll Progress Hairline */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      <div className="container header-container">
        {/* Brand Lockup */}
        <a href="#hero" className="brand-lockup" aria-label="Granthana GM Homepage">
          <div className="brand-symbol">
            <span className="brand-dot" />
            <span className="brand-name">GRANTHANA GM</span>
          </div>
          <span className="brand-status hide-mobile">
            CSE STUDENT · REVA UNIVERSITY · BANGALORE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {link.badge && <span className="nav-pill-badge">{link.badge}</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <button
            type="button"
            className="btn-resume-nav hide-mobile"
            onClick={onOpenResume}
            aria-label="View and Download Resume"
          >
            <IconDownload size={14} /> Resume
          </button>

          <a href="#contact" className="header-cta hide-mobile">
            Let's Talk <IconArrowUpRight size={14} />
          </a>

          <button
            type="button"
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="mobile-drawer-inner">
            <div className="mobile-meta">
              <span className="mono-label">GRANTHANA GM // SYSTEM</span>
              <span className="brand-status">REVA UNIVERSITY · 2ND YEAR</span>
            </div>
            
            <ul className="mobile-nav-list">
              {navLinks.map((link, idx) => (
                <li key={link.id} className="mobile-nav-item">
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mobile-nav-idx">0{idx + 1}</span>
                    <span className="mobile-nav-text">{link.label}</span>
                    {link.badge && <span className="nav-pill-badge">{link.badge}</span>}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
              >
                <IconDownload size={16} /> Download Resume
              </button>

              <a
                href="#contact"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Talk <IconArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
