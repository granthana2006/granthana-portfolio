import React from 'react';
import { eventsData } from '../data/portfolioData';

export const EventsCommunity = () => {

  return (
    <section id="events" className="events-section" aria-label="Events and Community Impact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono-label">05 // COMMUNITY & CAMPUS IMPACT</div>
          <h2 className="section-title">
            15+ Events Organized for student developers.
          </h2>
          <p className="section-subtitle">
            Technology is inherently social. Organizing hackathons, workshops, and panel sessions has taught me team coordination, communication, and high-stakes problem-solving.
          </p>
        </div>

        {/* 15+ Big Number Visual Billboard Card */}
        <div className="events-billboard-card">
          <div className="billboard-left">
            <div className="giant-stat-wrap">
              <span className="giant-stat-number">{eventsData.totalCount}</span>
              <div className="giant-stat-meta">
                <span className="stat-meta-main">CAMPUS EVENTS</span>
                <span className="stat-meta-sub mono-label">ORGANIZED & EXECUTED</span>
              </div>
            </div>
            <p className="billboard-tagline">
              {eventsData.tagline}
            </p>
          </div>

          <div className="billboard-quote-block">
            <p className="billboard-quote">
              “{eventsData.highlightQuote}”
            </p>
            <span className="mono-label quote-author">— GRANTHANA GM // OSCODE LEADERSHIP NOTE</span>
          </div>
        </div>

        {/* Events Category Grid */}
        <div className="event-categories-grid">
          {eventsData.categories.map((cat, idx) => (
            <div key={idx} className="event-cat-card">
              <div className="cat-top">
                <span className="mono-label cat-index">0{idx + 1}</span>
                <span className="cat-count-badge">{cat.count}</span>
              </div>
              <h3 className="cat-name">{cat.name}</h3>
              <p className="cat-desc">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
