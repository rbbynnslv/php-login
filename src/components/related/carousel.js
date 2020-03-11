import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Icon } from "@material-ui/core";

import Batch1 from "./images/batch1.jpeg";
import Batch2 from "./images/batch2.jpg";
import Team1 from "./images/Team1.jpg";
import Team2 from "./images/Team2.jpg";
import Team3 from "./images/Team3.jpg";
import Team4 from "./images/Team4.jpg";
import Team1_handraiser from "./images/handraiser-team1.png";
import Team2_handraiser from "./images/handraiser-team2.png";
import Team3_handraiser from "./images/handraiser-team3.png";
import Team4_handraiser from "./images/handraiser-team4.png";
import Partner1 from "./images/partners1.png";
import Partner2 from "./images/partners2.png";
import Partner3 from "./images/partners3.png";
import Partner4 from "./images/partners4.png";
import Partner5 from "./images/partners5.png";

export default class Gallery extends React.Component {
  items = {
    frontend: [
      { img: Batch1, desc: "Batch 1 Frontend Course" },
      { img: Batch2, desc: "Batch 2 Frontend Course" },
      { img: Team1, desc: "Team 1 of batch 2 presented their project" },
      { img: Team2, desc: "Team 2 of batch 2 presented their project" },
      { img: Team3, desc: "Team 3 of batch 2 presented their project" },
      { img: Team4, desc: "Team 4 of batch 2 presented their project" }
    ],
    handraiser: [
      { img: Team1_handraiser, desc: "Batch 2 team 1 handraiser" },
      { img: Team2_handraiser, desc: "Batch 2 team 2 handraiser" },
      { img: Team3_handraiser, desc: "Batch 2 team 3 handraiser" },
      { img: Team4_handraiser, desc: "Batch 2 team 4 handraiser" }
    ],
    dev_partners: [
      { img: Partner1, desc: "" },
      { img: Partner2, desc: "" },
      { img: Partner3, desc: "" },
      { img: Partner4, desc: "" },
      { img: Partner5, desc: "" }
    ]
  };

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: null
  };

  slideTo = i => this.setState({ currentIndex: i });

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  thumbItem = (item, i) => (
    <span key={i} onClick={() => this.slideTo(i)}>
      <img src={item.img} className="thumb" />
    </span>
  );

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const e = this.props.open.name;

      e === "Frontend Course"
        ? this.setState({
            galleryItems: this.items.frontend.map((item, i) => (
              <div className="galleryDiv">
                <img key={i} src={item.img} className="galleryItem" />
                <span className="galleryTxt">{item.desc}</span>
              </div>
            ))
          })
        : e === "Handraiser"
        ? this.setState({
            galleryItems: this.items.handraiser.map((item, i) => (
              <div className="galleryDiv">
                <img key={i} src={item.img} className="galleryItem" />
                <span className="galleryTxt">{item.desc}</span>
              </div>
            ))
          })
        : this.setState({
            galleryItems: this.items.dev_partners.map((item, i) => (
              <div className="galleryDiv">
                <img key={i} src={item.img} className="galleryItem" />
                <span className="galleryTxt">{item.desc}</span>
              </div>
            ))
          });
    }
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    return (
      <div className="mainCarousel">
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={galleryItems ? galleryItems : []}
          responsive={responsive}
          slideToIndex={currentIndex}
          fadeOutAnimation
          infinite
          autoPlay
          autoPlayInterval={2000}
          onSlideChanged={this.onSlideChanged}
        />

        <div className="carouselNav">
          {this.props.open.name === "Frontend Course"
            ? this.items.frontend.map(this.thumbItem)
            : this.props.open.name === "Handraiser"
            ? this.items.handraiser.map(this.thumbItem)
            : this.items.dev_partners.map(this.thumbItem)}
        </div>
        <div className="carouselBtns">
          <button className="carouselBtn" onClick={() => this.slidePrev()}>
            <Icon>arrow_back</Icon>
          </button>
          <button className="carouselBtn" onClick={() => this.slideNext()}>
            <Icon>arrow_forward</Icon>
          </button>
        </div>
      </div>
    );
  }
}
