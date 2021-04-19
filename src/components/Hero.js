import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-balance">
        <div
          className="afya
        "
        >
          <p className="">AFYA</p>
        </div>
        <p className="amount">143.00</p>
        <p className="balance">Balance</p>
      </div>
      <div className="divide"></div>
      <div className="hero-equivalent">
        <div className="zar">
          <p className="">ZAR</p>
        </div>
        <p className="amount">R21.00</p>
        <p className="equivalent">Equivalent</p>
      </div>
    </div>
  );
}

export default Hero;
