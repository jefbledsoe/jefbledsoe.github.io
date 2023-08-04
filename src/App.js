import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio.js";
import HeaderImage from "./components/HeaderImage.js";
import About from "./components/About";
import Experience from "./components/Experience";
import Connect from "./components/Connect";
import Recommendations from "./components/Recommendations";
import Education from "./components/Education";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <HeaderImage />
      <MyNavBar />
      <About />
      <Technologies />
      <Portfolio />
      <Experience />
      <Education />
      <Recommendations />
      <Connect />
    </>
  );
}

export default App;
