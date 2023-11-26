import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import styled from "styled-components";

const CarouselContainer = styled.div`
  background: black;
`;
const Pick = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { items } = props;
  const data = items;
  console.log(items);
  if (!Array.isArray(items)) {
    return <div>Loading</div>;
  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides =
    Array.isArray(data) &&
    data.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.date}
        >
          <img src={item.url} alt={item.title} />
          <CarouselCaption
            captionText={item.explanation}
            captionHeader={item.title}
          />
        </CarouselItem>
      );
    });

  return (
    <CarouselContainer>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...props}
      >
        <CarouselIndicators
          items={data}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </CarouselContainer>
  );
};

export default Pick;
