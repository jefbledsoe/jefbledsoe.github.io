import React, { useEffect } from "react";
import {
  Card,
  Col,
  ListGroup,
  Button,
  Ratio,
  Row,
  Image,
  Collapse,
  ToggleButton,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import GoogleFonts from "react-google-fonts";
import "./myStyles.css";

function HeaderImage() {
  return (
    <div id="my-header">
      <Row xs={12} className="justify-content-center" >
      
        <Col xs={5}>
          <img
            className="mx-auto d-block"
            id="profile-pic"
            height={200}
            src={require("./../images/aiCleanedProfilePic-removebg-preview.png")}
            alt=""
          />
        </Col>
        <Col xs={6}  id="welcome-message" className="text-details">
          <div >Hello, my name is</div>
          <div className="my-header-text special-text" >Jeff Bledsoe</div>
          <div>and I am a</div>
          <div className="my-header-text special-text" >Full Stack Developer.</div>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderImage;
