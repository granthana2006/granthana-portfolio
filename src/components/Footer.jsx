import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconArrowUpRight } from './Icons';

export const Footer = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        {/* Top Tier */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand-title">GRANTHANA GM</div>
            <p className="footer-brand-desc">
              A curious Computer Science student exploring technologies, building practical things, and growing into an engineer.
            </p>
            <div className="footer-motto-tag">
              “{personalInfo.motto}”
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <span className="mono-label footer-col-title">NAVIGATION</span>
              <ul className="footer-list">
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills & Tree</a></li>
                <li><a href="#projects">Featured Work</a></li>
                <li><a href="#leadership">Leadership (OSCode)</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <span className="mono-label footer-col-title">SYSTEM</span>
              <ul className="footer-list">
                <li><a href="#events">15+ Events</a></li>
                <li><a href="#journey">Growth Timeline</a></li>
                <li><a href="#learning">Currently Learning</a></li>
                <li><a href="#thoughts">Writing Archive</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <span className="mono-label footer-col-title">CONNECT</span>
              <ul className="footer-list">
                <li>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn <IconArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    GitHub <IconArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <button type="button" className="footer-link-btn" onClick={onOpenResume}>
                    Resume <IconArrowUpRight size={12} />
                  </button>
                </li>
                <li>
                  <a href={`mailto:${personalInfo.email}`}>
                    Email <IconArrowUpRight size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Tier */}
        <div className="footer-bottom">
          <div className="footer-copy mono-label">
            © {currentYear} GRANTHANA GM · REVA UNIVERSITY, BANGALORE
          </div>
          <div className="footer-tech-stack mono-label">
            BUILT WITH REACT & VITE · CLEAN DESIGN ARCHITECTURE
          </div>
        </div>
      </div>
    </footer>
  );
};
