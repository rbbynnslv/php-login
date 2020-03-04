import React from "react";

import BoomCamp from "./images/boom-camp.png";
import {
  FacebookFilled,
  EnvironmentOutlined,
  LinkedinFilled,
  TwitterSquareFilled
} from "@ant-design/icons";
import "./footer.css";

export default function Footer(props) {
  return (
    <React.Fragment>
      <div className="mainDivFooter">
        <div className="mainFooter">
          <div className="footerTop">
            <div className="footTop-left">
              <a
                className="footAnchor"
                target="_blank"
                href="https://boomsourcing.com/"
              >
                <img
                  className="footImg"
                  src="https://boomsourcing.com/wp-content/uploads/2019/08/logo.png"
                />
              </a>
              <a
                className="footAnchor"
                target="_blank"
                href="https://perfectpitchtech.com/"
              >
                <img
                  className="footImg"
                  src="https://perfectpitchtech.com/wp-content/uploads/2019/04/cropped-1.png"
                />
              </a>
              <a
                className="footAnchor"
                href="https://boom.camp"
                target="_blank"
              >
                <img className="footImg" src={BoomCamp} />
              </a>
              <a
                className="footAnchor"
                href="https://boomdemand.com/"
                target="_blank"
              >
                <img
                  className="footImg"
                  src="https://boom.camp/wp-content/uploads/2019/04/c1-1.png"
                />
              </a>
            </div>
            <div className="footTop-right">
              <span className="footerLocation">
                <a
                  className="mapAnchor"
                  target="_blank"
                  href="https://www.google.com/maps/place/Embarcadero+De+Legazpi/@13.1436163,123.7555838,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x33a10229e29722b5:0xdc6be47160e31cb5!2sEmbarcadero+De+Legazpi!8m2!3d13.1436111!4d123.7577778!3m4!1s0x33a10229e29722b5:0xdc6be47160e31cb5!8m2!3d13.1436111!4d123.7577778"
                >
                  <EnvironmentOutlined className="iconEnv" />
                  2nd Floor Embarcadero De Legazpi, Albay
                </a>
              </span>

              <span className="footerLinks">
                <a
                  target="_blank"
                  href="https://www.facebook.com/boomsourcing.school"
                >
                  <span className="footerIcon-span">
                    <FacebookFilled className="footerIcons" />
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/boomsourcing.com/"
                >
                  <span className="footerIcon-span">
                    <LinkedinFilled className="footerIcons" />
                  </span>
                </a>
                <a target="_blank" href="https://twitter.com/boomsourcing">
                  <span className="footerIcon-span">
                    <TwitterSquareFilled className="footerIcons" />
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div className="footerBottom">
            <span>Boom Camp 2020 &copy; All Rights Reserved</span> |
            <a target="_blank" href="https://boomsourcing.com/privacy-policy/">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              href="https://boomsourcing.com/declaration-cookies/"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
