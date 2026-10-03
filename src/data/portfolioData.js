/**
 * Granthana GM — Portfolio Data Architecture
 * 
 * Centralized, authentic data store reflecting:
 * - 2nd Year B.Tech CSE Student at REVA University, Bangalore (3rd Semester)
 * - Vice President, OSCode @ REVA University
 * - Real projects: MyMindfulSpace (Lovable) & Cyber Scam Detection App (Figma)
 * - 15+ Events organized across Hackathons, Workshops, Panels & Tech meetups
 * - Enrolled in NPTEL Cloud Computing
 * - Growth mindset: Exploring, Learning, Building before specializing.
 */

export const personalInfo = {
  name: "Granthana GM",
  shortName: "Granthana",
  title: "CSE Student · REVA University · Bangalore",
  academicYear: "2nd Year · 3rd Semester",
  institution: "REVA University",
  location: "Bangalore, India",
  timezone: "IST (UTC+5:30)",
  headline: "Exploring. Learning. Building.",
  summary: "I'm a curious CSE student exploring different areas of technology, building projects, organizing communities, and constantly learning something new.",
  bio: [
    "I am a 2nd-year Computer Science and Engineering student at REVA University in Bangalore. Rather than prematurely narrowing myself down to a single niche, I am intentionally exploring the vast landscape of computing—from foundational logic in C and Java, to data manipulation in SQL, modern interface prototyping with Figma and Lovable, and the possibilities of cloud computing and AI.",
    "I believe the best way to understand technology is to build with it. Whether that means designing an intuitive mobile app to protect people from cyber scams or orchestrating a personal wellness dashboard with modern AI-assisted workflows, I thrive on turning ideas into interactive experiences.",
    "Beyond writing code, I am deeply invested in our campus developer ecosystem. As the Vice President of OSCode, I've had the privilege of organizing 15+ hackathons, technical workshops, and panel sessions—bringing together peers, industry speakers, and student builders to learn and grow collaboratively."
  ],
  motto: "Still learning. Still building. Still becoming.",
  email: "granthana2006@gmail.com", // [REPLACEABLE: Primary email]
  github: "https://github.com/granthana2006", // [REPLACEABLE: GitHub link]
  linkedin: "https://www.linkedin.com/in/granthana-gm-0623a9382", // [REPLACEABLE: LinkedIn link]
  resumeUrl: "#resume", // Triggers the interactive modal & print/download
  status: "Open to internships & student collaborations",
};

// Real Personal Growth Stats (Strictly accurate)
export const personalStats = [
  { value: "2+", label: "Years of learning", note: "CSE fundamentals & exploratory builds" },
  { value: "15+", label: "Events organized", note: "Hackathons, workshops & panel sessions" },
  { value: "1", label: "Club leadership role", note: "Vice President at OSCode REVA" },
  { value: "∞", label: "Things left to explore", note: "Curiosity-first engineering" },
];

// Developer OS System Modes (/learn, /build, /explore, /lead)
export const systemModes = [
  {
    id: "learn",
    command: "/learn",
    title: "LEARN",
    subtitle: "Foundational Languages & Principles",
    description: "C, Java, Python, SQL, and Cloud Computing concepts.",
    targetSection: "learning",
    tags: ["C", "Java", "Python", "SQL", "Cloud Basics"]
  },
  {
    id: "build",
    command: "/build",
    title: "BUILD",
    subtitle: "Projects, Prototypes & Experiments",
    description: "MyMindfulSpace, Cyber Scam Detection App, and web experiments.",
    targetSection: "projects",
    tags: ["MyMindfulSpace", "Figma Scam App", "Web Experiments"]
  },
  {
    id: "explore",
    command: "/explore",
    title: "EXPLORE",
    subtitle: "Emerging Tech & Next Horizons",
    description: "AI, Generative AI, Cloud infrastructure, and modern frontend tools.",
    targetSection: "exploring",
    tags: ["Generative AI", "NPTEL Cloud", "Modern Web", "Systems"]
  },
  {
    id: "lead",
    command: "/lead",
    title: "LEAD",
    subtitle: "Community, OSCode & Campus Impact",
    description: "Vice President at OSCode, 15+ events organized for student builders.",
    targetSection: "leadership",
    tags: ["OSCode VP", "15+ Events", "Hackathons", "Workshops"]
  }
];

