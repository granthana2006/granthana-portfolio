import React from 'react';
import { blogThoughts } from '../data/portfolioData';
import { IconBookOpen } from './Icons';

export const BlogThoughts = () => {
  return (
    <section id="thoughts" className="thoughts-section" aria-label="Blog and Learning Notes">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono-label">08 // WRITING & THOUGHTS</div>
          <h2 className="section-title">
            Documenting the learning curve.
          </h2>
          <p className="section-subtitle">
            Reflections, post-event breakdowns, and technical discoveries as they happen.
          </p>
        </div>

        {/* Coming Soon Notice Card */}
        <div className="thoughts-notice-card">
          <div className="notice-header">
            <div className="notice-icon-wrap">
              <IconBookOpen size={22} />
            </div>
            <div>
              <span className="mono-label notice-tag">DISPATCH ARCHIVE</span>
              <h3 className="notice-title">{blogThoughts.statusNotice}</h3>
            </div>
          </div>

          <p className="notice-desc">
            {blogThoughts.description} Rather than publishing hollow content, I will only write when I have genuine engineering lessons, project post-mortems, or community takeaways to share.
          </p>

          <div className="future-topics-preview">
            <span className="mono-label topics-heading">UPCOMING WRITING THEMES:</span>
            <div className="topics-grid">
              {blogThoughts.futureTopics.map((topic, idx) => (
                <div key={idx} className="topic-card">
                  <div className="topic-meta">
                    <span className="mono-label topic-tag">{topic.tag}</span>
                    <span className="topic-status-pill mono-label">PLANNED</span>
                  </div>
                  <h4 className="topic-title">{topic.title}</h4>
                  <p className="topic-snippet">{topic.snippet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
