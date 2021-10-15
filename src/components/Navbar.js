import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <p>
            The<span>Cocktail</span>DB
          </p>
        </Link>
      </div>
      <div className="items">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
