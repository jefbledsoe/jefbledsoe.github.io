import { Row, Col } from "react-bootstrap";

function FullStackBankApp(props) {
  return (
    <div className="m-2 text-details">
      <div className="text-to-highlight">Moving Eyes App</div>
      <Row xl={12}>
        <Col xl={6}>
          {/* project image */}
          <a href="https://jefbledsoe.github.io/movingEyesProject/">
            <img
              className="m-2 project-image"
              src={require("../images/projectImages/movingEyesApp.png")}
              alt=""
              height={200}
            />
          </a>
        </Col>
        <Col xl={4}>
          {/* Key systems or tech */}
          <Row className="d-inline mt-3">
            <span className="text-to-highlight"> G </span>Grids with CSS
            <span className="text-to-highlight"> U </span>User input tracking
            <span className="text-to-highlight"> S </span>Standalone
          </Row>
          {/* Brief description */}
          <Row className="mt-3">
            <div>
              Facial expression app that allows the user to click and select
              different emotions for the eyes to display while
              <span className="text-to-highlight">
                Tracking the user's mouse.
              </span>
              This app is a great example of how to track user input and use it
              to <span className="text-to-highlight">Manipulate the DOM</span>{" "}
              making this app responsive and interactive for the user. Its great
              if your kid likes funny faces like mine does.
              <br />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default FullStackBankApp;
