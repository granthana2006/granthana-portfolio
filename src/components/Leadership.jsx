import React from 'react';
import { leadershipRole } from '../data/portfolioData';
import { IconGitBranch } from './Icons';

export const Leadership = () => {
  return (
    <section id="leadership" className="leadership-section" aria-label="Leadership Experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono-label">04 // EXPERIENCE & LEADERSHIP</div>
          <h2 className="section-title">
            Fostering developer culture at REVA University.
          </h2>
          <p className="section-subtitle">
            Leading initiatives, mentoring student peers, and organizing community tech spaces where builders thrive.
          </p>
        </div>

        {/* Leadership Hero Banner Card */}
        <div className="leadership-card">
          <div className="leadership-card-top">
            <div className="leadership-role-block">
              <div className="org-icon-badge">
                <IconGitBranch size={24} />
              </div>
              <div>
                <span className="mono-label leadership-org-tag">STUDENT LEADERSHIP // CAMPUS</span>
                <h3 className="leadership-title">{leadershipRole.role}</h3>
                <div className="leadership-org-name">
                  {leadershipRole.organization} · {leadershipRole.institution}
                </div>
              </div>
            </div>

            <div className="leadership-badge-wrap">
              <span className="period-pill mono-label">{leadershipRole.period}</span>
              <span className="active-lead-indicator">
                <span className="dot-pulse-purple" /> ACTIVE ROLE
              </span>
            </div>
          </div>

          <p className="leadership-headline">
            "{leadershipRole.headline}"
          </p>

          <p className="leadership-narrative">
            {leadershipRole.description}
          </p>

          {/* Core Responsibilities Grid */}
          <div className="responsibilities-grid">
            {leadershipRole.responsibilities.map((resp, idx) => {
              const [title, desc] = resp.split(': ');
              return (
                <div key={idx} className="responsibility-item">
                  <div className="resp-index mono-label">0{idx + 1} // FOCUS</div>
                  <h4 className="resp-title">{title}</h4>
                  <p className="resp-desc">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
