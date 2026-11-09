import { Container } from "react-bootstrap";
import { contact } from "../data/profile";

function HeaderImage() {
  return (
    <header id="top" className="hero">
      <Container className="hero-inner">
        <img
          className="hero-photo"
          src={require("./../images/headshot.jpg")}
          alt="Jeff Bledsoe"
        />
        <div className="hero-text">
          <h1 className="hero-name">Jeff Bledsoe</h1>
          <p className="tagline">Operations · Technology · Civic&nbsp;Engagement</p>
          <p className="hero-sub">
            Operations &amp; technology leader · Former Co-Founder &amp; CTO · Kelley MBA
            Candidate, 2027 · {contact.location}
          </p>
          <div className="hero-actions">
            <a className="btn-accent" href={contact.resume} target="_blank" rel="noreferrer">
              Download resume
            </a>
            <a className="btn-ghost" href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn-ghost" href={`mailto:${contact.email}`}>
              Email me
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default HeaderImage;
