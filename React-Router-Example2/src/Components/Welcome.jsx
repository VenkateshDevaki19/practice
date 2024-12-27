import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h3>Welcome page....</h3>
      <h5>React app: Navigation using Link</h5>

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
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </>
  );
};

export default Welcome;
