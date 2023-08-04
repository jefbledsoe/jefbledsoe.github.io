import { Row, Col } from "react-bootstrap";

function FullStackBankApp(props) {
  return (
    <div id="" className="m-2 text-details">
      {/* project title */}
      <div className="text-to-highlight">Full Stack Banking App</div>
      <Row xl={12}>
        <Col xl={6}>
          {/* project image */}
          <a href="https://jefbledsoe-banking-app-0b47320846be.herokuapp.com/">
            <img

              className="m-2 project-image"
              src={require("../images/projectImages/fullStackBankApp.png")}
              alt=""
              height={200}
            />
          </a>
        </Col>
        <Col xl={4}>
          {/* Key systems or tech */}
          <Row className="d-inline mt-3">
            <span className="text-to-highlight"> M </span>MongoDB
            <span className="text-to-highlight"> E </span>Express
            <span className="text-to-highlight"> R </span>React
            <span className="text-to-highlight"> N </span>Node
          </Row>
          {/* Brief description */}
          <Row className="mt-3">
            <div>
              Banking app that allows users to create accounts with
              <span className="text-to-highlight"> Persistent data. </span> The app
              takes new users then
              <span className="text-to-highlight"> Authenticates </span>returning users
              to access account information. The app mocks up the ability to
              enter transactions in the form of withdraws and deposits. The user
              can then view their transaction history as well as other account
              details.
              <br />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default FullStackBankApp;