// Currently Exploring Areas (Honest categorization with qualitative status badges)
export const exploringAreas = [
  {
    category: "Programming",
    icon: "code",
    description: "Core algorithmic thinking and language syntax foundations.",
    items: [
      { name: "C", status: "Practicing", focus: "Memory model, pointers, logic structures" },
      { name: "Python", status: "Learning", focus: "Fundamentals, problem solving, automation" },
      { name: "Java", status: "Practicing", focus: "Object-oriented programming, class design" },
    ]
  },
  {
    category: "Data & Persistence",
    icon: "database",
    description: "Structured querying and relational data modeling.",
    items: [
      { name: "SQL", status: "Learning", focus: "Relational schemas, queries, joins, filtering" },
    ]
  },
  {
    category: "Cloud",
    icon: "cloud",
    description: "Distributed infrastructure and virtualization paradigms.",
    items: [
      { name: "Cloud Computing", status: "Enrolled", focus: "NPTEL certification course (In Progress)" },
    ]
  },
  {
    category: "Building & Prototyping",
    icon: "layers",
    description: "Translating concepts into tangible, human-friendly software.",
    items: [
      { name: "Figma", status: "Building with", focus: "UI/UX wireframing, component design systems" },
      { name: "Lovable", status: "Building with", focus: "AI-assisted rapid full-stack prototyping" },
      { name: "Web Experiments", status: "Exploring", focus: "HTML5, modern CSS, responsive layouts" },
    ]
  },
  {
    category: "Exploring Next",
    icon: "compass",
    description: "Emerging technological frontiers on my learning radar.",
    items: [
      { name: "AI & Generative AI", status: "Exploring", focus: "LLM workflows, prompt architecture, AI tools" },
      { name: "Web Development", status: "Exploring", focus: "Modern frontend workflows and web apps" },
      { name: "Distributed Systems", status: "Interested in", focus: "Scalability and cloud architectures" },
    ]
  }
];

// Structured Skill System (Only real tools/languages provided by user)
export const skillsData = {
  languages: [
    { name: "C", stage: "Academic & Practice", role: "Systems thinking, low-level logic" },
    { name: "Python", stage: "Active Practice", role: "Problem solving, scripting, data handling" },
    { name: "Java", stage: "Active Practice", role: "Object-Oriented Programming (OOP) foundations" },
    { name: "SQL", stage: "Learning", role: "Relational database queries and structure" }
  ],
  toolsAndPlatforms: [
    { name: "Git", stage: "Active", role: "Version control & commit hygiene" },
    { name: "GitHub", stage: "Active", role: "Repository hosting, open source collaboration" },
    { name: "VS Code", stage: "Daily Driver", role: "Primary development environment" },
    { name: "Figma", stage: "Active", role: "UI/UX wireframing, interactive prototyping" },
    { name: "Lovable", stage: "Active", role: "AI-assisted rapid full-stack web builds" }
  ],
  currentlyLearning: [
    { name: "Cloud Computing", provider: "NPTEL", status: "Currently Enrolled" },
    { name: "AI & Generative AI", provider: "Self-driven Exploration", status: "Exploring Tools & Workflows" },
    { name: "Modern Web Development", provider: "Practical Experiments", status: "Learning Responsive Web" }
  ]
};

