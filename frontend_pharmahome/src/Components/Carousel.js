import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="productImg"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/pharmahome-2ffc7.appspot.com/o/Ari%20Eye%20Drops.jpg?alt=media&token=d5357797-68f0-43f8-bfd4-78a844aba107"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/pharmahome-2ffc7.appspot.com/o/Ibuprofen%20400mg.jpg?alt=media&token=a79b24ca-4ecb-4a9d-b683-7ac847736f08"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/pharmahome-2ffc7.appspot.com/o/Ottosan%20Nasal%20Spray.jpg?alt=media&token=7e179020-160a-4023-8f40-d7391c2cddb7"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;
