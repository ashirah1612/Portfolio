import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("All");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      cat: "AI",
      featured: true,
      status: "Currently Developing",
      title: "Mediction AI — AI Powered Radiology Reporting System",
      desc: "AI-powered radiology reporting system generating professional medical reports with Gemini AI. Speech-to-text, patient history, AI reports, PDF export, and an admin dashboard for MRI, CT, X-Ray, and Ultrasound workflows.",
      tags: ["Python", "Flask", "SQLite", "Gemini API", "JavaScript", "HTML", "CSS", "Speech Recognition", "ReportLab"],
      icon: "brain",
      big: true,
    },
    {
      cat: "AI",
      title: "CNN-Based Multi-Modal AI Detection System",
      desc: "Deep learning app that detects AI-generated images, videos, and audio using CNNs. Includes image detection, audio analysis, video frame analysis, confidence scoring, and model prediction.",
      tags: ["Python", "TensorFlow", "CNN", "OpenCV"],
      icon: "eye",
      code: "https://github.com/ashirah1612/Multi-modal-AI-Detector",
      demo: "https://www.linkedin.com/posts/ashi-rah-0038213b7_ai-machinelearning-deeplearning-ugcPost-7456250489454837760-s5Ho/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGW_OMMBQwAghJ3tq0u6qCKsxKco8fxpTIA",
    },
    {
      cat: "Full Stack",
      title: "Expense Tracker Web Application",
      desc: "Complete MERN Stack application featuring secure authentication, REST APIs, and full expense management with CRUD functionality.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      icon: "database",
      code: "https://github.com/ashirah1612/expense-tracker-MERN",
      demo: "https://www.linkedin.com/posts/ashi-rah-0038213b7_mern-fullstack-webdevelopment-ugcPost-7444304554021650432-HikM/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGW_OMMBQwAghJ3tq0u6qCKsxKco8fxpTIA",
    },
    {
      cat: "UI",
      title: "Train Booking UI",
      desc: "Responsive train ticket booking interface inspired by modern railway platforms. Features train search, offers, responsive layouts, and user-friendly navigation.",
      tags: ["HTML", "CSS", "JavaScript"],
      icon: "sparkles",
      code: "https://github.com/ashirah1612/Train-booking-UI",
      demo: "https://ashirah1612.github.io/Train-booking-UI/",
    },
  ];

  const filters = ["All", "AI", "Full Stack", "Frontend", "UI"];
  const shown = projects.filter((p) => filter === "All" || p.cat === filter);

  const certifications = [
    "Introduction to Graphic Design (NPTEL)",
    "Elements of AI-Minnalearn (University of Helsinki)",
    "Hands-on Python (Reccsar Pvt.Ltd)",
    "Industry Ready Full Stack Development-MERN (Reccsar Pvt. Ltd)",
    "Introduction to User Experience Design (Georgia Institute of Technology)",
    "MongoDB Basics (MongoDB Inc)",
  ];

  const learning = [
    "Generative AI",
    "Large Language Models",
    "Computer Vision",
    "Advanced TensorFlow",
    "Cloud Deployment",
    "AI Applications",
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Build heatmap cells
  const cells = Array.from({ length: 26 * 7 }, (_, i) => {
    const r = Math.random();
    const level = r < 0.35 ? 0 : r < 0.6 ? 1 : r < 0.8 ? 2 : r < 0.93 ? 3 : 4;
    return level;
  });

  return (
    <div className="page">
      {/* Background layers */}
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      {/* NAV */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-brand" onClick={() => scrollTo("top")}>
            <span className="brand-avatar">A</span>
            <span className="brand-name">ASEERA</span>
          </div>
          <ul className="nav-links">
            <li onClick={() => scrollTo("about")}>About</li>
            <li onClick={() => scrollTo("experience")}>Experience</li>
            <li onClick={() => scrollTo("skills")}>Skills</li>
            <li onClick={() => scrollTo("projects")}>Projects</li>
            <li onClick={() => scrollTo("contact")}>Contact</li>
          </ul>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} className="btn-primary sm">
            Let's Talk <ArrowIcon />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-grid">
          <div className="hero-left reveal">
            <div className="chip">
              <span className="chip-dot" /> Open to Opportunities
            </div>
            <h1 className="hero-title">
              <span className="hero-title-line-1">ASEERA</span>
              <span className="hero-title-line-2">PARVEEN</span>
            </h1>
            <div className="hero-role">
              <span className="role-word">Aspiring </span>
              <TypeCycle
                words={[
                  "AI/ML Engineer",
                  "AI Software Engineer",
                  "Full Stack AI Developer",
                  "Machine Learning Engineer"
                ]}
              />           
            </div>
            <p className="hero-desc">
              I enjoy building intelligent software that combines Artificial Intelligence, Machine Learning, and modern web technologies to solve real-world problems. I'm continuously learning, building, and exploring innovative AI solutions.
            </p>
            <div className="hero-cta">
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }} className="btn-primary">
                View Projects <ArrowIcon />
              </a>
              <a href="/resume1.pdf" download className="btn-ghost">
                <DownloadIcon /> Resume
              </a>    
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} className="btn-ghost">
                <MailIcon /> Contact Me
              </a>
            </div>
            <div className="hero-meta">
              <div className="meta-item">
                <PinIcon /> <span>India</span>
              </div>
              <div className="meta-dot" />
              <div className="meta-item">
                <CapIcon /> <span>MCA · 8.40 CGPA</span>
              </div>
            </div>
          </div>

          <div className="hero-right reveal">
            <div className="hero-card">
              <div className="hero-image-wrap">
                <img
                  alt="Abstract neural network"
                  src="https://aseera-portflio.lovable.app/assets/hero-neural-_eP6mOIo.jpg"
                />
                <div className="img-overlay" />
                <div className="floating-tag tag-top">
                  <span className="pulse" /> Currently building
                </div>
                <div className="floating-tag tag-bot">Mediction AI</div>
              </div>
            </div>
            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="eyebrow reveal"><span className="chip-dot" /> About Me</div>
          <h2 className="section-title reveal">
            A fresher with builder's <span className="grad-text">instincts</span>
          </h2>
          <div className="about-grid">
            <div className="glass-card about-card reveal">
              <p>
                I am an MCA graduate passionate about Artificial Intelligence, Machine Learning, and Full Stack Development. I enjoy building AI-powered applications that solve practical problems while creating clean, user-friendly interfaces. My interests include Computer Vision, Deep Learning, Generative AI, and modern software engineering. I believe in continuous learning and enjoy transforming ideas into real-world applications.
              </p>
              <div className="pill-row">
                {["AI/ML", "Computer Vision", "Deep Learning", "Full Stack", "Generative AI"].map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>
            <div className="stat-grid reveal">
              <div className="glass-card stat"><div className="stat-num">8.40</div><div className="stat-label">MCA CGPA</div></div>
              <div className="glass-card stat"><div className="stat-num">4+</div><div className="stat-label">Projects Built</div></div>
              <div className="glass-card stat"><div className="stat-num">2</div><div className="stat-label">Internships</div></div>
              <div className="glass-card stat"><div className="stat-num">6+</div><div className="stat-label">Certifications</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="container">
          <div className="eyebrow reveal"><span className="chip-dot" /> Journey</div>
          <h2 className="section-title reveal">Education &amp; Experience</h2>
          <div className="journey-grid">
            <div className="reveal">
              <h3 className="sub-title"><CapIcon /> Education</h3>
              <div className="timeline">
                <TimelineItem year="2024 – 2026" title="Master of Computer Applications (MCA)" org="Madurai Kamaraj University" tag="CGPA: 8.40" />
                <TimelineItem year="2021 – 2024" title="Bachelor of Commerce in Computer Applications" org="Madurai Kamaraj University" tag="CGPA: 7.8" />
              </div>
            </div>
            <div className="reveal">
              <h3 className="sub-title"><BriefcaseIcon /> Experience</h3>
              <div className="timeline">
                <TimelineItem
                  year="Feb 2026 – May 2026"
                  title="AI/ML Intern"
                  org="Macvel Technologies"
                  bullets={[
                    "Developed AI/ML solutions using Python and TensorFlow.",
                    "Worked on data preprocessing and model evaluation.",
                    "Collaborated on machine learning workflows using real-world datasets.",
                  ]}
                />
                <TimelineItem
                  year="May 2025 – June 2025"
                  title="Website Development Intern"
                  org="Getin Technologies"
                  bullets={[
                    "Built responsive web interfaces.",
                    "Developed frontend and backend modules.",
                    "Implemented REST APIs.",
                    "Collaborated on real-world development projects.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="container">
          <div className="eyebrow reveal"><span className="chip-dot" /> Toolkit</div>
          <h2 className="section-title reveal">Skills &amp; Technologies</h2>
          <div className="skills-grid">
            <SkillCard icon={<CodeIcon />} title="Programming" items={["Python", "Java", "JavaScript", "HTML", "CSS"]} />
            <SkillCard icon={<StackIcon />} title="Frameworks" items={["Flask", "React", "Node.js", "Express.js"]} />
            <SkillCard icon={<CpuIcon />} title="AI & Machine Learning" items={["TensorFlow", "OpenCV", "NumPy", "Computer Vision", "Deep Learning", "CNN", "Machine Learning", "Generative AI"]} />
            <SkillCard icon={<DbIcon />} title="Databases" items={["MySQL", "MongoDB", "SQLite"]} />
            <SkillCard icon={<WrenchIcon />} title="Tools" items={["Git", "GitHub", "VS Code", "Figma", "Power BI", "Tableau", "CorelDRAW"]} />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <div className="eyebrow reveal"><span className="chip-dot" /> Featured Work</div>
          <h2 className="section-title reveal">Selected projects</h2>
          <p className="section-sub reveal">A mix of AI, full stack, and interface work — each built end-to-end.</p>

          <div className="filter-row reveal">
            {filters.map((f) => (
              <button key={f} className={`filter ${filter === f ? "filter-active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>

          <div className="projects-grid">
            {shown.map((p, i) => (
              <article key={i} className={`glass-card project reveal ${p.big ? "project-big" : ""}`}>
                <div className="proj-head">
                  <div className="proj-icon">{iconFor(p.icon)}</div>
                  <span className="cat-badge">{p.cat}</span>
                  {p.featured && <span className="feat-badge"><SparkIcon /> Featured</span>}
                </div>
                {p.status && <div className="proj-status"><span className="pulse" /> {p.status}</div>}
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="pill-row">
                  {p.tags.map((t) => (
                    <span key={t} className="pill sm">{t}</span>
                  ))}
                </div>
                {(p.code || p.demo) && (
                  <div className="proj-actions">
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noreferrer" className="btn-ghost sm"><GitIcon /> Code</a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary sm">Demo <ArrowIcon /></a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <div className="container">
          <div className="eyebrow reveal"><span className="chip-dot" /> Credentials</div>
          <h2 className="section-title reveal">Certifications</h2>
          <div className="cert-grid">
            {certifications.map((c) => (
              <div key={c} className="glass-card cert reveal">
                <div className="cert-icon"><AwardIcon /></div>
                <div>
                  <div className="cert-title">{c}</div>
                  <div className="cert-sub">Certificate</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="section">
        <div className="container">
          <div className="eyebrow reveal"><span className="chip-dot" /> What's Next</div>
          <h2 className="section-title reveal">Currently learning</h2>
          <div className="learn-grid">
            {learning.map((l) => (
              <div key={l} className="glass-card learn reveal">
                <div className="learn-title">{l}</div>
                <div className="learn-status"><span className="pulse" /> In progress</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CADENCE HEATMAP */}
      

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <div className="chip reveal"><span className="pulse" /> Available Now</div>
          <h2 className="section-title reveal">Open to opportunities in <span className="grad-text">AI/ML &amp; Full Stack</span></h2>
          <p className="section-sub reveal">Actively seeking entry-level roles where I can contribute, learn from experienced teams, and ship AI-powered products.</p>
          <div className="pill-row center reveal">
            {["Entry-level AI/ML", "Python Developer", "Software Development", "Computer Vision", "Full Stack Developer"].map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>

          <div className="glass-card contact-card reveal">
            <div className="eyebrow small"><span className="chip-dot" /> Get in touch</div>
            <h3 className="contact-title">Let's build something intelligent</h3>
            <p className="contact-desc">Whether it's a role, a collaboration, or an idea worth exploring — my inbox is open. I'll get back within a day.</p>
            <a href="mailto:ashirah1612@gmail.com" className="email-link"><MailIcon /> ashirah@1612@gmail.com</a>
            <div className="contact-actions">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="btn-ghost"><LinkedinIcon /> LinkedIn</a>
              <a href="https://github.com/ashirah1612" target="_blank" rel="noreferrer" className="btn-ghost"><GitIcon /> GitHub</a>
              <a href="/resume1.pdf" download className="btn-ghost">
                <DownloadIcon /> Resume
              </a>           
             </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="nav-brand">
          </div>
          <div className="footer-text">© 2026 Aseera Parveen </div>
        </div>
      </footer>
    </div>
  );
}

function TypeCycle({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 45 : 90;
    const timer = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, del, i, words]);

  return (
    <span className="type-word">
      {text}
      <span className="caret" />
    </span>
  );
}

function TimelineItem({ year, title, org, tag, bullets }) {
  return (
    <div className="tl-item">
      <div className="tl-dot" />
      <div className="glass-card tl-card">
        <div className="tl-year">{year}</div>
        <div className="tl-title">{title}</div>
        <div className="tl-org">{org}</div>
        {tag && <span className="tag-soft">{tag}</span>}
        {bullets && (
          <ul className="tl-list">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function SkillCard({ icon, title, items }) {
  return (
    <div className="glass-card skill-card reveal">
      <div className="skill-head">
        <div className="proj-icon">{icon}</div>
        <h3 className="skill-title">{title}</h3>
      </div>
      <div className="pill-row">
        {items.map((t) => (
          <span key={t} className="pill sm">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---- Inline SVG icons ---- */
const ArrowIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
const DownloadIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>);
const MailIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
const PinIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>);
const CapIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>);
const BriefcaseIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>);
const CodeIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const StackIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>);
const CpuIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>);
const DbIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>);
const WrenchIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.9 2.9-2.7-2.7 2.6-2.2z"/></svg>);
const BrainIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15A2.5 2.5 0 0 1 9.5 22 2.5 2.5 0 0 1 7 19.5 2.5 2.5 0 0 1 4.5 17c0-1.1.7-2 1.5-2.5A2.5 2.5 0 0 1 4.5 12 2.5 2.5 0 0 1 6 9.5C5.5 8.9 5 8 5 7A2.5 2.5 0 0 1 7.5 4.5C7.5 3.1 8.6 2 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 2.5-2.5c0-1.1-.7-2-1.5-2.5A2.5 2.5 0 0 0 19.5 12 2.5 2.5 0 0 0 18 9.5C18.5 8.9 19 8 19 7a2.5 2.5 0 0 0-2.5-2.5C16.5 3.1 15.4 2 14.5 2z"/></svg>);
const EyeIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>);
const SparkIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l1.9 5.7L20 9l-5.1 3.3L17 19l-5-3.5L7 19l2.1-6.7L4 9l6.1-1.3z"/></svg>);
const AwardIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88"/></svg>);
const GitIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>);
const LinkedinIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);

function iconFor(name) {
  switch (name) {
    case "brain": return <BrainIcon />;
    case "eye": return <EyeIcon />;
    case "database": return <DbIcon />;
    case "sparkles": return <SparkIcon />;
    default: return <SparkIcon />;
  }
}

export default App;
