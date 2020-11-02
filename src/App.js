import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Navbar";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import pp from "./pp (1).jpg";
import MainPage from "./Components/MainPage";
import React, { useEffect } from "react";
import AboutMe from "./Components/AboutMe";
import SkillsPage from "./Components/SkillsPage";
import ProjectsPage from "./Components/ProjectsPage";
import AcademicTimeline from "./Components/AcademicTimeline";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainPage data="fade-up" />
      <AboutMe />
      <SkillsPage />
      <ProjectsPage />
      <AcademicTimeline />
    </div>
  );
}

export default App;
