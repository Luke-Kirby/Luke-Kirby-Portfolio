import React from "react";
import "./App.scss";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./view/Home";
import About from "./view/About";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

      <header className="App-header">
        <Link to={"/"}>Home</Link>
        <Link to={"about"}>About</Link>
      </header>
    </div>
  );
}

export default App;
