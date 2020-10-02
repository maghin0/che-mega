import React from 'react';

import LabDevices from '../components/LabDevices';
import Layout from '../components/Layout';

import asset1 from '../img/devices/analytical balance.png';
import asset2 from '../img/devices/asset.png';
import asset3 from '../img/devices/balance.png';
import asset4 from '../img/devices/binocular microscopes.png';
import asset5 from '../img/devices/compact incubator.png';
import asset6 from '../img/devices/critical point dryer.png';
import asset7 from '../img/devices/eds.png';
import asset8 from '../img/devices/fume hood.png';
import asset9 from '../img/devices/rotary shaker.png';
import asset10 from '../img/devices/sem.png';
import asset11 from '../img/devices/sonicator.png';
import asset12 from '../img/devices/sputter coating evaporator.png';
import asset13 from '../img/devices/stereo microscope.png';
import asset14 from '../img/devices/stirring hot plate.png';
import asset15 from '../img/devices/table top centrifuge.png';
import asset16 from '../img/devices/tem.png';
import asset17 from '../img/devices/thermometer.png';
import asset18 from '../img/devices/tissue rotator.png';
import asset19 from '../img/devices/microtome.png';
import asset20 from '../img/devices/vacuum oven.png';
import asset21 from '../img/devices/zeta potential analyzer.png';

