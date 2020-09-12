import React from 'react';

import LabDevicesArabic from '../components/LabDevicesArabic';
import LayoutAr from '../components/LayoutAr';

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

const LabDevicesArabicPage = () => {
  // let content = {
  //   English: {
  //     title: 'Lorem',
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  // };
  return (
    <LayoutAr>
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
            أجهزة الوحدة
          </h1>
        </div>
      </div>
      <section className="section section--gradient">
        <LabDevicesArabic
          img={asset16}
          imgtwo={asset10}
          device="Transmission Electron Microscope"
          devicetwo="Scanning Electron Microscope (SEM)"
          model="JEOL JEM-2100"
          modeltwo="JEOL JSM 6510 lv"
          description="
هى تقنية مجهرية يستخدم فيها حزمة من الإلكترونات التى تنفذ خلال عينة فائقة الرقة ، مما يؤدى الى ظهور صورة تخضع لعملية تضخيم وتكبير وتركيز على أجهزة تصوير  مثل شاشات مفلورة أو على فيلم فوتوغرافى أو أن تقاس  بكاميرا ذات جهاز مزدوج CCD إن المجاهر الإلكترونية النافذة لها دقة أعلى بكثير من المجاهر الضوئية نتيجة الطول الموجى الصغير للإلكترونات ، مما يمكن المستخدم من فحص تفاصيل العينة بشكل دقيق إلى درجة صف من الذرات وذلك بتكبير يصل إلى مليون ونصف مليون مرة من الحجم الفعلى. ويمثل المجهر وسيلة تحليل أساسية فى العديد من فروع العلوم الطبيعية مثل علوم المواد وأبحاث أشباه الموصلات وأبحاث النانو بالإضافة إلى العلوم الحيوية مثل دراسة الكائنات الحية الدقيقة كالفيروسات والبكتيريا والفطريات وخلايا الأنسجة المختلفة
"
          descriptiontwo="يستخدم لفحص أسطح العينات ويعطى صورة مجسمة عالية الجودة والوضوح تصل القدرة التكبيرية إلى 300000 مرة ، يعمل تحت تفريغ عالى ، ويمكنه العمل تحت تفريغ منخفض ،  وذلك ليلائم جميع التطبيقات المادية والبيولوجية والصناعية والتعدين وتحليل التربة والخامات وفحص البلورات وأبحاث النانو وكذلك الأنسجة والتراكيب السطحية"
        />

        <LabDevicesArabic
          img={asset19}
          imgtwo={asset20}
          device="Ultramicrotome"
          devicetwo="Vacuum Oven"
          model="RMC PT-XL PowerTome Ultramicrotome"
          modeltwo="Thermo Scientific Oven under Vacuum"
          description="
          للحصول على قطاعات فائقة الرقة (30 – 70 نانومتر) حتى نتمكن من فحصها بالميكروسكوب الإلكتروني  بالاضافة إلى عمل بعض القطاعات الأكثر سمكا (500 – 1000 نانومتر) للعينات المعدة للمجهر الإلكتروني لكي تفحص بالمجهرالضوئي مما يسهل عملية المتابعة والفحص بالمجهر الالكتروني. "
          descriptiontwo="يستخدم فرن التفريغ فى تجفيف العينات المختلفة حيث يعد أسرع بكثير من الأفران التقليدية."
        />

        <LabDevicesArabic
          img={asset11}
          imgtwo={asset12}
          device="Ultrasonic Cleaner and Sonicator"
          devicetwo="Sputter Coating Evaporator"
          model="Ultrasonic Cleaner (XH-E412)"
          modeltwo="SPI Module - Sputter Carbon / Gold Coater"
          description="         هو فعل من تطبيق الصوت (عادة الموجات فوق الصوتية) لهز وتقليب مكونات العينة والإسراع من تفكيك الجزيئات فيها.  انها مفيدة بشكل خاص عندما لا يكون من الممكن تحريك العينة، كما هو الحال مع أنابيب NMR ويمكن أيضا أن تستخدم لتوفير الطاقة اللازمة لبعض التفاعلات الكيميائية. كما تستخدم عادة في تكنولوجيا النانو للتوزيع المتجانس لجزيئات النانو nanoparticles في السوائل. ويمكن أيضا أن تستخدم لحث عمليات التبلور Crystallisations والمساعدة فى عزل بلورات صغيرة .
وفي التطبيقات البيولوجية ، غالبا ما تستخدم لتكسير أغشية الخلايا والافراج عن محتويات الخلية. وتسمى هذه العملية Sonoporation.

كذلك هي آلية مستخدمة في تنظيف الأسطح مثل النظارات والمجوهرات. كما تستخدم أيضا لاستخراج الأحافير الدقيقة microfossils من الصخور. "
          descriptiontwo="تغطية العينة بطبقة رقيقة من الكربون أو الذهب او مزيج من الذهب والبلاديوم بسمك 10-30 نانوميتر وذلك بعد عمليات التجفيف للعينات المراد فحصها بهدف جعلها موصلة للتيار الكهربى لأن فحص العينات يكون باستخدام الإلكترونات داخل المجهر الإلكتروني الماسح."
        />
        <LabDevicesArabic
          img={asset1}
          imgtwo={asset2}
          device="Four-Digit Analytical Balance"
          model="OHAUS Laboratory Analytical Balance"
          modeltwo="Digital Magnetic Stirrer"
          devicetwo="Four-Spot Magnetic Stirrer"
          description="
          يستخدم فى وزن المواد المختلفة وتحضير الوزنات الدقيقة بصورة دقيقه جدا تصل إلى أربعة أرقام عشرية.
      "
          descriptiontwo="يستخدم فى إذابة ومزج المواد الكميائية المختلفة بسرعات مختلفة ومدد زمنية متعددة وإمكانيات أخرى. "
        />
        <LabDevicesArabic
          img={asset3}
          imgtwo={asset4}
          device="Two-Digit Top-Pan Balance"
          devicetwo="Binocular Microscopes"
          model="OHAUS Laboratory Balance"
          modeltwo="Olympus CX31 Binocular Halogen Microscope"
          description="
          يستخدم فى وزن المواد المختلفة وتحضير الوزنات بدقه تصل لرقمين عشريين."
          descriptiontwo="لتكبير الأجسام الصغيرة التي لا يمكن رؤيتها بالعين المجردة أو لإظهار التفاصيل الدقيقة للأشياء من أجل اكتشاف تكوينها و دراستها ، حيث يمكن لهذا النوع التكبير لأكثر من ألف مرة."
        />
        <LabDevicesArabic
          img={asset5}
          imgtwo={asset6}
          device="Compact Incubator"
          devicetwo="Critical Point Dryer"
          model="Thermo Scientific Incubator"
          modeltwo="Tousimis Autosamdri – 815 Coater"
          description="
          تستخدم حاضنة الميكروبيولوجى صغيرة الحجم فى توفيرمدى من درجات الحرارة اللازمة لنمو كثير من الكائنات الحية الدقيقة ، وتستخدم أيضا فى بعض العمليات التى قد تتطلب حفظ العينات فى درجات حراة معينة."
          descriptiontwo="يستخدم فى تجفيف العينات البيولوجية المعدة للفحص بالميكروسكوب الإلكترونى الماسح وذلك بعد مرحلة التجفيف بالإيثانول المطلق حيث يتبادل الإيثانول مع ثانى أكسيد الكربون السائل ويتم ذلك تحت ضغط ويتميز التجفيف به بالمحافظة على التفاصيل السطحية للعينة."
        />

        <LabDevicesArabic
          img={asset7}
          imgtwo={asset8}
          device="EDS Analysis for the SEM"
          devicetwo="Fume Hood"
          model="Oxford X-Max 20"
          modeltwo="FH1500 Fume Hood BIOBASE"
          description="وحدة التحليل باستخدام الأشعة السينية وهي وحدة ملحقة بالميكروسكوب الإلكتروني الماسح وتستخدم فى تحليل أسطع العينات المختلفة وإعطاء فكرة عن العناصر الموجودة "
          descriptiontwo="يستخدم هذا الجهاز فى الحد والوقاية من التعرض إلى الأبخرة الخطرة والضارة للمواد الكيميائية المختلفة."
        />

        <LabDevicesArabic
          img={asset13}
          imgtwo={asset14}
          device="Zoom Binocular Stereo Microscope"
          devicetwo="Stirring Hot Plate"
          model="Olympus SZ30 Stereo Zoom Microscope (9X - 40X Magnification) with Led Ring Light"
          modeltwo="Corning Stirring Hot Plate (10.2x12.7cm)"
          description="جهاز لتكبير الأجسام الصغيرة المجسمة التي لا يمكن رؤية تفاصيلها الدقيقة بالعين المجردة، حيث يمكن لهذا النوع التكبير لأربعين مرة."
          descriptiontwo=" يستخدم فى إذابة ومزج المواد الكميائية المختلفة مع التسخين لدرجات حرارة مختلفة وسرعات مختلفة ومدد زمنية مختلفة."
        />
        <LabDevicesArabic
          img={asset15}
          imgtwo={asset9}
          device="Table Top Centrifuge"
          devicetwo="Rotary Shaker "
          model="Micro Centrifuge"
          modeltwo="Scientificindustries Roto-Shake Genie"
          description="فصل المكونات الغير ذائبة من السوائل المختلفة بوضعها فى انابيب Centrifuge tubes ثم تدويرها عند السرعات المناسبة وللمدد الزمنية الكافية لكل نوعية من السوائل أو العينات بالمعامل طبقا للتعليمات المحددة لكل مهمة."
          descriptiontwo="يستخدم هذا الجهاز فى تقليب وخلط ومزج العينات والمواد الكميائية عن طريق دوران الجهاز بسرعات مختلفة سريعة وبطيئة"
        />

        <LabDevicesArabic
          img={asset17}
          imgtwo={asset18}
          device="Digital pH Meter and Thermometer"
          devicetwo="Tissue Rotator"
          model="PICCOLO Plus HI1295"
          modeltwo="EMS Tissue Rotator (0-6 RPM)"
          description="يستخدم جهاز قياس الأس الهيدروجينى pH فى معرفة رقم الحموضة والقلوية فى المحاليل المختلفة المستخدمة فى معالجة العينات المراد فحصها مثل"
          descriptiontwo="يستخدم هذا الجهاز فى تقليب وخلط ومزج الأنسجة والعينات البيولوجية ببطء عن طريق دوران الجهاز بسرعات بطيئة مختلفة داخل المواد الكميائية أثناء عمليات الإعداد المختلفة لفترات طويلة وذلك لضمان تخلل المواد داخل العينات."
        />

        <LabDevicesArabic
          img={asset21}
          device="Zeta Potential Analyzer"
          model="Malvern Zetasize Nano-zs90"
          description="يستخدم فى قياسات تحليل الجهد زيتا بالإضافة إلى قياس حجم الحبيبات الموجودة فى المذيبات من 0.3 نانوميتر إلى 5 ميكروميتر وكذلك الحجم الجزيئى والوزن الجزيئى والخصائص الريولوجية."
        />
      </section>
    </LayoutAr>
  );
};

export default LabDevicesArabicPage;
