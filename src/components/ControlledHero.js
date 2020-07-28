import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledHero(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
      interval={4000}
      pause={false}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={img} alt="First slide" />
        <Carousel.Caption>
          {/* <h3 style={{ color: '#1c1c47' }}>
            Transmission Electron Microscope (TEM)
          </h3>
          <p style={{ color: '#1c1c47' }}>Model: JEOL JEM-2100</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Third slide" />

        <Carousel.Caption>
          <h3 style={{ color: '#1c1c47' }}>Fume Hood </h3>
          <p style={{ color: '#1c1c47' }}>FH1500 Fume Hood BIOBASE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3 style={{ color: '#f4f4f4' }}>
            Scanning Electron Microscope (SEM)
          </h3>
          <p>JEOL JSM 6510 lv</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Third slide" />

        <Carousel.Caption>
          <h3 style={{ color: '#f4f4f4' }}>
            Scanning Electron Microscope (SEM)
          </h3>
          <p>JEOL JSM 6510 lv</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="Third slide" />

        <Carousel.Caption>
          <h3 style={{ color: '#f4f4f4' }}>
            Scanning Electron Microscope (SEM)
          </h3>
          <p>JEOL JSM 6510 lv</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="Third slide" />

        <Carousel.Caption>
          <h3 style={{ color: '#f4f4f4' }}>
            Scanning Electron Microscope (SEM)
          </h3>
          <p>JEOL JSM 6510 lv</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img7} alt="Third slide" />

        <Carousel.Caption>
          <h3 style={{ color: '#f4f4f4' }}></h3>
          <p>JEOL JSM 6510 lv</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img8} alt="Third slide" />

        <Carousel.Caption>
          <h3 style={{ color: '#f4f4f4' }}></h3>
          <p>JEOL JSM 6510 lv</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledHero;