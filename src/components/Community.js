import { Container } from "react-bootstrap";
import { community } from "../data/profile";

function Community() {
  return (
    <section id="community" className="section">
      <Container>
        <h2 className="section-title">Community Leadership</h2>
        <div className="grid-4">
          {community.map((c) => (
            <div className="card-panel mini" key={c.org}>
              <div className="mini-title">{c.title}</div>
              <div className="mini-sub">{c.org}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Community;
