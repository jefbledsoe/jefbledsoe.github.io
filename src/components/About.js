import { Container } from "react-bootstrap";
import { stats } from "../data/profile";

function About() {
  return (
    <section id="about" className="section">
      <Container>
        <h2 className="section-title">About</h2>
        <div className="about-copy">
          <p>
            I've spent more than a decade making physical operations run better, first leading hubs
            and teams of <span className="hl">400+ people</span> at UPS, then building the software
            that runs a delivery business as <span className="hl">Co-Founder &amp; CTO of Priscotty</span>.
            I like problems where technology and operations meet: dispatching, inventory, data and the
            people who make it all work.
          </p>
          <p>
            In 2026 I ran for <span className="hl">Westfield Washington Township Trustee</span> on a
            platform of transparency, proactive cost control and community assistance, winning the
            primary and carrying the campaign through the November general election. I'm finishing
            my <span className="hl">MBA at Indiana University's Kelley School of Business</span>, expected
            in 2027.
          </p>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default About;
