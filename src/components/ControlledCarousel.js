import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';

import product1 from '../img/asset 1.png';
import product2 from '../img/asset 2.png';
import product3 from '../img/asset 4.png';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      //indicators={false}
      keyboard={true}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={product1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum Nulla
            vitae elit libero, a pharetra augue mollis interdum Nulla vitae elit
            libero, a pharetra augue mollis interdum Nulla vitae elit libero, a
            pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={product2} alt="Third slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={product3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