// Interactive Currently Learning Cards
export const currentlyLearningList = [
  {
    id: "01",
    subject: "Python",
    tagline: "Practicing fundamentals + problem solving",
    status: "ACTIVE",
    details: "Focusing on data structures, algorithmic problem-solving patterns, and writing clean, readable scripts."
  },
  {
    id: "02",
    subject: "Java",
    tagline: "Building programming + OOP foundations",
    status: "ACTIVE",
    details: "Strengthening core object-oriented principles: encapsulation, inheritance, polymorphism, and modular class design."
  },
  {
    id: "03",
    subject: "SQL",
    tagline: "Databases + queries",
    status: "ACTIVE",
    details: "Learning relational algebra, table relations, multi-table joins, subqueries, and structured database querying."
  },
  {
    id: "04",
    subject: "Cloud Computing",
    tagline: "NPTEL Course (In Progress)",
    status: "ENROLLED",
    details: "Studying virtualization models, cloud service paradigms (IaaS, PaaS, SaaS), cloud storage, and distributed architectures."
  },
  {
    id: "05",
    subject: "AI / Emerging Tech",
    tagline: "Exploring possibilities",
    status: "EXPLORING",
    details: "Investigating prompt engineering, AI API workflows, and how modern developers leverage AI tools for accelerated prototyping."
  }
];

// Featured Projects with Authentic Storytelling
export const projectsData = [
  {
    id: "mymindfulspace",
    name: "MyMindfulSpace (LifeSpace)",
    tagline: "All-in-One Personal Life & Wellness Dashboard",
    category: "Web Application · AI-Assisted Build",
    status: "Live Project",
    liveUrl: "https://mymindfulspace.lovable.app/",
    workflow: "Built using modern AI-assisted / vibe-coding workflow with Lovable",
    tools: ["Lovable", "React", "Tailwind CSS", "Modern Web", "AI-Assisted Prototyping"],
    previewType: "app-dashboard",
    summary: "A unified personal sanctuary bringing together a reflective journal, daily planner, book tracker, movie log, and wellness monitor into one calm interface.",
    story: {
      theIdea: "Most people juggle five different disconnected applications for journaling, planning their day, tracking books they want to read, keeping a movie watchlist, and checking in on their mental wellness. The friction of switching apps often leads to abandonment. I wanted to see if all these daily reflective habits could live cohesively inside a single, calming digital space.",
      theApproach: "Rather than spending weeks writing boilerplate infrastructure from scratch, I embraced modern AI-assisted rapid development ('vibe-coding') with Lovable. I designed the information architecture around distinct emotional zones—Daily Focus, Reading Shelf, Cinema Log, Mindful Journal—and iterated rapidly through prompt-driven UI refinement.",
      theBuild: "Created an interactive dashboard featuring a calendar planner, rich-text reflection area, visual book shelf with progress states, movie diary with ratings, and a daily mood/wellness tracker. The UI emphasizes soft neutral tones, minimal visual noise, and soothing typography to encourage daily return.",
      whatILearned: "This project gave me hands-on perspective on how modern developers can harness AI-assisted tools to move from concept to working software at unprecedented speed. I learned how to structure state across multiple dashboard widgets, refine component boundaries, and write precise design specifications.",
      whatsNext: "I plan to explore local storage persistence, data export capabilities, and personalized weekly wellness summary insights."
    }
  },
  {
    id: "cyber-scam-detection",
    name: "Cyber Scam Detection App",
    tagline: "Accessible Mobile UI/UX for Threat Verification & Digital Safety",
    category: "UI/UX Design · Product Architecture",
    status: "Figma Prototype",
    figmaUrl: "https://www.figma.com/make/iXENC7yxrye2VpjhHWfrzy/Cyber-Scam-Detection-App?t=07DQHCJRE5JHMBrR-1",
    workflow: "Complete wireframing, design system & user journey designed in Figma",
    tools: ["Figma", "UI/UX Design", "Wireframing", "Design System", "User Empathy"],
    previewType: "mobile-mockup",
    summary: "A high-fidelity mobile application prototype designed to help non-technical users quickly identify, verify, and flag fraudulent SMS, fake payment links, and impersonation scams.",
    story: {
      theIdea: "Digital fraud—especially fake UPI payment requests, deceptive delivery SMS links, and phishing scams—is skyrocketing in India and globally. Everyday users (especially parents and non-technical citizens) panic when they receive alarming messages and lack an instant, accessible way to check if a link or sender is legitimate before tapping.",
      theApproach: "I analyzed real-world scam patterns (urgency language, masked URLs, counterfeit banking domains) and designed an intuitive verification interface. Instead of intimidating users with technical cybersecurity terminology, I used recognizable traffic-light severity badges (Safe, Suspicious, Dangerous) paired with clear, actionable advice.",
      theBuild: "Designed an end-to-end mobile flow in Figma: a one-tap URL/SMS scanner, an interactive scam alert radar, a community-reported threat directory, and a step-by-step reporting wizard. Created a custom component library with high-contrast warning cards, accessible touch targets, and reassuring guidance screens.",
      whatILearned: "Designing for cybersecurity taught me user empathy under stress. When people suspect they are being scammed, clarity trumps cleverness. I learned how to structure design systems in Figma, manage design tokens, and build wireframe prototypes that communicate functionality clearly to developers.",
      whatsNext: "Translating the Figma design system into a working front-end prototype using React Native or modern web technologies with an integrated scam-check heuristic engine."
    }
  },
  {
    id: "upcoming-experiments",
    name: "More Experiments in the Lab",
    tagline: "Always Building, Breaking, and Learning",
    category: "Continuous Exploration",
    status: "In Active Progress",
    isPlaceholder: true,
    tools: ["C", "Java", "Python", "SQL", "Web"],
    previewType: "lab-terminal",
    summary: "New experiments currently brewing: foundational algorithmic problem sets in Python & Java, relational database utilities, and exploring AI API integrations.",
    story: {
      theIdea: "Growth as a Computer Science student happens through consistent experimentation. Every new semester introduces concepts that inspire new code prototypes.",
      theApproach: "Maintaining a continuous pipeline of small, deliberate projects that test specific concepts—whether it's multi-table relational queries in SQL or object-oriented design patterns in Java.",
      theBuild: "Code repositories and prototypes are actively being built and refined on GitHub.",
      whatILearned: "Embracing the messy, iterative nature of learning. Building something small that works teaches more than reading three textbooks in isolation.",
      whatsNext: "Publishing detailed writeups and open-sourcing repositories as each prototype reaches stability."
    }
  }
];

