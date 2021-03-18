import React from 'react';

const LabDevicesArabicArabic = (props) => {
  const img = props.img;
 // const imgtwo = props.imgtwo;
  const device = props.device;
//  const devicetwo = props.devicetwo;
  const description = props.description;
//  const descriptiontwo = props.descriptiontwo;
  const model = props.model;
//  const modeltwo = props.modeltwo;
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="column is-offset-2 is-12">
          <h2 className="title">{device}</h2>
          <h4 className="is-size-4">{model}</h4>
        </div>
        <div className="section">
          <div className="columns">
            <div className="column is-2 is-offset-2">
              <img src={img} alt={device} />
            </div>

            <div
              className="column is-5 is-offset-1"
              style={{ textAlign: 'right' }}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabDevicesArabicArabic;
