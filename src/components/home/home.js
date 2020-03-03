import React, { useEffect, useRef } from "react";
import "./home.css";
import Php from "./images/img.gif";

export default function Home(props) {
  const home = useRef(null);
  const scrollNow = () => {
    home.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // console.log(props);
    if (props.props === "#home") {
      scrollNow();
    }
  });

  return (
    <React.Fragment>
      <div className="mainDiv" ref={home}>
        <div className="mainInner">
          <div className="innerTop">
            <span className="innerTitle">PHP Course</span>
            <img src={Php} className="innerGif" />
          </div>
          <div className="innerBorder"></div>
          <div className="innerBottom">
            <div className="innerSign">
              <p>
                You can access the course material by logging in with your
                &nbsp;<i>@boom.camp</i>&nbsp; google account
              </p>
            </div>
            <div className="innerBtnDiv">
              <button className="innerBtn">Get Started</button>
            </div>
          </div>
        </div>
        <div className="mainImg"></div>
      </div>
    </React.Fragment>
  );
}
