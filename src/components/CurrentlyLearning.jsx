import React, { useState } from 'react';
import { currentlyLearningList, educationData } from '../data/portfolioData';
import { IconCloud, IconGraduationCap } from './Icons';

export const CurrentlyLearning = () => {
  const [activeItem, setActiveItem] = useState(currentlyLearningList[0]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'ACTIVE':
        return <span className="status-badge badge-active"><span className="dot-pulse-purple" /> ACTIVE</span>;
      case 'ENROLLED':
        return <span className="status-badge badge-enrolled"><span className="dot-pulse-blue" /> ENROLLED (NPTEL)</span>;
      case 'EXPLORING':
        return <span className="status-badge badge-exploring"><span className="dot-pulse-lavender" /> EXPLORING</span>;
      default:
        return <span className="status-badge">{status}</span>;
    }
  };

  return (
    <section id="learning" className="learning-section" aria-label="Currently Learning & Education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono-label">07 // LIVE SYLLABUS & EDUCATION</div>
          <h2 className="section-title">
            Currently learning & actively building.
          </h2>
          <p className="section-subtitle">
            An interactive lens into my current semester study stack. What I practice daily, courses I am enrolled in, and what's next.
          </p>
        </div>

        {/* Interactive Currently Learning Deck */}
        <div className="interactive-learning-wrap">
          <div className="learning-sidebar">
            <span className="mono-label learning-deck-label">SELECT CURRICULUM NODE:</span>
            <div className="learning-items-list" role="tablist">
              {currentlyLearningList.map((item) => {
                const isSelected = activeItem.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`learning-item-btn ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => setActiveItem(item)}
                  >
                    <span className="item-id-badge mono-label">{item.id}</span>
                    <div className="item-text-group">
                      <div className="item-subject">{item.subject}</div>
                      <div className="item-tagline">{item.tagline}</div>
                    </div>
                    <div className="item-status-wrap">
                      {getStatusBadge(item.status)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Detail Display */}
          <div className="learning-detail-panel" role="tabpanel">
            <div className="panel-top-bar">
              <div className="panel-title-group">
                <span className="mono-label">ACTIVE LEARNING NODE // {activeItem.id}</span>
                <h3 className="panel-subject-title">{activeItem.subject}</h3>
              </div>
              <div>{getStatusBadge(activeItem.status)}</div>
            </div>

            <div className="panel-tagline-callout">
              "{activeItem.tagline}"
            </div>

            <div className="panel-focus-box">
              <span className="mono-label focus-title">WHAT I'M PRACTICING & STUDYING:</span>
              <p className="focus-description">{activeItem.details}</p>
            </div>

            <div className="panel-honest-quote">
              <span className="mono-label note-label">PERSONAL RULE:</span>
              <p className="note-text">
                Focus on deep mental models and writing code by hand before relying on any abstractions.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Certifications Distinction Row */}
        <div className="edu-cert-dual-grid">
          {/* Education Card */}
          <div className="edu-card">
            <div className="edu-card-header">
              <div className="edu-icon-badge">
                <IconGraduationCap size={20} />
              </div>
              <div>
                <span className="mono-label edu-type">FORMAL EDUCATION</span>
                <h3 className="edu-degree">{educationData.degree}</h3>
                <div className="edu-institution">{educationData.institution}</div>
              </div>
            </div>

            <div className="edu-term-pill mono-label">
              {educationData.timeline}
            </div>

            <div className="edu-coursework-block">
              <span className="mono-label coursework-title">FOUNDATIONAL COURSEWORK:</span>
              <div className="coursework-tags-wrap">
                {educationData.coursework.map((course, i) => (
                  <span key={i} className="course-tag">{course}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Enrolled Courses Card */}
          <div className="cert-card">
            <div className="edu-card-header">
              <div className="edu-icon-badge cert-badge">
                <IconCloud size={20} />
              </div>
              <div>
                <span className="mono-label edu-type">EXTERNAL LEARNING & ENROLLMENTS</span>
                <h3 className="edu-degree">NPTEL — Cloud Computing</h3>
                <div className="edu-institution">National Programme on Technology Enhanced Learning</div>
              </div>
            </div>

            <div className="cert-status-distinction">
              <span className="badge-enrolled-clear">
                <span className="dot-pulse-blue" /> STATUS: CURRENTLY ENROLLED / LEARNING
              </span>
              <span className="mono-label note-honest">
                (NOT yet completed — actively studying syllabus)
              </span>
            </div>

            <p className="cert-focus-desc">
              Covering cloud service models (IaaS, PaaS, SaaS), virtualization concepts, resource scheduling, and distributed system architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
