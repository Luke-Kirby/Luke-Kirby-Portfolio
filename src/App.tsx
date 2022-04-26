import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import About from "./view/About";
import Cv from "./view/Cv";
import Portfolio from "./view/Portfolio";
import Contact from "./view/Contact";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cv" element={<Cv />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <header className="App-header"></header>
    </div>
  );
}

export default App;
