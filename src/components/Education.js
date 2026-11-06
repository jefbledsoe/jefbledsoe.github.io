import { Container } from "react-bootstrap";
import { education } from "../data/profile";
import OrgLogo from "./OrgLogo";

function Education() {
  return (
    <section id="education" className="section">
      <Container>
        <h2 className="section-title">Education</h2>
        <div className="grid-3">
          {education.map((e) => (
            <article className="card-panel edu" key={e.school}>
              <OrgLogo src={e.logo} name={e.school} />
              <div>
                <div className="mini-title">{e.degree}</div>
                <div className="mini-sub">{e.school}</div>
                <div className="role-dates mt-1">{e.dates}</div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Education;
