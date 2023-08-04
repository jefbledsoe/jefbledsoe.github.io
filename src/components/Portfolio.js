import React from "react";
import FullStackBankApp from "./FullStackBankingApp";
import MovingEyesApp from "./MovingEyesApp";
import PacmanApp from "./PacmanApp";
import WeatherApiApp from "./weatherApiApp";
function Portfolio() {
  return (
    <div id="portfolio" className="ms-5 me-5 text-details content-component">
      <div className="m-2 my-header-text">Portfolio </div>
      <FullStackBankApp />
      <MovingEyesApp />
      <PacmanApp />
      <WeatherApiApp />
    </div>
  );
}

export default Portfolio;
