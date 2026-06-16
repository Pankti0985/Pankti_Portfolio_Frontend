import "../pages/styles/Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home__bg-grid" aria-hidden="true" />

      <div className="home__content">
        <p className="home__eyebrow">Full Stack Developer</p>
        <h1 className="home__name">
          Pankti<br />Shah
        </h1>
        <p className="home__tagline">
          I build responsive, real-time web experiences — from intuitive UIs to
          robust APIs.
        </p>

        <div className="home__cta-row">
          <a href="/projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="/contact" className="btn btn--ghost">
            Get in Touch
          </a>
        </div>

        <div className="home__tech-strip">
          {["React", "Node.js", "Angular", "MongoDB", "Socket.IO", "Laravel"].map(
            (t) => (
              <span key={t} className="home__tech-chip">
                {t}
              </span>
            )
          )}
        </div>
      </div>

      <div className="home__visual" aria-hidden="true">
        <div className="home__orb home__orb--1" />
        <div className="home__orb home__orb--2" />
        <div className="home__code-card">
          <span className="home__code-line home__code-line--comment">{"// crafting digital products"}</span>
          <span className="home__code-line">
            <span className="kw">const</span>{" "}
            <span className="fn">developer</span>{" "}
            <span className="op">=</span>{" "}
            <span className="op">{"{"}</span>
          </span>
          <span className="home__code-line home__code-line--indent">
            name<span className="op">:</span>{" "}
            <span className="str">"Pankti Shah"</span><span className="op">,</span>
          </span>
          <span className="home__code-line home__code-line--indent">
            stack<span className="op">:</span>{" "}
            <span className="str">"MERN + Angular"</span><span className="op">,</span>
          </span>
          <span className="home__code-line home__code-line--indent">
            passion<span className="op">:</span>{" "}
            <span className="str">"building things"</span>
          </span>
          <span className="home__code-line">
            <span className="op">{"}"}</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;