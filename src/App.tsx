import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import ProjectPressStart from "./pages/ProjectPressStart";
import ProjectMetaHackathon from "./pages/ProjectMetaHackathon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route
            path="/projects/press-start"
            element={<ProjectPressStart />}
          ></Route>
          <Route
            path="/projects/meta-hackathon"
            element={<ProjectMetaHackathon />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
