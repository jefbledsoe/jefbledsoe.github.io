import "bootstrap/dist/css/bootstrap.min.css";
import "./components/myStyles.css";
import MyNavBar from "./components/MyNavBar";
import HeaderImage from "./components/HeaderImage";
import About from "./components/About";
import Experience from "./components/Experience";
import Community from "./components/Community";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Recommendations from "./components/Recommendations";
import Connect from "./components/Connect";

function App() {
  return (
    <>
      <MyNavBar />
      <main>
        <HeaderImage />
        <About />
        <Experience />
        <Community />
        <Education />
        <Skills />
        <Recommendations />
      </main>
      <Connect />
    </>
  );
}

export default App;
