import React from 'react';
import { personalInfo, educationData } from '../data/portfolioData';
import { IconGraduationCap, IconMapPin, IconCode, IconUsers, IconCompass } from './Icons';

export const About = () => {
  const mindsets = [
    {
      icon: <IconCompass size={18} />,
      title: "Exploration Before Premature Specialization",
      description: "Rather than locking into a single silo early, I am deliberately building breadth across programming, databases, systems, and product design."
    },
    {
      icon: <IconCode size={18} />,
      title: "Learning Through Concrete Builds",
      description: "Code shouldn't remain theoretical. I learn fastest when turning an idea or problem into an interactive prototype that people can actually test."
    },
    {
      icon: <IconUsers size={18} />,
      title: "Community & Leadership Go Hand-in-Hand",
      description: "Software engineering is a team sport. Helping organize 15+ events at OSCode reinforced that teaching others and building communities accelerates everyone's growth."
    }
  ];

  return (
    <section id="about" className="about-section" aria-label="About Granthana GM">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono-label">01 // ABOUT ME</div>
          <h2 className="section-title">
            Driven by curiosity, shaped by building.
          </h2>
          <p className="section-subtitle">
            A CSE student discovering the depth of technology one project at a time.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-narrative">
            <div className="editorial-bio-block">
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="bio-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Human Personality Note */}
            <div className="human-note-card">
              <span className="serif-motto">“{personalInfo.motto}”</span>
              <span className="human-note-sub mono-label">
                Open to exploring different engineering domains & student opportunities.
              </span>
            </div>
          </div>

          {/* Academic & Mindset Column */}
          <div className="about-details-column">
            {/* Academic Snapshot Card */}
            <div className="dossier-card">
              <div className="dossier-header">
                <div className="dossier-badge">
                  <IconGraduationCap size={16} />
                  <span className="mono-label">ACADEMIC PROFILE</span>
                </div>
                <span className="dossier-status-pill">CURRENTLY ENROLLED</span>
              </div>

              <div className="dossier-content">
                <div className="dossier-main-title">{educationData.degree}</div>
                <div className="dossier-institution">
                  <IconMapPin size={14} /> {educationData.institution}
                </div>
                <div className="dossier-term mono-label">{educationData.timeline}</div>

                <div className="dossier-coursework-wrap">
                  <span className="mono-label coursework-label">FOUNDATIONAL COURSEWORK:</span>
                  <ul className="coursework-chips">
                    {educationData.coursework.map((course, idx) => (
                      <li key={idx} className="coursework-chip">{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Guiding Mindsets */}
            <div className="mindsets-stack">
              <span className="mono-label mindsets-heading">HOW I APPROACH MY WORK</span>
              {mindsets.map((item, idx) => (
                <div key={idx} className="mindset-card">
                  <div className="mindset-icon-wrap">{item.icon}</div>
                  <div className="mindset-text">
                    <h4 className="mindset-title">{item.title}</h4>
                    <p className="mindset-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
