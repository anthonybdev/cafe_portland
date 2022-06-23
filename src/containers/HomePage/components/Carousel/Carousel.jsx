import React from 'react';
import CarouselComp from 'react-material-ui-carousel';
import './Carousel.scss';
import img1 from '../../../../images/Carousel/1.jpg';
import img2 from '../../../../images/Carousel/2.jpg';
import img3 from '../../../../images/Carousel/3.jpg';
import img4 from '../../../../images/Carousel/4.jpg';

const Carousel = () => {
  const items = [img1, img2, img3, img4];

  return (
    <CarouselComp
      className="carouselWrapper"
      interval={3000}
      swipe={true}
      activeIndicatorIconButtonProps={{
        style: {
          color: '#BC662E',
          // 2
        },
      }}
      indicatorIconButtonProps={{
        style: {
          padding: '6px',
        },
      }}
    >
      {items.map((item, index) => (
        <img src={item} alt="carousel-img" key={index} />
      ))}
    </CarouselComp>
  );
};

export default Carousel;
