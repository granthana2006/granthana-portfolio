import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  IconArrowUpRight, 
  IconExternalLink, 
  IconClose, 
  IconShield, 
  IconTerminal
} from './Icons';

export const Projects = () => {
  const [activeStoryProject, setActiveStoryProject] = useState(null);

  // Interactive micro-simulation for Cyber Scam Detection App
  const [scamInput, setScamInput] = useState('http://verify-bank-kyc-update.com/login');
  const [scanResult, setScanResult] = useState(null);

  const handleTestScamScan = (type) => {
    if (type === 'phish') {
      setScamInput('http://reward-claim-upi-cash.net/claim?id=9928');
      setScanResult({
        severity: 'Dangerous',
        riskScore: '92% Risk',
        reason: 'Unregistered domain masquerading as financial payout; urgent language detected.'
      });
    } else if (type === 'safe') {
      setScamInput('https://reva.edu.in/student-portal');
      setScanResult({
        severity: 'Safe',
        riskScore: '0% Risk',
        reason: 'Verified institutional domain with valid SSL certificate.'
      });
    } else {
      setScamInput('sms://urgent: courier held at warehouse, click bit.ly/x93');
      setScanResult({
        severity: 'Suspicious',
        riskScore: '68% Risk',
        reason: 'Shortened URL masking actual recipient; unknown delivery alert.'
      });
    }
  };

  return (
    <section id="projects" className="projects-section" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono-label">03 // FEATURED BUILDS & PROTOTYPES</div>
          <h2 className="section-title">
            Turning ideas into interactive things.
          </h2>
          <p className="section-subtitle">
            Real projects demonstrating practical problem solving, thoughtful design choices, and honest workflow transparency.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {/* 1. MyMindfulSpace (LifeSpace) */}
          <article className="project-card">
            <div className="project-card-header">
              <div className="project-meta-top">
                <span className="project-status-badge status-live">
                  <span className="dot-pulse-green" /> Live Web App
                </span>
                <span className="project-category mono-label">AI-ASSISTED BUILD · LOVABLE</span>
              </div>
              <h3 className="project-title">{projectsData[0].name}</h3>
              <p className="project-tagline">{projectsData[0].tagline}</p>
            </div>

            {/* Visual Preview Container */}
            <div className="project-preview-box mindful-preview">
              <div className="browser-mockup-bar">
                <div className="browser-dots">
                  <span /><span /><span />
                </div>
                <div className="browser-url mono-label">mymindfulspace.lovable.app</div>
                <a 
                  href={projectsData[0].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-external-link"
                  aria-label="Open MyMindfulSpace in new tab"
                >
                  <IconExternalLink size={14} />
                </a>
              </div>

              {/* Graphical UI Preview Representation */}
              <div className="mindful-dashboard-preview">
                <div className="preview-widget widget-focus">
                  <div className="widget-header">
                    <span className="mono-label">DAILY REFLECTION</span>
                    <span className="widget-date mono-label">TODAY</span>
                  </div>
                  <p className="widget-quote">“Clear space, clear mind. Prioritize what matters today.”</p>
                  <div className="widget-pills">
                    <span className="preview-pill">Morning Journal</span>
                    <span className="preview-pill">Mindful Habit</span>
                  </div>
                </div>

                <div className="preview-widget-grid">
                  <div className="preview-widget widget-tracker">
                    <span className="mono-label">READING SHELF</span>
                    <div className="tracker-item">Atomic Habits · 74%</div>
                    <div className="progress-track"><div className="progress-fill" style={{ width: '74%' }} /></div>
                  </div>
                  <div className="preview-widget widget-cinema">
                    <span className="mono-label">WATCHLIST</span>
                    <div className="tracker-item">Interstellar ★★★★★</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details & Story Trigger */}
            <div className="project-card-body">
              <div className="project-field">
                <span className="mono-label field-label">THE PROBLEM:</span>
                <p className="field-text">{projectsData[0].story.theIdea}</p>
              </div>

              <div className="project-field">
                <span className="mono-label field-label">WORKFLOW & BUILD:</span>
                <p className="field-text">
                  Crafted using modern AI-assisted vibe coding via <strong>Lovable</strong>. Structured modular widgets for journaling, books, movies, and wellness in a unified serene UI.
                </p>
              </div>

              <div className="project-tools-wrap">
                {projectsData[0].tools.map((t, idx) => (
                  <span key={idx} className="tool-chip">{t}</span>
                ))}
              </div>

              <div className="project-card-actions">
                <button
                  type="button"
                  className="btn-story"
                  onClick={() => setActiveStoryProject(projectsData[0])}
                >
                  View Full Project Story →
                </button>

                <a
                  href={projectsData[0].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-sm"
                >
                  Open Live App <IconArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>

          {/* 2. Cyber Scam Detection App */}
          <article className="project-card">
            <div className="project-card-header">
              <div className="project-meta-top">
                <span className="project-status-badge status-figma">
                  <span className="dot-pulse-purple" /> Figma Prototype
                </span>
                <span className="project-category mono-label">UI/UX · SECURITY ACCESSIBILITY</span>
              </div>
              <h3 className="project-title">{projectsData[1].name}</h3>
              <p className="project-tagline">{projectsData[1].tagline}</p>
            </div>

            {/* Visual Preview Container */}
            <div className="project-preview-box scam-preview">
              <div className="browser-mockup-bar">
                <div className="browser-dots">
                  <span /><span /><span />
                </div>
                <div className="browser-url mono-label">figma.com/make/Cyber-Scam-Detection-App</div>
                <a 
                  href={projectsData[1].figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-external-link"
                  aria-label="Open Cyber Scam Detection App Figma project"
                >
                  <IconExternalLink size={14} />
                </a>
              </div>

              {/* Interactive Threat Detection Visual Mockup */}
              <div className="scam-mockup-board">
                <div className="scam-detector-header">
                  <IconShield size={18} className="shield-icon" />
                  <span className="mono-label">THREAT RADAR // VERIFICATION DEMO</span>
                </div>

                <div className="scam-input-mock">
                  <span className="scam-input-text mono-label">{scamInput}</span>
                </div>

                <div className="scam-test-actions">
                  <button 
                    type="button" 
                    className="scam-pill-btn phish-btn"
                    onClick={() => handleTestScamScan('phish')}
                  >
                    Test Scam UPI Link
                  </button>
                  <button 
                    type="button" 
                    className="scam-pill-btn safe-btn"
                    onClick={() => handleTestScamScan('safe')}
                  >
                    Test Safe Link
                  </button>
                  <button 
                    type="button" 
                    className="scam-pill-btn susp-btn"
                    onClick={() => handleTestScamScan('susp')}
                  >
                    Test SMS Link
                  </button>
                </div>

                {scanResult && (
                  <div className={`scan-result-card severity-${scanResult.severity.toLowerCase()}`}>
                    <div className="scan-res-top">
                      <span className="scan-severity-tag">SEVERITY: {scanResult.severity.toUpperCase()}</span>
                      <span className="scan-risk-score mono-label">{scanResult.riskScore}</span>
                    </div>
                    <p className="scan-reason">{scanResult.reason}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Project Details & Story Trigger */}
            <div className="project-card-body">
              <div className="project-field">
                <span className="mono-label field-label">THE PROBLEM:</span>
                <p className="field-text">{projectsData[1].story.theIdea}</p>
              </div>

              <div className="project-field">
                <span className="mono-label field-label">DESIGN DECISIONS:</span>
                <p className="field-text">
                  Empathy-first mobile design in Figma. Clear traffic-light severity badges, non-technical guidance, and accessible touch flows so anxious users avoid costly fraud.
                </p>
              </div>

              <div className="project-tools-wrap">
                {projectsData[1].tools.map((t, idx) => (
                  <span key={idx} className="tool-chip">{t}</span>
                ))}
              </div>

              <div className="project-card-actions">
                <button
                  type="button"
                  className="btn-story"
                  onClick={() => setActiveStoryProject(projectsData[1])}
                >
                  View Full Project Story →
                </button>

                <a
                  href={projectsData[1].figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-sm"
                >
                  View in Figma <IconArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>

          {/* 3. More experiments coming... */}
          <article className="project-card upcoming-card">
            <div className="project-card-header">
              <div className="project-meta-top">
                <span className="project-status-badge status-upcoming">
                  <span className="dot-pulse-lavender" /> Continuous Exploration
                </span>
                <span className="project-category mono-label">THE EXPERIMENT LAB</span>
              </div>
              <h3 className="project-title">{projectsData[2].name}</h3>
              <p className="project-tagline">{projectsData[2].tagline}</p>
            </div>

            <div className="upcoming-visual-box">
              <div className="upcoming-terminal-box">
                <div className="terminal-bar">
                  <IconTerminal size={14} />
                  <span className="mono-label">granthana@lab:~/experiments</span>
                </div>
                <div className="terminal-lines mono-label">
                  <div className="term-line"><span>$</span> git status</div>
                  <div className="term-line output">On branch main · 3 active experiments compiling</div>
                  <div className="term-line"><span>$</span> cat current_focus.txt</div>
                  <div className="term-line output highlighted">
                    → Python / Java OOP data utilities<br />
                    → SQL relational queries & schema designs<br />
                    → AI API tool integration experiments
                  </div>
                  <div className="term-line"><span>$</span> echo "Keep building."<span className="cursor-blink">_</span></div>
                </div>
              </div>
            </div>

            <div className="project-card-body">
              <div className="project-field">
                <span className="mono-label field-label">PHILOSOPHY:</span>
                <p className="field-text">{projectsData[2].summary}</p>
              </div>

              <div className="project-tools-wrap">
                {projectsData[2].tools.map((t, idx) => (
                  <span key={idx} className="tool-chip">{t}</span>
                ))}
              </div>

              <div className="project-card-actions">
                <a
                  href="https://github.com/Granthana-GM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Follow on GitHub <IconExternalLink size={14} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Project Storytelling Modal */}
      {activeStoryProject && (
        <div className="story-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="story-title">
          <div className="story-modal-overlay" onClick={() => setActiveStoryProject(null)} />
          
          <div className="story-modal-window">
            <div className="story-modal-header">
              <div>
                <span className="mono-label project-category">{activeStoryProject.category}</span>
                <h3 id="story-title" className="story-modal-title">{activeStoryProject.name}</h3>
                <p className="story-modal-tagline">{activeStoryProject.tagline}</p>
              </div>

              <button
                type="button"
                className="btn-icon-close"
                onClick={() => setActiveStoryProject(null)}
                aria-label="Close story"
              >
                <IconClose size={20} />
              </button>
            </div>

            <div className="story-modal-body">
              {/* 1. The Idea */}
              <div className="story-block">
                <div className="story-block-num mono-label">01 // THE IDEA</div>
                <h4 className="story-block-heading">What problem inspired this?</h4>
                <p className="story-block-text">{activeStoryProject.story.theIdea}</p>
              </div>

              {/* 2. The Approach */}
              <div className="story-block">
                <div className="story-block-num mono-label">02 // THE APPROACH</div>
                <h4 className="story-block-heading">What did I try?</h4>
                <p className="story-block-text">{activeStoryProject.story.theApproach}</p>
              </div>

              {/* 3. The Build */}
              <div className="story-block">
                <div className="story-block-num mono-label">03 // THE BUILD</div>
                <h4 className="story-block-heading">What did I actually create?</h4>
                <p className="story-block-text">{activeStoryProject.story.theBuild}</p>
              </div>

              {/* 4. What I Learned */}
              <div className="story-block">
                <div className="story-block-num mono-label">04 // WHAT I LEARNED</div>
                <h4 className="story-block-heading">What did this project teach me?</h4>
                <p className="story-block-text">{activeStoryProject.story.whatILearned}</p>
              </div>

              {/* 5. What's Next */}
              <div className="story-block">
                <div className="story-block-num mono-label">05 // WHAT'S NEXT</div>
                <h4 className="story-block-heading">What would I improve?</h4>
                <p className="story-block-text">{activeStoryProject.story.whatsNext}</p>
              </div>

              {/* Tools and External Link */}
              <div className="story-footer">
                <div className="story-tools-list">
                  <span className="mono-label">TOOLS:</span>
                  {activeStoryProject.tools.map((t, i) => (
                    <span key={i} className="tool-chip-sm">{t}</span>
                  ))}
                </div>

                {activeStoryProject.liveUrl && (
                  <a
                    href={activeStoryProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-sm"
                  >
                    Open Live Project <IconArrowUpRight size={14} />
                  </a>
                )}

                {activeStoryProject.figmaUrl && (
                  <a
                    href={activeStoryProject.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-sm"
                  >
                    Open in Figma <IconArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
