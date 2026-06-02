import React from "react";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Portfolio from "./Component/Portfolio";
import About from "./Component/About";
import Contact from "./Component/Contact";
import GetStarted from "./Component/GetStarted";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </>
  );
};

export default App;
