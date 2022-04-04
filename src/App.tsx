import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Title from "./components/Title";
import { Route, Router, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <header className="App-header">
        <Link to={"/"}>
          Home
        </Link>
        <Link to={"about"}>
          About
        </Link>
      </header>
    </div>
  );
}

export default App;
