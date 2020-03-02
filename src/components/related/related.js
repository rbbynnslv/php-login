import React, { useEffect, useRef } from "react";
import "./related.css";

export default function Related(props) {
  const related = useRef(null);
  const scrollNow = () => {
    related.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (props.props === "#related") {
      scrollNow();
    }
  });
  return <div ref={related} className="mainRelated"></div>;
}