// Experience & Leadership (Vice President, OSCode @ REVA University)
export const leadershipRole = {
  role: "Vice President",
  organization: "OSCode",
  institution: "REVA University, Bangalore",
  period: "2024 – Present",
  headline: "Leading a student tech collective to foster open source, collaboration, and continuous building.",
  description: "As Vice President of OSCode, I play a central role in driving the technical community at REVA University. My focus is on demystifying software development, mentoring peers, and creating high-energy environments where students transition from passive learners to active creators.",
  responsibilities: [
    "Community Leadership: Guiding club strategy, organizing technical roadmap, and coordinating cross-functional student teams.",
    "Event Management: Spearheading the planning and execution of 15+ student tech events, including hackathons, hands-on workshops, and expert panel discussions.",
    "Technical Initiatives: Promoting open-source culture, version control best practices (Git & GitHub), and collaborative peer-to-peer coding sessions.",
    "Student Engagement: Creating an approachable, inclusive environment where beginners feel comfortable asking questions and starting their first projects."
  ]
};

// Events & Community (15+ Events Organized)
export const eventsData = {
  totalCount: "15+",
  tagline: "Cultivating community, sparking curiosity, and creating opportunities for peers.",
  categories: [
    {
      name: "Hackathons",
      count: "3+ Editions",
      description: "High-intensity multi-hour hackathons challenging student teams to conceptualize and prototype solutions under real constraints."
    },
    {
      name: "Workshops",
      count: "6+ Sessions",
      description: "Hands-on technical workshops covering Git/GitHub, programming fundamentals, web technologies, and developer tooling."
    },
    {
      name: "Panel Discussions",
      count: "3+ Panels",
      description: "Interactive forums with senior developers, industry guests, and alumni discussing tech careers, internships, and engineering realities."
    },
    {
      name: "Technical & Community Meetups",
      count: "4+ Gatherings",
      description: "Informal code jams, project showcases, open-source contribution drives, and beginner onboarding circles."
    }
  ],
  highlightQuote: "Building software is exciting, but building the community that builds the software is transformative."
};

