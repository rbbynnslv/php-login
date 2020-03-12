import React, { useState, useEffect, useRef } from 'react';
import Home from './home/home';
import Header from './header/header';
import About from './about/about';
import Team from './team/team';
import Related from './related/related';
import Footer from './footer/footer';

const Routes = props => {
  const [page, setPage] = useState();
  const head = useRef(null);

  const toTop = () => {
    setPage('#head');
  };

  useEffect(() => {
    if (props.props === '#head') {
      scrollNow();
    }
  });

  const scrollNow = () => {
    head.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={head}>
      <Header props={page} handleProps={e => setPage(e)} />
      <Home props={page} />
      <About props={page} />
      <Team props={page} />
      <Related props={page} />
      <Footer props={e => toTop()} />
    </div>
  );
};

export default Routes;
