import { Container } from "react-bootstrap";
import { skills } from "../data/profile";

function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <h2 className="section-title">Skills</h2>
        <div className="grid-4">
          {skills.map((s) => (
            <div className="card-panel" key={s.group}>
              <h3 className="skill-group">{s.group}</h3>
              <div className="chips">
                {s.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
