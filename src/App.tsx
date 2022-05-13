import React, { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Cv from "./view/Cv";
import Projects from "./view/Projects";
import Contact from "./view/Contact";
import SideBar from "./components/SideBar";
import ExpandButton from "./components/ExpandButton";

function App() {
  const [sideBarButton, invert] = useState(true);
  const buttonClick = () => {
    invert(!sideBarButton);
  };
  let sideBarWidth: string;

  sideBarButton ? (sideBarWidth = "300px") : (sideBarWidth = "0px");

  return (
    //framer-motion
    <div className="App">
      <div className="sidebar-button">
        <ExpandButton onClick={buttonClick} expand={sideBarButton} />
      </div>

      <div style={{ width: sideBarWidth }} className="sidebar">
        <SideBar expanded={sideBarButton} />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cv" element={<Cv />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
