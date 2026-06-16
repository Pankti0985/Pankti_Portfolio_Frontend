import "./styles/Projects.css";

const projects = [
  {
    title: "Virtual Event Platform",
    period: "Dec 2024 – May 2025",
    stack: ["React", "Node.js", "MongoDB", "WebRTC", "WebSocket"],
    description:
      "A MERN-stack platform for hosting online events featuring live webinars, networking lounges, and exhibitor booths. Real-time communication is handled via WebRTC and WebSocket.",
    highlights: [
      "Live webinar rooms with WebRTC peer connections",
      "Networking lounges with real-time presence updates",
      "Exhibitor booth management panel",
    ],
    tag: "Academic",
  },
  {
    title: "JobConnect",
    period: "May 2025 – Jun 2025",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    description:
      "A full-featured job portal built during a MERN Stack internship. Supports user/recruiter registration, job posting, job applications, and resume parsing.",
    highlights: [
      "Real-time chat between applicants and recruiters via Socket.IO",
      "Resume parsing on application submission",
      "Role-based dashboards for applicants and recruiters",
    ],
    tag: "Internship",
  },
  {
    title: "Scholars — Scholarship App",
    period: "Aug 2024 – Nov 2024",
    stack: ["HTML", "CSS", "JavaScript", "Laravel", "MySQL"],
    description:
      "A dynamic scholarship portal that personalises recommendations based on user eligibility, with real-time filtering, personalized search, and an interactive dashboard.",
    highlights: [
      "Eligibility-based scholarship recommendations",
      "Real-time search with dynamic filters",
      "Interactive dashboard with application tracking",
    ],
    tag: "Academic",
  },
];

const tagColor = {
  Academic: "tag--academic",
  Internship: "tag--internship",
};

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__header">
        <p className="projects__eyebrow">Work I'm proud of</p>
        <h2 className="projects__heading">Projects</h2>
        <p className="projects__subtext">
          A selection of things I've built — from real-time platforms to
          full-stack portals.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <article key={i} className="project-card">
            <div className="project-card__top">
              <div className="project-card__meta">
                <span className={`project-card__tag ${tagColor[p.tag] || ""}`}>
                  {p.tag}
                </span>
                <span className="project-card__period">{p.period}</span>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
            </div>

            <ul className="project-card__highlights">
              {p.highlights.map((h, j) => (
                <li key={j} className="project-card__highlight-item">
                  <span className="project-card__bullet" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="project-card__stack">
              {p.stack.map((s) => (
                <span key={s} className="project-card__chip">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;