import React, { useState } from "react";
import "./header.css";
import Logo from "./images/logo-boom.png";
import { Collapse, List } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
export default function Header(props) {
  const [height, setHeight] = useState(false);

  return (
    <div className={height ? "mainHeader collapse" : "mainHeader"}>
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
        <div className="rightHeader-toggle">
          <MenuOutlined
            onClick={() => setHeight(!height)}
            // onBlur={() => setHeight(false)}
            className="toggleMenu"
          />
        </div>
        <div className="menu-toggle">
          <List
            className="mainList"
            dataSource={[
              { page: "#home", name: "Home" },
              { page: "#about", name: "About us" },
              { page: "#team", name: "Our Team" },
              { page: "#related", name: "Related" }
            ]}
            renderItem={item => (
              <List.Item
                onClick={() => props.handleProps(item.page)}
                className="listItem"
              >
                <a href={item.page}>{item.name}</a>
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    </div>
  );
}
