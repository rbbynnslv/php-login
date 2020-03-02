import React, { useEffect, useRef } from "react";
import "./about.css";

export default function(props) {
  const about = useRef(null);
  const scrollNow = () => {
    about.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (props.props === "#about") {
      scrollNow();
    }
  });
  return <div ref={about} className="mainAbout"></div>;
}
