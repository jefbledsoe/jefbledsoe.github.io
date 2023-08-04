import { Card, Image, Row, Col, ListGroup } from "react-bootstrap";

function PacmanApp(props) {
  return (
    <div className="m-2 text-details">
      <div className="text-to-highlight">Pacman App</div>
      <Row xl={12}>
        <Col xl={6}>
          {/* project image */}
          <a href="https://jefbledsoe.github.io/pacmanProject/">
            <img
              className="m-2 project-image"
              src={require("../images/projectImages/pacmanApp.png")}
              alt=""
              height={200}
            />
          </a>
        </Col>
        <Col xl={4}>
          {/* Key systems or tech */}
          <Row className="d-inline mt-3">
            <span className="text-to-highlight"> I </span>Image manipulation
            <span className="text-to-highlight"> R </span>Responsive to user input
            <span className="text-to-highlight"> C </span>Callback... to the good old days
          </Row>
          {/* Brief description */}
          <Row className="mt-3">
            <div>
              This is a simple Pacman application allows the user to start and stop the game. Additionally, It tracks when pacman hits a wall and <span className="text-to-highlight">automatically</span> turns him around. The user can also change the direction of pacman by clicking on the arrow keys. This application was built using <span className="text-to-highlight">HTML, CSS, and JavaScript.</span>
              <br />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default PacmanApp;
