import React, { useEffect, useRef, useState } from "react";
import "./related.css";
import Carousel from "./carousel";

import Frontend from "./images/frontend.png";
import Handraiser from "./images/handraiser.png";
import Partners from "./images/partners.png";

export default function Related(props) {
  const related = useRef(null);
  const body = useRef(null);
  const [classTop, setClassTop] = useState("descTop");
  const [classBottom, setClassBottom] = useState("descBottom-span");
  const [openDesc, setOpenDesc] = useState(false);
  const [select, setSelect] = useState({});

  const images = [
    {
      img: Frontend,
      name: "Frontend Course",
      description:
        "A 15-week immersive software development bootcamp! You'll be able to learn full-stack web development from industry professionals with extensive real-world software development experience, and we're offering extensive on-the-job training for qualified candidates. Some technologies you’ll learn include HTML5, CSS3, JavaScript and React JS, as well as how to use tools like Git and GitHub."
    },
    {
      img: Handraiser,
      name: "Handraiser",
      description:
        "A realtime assistance/collaboration tool for students and mentors. The goal was to improve the student experience when requesting assistance from a mentor, as well as improve mentor organization and efficiency working with the class. Our goal was to create an amazing experience both for students and mentors, the idea was to give them both quick feedback as to when they would be helped (for the student) and who should be receiving assistance right now (for the mentor). It became apparent that a real-time system would be an ideal solution, so we started our application design with that in mind. Our team settled on a real-time web application communicating with a central web server utilizing websockets to enable real-time communication between users."
    },
    {
      img: Partners,
      name: "Dev Partners",
      description:
        "Partners Inc. accelerate software development teams by giving them the resources they need to build their product on-time and on-budget. We are passionate about contributing to, and delivering, strong, robust, software solutions for our clients."
    }
  ];
  const scrollNow = () => {
    related.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (props.props === "#related") {
      scrollNow();
    }
  });

  const readMore = e => {
    // console.log(e);
    setClassTop("descTop");
    setClassBottom("descBottom-span");
    setOpenDesc(true);
    setSelect(e);
    setTimeout(() => {
      setClassTop("descTop activeTop");
    }, 500);
    setTimeout(() => {
      setClassBottom("descBottom-span activeBottom");
    }, 600);
    body.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={related} className="mainRelated">
      <div className="relatedTitle">
        Other courses and projects
        {/* <span className="lineTitle"></span> */}
      </div>
      <div className="relatedBody" ref={body}>
        <div className="relatedTop">
          <div className="relTop-body">
            {images.map((item, i) => (
              <div key={i} className="cardCourse">
                <img className="cardCourse-img" src={item.img} />
                <div className="imgOverlay">
                  <span className="overlayTxt">{item.name}</span>
                  <button
                    ref={body}
                    className="overlayBtn"
                    onClick={() => readMore(item)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lineDivider"></div>
        <div
          className="relatedBottom"
          style={{ visibility: openDesc ? "visible" : "hidden" }}
        >
          <div className="relBottom-left">
            <div className="relBottom-img"></div>
            <div className="relBottom-desc">
              <div className={classTop}>
                <span>{select.name}</span>
              </div>
              <div className="descBottom">
                <span className={classBottom}>{select.description}</span>
              </div>
            </div>
          </div>
          <div className="relBottom-right" ref={body}>
            <Carousel open={select} />
          </div>
        </div>
      </div>
    </div>
  );
}
