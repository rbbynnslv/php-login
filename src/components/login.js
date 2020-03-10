import React, { useState } from "react";
import Home from "./home/home";
import Header from "./header/header";
import About from "./about/about";
import Team from "./team/team";
import Related from "./related/related";
import Footer from "./footer/footer";

export default function Login(props) {
  const [page, setPage] = useState();

  const toTop = e => {
    page === "#home" ? setPage("#head") : setPage("#home");
  };
  console.log(page);
  return (
    <div>
      <Header handleProps={e => setPage(e)} />
      <Home props={page} />
      <About props={page} />
      <Team props={page} />
      <Related props={page} />
      <Footer props={e => toTop("#home")} />
    </div>
  );
}
