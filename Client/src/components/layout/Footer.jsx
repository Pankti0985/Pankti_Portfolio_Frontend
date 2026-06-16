import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Built with React.js by{" "}
        <span className="footer__name">Pankti Shah</span>
      </p>
      <div className="footer__links">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__link">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer__link">
          LinkedIn
        </a>
        <a href="mailto:shahpankti985@gmail.com" className="footer__link">
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;