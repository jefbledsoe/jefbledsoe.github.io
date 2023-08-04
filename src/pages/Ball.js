import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";

function Ball() {
  var intervalTimer = null;
  var objectHeight = 50;
  var objectWidth = 50;

  let ballStyle = {
    position: "absolute",
    left: `${window.innerWidth / 2 - objectWidth / 2}px`,
    top: `${window.innerHeight / 2 - objectHeight / 2}px`,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "blue",
  };
  let xSpeed = 12;
  let ySpeed = 5;

  function boundtryCheck() {
    let ball = document.getElementById("ball");
    let xMax = window.innerWidth - objectWidth;
    let xMin = 0;
    let yMax = window.innerHeight - objectHeight;
    let yMin = 0;
    let x = parseInt(ball.style.left);
    let y = parseInt(ball.style.top);

    if (x < xMin || x + xSpeed > xMax) {
      xSpeed = -xSpeed;
    }
    if (y < yMin || y + ySpeed> yMax) {
      ySpeed = -ySpeed;
    }
  }

  function startBall() {
    console.log("startBall");
    if (intervalTimer) {
      console.log("rejected, already started ball movement");
      return;
    }
    intervalTimer = setInterval(moveBall, 1000 / 60);
  }

  function stopBall() {
    console.log("stopBall");
    if (!intervalTimer) {
      console.log("rejected, ball movement not started");
      return;
    }
    clearInterval(intervalTimer);
    intervalTimer = null;
  }

  function moveBall() {
    console.log("moveBall");
    let ball = document.getElementById("ball");
    boundtryCheck();
    // x direction
    let x = ball.style.left;
    ball.style.left = parseInt(x) + xSpeed + "px";

    // y direction
    let y = ball.style.top;
    ball.style.top = parseInt(y) + ySpeed + "px";
  }

  function changeColor(e) {
    let ball = document.getElementById("ball");
    let color = e.target.id;
    console.log("changeColor: " + color);
    ball.style.backgroundColor = color;
  }

  return (
    <>
      <Row className="m-1" fluid>
        <Col>
          <Button variant="success" onClick={startBall}>
            Start
          </Button>
        </Col>
        <Col>
          <Button variant="danger" onClick={stopBall}>
            Stop
          </Button>
        </Col>
        {/* these buttons below will change the ball color */}
        <Col>
          <Button
            id="blue"
            className="text-nowrap"
            onClick={(e) => {
              changeColor(e);
            }}
          >
            Blue Ball
          </Button>
        </Col>
        <Col>
          <Button
            variant="danger"
            id="red"
            className="text-nowrap"
            onClick={(e) => {
              changeColor(e);
            }}
          >
            Red Ball
          </Button>
        </Col>
        <Col>
          <Button
            variant="success"
            id="green"
            className="text-nowrap"
            onClick={(e) => {
              changeColor(e);
            }}
          >
            Green Ball
          </Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            id="yellow"
            className="text-nowrap"
            onClick={(e) => {
              changeColor(e);
            }}
          >
            Yellow Ball
          </Button>
        </Col>
      </Row>
      <div id="ball" style={ballStyle} />    
    </>
  );
}
export default Ball;
