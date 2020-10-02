import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './all.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledHero(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const img9 = props.img9;
  const img10 = props.img10;
  //const img11 = props.img11;
  const img = props.img;
  const img2 = props.img2;
  const img3 = props.img3;
  const img4 = props.img4;
  const img5 = props.img5;
  const img6 = props.img6;
  const img7 = props.img7;
  const img8 = props.img8;
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      indicators={true}
      keyboard={true}
      interval={5000000000}
      pause={false}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={img9}
          alt="Third slide"
        />
      </Carousel.Item>{' '}
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={img10}
          alt="Third slide"
        />
      </Carousel.Item>{' '}
      {/* <Carousel.Item>
        <img className="d-block w-100" src={img11} alt="Third slide" />
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={img}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3 style={{ color: '#1c1c47' }}>
            Transmission Electron Microscope (TEM)
          </h3>
          <p style={{ color: '#1c1c47' }}>Model: JEOL JEM-2100</p> 
        </Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={img2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={img4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={img5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={img6}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={img7}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={img8}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledHero;