// Education & Certifications
export const educationData = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "REVA University, Bangalore",
  timeline: "2nd Year · 3rd Semester (Expected 2027)",
  coursework: [
    "C Programming & Data Structures",
    "Object-Oriented Programming (Java)",
    "Database Management Systems (SQL)",
    "Computer Organization & Architecture",
    "Discrete Mathematics & Logic"
  ]
};

export const certificationsData = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    status: "Currently Enrolled / In Progress",
    isCompleted: false,
    focus: "Cloud architectures, virtualization, service models (IaaS/PaaS/SaaS), distributed resource management."
  }
];

// Journey / Timeline (Growth over perfection)
export const journeyPhases = [
  {
    step: "01",
    phase: "Started",
    title: "Entered CSE & Began Exploring",
    timeframe: "The Beginning",
    description: "Stepped into Computer Science and Engineering at REVA University with curiosity about how software shapes the modern world.",
    highlight: "First steps into computation"
  },
  {
    step: "02",
    phase: "Learning",
    title: "Foundational Programming",
    timeframe: "Core Foundations",
    description: "Dove into structured logic with C, object-oriented concepts with Java, script manipulation with Python, and relational data with SQL.",
    highlight: "C · Python · Java · SQL"
  },
  {
    step: "03",
    phase: "Building",
    title: "From Code to Products",
    timeframe: "Hands-On Builds",
    description: "Started designing UI systems in Figma (Cyber Scam Detection App) and building full web applications using modern AI-assisted tools like Lovable (MyMindfulSpace).",
    highlight: "Turning ideas into interfaces"
  },
  {
    step: "04",
    phase: "Community",
    title: "Joined OSCode Collective",
    timeframe: "Open Source Culture",
    description: "Joined REVA University's premier open source developer community, discovering the power of public learning and peer collaboration.",
    highlight: "Active community builder"
  },
  {
    step: "05",
    phase: "Leadership",
    title: "Vice President & 15+ Events",
    timeframe: "Leadership Milestone",
    description: "Stepped into the Vice President role at OSCode. Led team coordination and organized 15+ hackathons, workshops, and panel sessions for fellow students.",
    highlight: "Vice President @ OSCode"
  },
  {
    step: "06",
    phase: "Now",
    title: "Multidisciplinary Exploration",
    timeframe: "Current Horizon",
    description: "Actively studying Cloud Computing via NPTEL, exploring Generative AI workflows, and practicing algorithms while building new web experiments.",
    highlight: "Expanding the horizon"
  },
  {
    step: "07",
    phase: "Next",
    title: "Discovering Where to Specialize",
    timeframe: "The Future",
    description: "Approaching internships and technical opportunities with humility, a strong work ethic, and an eagerness to contribute to real-world engineering teams.",
    highlight: "Ready to contribute & grow"
  }
];

// Blog / Thoughts (Lightweight & Honest)
export const blogThoughts = {
  statusNotice: "Coming soon — documenting what I'm learning along the way.",
  description: "A forthcoming space to share raw notes, hackathon debriefs, technical milestones, and lessons learned as a student developer.",
  futureTopics: [
    { title: "What I'm Learning", tag: "Learning Notes", snippet: "Notes on memory pointers, database normalization, and concepts that clicked." },
    { title: "Things I Built", tag: "Project Deconstructions", snippet: "Behind the scenes of MyMindfulSpace and the Figma Cyber Scam Detection design." },
    { title: "Lessons from Organizing 15+ College Tech Events", tag: "Leadership", snippet: "What running hackathons and workshops teaches you about communication and teamwork." },
    { title: "Demystifying AI-Assisted Development as a Student", tag: "Experiments", snippet: "Reflections on vibe-coding with Lovable without losing fundamental software engineering thinking." }
  ]
};

// Social Links (Real & Clean)
export const socialLinks = [
  { name: "LinkedIn", url: "www.linkedin.com/in/granthana-gm-0623a9382", handle: "in/granthana-gm", type: "linkedin" },
  { name: "GitHub", url: "https://github.com/granthana2006", handle: "@granthana2006", type: "github" },
  { name: "Email", url: "mailto:granthana2006@gmail.com", handle: "granthana2006@gmail.com", type: "email" }
];
