import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import "./myStyles.css";

function Experience() {
  return (
    <div id="experience" className="ms-5 me-5 text-details content-component">
      <div className="m-2 my-header-text" >Experience</div>
      {/* Veryable */}
      <div className="m-2">
        <Row xl={12}>
          <Col xl={2}>
            <img
            className="m-2"
              height={100}
              width={100}
              src={require("./../images/veryableLogo.png")}
              alt=""
            />
          </Col>
          <Col xl={8}>
            <Row className="text-to-highlight">
              <Col>
                <div>Director of Business Development</div>
              </Col>
              <Col>
                <div>May 2022 - Feb 2023</div>
              </Col>
            </Row>
            <Row>
              <div>Key Insights :</div>
              <ul>
                <li>
                  Spearheaded process improvements leading double year over year
                  monthly revenue for my district
                </li>
                <li>
                  Translate organizational strategy into actional work plans for
                  the team; manage and track targets to drive results with
                  accountability; fosters superior team dynamics, morale,
                  engagement, and low turnover.
                </li>
                <li>
                  Select, train, and manage staff responsible for developing new
                  business and maximizing business results; optimize profit with
                  expense management.
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
      </div>

      {/* UPS */}
      <div className="m-2">
        <Row xl={12}>
          <Col xl={2}>
            <img
            className="m-2"
              height={100}
              width={100}
              src={require("./../images/UpsLogo.png")}
              alt=""
            />
          </Col>
          <Col xl={8}>
            {/* position details */}
            <Row className="text-to-highlight">
              <Col>
                <div>Hub Manager</div>
              </Col>
              <Col>
                <div>Nov 2020 - Apr 2022</div>
              </Col>
            </Row>
            <Row>
              <div>Key Insights :</div>
              <ul>
                <li>
                  Improved peak time efficiency from 90% to over 99% for an
                  automated facility.
                </li>
                <li>Improved union relations for my hub by 90%.</li>
                <li>
                  Managed a workforce of 400+ employees, 50 part-time
                  supervisors, and 9 full-time supervisors.
                </li>
              </ul>
            </Row>
            <Row className="text-to-highlight">
              <Col>
                <div>Automated Small Sort Supervisor</div>
              </Col>
              <Col>
                <div>Jan 2017 - Nov 2020</div>
              </Col>
            </Row>
            <Row>
              <div>Key Insights :</div>
              <ul>
                <li>
                  Decreased the service error by half of two different sortation
                  systems in two different hubs.
                </li>
                <li>Increased productivity by 25%</li>
                <li>
                  Lead team meetings and mentored my peers as well as my 80+
                  direct and indirect reports.
                </li>
              </ul>
            </Row>
            <Row className="text-to-highlight">
              <Col>
                <div>Industrial Engineering Supervisor</div>
              </Col>
              <Col>
                <div>Jan 2016 - Jan 2017</div>
              </Col>
            </Row>
            <Row>
              <div>Key Insights :</div>
              <ul>
                <li>
                  Increased network capacity utilization resulting in $22k+
                  monthly savings
                </li>
                <li>
                  Built a satalite operation from the ground up to increase
                  network capacity
                </li>
                <li>
                  Implemented audit process to increase local capacity
                  utilization by 5%
                </li>
              </ul>
            </Row>
            <Row className="text-to-highlight">
              <Col>
                <div>Operations and Operations Lead Supervisor</div>
              </Col>
              <Col>
                <div>Feb 2013 - Jan 2016</div>
              </Col>
            </Row>
            <Row>
              <div>Key Insights :</div>
              <ul>
                <li>Lead a team of my peers</li>
                <li>
                  Decreased service errors to better than 1/10th that of the
                  company goal
                </li>
                <li>Increased productivity of my work area by 10%</li>
              </ul>
            </Row>
          </Col>
        </Row>
      </div>
      {/* Milityary */}
      <div className="m-2">
        <Row xl={12}>
          <Col xl={2}>
            <img
                className="m-2"
              height={100}
              width={100}
              src={require("./../images/IndianaNationalGuardLogo.jpeg")}
              alt=""
            />
          </Col>
          <Col xl={8}>
            <Row className="text-to-highlight">
              <Col>
                <div>Soldier</div>
              </Col>
              <Col>
                <div>Nov 2010 - Nov 2018</div>
              </Col>
            </Row>
            <Row>
              <div>Key Insights :</div>
              <ul>
                <li>3 years as 88M - Transportation</li>
                <li>3 years as 11B - Infantry</li>
                <li>2 years - Inactive Reserver</li>
              </ul>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Experience;
