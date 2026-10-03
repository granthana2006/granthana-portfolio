import React, { useState } from 'react';
import { exploringAreas } from '../data/portfolioData';
import { 
  IconCode, 
  IconDatabase, 
  IconCloud, 
  IconLayers, 
  IconCompass 
} from './Icons';

export const SkillsAndTree = () => {
  const [selectedBranch, setSelectedBranch] = useState('all');

  const getCategoryIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'programming':
        return <IconCode size={18} />;
      case 'data & persistence':
        return <IconDatabase size={18} />;
      case 'cloud':
        return <IconCloud size={18} />;
      case 'building & prototyping':
        return <IconLayers size={18} />;
      default:
        return <IconCompass size={18} />;
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'practicing':
        return 'badge-status-purple';
      case 'building with':
        return 'badge-status-indigo';
      case 'enrolled':
        return 'badge-status-blue';
      case 'learning':
        return 'badge-status-lavender';
      default:
        return 'badge-status-neutral';
    }
  };

  // Skill Tree Nodes Definition
  const skillTreeNodes = [
    {
      id: "node-root",
      label: "Granthana GM // CSE Skill Tree",
      type: "root",
      branch: "root",
      status: "3rd Sem · Growth Driven",
      details: "Intentional multidisciplinary exploration across languages, tools, and systems."
    },
    {
      id: "branch-lang",
      label: "Branch 01: Core Languages",
      type: "branch",
      branch: "languages",
      items: [
        { name: "C", status: "Practicing", role: "Pointers & memory logic" },
        { name: "Python", status: "Learning", role: "Problem solving & scripts" },
        { name: "Java", status: "Practicing", role: "Object-oriented principles" },
        { name: "SQL", status: "Learning", role: "Relational queries & joins" }
      ]
    },
    {
      id: "branch-tools",
      label: "Branch 02: Tools & Workflow",
      type: "branch",
      branch: "tools",
      items: [
        { name: "Git & GitHub", status: "Active", role: "Version control & open source" },
        { name: "VS Code", status: "Daily Driver", role: "Primary development workspace" },
        { name: "Figma", status: "Building with", role: "UI wireframing & design systems" },
        { name: "Lovable", status: "Building with", role: "AI-assisted rapid prototyping" }
      ]
    },
    {
      id: "branch-cloud",
      label: "Branch 03: Cloud & Systems",
      type: "branch",
      branch: "cloud",
      items: [
        { name: "Cloud Computing", status: "Enrolled", role: "NPTEL Certified Coursework (In Progress)" },
        { name: "Virtualization", status: "Studying", role: "Service models (IaaS/PaaS/SaaS)" }
      ]
    },
    {
      id: "branch-explore",
      label: "Branch 04: Next Horizons",
      type: "branch",
      branch: "explore",
      items: [
        { name: "AI & GenAI", status: "Exploring", role: "Prompt architecture & AI tools" },
        { name: "Modern Web", status: "Exploring", role: "Component architecture & UX" },
        { name: "Distributed Tech", status: "Interested in", role: "Scalable system principles" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section" aria-label="Skills and Currently Exploring">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mono-label">02 // SKILLS & EXPLORATION TREE</div>
          <h2 className="section-title">
            Structured skill tree, active learning.
          </h2>
          <p className="section-subtitle">
            An organized visual representation of where I stand, what I build with, and where my curiosity is pointing next. No fake percentage bars—only authentic progress.
          </p>
        </div>

        {/* Tree View Control Tabs */}
        <div className="tree-filter-bar">
          <span className="mono-label filter-label">VIEW BRANCH:</span>
          <div className="tree-filter-buttons">
            <button
              type="button"
              className={`tree-tab-btn ${selectedBranch === 'all' ? 'is-active' : ''}`}
              onClick={() => setSelectedBranch('all')}
            >
              Full Tree
            </button>
            <button
              type="button"
              className={`tree-tab-btn ${selectedBranch === 'languages' ? 'is-active' : ''}`}
              onClick={() => setSelectedBranch('languages')}
            >
              Languages (C, Python, Java, SQL)
            </button>
            <button
              type="button"
              className={`tree-tab-btn ${selectedBranch === 'tools' ? 'is-active' : ''}`}
              onClick={() => setSelectedBranch('tools')}
            >
              Tools (Git, Figma, Lovable)
            </button>
            <button
              type="button"
              className={`tree-tab-btn ${selectedBranch === 'cloud' ? 'is-active' : ''}`}
              onClick={() => setSelectedBranch('cloud')}
            >
              Cloud (NPTEL)
            </button>
            <button
              type="button"
              className={`tree-tab-btn ${selectedBranch === 'explore' ? 'is-active' : ''}`}
              onClick={() => setSelectedBranch('explore')}
            >
              Exploring Next (AI & Web)
            </button>
          </div>
        </div>

        {/* Vibe B — Structured Skill Tree Visual Board */}
        <div className="skill-tree-visual-container">
          <div className="tree-circuit-header">
            <div className="tree-circuit-meta">
              <span className="circuit-dot" />
              <span className="mono-label">STRUCTURED SKILL ARCHITECTURE // BRANCH TOPOLOGY</span>
            </div>
            <span className="tree-legend mono-label">
              ● ACTIVE PRACTICE &nbsp; ◐ ENROLLED &nbsp; ○ EXPLORING
            </span>
          </div>

          <div className="tree-layout-grid">
            {skillTreeNodes.filter(n => n.type === 'branch').map((branch) => {
              const isDimmed = selectedBranch !== 'all' && selectedBranch !== branch.branch;
              return (
                <div
                  key={branch.id}
                  className={`tree-branch-card ${isDimmed ? 'is-dimmed' : ''}`}
                >
                  <div className="branch-card-header">
                    <span className="mono-label branch-card-title">{branch.label}</span>
                    <span className="branch-line-indicator" />
                  </div>

                  <div className="branch-nodes-list">
                    {branch.items.map((node, i) => (
                      <div key={i} className="tree-leaf-node">
                        <div className="leaf-top">
                          <span className="leaf-name">{node.name}</span>
                          <span className={`leaf-status-pill ${getStatusBadgeClass(node.status)}`}>
                            {node.status}
                          </span>
                        </div>
                        <p className="leaf-role mono-label">{node.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Currently Exploring Domain Cards */}
        <div className="exploring-domains-wrap" id="exploring">
          <div className="sub-section-header">
            <span className="mono-label">EXPLORATION BREAKDOWN</span>
            <h3 className="sub-heading">Detailed Domains & Learning Horizons</h3>
          </div>

          <div className="exploring-cards-grid">
            {exploringAreas.map((domain, idx) => (
              <div key={idx} className="domain-card">
                <div className="domain-card-header">
                  <div className="domain-icon-wrap">
                    {getCategoryIcon(domain.category)}
                  </div>
                  <div>
                    <h4 className="domain-name">{domain.category}</h4>
                    <p className="domain-desc">{domain.description}</p>
                  </div>
                </div>

                <div className="domain-items-list">
                  {domain.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="domain-skill-row">
                      <div className="skill-row-main">
                        <span className="skill-dot-subtle" />
                        <span className="skill-name">{item.name}</span>
                      </div>
                      <span className={`skill-status-tag ${getStatusBadgeClass(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
