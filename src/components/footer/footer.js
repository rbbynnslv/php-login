import React from "react";

import "./footer.css";

export default function Footer(props) {
  return (
    <div className="mainFooter">
      <div className="footerTop">
        <div className="footTop-left">
          <img
            className="footImg"
            src="https://boomsourcing.com/wp-content/uploads/2019/08/logo.png"
          />
          <img
            className="footImg"
            src="https://perfectpitchtech.com/wp-content/uploads/2019/04/cropped-1.png"
          />
          <img
            className="footImg"
            src="https://boom.camp/wp-content/uploads/2019/04/logo-boomcamp.png"
          />
          <img
            className="footImg"
            src="https://boom.camp/wp-content/uploads/2019/04/c1-1.png"
          />
        </div>
        <div className="footTop-right"></div>
      </div>
      <div className="footerBottom"></div>
    </div>
  );
}
