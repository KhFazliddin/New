import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  const styleLink = {
    textDecoration: "none",
    fontSize: "20px",
  };

  return (
    <div className="header" style={styleLink}>
      <div className="leftLink">
        <Link style={styleLink} to="/">
          Home
        </Link>
      </div>
      <div className="rightLink">
        <Link style={styleLink} to="register">
          Sign Up
        </Link>
        <Link style={styleLink} to="Login">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Header;
