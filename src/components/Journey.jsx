import React from 'react';
import { journeyPhases } from '../data/portfolioData';

export const Journey = () => {
  return (
    <section id="journey" className="journey-section" aria-label="Learning Journey and Growth Timeline">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono-label">06 // THE GROWTH TIMELINE</div>
          <h2 className="section-title">
            Growth over perfection.
          </h2>
          <p className="section-subtitle">
            A chronological progression from first stepping into CSE to organizing 15+ events, building real prototypes, and exploring what's next.
          </p>
        </div>

        {/* Minimal Subtle Vertical Timeline */}
        <div className="journey-timeline-container">
          <div className="timeline-spine-line" aria-hidden="true" />

          <div className="timeline-nodes-stack">
            {journeyPhases.map((phase) => (
              <div key={phase.step} className="timeline-step-row">
                <div className="timeline-node-marker">
                  <span className="node-step-badge mono-label">{phase.step}</span>
                  <span className="node-pulse-point" />
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div className="phase-badge-group">
                      <span className="phase-pill mono-label">{phase.phase}</span>
                      <span className="timeline-timeframe mono-label">{phase.timeframe}</span>
                    </div>
                    <span className="timeline-highlight mono-label">{phase.highlight}</span>
                  </div>

                  <h3 className="timeline-card-title">{phase.title}</h3>
                  <p className="timeline-card-desc">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
