import React from "react";
import { Col, Row } from "react-bootstrap";
import "./myStyles.css";

function Recommendations() {
  return (
    <div className="ms-5 me-5 text-details content-component" id="recommendations">
      <div className="m-2 my-header-text">
        Recommendations
      </div>
      <div className="m-2">
        {/* Header Row */}
        <Row xl={12}>
          <Col xl={2}>
            <img
              height={100}
              width={100}
              className="m-2"
              src={require("./../images/veryableLogo.png")}
              alt=""
            />
            <img
              className="m-2"
              height={100}
              width={100}
              src="https://media.licdn.com/dms/image/C4E03AQEqs-gYR0sh5w/profile-displayphoto-shrink_100_100/0/1557486525980?e=1696464000&v=beta&t=j2Czs6hoxWhxIYH-29fyGtBlyEaAypeM7m6TFZcwbEA"
              alt=""
            />
            <div className="mt-2 mb-2 text-decoration-underline">
              Justin Mack
            </div>
          </Col>
          <Col xl={8}>
            <div>
              <p>
                Recommenders Position:
                <span className="text-to-highlight"> General Manager</span>
              </p>
              <p>
                Jeff's Position:
                <span className="text-to-highlight">
                  {" "}
                  Director of Business Development
                </span>
              </p>
            </div>
            <Row></Row>
          </Col>
        </Row>
        {/* Details Row */}
        <Row>
          <Row>
            <p>
              Jeff brings
              <span className="text-to-highlight"> focus, integrity, and drive </span>
              to everything he does, which was evident from day 1. Throughout
              our tenure together Jeff was always working hard to build out
              processes, find new ways to solve problems, and exceed our goals.
              Jeff excels at breaking complex problems down into manageable
              parts and coaching others to perform at a high level. Working with
              Jeff was a fantastic experience and I have no doubt he'll continue
              to be as successful in all of his future endeavors as he has been
              in the past.
            </p>
          </Row>
        </Row>
      </div>

      <div className="m-2">
        {/* Header Row */}
        <Row xl={12}>
          <Col xl={2}>
            <img
              height={100}
              width={100}
              className="m-2"
              src={require("./../images/UpsLogo.png")}
              alt=""
            />
            <img
              className="m-2"
              height={100}
              width={100}
              src="https://media.licdn.com/dms/image/C5603AQG6WCLAyVgUsg/profile-displayphoto-shrink_100_100/0/1516779231301?e=1696464000&v=beta&t=pzksK_N2RNm23jG1QXxI0xehiX0yiTO2ZofaSrhRZbw"
              alt=""
            />
            <div className="mt-2 mb-2 text-decoration-underline">
              Christopher Robinson
            </div>
          </Col>
          <Col xl={8}>
            <div>
              <p>
                Recommenders Position:
                <span className="text-to-highlight"> Hub Division Manager</span>
              </p>
              <p>
                Jeff's Position:<span className="text-to-highlight"> Hub Manager</span>
              </p>
            </div>
            <Row></Row>
          </Col>
        </Row>
        {/* Details Row */}
        <Row>
          <Row>
            <p>
              Jeff Bledsoe always amazed me with his business insight and
              original methods to solving problems. He is always punctual, his
              knowledge is vast and extensive. Jeff Bledsoe is dedicated,
              self-motivated, methodical, and very capable. He is not only a
              reliable and forward thinking manager but also an inspiring team
              player. Jeff Bledsoe worked far beyond the call of duty. He
              absolutely
              <span className="text-to-highlight">
                shines in a hectic environment.
              </span>
              I personally appreciated calling him a partner.
            </p>
          </Row>
        </Row>
      </div>
    </div>
  );
}

export default Recommendations;
