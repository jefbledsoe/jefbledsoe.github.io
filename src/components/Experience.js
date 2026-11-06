import { Container } from "react-bootstrap";
import { experience } from "../data/profile";
import OrgLogo from "./OrgLogo";

function Experience() {
  return (
    <section id="experience" className="section">
      <Container>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article className={`card-panel job${job.civic ? " job-civic" : ""}`} key={job.org}>
              <OrgLogo src={job.logo} name={job.org} />
              <div className="job-body">
                <h3 className="job-org">{job.org}</h3>
                {job.roles.map((role) => (
                  <div className="role" key={role.title}>
                    <div className="role-head">
                      <span className="role-title">{role.title}</span>
                      <span className="role-dates">{role.dates}</span>
                    </div>
                    <ul className="role-points">
                      {role.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
