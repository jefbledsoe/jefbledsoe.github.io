import { Card, Image, Row, Col, ListGroup } from "react-bootstrap";

function WeatherApiApp(props) {
  return (
    <div className="m-2 text-details">
      <div className="text-to-highlight">Weather API App</div>
      <Row xl={12}>
        <Col xl={6}>
          {/* project image */}
          <a href="needs to be changed to this project">
            <img
              className="m-2 project-image"
              src={require("../images/projectImages/weatherAlertApp.png")}
              alt=""
              height={200}
            />
          </a>
        </Col>
        <Col xl={4}>
          {/* Key systems or tech */}
          <Row className="d-inline mt-3">
            <span className="text-to-highlight"> B </span>Bootstrap myStyles
            <span className="text-to-highlight"> A </span>Asyncronous javascript
            <span className="text-to-highlight"> T </span>Third party API
          </Row>
          {/* Brief description */}
          <Row className="mt-3">
            <div>
              This application uses the National Weather Service weather api. It is a simple application that displays the current weather alerts for each state. The application is built using React and <span className="text-to-highlight">Bootstrap.</span> The application is <span className="text-to-highlight">deployed</span> on github pages.
              <br />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default WeatherApiApp;
