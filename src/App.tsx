import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectPressStart from "./pages/ProjectPressStart";
import ProjectMetaHackathon from "./pages/ProjectMetaHackathon";
import LogoAnimation from "./components/LogoAnimation.tsx";
import BackgroundBokeh from "./components/BackgroundBokeh.tsx";
import ScrollToTop from "./helpers/ScrollToTop.tsx";
import NotFound from "./pages/NotFound.tsx";
import "./App.css";

function App() {
  const showAnimatedLogo = sessionStorage.getItem("showAnimatedLogo");
  if (showAnimatedLogo === null) {
    sessionStorage.setItem("showAnimatedLogo", "true");
  }

  const handleAnimationEnd = () => {
    sessionStorage.setItem("showAnimatedLogo", "false");
  };

  return (
    <>
      <BrowserRouter>
        {showAnimatedLogo === "true" && (
          <LogoAnimation handleAnimationEnd={handleAnimationEnd} />
        )}
        <ScrollToTop />
        <Header />
        <BackgroundBokeh />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
