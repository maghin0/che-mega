import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './all.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

import product1 from '../img/asset 1.png';
import product2 from '../img/asset 2.png';
import product3 from '../img/asset 4.png';
import product4 from '../img/asset 5.png';

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
        <img
          className="d-block w-100 herocontroll"
          src={product1}
          alt="Transmission Electron Microscope"
        />
        <Carousel.Caption>
          <h3 style={{ color: '#1c1c47' }}>
            Transmission Electron Microscope (TEM)
          </h3>
          <p style={{ color: '#1c1c47' }}>Model: JEOL JEM-2100</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={product2}
          alt="Scanning Electron Microscope"
        />

        <Carousel.Caption>
          <h3 style={{ color: '#f4f4f4' }}>
            Scanning Electron Microscope (SEM)
          </h3>
          <p>Model: JEOL JSM 6510 lv</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={product3}
          alt="Zeta Potential Analyzer"
        />

        <Carousel.Caption>
          <h3 style={{ color: '#1c1c47' }}>Zeta Potential Analyzer</h3>
          <p style={{ color: '#1c1c47' }}>Model: Malvern Zetasize Nano-zs90</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 herocontroll"
          src={product4}
          alt="Zoom Binocular Stereo Microscope"
        />

        <Carousel.Caption>
          <h3 style={{ color: '#f4f4f4' }}>Ultramicrotome</h3>
          <p>Model: RMC PT-XL PowerTome Ultramicrotome</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
