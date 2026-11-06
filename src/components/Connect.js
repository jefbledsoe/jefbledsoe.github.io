import { Container } from "react-bootstrap";
import { contact } from "../data/profile";

function Connect() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div>
          <div className="mini-title">Let's connect</div>
          <div className="mini-sub">{contact.location}</div>
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
