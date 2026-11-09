import { Container } from "react-bootstrap";
import { contact } from "../data/profile";
import Mark from "./Mark";

function Connect() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div className="lockup">
          <Mark className="lockup-mark" title="JB monogram" />
          <div className="lockup-text">
            <div className="lockup-name">Jeff Bledsoe</div>
            <p className="tagline">Operations · Technology · Civic&nbsp;Engagement</p>
          </div>
        </div>
        <nav className="footer-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.resume} target="_blank" rel="noreferrer">
            Resume (PDF)
          </a>
        </nav>
      </Container>
    </footer>
  );
}

export default Connect;
