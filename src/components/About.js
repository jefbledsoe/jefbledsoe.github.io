import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import "./myStyles.css";

function About() {
  return (
    <div
      id="about"
      className="ms-5 me-5 text-details content-component"
    >
      {/* Saying wonderful things about myself, but not too good because then people wont beleive that I really am that awsome */}
      <div className="m-2 my-header-text">
        About
      </div>
      <Row lg={12}>
        <Col lg={10}>
          <div className="ms-2 me-2">
            <span className="text-to-highlight">What makes me different?</span>{" "}
            I am coming to the tech industry from a less traditional route. This
            means that not only will I have tech skills but I will also bring a
            breadth of knowledge on leadership, team development, operations and
            now as a <span className="text-to-highlight">developer.</span>
          </div>
          <div className="ms-2 me-2">
            I have spent the last decade in the transportation and logistics
            industry. The majority of that time was spent in operations
            management and people{" "}
            <span className="text-to-highlight">leadership. </span> I have had the
            fortunate to lead multiple teams at different levels and
            within different departments.
          </div>
          <div className="ms-2 me-2">
            Along the way I have consistently driven process improvement,
            productivity gains and improved quality measures. Within the various
            roles and teams the improvements we were able to achieve generated
            thousands for dollars in savings.
          </div>
          <div className="ms-2 me-2">
            I have recently graduated from the{" "}
            <span className="text-to-highlight">
              MIT xPro Full Stack Development Bootcamp.{" "}
            </span>
            I am excited to take the skills I have learned and apply them to my
            next career. I am looking forward to working in the tech industry to
            use my new skills as a developer as well as my leadership and people
            skills to help drive the success of my team and company.
            <img
              className="text-to-highlight ms-2"
              src={require("./../images/index-pointing-at-the-viewer_1faf5.png")}
              alt=""
              height={30}
              width={30}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
