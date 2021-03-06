import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/cloudy.svg";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <Link className="text-container" to="/">
        Weather.app
      </Link>

      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
