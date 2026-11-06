import { Container } from "react-bootstrap";
import { recommendations } from "../data/profile";
import OrgLogo from "./OrgLogo";

function Recommendations() {
  return (
    <section id="recommendations" className="section">
      <Container>
        <h2 className="section-title">Recommendations</h2>
        <div className="grid-2">
          {recommendations.map((r) => (
            <figure className="card-panel quote" key={r.name}>
              <blockquote>“{r.quote}”</blockquote>
              <figcaption>
                <OrgLogo name={r.name} />
                <div>
                  <div className="mini-title">{r.name}</div>
                  <div className="mini-sub">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Recommendations;
