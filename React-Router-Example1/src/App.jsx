import React from "react";
import { Route, Routes, Link, BrowserRouter as Router} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Team from "./Components/Team";
import Company from "./Components/Company";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Implementing Routes for respective Path */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="company" element={<Company />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
};

export default App;
