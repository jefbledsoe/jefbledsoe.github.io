import { Col, Row } from "react-bootstrap";

function Connect() {
  return (
    <div className="my-sticky-footer">
      <div className="ms-5 me-5 p-2">
        <Row xs={12} className="justify-content-center">
          <Col xs={2} className="text-center">
            <a href="https://www.linkedin.com/in/jeff-bledsoe-full-stack-developer/">
              <img
                height={50}
                width={50}
                src={require("./../images/LinkedInLogo.png")}
                alt=""
                className="rounded"
              />
            </a>
          </Col>
          <Col xs={2} className="text-center  ms-5 me-5">
            <a href="https://github.com/jefbledsoe">
              <img
                height={50}
                width={65}
                src={require("./../images/GitHubLogo.png")}
                alt=""
              />
            </a>
          </Col>
          <Col xs={2} className="text-center">
            <a href="mailto:jefbleds@outlook.com">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Connect;
