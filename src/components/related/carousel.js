import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Icon } from "@material-ui/core";

import Batch1 from "./images/batch1.jpeg";
import Batch2 from "./images/batch2.jpg";
import Team1 from "./images/Team1.jpg";
import Team2 from "./images/Team2.jpg";
import Team3 from "./images/Team3.jpg";
import Team4 from "./images/Team4.jpg";

export default class Gallery extends React.Component {
  items = [Batch1, Batch2, Team1, Team2, Team3, Team4];

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  thumbItem = (item, i) => (
    <span key={i} onClick={() => this.slideTo(i)}>
      <img src={item} className="thumb" />
    </span>
  );

  galleryItems() {
    return this.items.map((item, i) => (
      <div className="galleryDiv">
        <img key={i} src={item} className="galleryItem" />
      </div>
    ));
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    return (
      <div className="mainCarousel">
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          fadeOutAnimation
          infinite
          autoPlay
          autoPlayInterval={2000}
          onSlideChanged={this.onSlideChanged}
        />

        <div className="carouselNav">{this.items.map(this.thumbItem)}</div>
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
