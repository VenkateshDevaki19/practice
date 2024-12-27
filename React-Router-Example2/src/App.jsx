import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";

const App = () => {
  return (
    <>
      <Router>
        <Welcome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
