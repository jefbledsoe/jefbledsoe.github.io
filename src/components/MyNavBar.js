import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { contact } from "../data/profile";

const links = [
  ["about", "About"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["skills", "Skills"],
  ["recommendations", "Recommendations"],
];

function MyNavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      variant="light"
      expanded={expanded}
      onToggle={setExpanded}
      className="site-nav sticky-top"
    >
      <Container>
        <Navbar.Brand href="#top" className="brand">
          JB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="site-nav-links" />
        <Navbar.Collapse id="site-nav-links" className="justify-content-end">
          <Nav>
            {links.map(([id, label]) => (
              <Nav.Link key={id} href={`#${id}`} onClick={() => setExpanded(false)}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <a className="btn-accent ms-lg-3" href={contact.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
