import React, { useEffect, useRef } from 'react';
import { Card } from '@material-ui/core';
import Done from '@material-ui/icons/Done';
import { StyledAbout } from '../styles/styles';
import Img from './about-assets/img.svg';

export default function About(props) {
  const about = useRef(null);
  const scrollNow = () => {
    about.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (props.props === '#about') {
      scrollNow();
    }
  });

  return (
    <StyledAbout>
      <div className="main" ref={about}>
        <div className="about">
          <Card className="card">
            <h3 className="title">Why Boom.Camp?</h3>
            <p className="parag">
              The idea of Boom.Camp was born out of the struggle of it's parent
              company Boomsourcing to find developers with the needed skills
              co-located with the facilities Boomsourcing already had available
              in the Philippines. The company leadership at Boomsourcing knows
              there's a vast amount of talent in the Philippines, but still
              found it difficult to find people with the specialized skills they
              were looking for. With the success of various boot-camp style
              development training programs in the U.S.A Boomsourcing felt they
              could develop their own unique program that could bring talented
              I.T. and computer science graduates up to speed with the skills
              needed by the development team at Boomsourcing. In addition to
              bringing developers onto the internal teams at Boomsourcing, the
              company also would like to be able to provide workforce
              augmentation and custom development services to clients. That's
              basically why Boom.Camp has come to exist today.
            </p>
          </Card>
          <Card className="card">
            <img src={Img} alt="php" className="image" />
            <br />
            <br />
            <h3 className="title">Our Mission</h3>
            <p className="parag">
              Boom.Camp aims to bring student developers to a Junior Developer
              level of proficiency in modern front-end and backend development.
              The curriculum is comprised mainly of web programming concepts
              (HTML, CSS, JavaScript). By the end of the course, a student
              developer should be able to join an existing development team and
              make contributions to utilize the skill they acquired.
            </p>
          </Card>
          <Card className="card">
            <h3 className="title">Our Promise</h3>
            <p className="paragr">
              <Done color="secondary" /> We help transform a student developer
              into Junior Developers.
            </p>{' '}
            <br />
            <h3 className="title">Our Essence</h3>
            <p className="paragr">
              <Done color="secondary" /> We introduce on trend technologies used
              in the field of web development.
            </p>{' '}
            <br />
            <h3 className="title">Our Vibe</h3>
            <p className="paragr">
              <Done color="secondary" /> We bring out the best of our students
              by letting them experience and work on projects that would prepare
              them for the actual field.
            </p>
          </Card>
        </div>
      </div>
    </StyledAbout>
  );
}
