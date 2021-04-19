import React from "react";
import "./header.css";
import Avatar from "@material-ui/core/Avatar";
import logo from "./assests/logo.png";

function Header() {
  return (
    <div className="header">
      {/* logo */}

      <div className="logo-left">
        <img src={logo} alt="logo- img" />
        <p className="logo-text">ribbon</p>
      </div>
      <div className="logo-right">
        <Avatar />
        <i class="fas fa-bell"></i>
        <i class="fas fa-bell"></i>
        <i class="fas fa-bell"></i>
      </div>
    </div>
  );
}

export default Header;
