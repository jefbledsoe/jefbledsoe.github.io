import { Container } from "react-bootstrap";
import { certifications, education } from "../data/profile";
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
        <p className="mini-sub mt-3">
          Certification:{" "}
          {certifications.map((c) => `${c.title} (${c.issuer})`).join(" · ")}
        </p>
      </Container>
    </section>
  );
}

export default Education;
