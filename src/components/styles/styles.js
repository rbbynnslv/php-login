import styled from 'styled-components';

export const StyledHeader = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
  * {
    margin: 0;
    padding: 0;
  }
  .main-header {
    height: 80px;
    width: 100%;
    background-color: #fff;
    box-shadow: 2px 2px 2px #999;
    position: fixed;
    z-index: 10;
  }

  .header-div {
    width: 95%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .left-header {
    width: 60%;
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    font-family: Acme;
    color: #3f0d40;
    text-shadow: 1px 2px 3px #ccc;
  }

  .left-span {
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
  }

  .left-span:hover {
    animation: shake 0.7s;
  }

  .left-header a,
  .left-header a:hover {
    text-decoration: none;
    color: #3f0d40;
  }

  .right-header {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: Acme;
    font-weight: bold;
    margin-top: 3px;
    color: #4e1e61;
  }

  .right-header-toggle {
    visibility: hidden;
  }

  .right-header span {
    cursor: pointer;
    font-size: 16px;
    height: 35px;
  }

  .right-header span > a {
    font-weight: 800;
    text-decoration: none;
    color: #4e1e61;
  }

  .right-header span > a:before {
    content: '';
    position: absolute;
    width: 70px;
    height: 5px;
    margin-left: -1px;
    bottom: 0;
    background: #4e1e61;
    visibility: visible;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }

  .right-header a:hover,
  .right-header a:focus,
  .right-header span:hover,
  .right-header span:focus {
    color: #4e1e61;
  }

  .right-header span > a:hover:before,
  .right-header span > a:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }

  .header-logo {
    height: 70%;
    margin-left: 20px;
  }

  @media (max-width: 980px) {
    .right-header {
      display: none;
    }

    .left-header {
      width: 80%;
    }

    .right-header-toggle {
      visibility: visible;
      height: 80px;
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .mainHeader {
      transition: height 0.2s linear;
    }

    .collapse {
      height: 300px;
      transition: height 0.2s linear;
    }

    .toggle-menu {
      font-size: 30px;
      cursor: pointer;
    }

    .menu-toggle {
      height: 200px;
      width: 100%;
      display: flex;
    }

    .main-list {
      width: 100%;
    }

    .main-list a {
      width: 100%;
      height: 100%;
      font-weight: bold;
      text-decoration: none;
      color: #000;
    }

    .main-list a:focus {
      text-decoration: none;
      color: #3f0d40;
      cursor: pointer;
      font-weight: bold;
    }

    .list-item:hover,
    .list-item:active {
      background-color: #3f0d40;
    }
  }

  @media (max-width: 335px) {
    .left-header {
      font-size: 30px;
    }

    .header-logo {
      height: 50%;
    }
  }

  /* Animations ------------------------------- */

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

export const StyledHomepage = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  .container {
    height: 1000px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div-one {
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(78, 30, 97, 0.45), rgba(78, 30, 97, 0.45)),
      url('https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .div-two {
    width: 750px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 100px 50px;
  }

  .div-img {
    width: 316px;
  }

  .div-img img {
    max-width: 100%;
  }

  /*------------------------------------------------------------------
  [  ]*/
  .form {
    width: 290px;
  }

  .form-title {
    font-size: 24px;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    display: block;
    padding-bottom: 54px;
  }

  /*------------------------------------------------------------------
[ Button ]*/
  .container-btn {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn {
    font-size: 15px;
    line-height: 1.5;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: #9549ac;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
  }

  .btn:hover {
    background-color: 149, 73, 172
    color: white;
  }

  /*------------------------------------------------------------------
[ Responsive ]*/

  @media (max-width: 992px) {
    .div-two {
      padding: 177px 90px 33px 85px;
    }

    .div-img {
      width: 35%;
    }

    .form {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    .div-two {
      padding: 100px 80px 33px 80px;
    }

    .div-img {
      display: none;
    }

    .form {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .div-two {
      padding: 100px 15px 33px 15px;
    }
  }
`;

export const StyledAbout = styled.div`
  .main {
    height: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .about {
    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
  }

  .card {
    width: 500px;
    display: flex;
    margin: 20px;
    padding: 50px;
  }

  .title {
    font-size: 25px;
    font-weight: bold;
    font-family: Acme;
    color: #3f0d40;
  }

  .parag {
    text-align: justify;
    font-family: Acme;
  }

  .paragr {
    text-align: center;
    font-family: Acme;
    line-height: 1.6;
  }

  .image {
    height: 200px;
  }
`;
