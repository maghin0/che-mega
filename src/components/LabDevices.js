import React from 'react';

const LabDevices = props => {
  const img = props.img;
  const imgtwo = props.imgtwo;
  const device = props.device;
  const devicetwo = props.devicetwo;
  const description = props.description;
  const descriptiontwo = props.descriptiontwo;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="column is-12">
          <h2 className="title"> {device}</h2>
        </div>
        <div className="section">
          <div className="columns">
            <div className="column is-3 is-offset-2">
              <img src={img} alt={device} />
            </div>
            <div className="column is-5 is-offset-1">{description}</div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column is-12">
          <h2 className="title"> {devicetwo}</h2>
        </div>

        <div className="section">
          <div className="columns">
            <div className="column is-6 is-offset-2">{descriptiontwo}</div>
            <div className="column is-3 ">
              <img src={imgtwo} alt={devicetwo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabDevices;
