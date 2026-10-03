import React, { useEffect } from 'react';
import { personalInfo, educationData, leadershipRole, eventsData, certificationsData, projectsData } from '../data/portfolioData';
import { IconClose, IconDownload, IconMapPin, IconMail, IconLinkedIn, IconGitHub } from './Icons';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
      <div className="resume-modal-overlay" onClick={onClose} />
      
      <div className="resume-modal-window">
        {/* Top Control Bar */}
        <div className="resume-modal-toolbar">
          <div className="resume-toolbar-meta">
            <span className="mono-badge">DOCUMENT // CURRICULUM VITAE</span>
            <span className="resume-update-tag">Granthana GM · Updated 2024</span>
          </div>

          <div className="resume-toolbar-actions">
            <button
              type="button"
              className="btn-pill btn-pill-primary"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <IconDownload size={15} /> Print / Save PDF
            </button>
            <button
              type="button"
              className="btn-icon-close"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <IconClose size={20} />
            </button>
          </div>
        </div>

        {/* Printable Paper Document Preview */}
        <div className="resume-paper printable-content">
          {/* Header */}
          <header className="resume-paper-header">
            <div>
              <h1 className="resume-paper-name">{personalInfo.name}</h1>
              <p className="resume-paper-title">
                2nd-Year B.Tech Computer Science & Engineering Student · REVA University
              </p>
            </div>
            <div className="resume-paper-contacts">
              <span><IconMapPin size={13} /> {personalInfo.location}</span>
              <span><IconMail size={13} /> granthana.gm@example.com</span>
              <span><IconLinkedIn size={13} /> linkedin.com/in/granthana-gm</span>
              <span><IconGitHub size={13} /> github.com/Granthana-GM</span>
            </div>
          </header>

          <hr className="resume-divider" />

          {/* Education */}
          <section className="resume-section-block">
            <h2 className="resume-section-heading">Education</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <h3 className="resume-item-title">{educationData.degree}</h3>
                  <div className="resume-item-subtitle">{educationData.institution}</div>
                </div>
                <span className="resume-item-date">{educationData.timeline}</span>
              </div>
              <p className="resume-text-sm">
                Relevant Coursework: {educationData.coursework.join(', ')}
              </p>
            </div>
          </section>

          {/* Experience & Leadership */}
          <section className="resume-section-block">
            <h2 className="resume-section-heading">Leadership & Community Experience</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <h3 className="resume-item-title">
                    {leadershipRole.role} — {leadershipRole.organization}
                  </h3>
                  <div className="resume-item-subtitle">{leadershipRole.institution}</div>
                </div>
                <span className="resume-item-date">{leadershipRole.period}</span>
              </div>
              <ul className="resume-bullets">
                {leadershipRole.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
                <li>Organized {eventsData.totalCount} campus events including hackathons, technical workshops, and developer panel discussions.</li>
              </ul>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="resume-section-block">
            <h2 className="resume-section-heading">Technical Projects & Prototypes</h2>
            {projectsData.filter(p => !p.isPlaceholder).map((proj) => (
              <div key={proj.id} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">{proj.name}</h3>
                    <div className="resume-item-subtitle">{proj.category}</div>
                  </div>
                  <span className="resume-item-date">{proj.status}</span>
                </div>
                <p className="resume-text-sm" style={{ marginBottom: '0.4rem' }}>{proj.summary}</p>
                <p className="resume-tools-sm">
                  <strong>Technologies & Workflow:</strong> {proj.tools.join(', ')} ({proj.workflow})
                </p>
              </div>
            ))}
          </section>

          {/* Skills & Learning */}
          <section className="resume-section-block">
            <h2 className="resume-section-heading">Technical Skills & Current Learning</h2>
            <div className="resume-skills-grid">
              <div>
                <strong>Languages:</strong> C, Python, Java, SQL
              </div>
              <div>
                <strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Figma, Lovable
              </div>
              <div>
                <strong>Currently Learning:</strong> Cloud Computing (NPTEL Enrolled), Generative AI / LLM workflows, Modern Web Development
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="resume-section-block">
            <h2 className="resume-section-heading">Certifications & Ongoing Courses</h2>
            {certificationsData.map((cert, idx) => (
              <div key={idx} className="resume-cert-row">
                <span className="cert-name"><strong>{cert.title}</strong> — {cert.issuer}</span>
                <span className="cert-status-badge">Status: {cert.status}</span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
