import React from 'react';
import { personalInfo, personalStats, systemModes } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';
import { IconArrowRight, IconDownload } from './Icons';

export const Hero = ({ onOpenResume, activeMode, onSelectMode }) => {
  const exploreTags = [
    { name: "Python", status: "Active" },
    { name: "C", status: "Foundations" },
    { name: "Java", status: "OOP" },
    { name: "SQL", status: "Relational" },
    { name: "Cloud", status: "NPTEL Enrolled" },
    { name: "AI / Exploring", status: "Emerging" },
  ];

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      {/* Background Subtle Constellation & Orbital Canvas */}
      <HeroCanvas />

      <div className="container hero-container">
        {/* Top Student Credential Badge */}
        <div className="hero-badge-wrap">
          <div className="hero-badge">
            <span className="badge-pulse-purple" />
            <span className="hero-badge-text">
              CSE STUDENT · REVA UNIVERSITY · BANGALORE
            </span>
          </div>
        </div>

        {/* Name and Editorial Statement */}
        <div className="hero-content">
          <h1 className="hero-name">GRANTHANA GM</h1>

          {/* Editorial statement with tasteful serif accent */}
          <div className="hero-statement">
            <span className="statement-word">Exploring.</span>{' '}
            <span className="statement-word">Learning.</span>{' '}
            <span className="statement-word highlight-serif">Building.</span>
          </div>

          <p className="hero-subtext">
            {personalInfo.summary}
          </p>

          {/* Primary Call-to-Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work <IconArrowRight size={16} />
            </a>

            <button
              type="button"
              className="btn-secondary"
              onClick={onOpenResume}
              aria-label="Download Granthana GM Resume"
            >
              Download Resume <IconDownload size={16} />
            </button>
          </div>

          {/* Subtle Technology & Focus Badges (No fake percentages) */}
          <div className="hero-tags-block">
            <span className="hero-tags-label mono-label">CURRENT RADAR:</span>
            <div className="hero-tags-list">
              {exploreTags.map((tag) => (
                <div key={tag.name} className="tech-tag">
                  <span className="tag-dot" />
                  <span className="tag-name">{tag.name}</span>
                  <span className="tag-status-sub">{tag.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unique Developer-Inspired Concept: "Explore My System" */}
        <div className="system-concept-panel" aria-label="Explore My System">
          <div className="system-concept-header">
            <div className="system-label-group">
              <span className="mono-label">EXPLORE MY SYSTEM</span>
              <span className="system-hint">Quick-nav across core dimensions</span>
            </div>
            <span className="system-os-indicator">SYS.READY // v2.4</span>
          </div>

          <div className="system-modes-grid">
            {systemModes.map((mode) => {
              const isSelected = activeMode === mode.id;
              return (
                <a
                  key={mode.id}
                  href={`#${mode.targetSection}`}
                  className={`system-mode-card ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => onSelectMode && onSelectMode(mode.id)}
                >
                  <div className="mode-card-top">
                    <span className="mode-command mono-label">{mode.command}</span>
                    <span className="mode-title">{mode.title}</span>
                  </div>
                  <div className="mode-subtitle">{mode.subtitle}</div>
                  <p className="mode-desc">{mode.description}</p>
                  <div className="mode-tags">
                    {mode.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="mode-micro-tag">{t}</span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Personal Growth Stat Bar */}
        <div className="growth-stats-bar" aria-label="Personal Growth Summary">
          {personalStats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number-wrap">
                <span className={`stat-value ${stat.value === '∞' ? 'stat-infinite' : ''}`}>
                  {stat.value}
                </span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-note mono-label">{stat.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
