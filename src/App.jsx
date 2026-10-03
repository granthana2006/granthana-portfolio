import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsAndTree } from './components/SkillsAndTree';
import { Projects } from './components/Projects';
import { Leadership } from './components/Leadership';
import { EventsCommunity } from './components/EventsCommunity';
import { Journey } from './components/Journey';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { BlogThoughts } from './components/BlogThoughts';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import Intro from './components/Intro';
import './App.css';

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSystemMode, setActiveSystemMode] = useState('learn');
  const [showIntro, setShowIntro] = useState(true);

  const handleOpenResume = () => {
    setResumeOpen(true);
  };

  const handleCloseResume = () => {
    setResumeOpen(false);
  };

  const handleSelectMode = (modeId) => {
    setActiveSystemMode(modeId);
  };

  return (
    <>
      {showIntro && (
        <Intro onComplete={() => setShowIntro(false)} />
      )}

      <div className="portfolio-app">
        {/* Top Sticky Navigation */}
        <Navbar
          onOpenResume={handleOpenResume}
          onSelectSystemMode={handleSelectMode}
        />

        <main id="main-content">
          {/* 1. Hero Section & Personal Growth Stat Bar */}
          <Hero
            onOpenResume={handleOpenResume}
            activeMode={activeSystemMode}
            onSelectMode={handleSelectMode}
          />

          {/* 2. About Me */}
          <About />

          {/* 3. Structured Skill Tree & Currently Exploring */}
          <SkillsAndTree />

          {/* 4. Featured Projects & Storytelling Case Studies */}
          <Projects />

          {/* 5. Experience & Leadership (Vice President @ OSCode) */}
          <Leadership />

          {/* 6. Events & Community (15+ Events Organized) */}
          <EventsCommunity />

          {/* 7. Journey & Growth Timeline */}
          <Journey />

          {/* 8. Interactive Currently Learning & Formal Education */}
          <CurrentlyLearning />

          {/* 9. Blog & Learning Notes (Honest Coming Soon) */}
          <BlogThoughts />

          {/* 10. Contact & Transmission Form */}
          <Contact onOpenResume={handleOpenResume} />
        </main>

        {/* Footer */}
        <Footer onOpenResume={handleOpenResume} />

        {/* Interactive Resume Modal & PDF Downloader */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={handleCloseResume}
        />
      </div>
    </>
  );
}

export default App;