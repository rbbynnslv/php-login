import React, { useEffect, useRef } from "react";
import "./related.css";
import Carousel from "./carousel";

import FrontEnd1 from "./images/frontend2.png";

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
  return (
    <div ref={related} className="mainRelated">
      <div className="relatedTitle">
        Other courses we offered <span className="lineTitle"></span>
      </div>
      <div className="relatedBody">
        <div className="relBody-left">
          <div className="relLeft-top">
            <span className="frontendImg-span">
              <img src={FrontEnd1} className="frontendImg" />
            </span>
          </div>
          <div className="relLeft-bottom">
            <div className="relCard">
              <div className="relCard-top">
                <a target="_blank" href="https://frontend.boom.camp/">
                  Frontend Course{" "}
                </a>
              </div>

              <div className="relCard-bottom">
                <i>
                  "A 15-week immersive software development bootcamp! You'll be
                  able to learn full-stack web development from industry
                  professionals with extensive real-world software development
                  experience, and we're offering extensive on-the-job training
                  for qualified candidates. Some technologies you’ll learn
                  include HTML5, CSS3, JavaScript and React JS, as well as how
                  to use tools like Git and GitHub."
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="relBody-right">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
