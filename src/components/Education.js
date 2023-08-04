import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import "./myStyles.css";

function Education() {
  return (
    <div id="education" className="ms-5 me-5 text-details content-component">
      <div className="m-2 my-header-text" >
        Education
      </div>
      {/* Veryable */}

      <div className="m-2">
        <Row xl={12}>
          <Col xl={2}>
            <img
              className="m-2"
              height={100}
              width={100}
              src={require("./../images/IndianaUniversityEastLogo.jpg")}
              alt=""
            />
          </Col>
          <Col xl={8}>
            <Row className="text-to-highlight">
              <Col>
                <div>BS Business Administration</div>
              </Col>
              <Col>
                <div>Aug 2018 - May 2022</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="m-2">
        <Row xl={12}>
          <Col xl={2}>
            <img
              className="m-2"
              height={100}
              width={100}
              src={require("./../images/MitXProLogo.png")}
              alt=""
            />
          </Col>
          <Col xl={8}>
            <Row className="text-to-highlight">
              <Col>
                <div>MERN - Full Stack Development</div>
              </Col>
              <Col>
                <div>Mar 2023 - Aug 2023</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Education;
