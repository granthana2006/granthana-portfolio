import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  IconMail,
  IconLinkedIn,
  IconGitHub,
  IconArrowUpRight,
  IconCopy,
  IconCheck,
  IconDownload
} from './Icons';

export const Contact = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("granthana2006@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section" aria-label="Contact Information">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono-label">09 // GET IN TOUCH</div>
          <h2 className="section-title">
            Let's build something interesting.
          </h2>
          <p className="section-subtitle">
            I'm always open to learning, collaborating, building, and meeting people working on interesting ideas.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Links & Info */}
          <div className="contact-info-card">
            <div className="contact-status-bar">
              <span className="dot-pulse-purple" />
              <span className="mono-label">BANGALORE, INDIA // UTC+05:30</span>
            </div>

            <h3 className="contact-callout">
              Looking for curious student developers, internship roles, or hackathon teammates?
            </h3>

            <p className="contact-body">
              Whether you're a recruiter seeking an energetic student who loves building, a fellow student with an idea, or an organizer putting together a tech event—my inbox is always open.
            </p>

            {/* Quick Action Buttons */}
            <div className="contact-buttons-stack">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn btn-linkedin"
              >
                <IconLinkedIn size={18} /> LinkedIn Profile <IconArrowUpRight size={14} />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn btn-github"
              >
                <IconGitHub size={18} /> GitHub Repositories <IconArrowUpRight size={14} />
              </a>

              <button
                type="button"
                className="contact-btn btn-email-copy"
                onClick={handleCopyEmail}
                title="Click to copy email address"
              >
                <IconMail size={18} />
                <span>{personalInfo.email}</span>
                {copiedEmail ? <IconCheck size={16} className="text-accent" /> : <IconCopy size={16} />}
              </button>

              <button
                type="button"
                className="contact-btn btn-resume-contact"
                onClick={onOpenResume}
              >
                <IconDownload size={18} /> Download Granthana's Resume <IconArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: "Let's Talk" Direct Message Form */}
          <div className="contact-form-card">
            <div className="form-card-header">
              <span className="mono-label">TRANSMISSION // DIRECT INQUIRY</span>
              <span className="form-status-indicator">READY</span>
            </div>

            {formSubmitted ? (
              <div className="form-success-box">
                <div className="success-icon-wrap">
                  <IconCheck size={28} />
                </div>
                <h4 className="success-title">Message Received!</h4>
                <p className="success-desc">
                  Thank you for reaching out. I'll get back to you as soon as possible. In the meantime, feel free to connect with me on LinkedIn or explore my projects.
                </p>
                <button
                  type="button"
                  className="btn-secondary-sm"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-field">
                  <label htmlFor="contact-name" className="form-label mono-label">
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email" className="form-label mono-label">
                    YOUR EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message" className="form-label mono-label">
                    MESSAGE / PROJECT DETAILS
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about an opportunity, an idea, or just say hello..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Let's Talk →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
