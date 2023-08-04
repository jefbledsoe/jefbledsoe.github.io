import React from "react";
import { Row, Col } from "react-bootstrap";

function Technologies() {
  return (
    <div id="technology" className="ms-5 me-5 content-component text-details">
      <div className="m-2 my-header-text">Technologies</div>

      <Row md={12}>
        <Col md={2}>
          {/* project image */}

          <a href="needs to be changed to this project">
            <img
              className="m-2"
              src={require("../images/frontEnd.png")}
              alt=""
              height={100}
              width={100}
            />
          </a>
        </Col>
        {/* Key systems or tech */}
        <Col md={6}>
          <Row>
            <div className="m-2 text-to-highlight">Front End</div>
          </Row>
          <Row>
            <p className="ms-4">
              HTML, CSS, JavaScript, React, Bootstrap, JQuery, CSS annimations
            </p>
          </Row>
        </Col>
      </Row>

      <Row md={12}>
        <Col md={2}>
          {/* project image */}

          <a href="needs to be changed to this project">
            <img
              className="m-2"
              src={require("../images/backEnd.png")}
              alt=""
              height={100}
              width={100}
            />
          </a>
        </Col>
        {/* Key systems or tech */}
        <Col md={6}>
          <Row>
            <div className="m-2 text-to-highlight">Back End</div>
          </Row>
          <Row>
            {" "}
            <p className="ms-4">
              Node.js, Express, MySQL, MongoDB, RESTful APIs, Strapi, GraphQL
            </p>
          </Row>
        </Col>
      </Row>

      <Row md={12}>
        <Col md={2}>
          {/* project image */}
          <div className="dev-ops-container">
            <img
              className="m-2"
              src={require("../images/devOpsEmpty.png")}
              alt=""
              height={100}
              width={100}
            />

            <img
              className="dev-ops-gear"
              src={require("../images/devOpsGear.png")}
              alt=""
              height={20}
              width={20}
            />
            <img
              className="dev-ops-gear-lower"
              src={require("../images/devOpsGear.png")}
              alt=""
              height={20}
              width={20}
            />
          </div>
        </Col>
        {/* Key systems or tech */}
        <Col md={6}>
          <Row>
            <div className="m-2 text-to-highlight">Development and Dev Ops</div>
          </Row>
          <Row>
            <p className="ms-4">
              GitHub, Heroku, Postman, FIrebase, AWS, Docker, Auth0
            </p>
          </Row>
        </Col>
      </Row>
      <Row md={12}>
        <Col md={2}>
          {/* project image */}
          <div className="dev-ops-container">
            <img
              className="m-2"
              src={require("../images/frontEnd.png")}
              alt=""
              height={100}
              width={100}
            />

            <img
              className="hour-glass"
              src={require("../images/hourGlass.png")}
              alt=""
              height={35}
              width={35}
            />
          </div>
        </Col>
        {/* Key systems or tech */}
        <Col md={6}>
          <Row>
            <div className="m-2 text-to-highlight">Comming Soon...</div>
          </Row>
          <Row>
            <p className="ms-4">Python, Machine Learning, AI Implementation</p>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Technologies;
