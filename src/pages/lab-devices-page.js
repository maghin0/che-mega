import React from 'react';

import LabDevices from '../components/LabDevices';
import Layout from '../components/Layout';

import asset1 from '../img/devices/asset 1.png';
import asset2 from '../img/devices/asset 2.png';
const LabDevicesPage = () => {
  return (
    <Layout>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(
  img/home-jumbotron.jpg
  )`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '350px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
            backgroundColor: 'rgba(28,28,71, 0.4)',
          }}
        >
          <h1
            className=" has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              margin: 'auto',
            }}
          >
            Lab Devices
          </h1>
        </div>
      </div>
      <section className="section section--gradient">
        <LabDevices
          img={asset1}
          imgtwo={asset2}
          device="Scanning Electron Microscope SEM - JEOL JSM 6510 lv"
          devicetwo="SOME OTHER DEVICE"
          description="
          الاستخدام
          يستخدم لفحص أسطح العينات ويعطى صورة مجسمة عالية الجودة والوضوح تصل القدرة التكبيرية إلى 300000 مرة ، يعمل تحت تفريغ عالى ، ويمكنه العمل تحت تفريغ منخفض ،  وذلك ليلائم جميع التطبيقات المادية والبيولوجية والصناعية والتعدين وتحليل التربة والخامات وفحص البلورات وأبحاث النانو وكذلك الأنسجة والتراكيب السطحية.
      "
          descriptiontwo="
   
                 
          الاستخدام
          يستخدم لفحص أسطح العينات ويعطى صورة مجسمة عالية الجودة والوضوح تصل القدرة التكبيرية إلى 300000 مرة ، يعمل تحت تفريغ عالى ، ويمكنه العمل تحت تفريغ منخفض ،  وذلك ليلائم جميع التطبيقات المادية والبيولوجية والصناعية والتعدين وتحليل التربة والخامات وفحص البلورات وأبحاث النانو وكذلك الأنسجة والتراكيب السطحية.
      "
        />
      </section>
    </Layout>
  );
};

export default LabDevicesPage;
