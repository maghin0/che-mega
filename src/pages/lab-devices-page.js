import React from 'react';

import LabDevices from '../components/LabDevices';
import LabDevicesTwo from '../components/LabDevicesTwo';
import Layout from '../components/Layout';

import asset1 from '../img/devices/analytical balance.png';
import asset2 from '../img/devices/asset.png';
import asset3 from '../img/devices/balance.png';
import asset4 from '../img/devices/binocular microscopes.png';
import asset5 from '../img/devices/compact incubator.png';
import asset6 from '../img/devices/critical point dryer.png';
import asset7 from '../img/devices/eds.png';
import asset8 from '../img/devices/fume hood.png';
import asset9 from '../img/devices/glass knife maker.png';
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
import asset22 from '../img/devices/rotary shaker.png';

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
          device="Scanning Electron Microscope (SEM)"
          model="JEOL JSM 6510 lv"
          description="It is used to inspect the surfaces of samples and give a high-quality and clear stereoscopic image. The magnification capacity reaches 300,000 times, it works under high vacuum, and it can work under low vacuum, to suit all physical, biological and industrial applications, mining, soil and material analysis, crystallography, nanoscale research, as well as tissues and surface structures."
        />
        <LabDevicesTwo
          img={asset16}
          device="Transmission Electron Microscope"
          model="JEOL JEM-2100"
          description="It is a microscopic technique in which a beam of electrons is used that penetrates through an ultra-thin sample, which leads to the emergence of an image that is subjected to a process of amplification and magnification and focus on imaging devices such as fluorescent screens or on photographic film, or to be measured with a dual-device CCD camera. Many light microscopes are a result of the small wavelength of the electrons, which enables the user to examine the details of the sample accurately to the point of a row of atoms, with an enlargement of one and a half million times the actual size. The microscope is an essential analysis method in many branches of natural sciences, such as materials science, semiconductor research, and nanoscale research, in addition to biological sciences such as studying microorganisms such as viruses, bacteria, fungi and various tissue cells."
        />
        <LabDevices
          img={asset7}
          device="EDS Analysis for the SEM"
          model="Oxford X-Max 20"
          description="An analysis unit using X-rays, a unit attached to the scanning electron microscope and used to analyze the brightest of different samples and give an idea of ​​the existing elements."
        />
        <LabDevicesTwo
          img={asset19}
          device="Ultramicrotome"
          model="RMC PT-XL PowerTome Ultramicrotome"
          description="Used to obtain ultra-thin sectors (30 - 70 nanometers) so that we can examine them with the electron microscope, in addition to making some thicker sectors (500 - 1000 nm) for samples prepared for the electron microscope to be examined by the optical microscope, which facilitates the process of follow-up and examination with the electron microscope."
        />
        <LabDevices
          img={asset9}
          device="Glass Knife Maker "
          model="RMC GKM-2 Glass Knife Maker"
          description=""
        />
        <LabDevicesTwo
          img={asset12}
          device="Sputter Coating Evaporator"
          model="SPI Module - Sputter Carbon / Gold Coater"
          description="The vacuum furnace is used to dry different samples as it is much faster than conventional ovens."
        />
        <LabDevices
          img={asset6}
          device="Critical Point Dryer"
          model="Tousimis Autosamdri – 815 Coater"
          description="It is used to dry biological samples prepared for examination with a scanning electron microscope, after the absolute ethanol drying stage, where ethanol is exchanged with liquid carbon dioxide and this is done under pressure and its drying is characterized by preserving the surface details of the sample."
        />
        <LabDevicesTwo
          img={asset21}
          device="Zeta Potential Analyzer"
          model="Malvern Zetasize Nano-zs90"
          description="It is used to measure the size of the granules present in the solvents from 0.3 nm to 5 µm as well as the molecular size, molecular weight and rheological properties. It is useful in the fields of pharmacy, engineering, science, and agriculture."
        />
        <LabDevices
          img={asset18}
          device="Tissue Rotator"
          model="EMS Tissue Rotator (0-6 RPM)"
          description="This device is used to stir, mix and mix tissue and biological samples slowly by rotating the device at different slow speeds within the chemicals during the different preparation processes for long periods so as to ensure the permeation of the substances inside the samples."
        />
        <LabDevicesTwo
          img={asset22}
          device="Rotary Shaker"
          model="Scientificindustries Roto-Shake Genie"
          description="This device is used for stirring, mixing and mixing samples and chemicals by rotating the device at different speeds, fast and slow."
        />
        <LabDevices
          img={asset2}
          device="Four-Spot Magnetic Stirrer"
          model="Digital Magnetic Stirrer"
          description="It is used to dissolve and mix different chemicals with different speeds, multiple periods of time and other possibilities."
        />
        <LabDevicesTwo
          img={asset15}
          device="Table Top Centrifuge"
          model="Micro Centrifuge"
          description="Separating the insoluble components from the different liquids by placing them in the Centrifuge tubes and then rotating them at the appropriate speeds and for sufficient periods of time for each type of liquid or samples in laboratories according to the specific instructions for each task."
        />
        <LabDevices
          img={asset14}
          device="Stirring Hot Plate"
          model="Corning Stirring Hot Plate (10.2x12.7cm)"
          description=" It is used to dissolve and mix different chemicals with heating to different temperatures, different speeds and different time periods."
        />

        <LabDevicesTwo
          img={asset20}
          device="Vacuum Oven"
          model="Thermo Scientific Oven under Vacuum"
          description="The vacuum furnace is used to dry different samples as it is much faster than conventional ovens."
        />
        <LabDevices
          img={asset5}
          device="Compact Incubator"
          model="Thermo Scientific Incubator"
          description="A small-scale microbiological incubator is used to provide a range of temperatures necessary for the growth of many microorganisms, and is also used in some operations that may require keeping samples at certain temperatures."
        />
        <LabDevicesTwo
          img={asset3}
          device="Two-Digit Top-Pan Balance"
          model="OHAUS Laboratory Balance"
          description="It is used in weighing different materials and preparing weighs as accurately as  decimal places."
        />
        <LabDevices
          img={asset1}
          device="Four-Digit Analytical Balance"
          model="OHAUS Laboratory Analytical Balance"
          description="It is used in weighing different materials and preparing accurate weights in a very accurate way, up to four decimal places."
        />
        <LabDevicesTwo
          img={asset4}
          device="Binocular Microscopes"
          model="Olympus CX31 Binocular Halogen Microscope"
          description="To enlarge small objects that cannot be seen with the naked eye or to show the fine details of things in order to discover their composition and study, as this type can zoom in more than a thousand times."
        />

        <LabDevices
          img={asset13}
          device="Zoom Binocular Stereo Microscope"
          model="Olympus SZ30 Stereo Zoom Microscope (9X - 40X Magnification) with Led Ring Light"
          description="A device for enlarging small stereoscopic objects whose precise details cannot be seen with the naked eye, as this type can be enlarged forty times."
        />
        <LabDevices
          img={asset11}
          device="Ultrasonic Cleaner and Sonicator"
          model="Ultrasonic Cleaner (XH-E412)"
          description="Applying sound (usually ultrasound) to shaking and stirring the components of a sample and accelerating the breakdown of the particles in them. It is especially useful when it is not possible to stir the sample, as is the case with NMR tubes and it can also be used to provide the energy needed for some chemical reactions. It is also commonly used in nanotechnology for the homogeneous distribution of nanoparticles in liquids. It can also be used to induce crystallisations and help isolate small crystals.
          And in biological applications, it is often used to break down cell membranes and release cell contents. This process is called sonoporation.
          It is also a mechanism used to clean surfaces such as glasses and jewelry. It is also used to extract microfossils from rocks."
        />

        <LabDevicesTwo
          img={asset8}
          device="Fume Hood"
          model="FH1500 Fume Hood BIOBASE"
          description="This device is used to reduce and prevent exposure to dangerous and harmful fumes of various chemicals."
        />

        <LabDevices
          img={asset17}
          device="Digital pH Meter and Thermometer"
          model="PICCOLO Plus HI1295"
          description="The pH meter is used to know the number of acidity and alkalinity in the various solutions used in the treatment of the samples to be tested, such as buffers used in the preparation of fixatives and others. It usually consists of a special electrode (glass electrode) connected to an electronic scale that measures and displays the pH number with the ability to identify the temperature."
        />
      </section>
    </Layout>
  );
};

export default LabDevicesPage;
