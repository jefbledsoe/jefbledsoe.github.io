import { Navbar, Nav } from "react-bootstrap";
import "./myStyles.css";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import scrollFunction from "./navbarControl";
import { useState } from "react";

function MyNavBar() {
  window.onscroll = scrollFunction;
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      id="my-navbar"
      expand="xl"
      expanded={expanded}
      className="my-nav-bar sticky-top"
    >
      <NavbarToggle
        onClick={() => {
          setExpanded(!expanded);
        }}
        className="dark fw-bold fs-1"
        aria-controls="my-navbar"
      >
        <span className="material-symbols-outlined my-nav-bar-toggle">
          page_info
        </span>
      </NavbarToggle>
      <Navbar.Collapse className="justify-content-md-center my-navbar-nav">
        <Nav>
          <Nav.Item
            onClick={() => {
              setExpanded(false);
              window.location.href = "#about";
            }}
            className="ms-3 me-3 mb-1 my-header-text"
          >
            About
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              setExpanded(false);
              window.location.href = "#technology";
            }}
            className="ms-3 me-3 mb-1 my-header-text"
          >
            Technologies
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              setExpanded(false);
              window.location.href = "#portfolio";
            }}
            className="ms-3 me-3 mb-1 my-header-text"
          >
            Portfolio
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              setExpanded(false);
              window.location.href = "#experience";
            }}
            className="ms-3 me-3 mb-1 my-header-text"
          >
            Experience
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              setExpanded(false);
              window.location.href = "#education";
            }}
            className="ms-3 me-3 mb-1 my-header-text"
          >
            Education
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              setExpanded(false);
              window.location.href = "#recommendations";
            }}
            className="ms-3 me-3 mb-1 my-header-text"
          >
            Reccomendations
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavBar;