const LabDevicesPage = () => {
  // let content = {
  //   English: {
  //     title: 'Lorem',
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  // };
  return (
    <Layout>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(
  img/lab-bg.jpg
  )`,
          backgroundPosition: `bottom right`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'rgba(28,28,71, 0.4)',
          }}
        >
          <h1
            className=" has-text-weight-bold size-big is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
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
          img={asset10}
          imgtwo={asset16}
          device="Scanning Electron Microscope (SEM)"
          devicetwo="Transmission Electron Microscope"
          model="JEOL JSM 6510 lv"
          modeltwo="JEOL JEM-2100"
          description="It is used to inspect the surfaces of samples and give a high-quality and clear stereoscopic image. The magnification capacity reaches 300,000 times, it works under high vacuum, and it can work under low vacuum, to suit all physical, biological and industrial applications, mining, soil and material analysis, crystallography, nanoscale research, as well as tissues and surface structures."
          descriptiontwo="It is a microscopic technique in which a beam of electrons is used that penetrates through an ultra-thin sample, which leads to the emergence of an image that is subjected to a process of amplification and magnification and focus on imaging devices such as fluorescent screens or on photographic film, or to be measured with a dual-device CCD camera. Many light microscopes are a result of the small wavelength of the electrons, which enables the user to examine the details of the sample accurately to the point of a row of atoms, with an enlargement of one and a half million times the actual size. The microscope is an essential analysis method in many branches of natural sciences, such as materials science, semiconductor research, and nanoscale research, in addition to biological sciences such as studying microorganisms such as viruses, bacteria, fungi and various tissue cells."
        />

        <LabDevices
          img={asset19}
          imgtwo={asset20}
          device="Ultramicrotome"
          devicetwo="Vacuum Oven"
          model="RMC PT-XL PowerTome Ultramicrotome"
          modeltwo="Thermo Scientific Oven under Vacuum"
          description="Used to obtain ultra-thin sectors (30 - 70 nanometers) so that we can examine them with the electron microscope, in addition to making some thicker sectors (500 - 1000 nm) for samples prepared for the electron microscope to be examined by the optical microscope, which facilitates the process of follow-up and examination with the electron microscope."
          descriptiontwo="The vacuum furnace is used to dry different samples as it is much faster than conventional ovens."
        />

        <LabDevices
          img={asset5}
          imgtwo={asset6}
          device="Compact Incubator"
          devicetwo="Critical Point Dryer"
          model="Thermo Scientific Incubator"
          modeltwo="Tousimis Autosamdri – 815 Coater"
          description="A small-scale microbiological incubator is used to provide a range of temperatures necessary for the growth of many microorganisms, and is also used in some operations that may require keeping samples at certain temperatures."
          descriptiontwo="To enlarge small objects that cannot be seen with the naked eye or to show the fine details of things in order to discover their composition and study, as this type can zoom in more than a thousand times."
        />

        <LabDevices
          img={asset11}
          imgtwo={asset12}
          device="Ultrasonic Cleaner and Sonicator"
          devicetwo="Sputter Coating Evaporator"
          model="Ultrasonic Cleaner (XH-E412)"
          modeltwo="SPI Module - Sputter Carbon / Gold Coater"
          description="Applying sound (usually ultrasound) to shaking and stirring the components of a sample and accelerating the breakdown of the particles in them. It is especially useful when it is not possible to stir the sample, as is the case with NMR tubes and it can also be used to provide the energy needed for some chemical reactions. It is also commonly used in nanotechnology for the homogeneous distribution of nanoparticles in liquids. It can also be used to induce crystallisations and help isolate small crystals.
And in biological applications, it is often used to break down cell membranes and release cell contents. This process is called sonoporation.
It is also a mechanism used to clean surfaces such as glasses and jewelry. It is also used to extract microfossils from rocks.
"
          descriptiontwo="  Cover the sample with a thin layer of carbon or gold, or a mixture of gold and palladium with a thickness of 10-30 nanometers, after the drying processes of the samples to be examined in order to make them conductive to the electrical current because the examination of the samples is using electrons within the scanning electron microscope."
        />

        <LabDevices
          img={asset1}
          imgtwo={asset2}
          device="Four-Digit Analytical Balance"
          model="OHAUS Laboratory Analytical Balance"
          modeltwo="Digital Magnetic Stirrer"
          devicetwo="Four-Spot Magnetic Stirrer"
          description="
          It is used in weighing different materials and preparing accurate weights in a very accurate way, up to four decimal places.
      "
          descriptiontwo="It is used to dissolve and mix different chemicals with different speeds, multiple periods of time and other possibilities."
        />
        <LabDevices
          img={asset3}
          imgtwo={asset4}
          device="Two-Digit Top-Pan Balance"
          devicetwo="Binocular Microscopes"
          model="OHAUS Laboratory Balance"
          modeltwo="Olympus CX31 Binocular Halogen Microscope"
          description="It is used in weighing different materials and preparing weighs as accurately as two decimal places."
          descriptiontwo="To enlarge small objects that cannot be seen with the naked eye or to show the fine details of things in order to discover their composition and study, as this type can zoom in more than a thousand times."
        />

        <LabDevices
          img={asset7}
          imgtwo={asset8}
          device="EDS Analysis for the SEM"
          devicetwo="Fume Hood"
          model="Oxford X-Max 20"
          modeltwo="FH1500 Fume Hood BIOBASE"
          description="An analysis unit using X-rays, a unit attached to the scanning electron microscope and used to analyze the brightest of different samples and give an idea of ​​the existing elements."
          descriptiontwo="This device is used to reduce and prevent exposure to dangerous and harmful fumes of various chemicals."
        />

        <LabDevices
          img={asset13}
          imgtwo={asset14}
          device="Zoom Binocular Stereo Microscope"
          devicetwo="Stirring Hot Plate"
          model="Olympus SZ30 Stereo Zoom Microscope (9X - 40X Magnification) with Led Ring Light"
          modeltwo="Corning Stirring Hot Plate (10.2x12.7cm)"
          description="A device for enlarging small stereoscopic objects whose precise details cannot be seen with the naked eye, as this type can be enlarged forty times."
          descriptiontwo=" It is used to dissolve and mix different chemicals with heating to different temperatures, different speeds and different time periods."
        />

        <LabDevices
          img={asset17}
          imgtwo={asset18}
          device="Digital pH Meter and Thermometer"
          devicetwo="Tissue Rotator"
          model="PICCOLO Plus HI1295"
          modeltwo="EMS Tissue Rotator (0-6 RPM)"
          description="The pH meter is used On knowing the acidity and alkalinity number of the different solutions used in treating the samples to be examined, such as"
          descriptiontwo="The exponent measurement device is used. This device is used to stir, mix and mix tissue and biological samples slowly by rotating the device at different slow speeds within the chemicals during the different preparation processes for long periods so as to ensure the permeation of the substances inside the samples."
        />
        <LabDevices
          img={asset9}
          imgtwo={asset15}
          device="Rotary Shaker"
          devicetwo="Table Top Centrifuge "
          model="Scientificindustries Roto-Shake Genie"
          modeltwo="Micro Centrifuge "
          description="This device is used to stir, mix and mix samples and chemicals by rotating the device at different speeds fast and slow."
          descriptiontwo="Separating the insoluble components from the different liquids by placing them in the centrifuge tubes, then rotating them at the appropriate speeds and for sufficient periods of time for each type of fluid or samples in the laboratory according to the instructions specified for each task."
        />

        <LabDevices
          img={asset21}
          device="Zeta Potential Analyzer"
          model="Malvern Zetasize Nano-zs90"
          description="It is used in measurements of voltage analysis as an oil in addition to measuring the size of the granules present in the solvents from 0.3 nm to 5 ترm as well as the molecular size, molecular weight and rheological properties."
        />
      </section>
    </Layout>
  );
};

export default LabDevicesPage;
