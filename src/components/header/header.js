import React from "react";
import "./header.css";
import Logo from "./images/logo-boom.png";

export default function Header(props) {
  return (
    <div className="mainHeader">
      <div className="headerDiv">
        <div className="leftHeader">
          <a target="_blank" href="https://boom.camp">
            Boom Camp
          </a>
          <img src={Logo} className="headerLogo" />
        </div>
        <div className="rightHeader">
          <span onClick={() => props.handleProps("#home")}>
            <a href="#home">Home</a>
          </span>
          <span onClick={() => props.handleProps("#about")}>
            <a href="#about">About us</a>
          </span>
          <span onClick={() => props.handleProps("#team")}>
            <a href="#team">Our Team</a>
          </span>
          <span onClick={() => props.handleProps("#related")}>
            <a href="#related">Related</a>
          </span>
        </div>
      </div>
    </div>
  );
}
