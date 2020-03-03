import React, { useState, useEffect, useRef } from "react";
import Home from "./home/home";
import Header from "./header/header";
import About from "./about/about";
import Team from "./team/team";
import Related from "./related/related";
import Footer from "./footer/footer";

import { Tooltip } from "antd";
import { Fab, Icon } from "@material-ui/core";

const topIcon = {
  position: "fixed",
  bottom: "20px",
  right: "20px"
};

export default function Login() {
  const head = useRef(null);
  const [page, setPage] = useState("");

  const scrollNow = () => {
    head.current.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => )

  return (
    <div ref={head}>
      <Header handleProps={e => setPage(e)} />
      <Home props={page} />
      <About props={page} />
      <Team props={page} />
      <Related props={page} />
      <Footer />
      <Tooltip title="Back to top" placement="left">
        <Fab onClick={() => scrollNow()} style={topIcon} color="primary">
          <Icon>arrow_upward</Icon>
        </Fab>
      </Tooltip>
    </div>
  );
}
