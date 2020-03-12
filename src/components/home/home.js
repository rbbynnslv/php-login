import React, { useEffect, useRef } from 'react';
import { StyledHomepage } from '../styles/styles';
import Php from './home-assets/img.gif';

export default function Home(props) {
  const home = useRef(null);
  const scrollNow = () => {
    home.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (props.props === '#home') {
      scrollNow();
    }
  });

  return (
    <StyledHomepage>
      <React.Fragment>
        <div className="container" ref={home}>
          <div className="div-one">
            <div className="div-two" elevation={5}>
              <div className="div-img">
                <img src={Php} alt="php" />
              </div>
              <div className="form"><br/>
                <span className="form-title">
                  Sign in with your{' '}<em><strong>@boom.camp</strong></em>{' '}google account
                </span>
                <div className="container-btn">
                  <button className={'btn'}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </StyledHomepage>
  );
}
