import React from "react";
import "./header.css";
import Avatar from "@material-ui/core/Avatar";
import logo from "./assests/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/* logo */}
      <Link to="/" className=" link">
        <div className="logo-left">
          <img src={logo} alt="logo- img" />
          <p className="logo-text">ribbon</p>
        </div>
      </Link>
      <div className="logo-right">
        <Avatar className="avatar-img" />
        <i class="fas fa-bell"></i>
      </div>
    </div>
  );
}

export default Header;
