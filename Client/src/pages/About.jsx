import "./styles/About.css";

const skills = {
  "Languages": ["HTML", "CSS", "JavaScript", "PHP"],
  "Frameworks": ["React.js", "Node.js", "Express.js", "Angular", "Laravel"],
  "Databases": ["MySQL", "MongoDB"],
  "Tools & Other": ["Git", "Figma", "Postman", "WebSocket", "Socket.IO"],
};

const certifications = [
  {
    title: "Clean Code",
    platform: "Udemy",
    date: "Apr 2026",
  },
  {
    title: "Angular Router in Depth (Angular 21)",
    platform: "Udemy",
    date: "Apr 2026",
  },
  {
    title: "The Complete SQL Bootcamp",
    platform: "Udemy",
    date: "Jan 2026",
  },
  {
    title: "Introduction to Software Engineering",
    platform: "Coursera (IBM)",
    date: "Jul 2025",
  },
];

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Charotar University of Science and Technology",
    meta: "Graduating May 2026 · CGPA 8.84",
  },
  {
    degree: "Higher Secondary Certificate (12th – Science)",
    institution: "Gujarat Secondary & Higher Secondary Education Board",
    meta: "Mar 2022 · 73%",
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "Gujarat Secondary Education Board",
    meta: "Mar 2020 · 71%",
  },
];

const About = () => {
  return (
    <section className="about">
      {/* ── Bio ── */}
      <div className="about__bio-row">
        <div className="about__avatar">
          <span className="about__avatar-initials">PS</span>
        </div>
        <div className="about__bio-text">
          <p className="about__label">About Me</p>
          <h2 className="about__heading">
            Building the web, one component at a time.
          </h2>
          <p className="about__body">
            I'm a recent Computer Engineering graduate from Charusat University
            with hands-on experience in MERN Stack and Angular through an
            internship and a traineeship. I enjoy turning design ideas into
            fast, real-world interfaces and clean APIs. I'm looking for a
            Full-Stack Developer role where I can keep learning and ship things
            that matter.
          </p>
          <div className="about__contact-links">
            <a
              href="mailto:shahpankti985@gmail.com"
              className="about__link"
            >
              shahpankti985@gmail.com
            </a>
            <span className="about__dot" aria-hidden="true" />
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="about__link"
            >
              GitHub
            </a>
            <span className="about__dot" aria-hidden="true" />
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="about__link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* ── Skills ── */}
      <div className="about__section">
        <h3 className="about__section-title">Technical Skills</h3>
        <div className="about__skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="about__skill-group">
              <p className="about__skill-category">{category}</p>
              <div className="about__skill-chips">
                {items.map((s) => (
                  <span key={s} className="about__chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Education ── */}
      <div className="about__section">
        <h3 className="about__section-title">Education</h3>
        <div className="about__timeline">
          {education.map((e, i) => (
            <div key={i} className="about__timeline-item">
              <div className="about__timeline-dot" />
              <div>
                <p className="about__timeline-title">{e.degree}</p>
                <p className="about__timeline-sub">{e.institution}</p>
                <p className="about__timeline-meta">{e.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Certifications ── */}
      <div className="about__section">
        <h3 className="about__section-title">Certifications</h3>
        <div className="about__cert-grid">
          {certifications.map((c, i) => (
            <div key={i} className="about__cert-card">
              <p className="about__cert-title">{c.title}</p>
              <p className="about__cert-meta">
                {c.platform} · {c.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;