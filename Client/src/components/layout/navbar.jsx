import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <a href="/" className="navbar__logo">
        <span className="navbar__logo-bracket">&lt;</span>
        PS
        <span className="navbar__logo-bracket">/&gt;</span>
      </a>

      <nav className="navbar__links" aria-label="Main navigation">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) =>
              "navbar__link" + (isActive ? " navbar__link--active" : "")
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      <a
        href="mailto:shahpankti985@gmail.com"
        className="btn btn--primary navbar__hire"
      >
        Hire Me
      </a>
    </header>
  );
};

export default Navbar;