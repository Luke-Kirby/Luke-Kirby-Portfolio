import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Title from "./components/Title";
import { Route, Router, Routes, Link } from "react-router-dom";
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
