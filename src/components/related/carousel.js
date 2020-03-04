import React from "react";
import AliceCarousel from "react-alice-carousel";

const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault();
  return (
    <AliceCarousel mouseTrackingEnabled>
      <img
        src="https://files.slack.com/files-tmb/T0QG5E3SL-FUK1SKYDV-24c64d96d3/team1_720.jpg"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src="https://files.slack.com/files-tmb/T0QG5E3SL-FU5MH030T-dd370dc2ef/team4_720.jpg"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src="https://files.slack.com/files-tmb/T0QG5E3SL-FUK1SKXST-9239d74191/team3_720.jpg"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src="https://files.slack.com/files-tmb/T0QG5E3SL-FUKC0AYFQ-319280f8fa/team2_720.jpg"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
    </AliceCarousel>
  );
};

export default function Carousel() {
  return <Gallery />;
}
