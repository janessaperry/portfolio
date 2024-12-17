import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import ProjectPressStart from "./pages/ProjectPressStart";
import ProjectMetaHackathon from "./pages/ProjectMetaHackathon";
import ScrollToTop from "./helpers/ScrollToTop.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/press-start" element={<ProjectPressStart />} />
          <Route
            path="/projects/meta-hackathon"
            element={<ProjectMetaHackathon />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
