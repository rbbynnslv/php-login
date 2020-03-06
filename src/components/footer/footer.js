import React from "react";

import BoomCamp from "./images/boom-camp.png";
import {
  FacebookFilled,
  EnvironmentOutlined,
  LinkedinFilled,
  TwitterSquareFilled
} from "@ant-design/icons";
import { Tooltip } from "antd";
import "./footer.css";
import { Redirect } from "react-router-dom";

export default function Footer(props) {
  const follow = [
    {
      tooltip: "Follow us on Facebook",
      href: "https://www.facebook.com/boomsourcing.school",
      icon: <FacebookFilled className="footerIcons" />
    },
    {
      tooltip: "Follow us on LinkedIn",
      href: "https://www.linkedin.com/company/boomsourcing.com/",
      icon: <LinkedinFilled className="footerIcons" />
    },
    {
      tooltip: "Follow us on Twitter",
      href: "https://twitter.com/boomsourcing",
      icon: <TwitterSquareFilled className="footerIcons" />
    }
  ];

  const partner = [
    {
      href: "https://boomsourcing.com/",
      src: "https://boomsourcing.com/wp-content/uploads/2019/08/logo.png"
    },
    {
      href: "https://perfectpitchtech.com/",
      src:
        "https://perfectpitchtech.com/wp-content/uploads/2019/04/cropped-1.png"
    },
    {
      href: "https://boom.camp",
      src: BoomCamp
    },
    {
      href: "https://boomdemand.com/",
      src: "https://boom.camp/wp-content/uploads/2019/04/c1-1.png"
    }
  ];

  return (
    <React.Fragment>
      <div className="mainDivFooter">
        <div className="mainFooter">
          <div className="footerTop">
            <div className="footTop-left">
              {partner.map((item, i) => (
                <a
                  key={i}
                  className="footAnchor"
                  target="_blank"
                  href={item.href}
                >
                  <img className="footImg" src={item.src} />
                </a>
              ))}
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
                {follow.map((item, i) => (
                  <Tooltip key={i} placement="bottom" title={item.tooltip}>
                    <a target="_blank" href={item.href}>
                      <span className="footerIcon-span">{item.icon}</span>
                    </a>
                  </Tooltip>
                ))}
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
