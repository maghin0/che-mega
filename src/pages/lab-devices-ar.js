import React from 'react';

import LabDevicesArabic from '../components/LabDevicesArabic';
import LabDevicesArabicTwo from '../components/LabDevicesArabicTwo';
import LayoutAr from '../components/LayoutAr';

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
      <section className="section section--gradient txtright">
        <LabDevicesArabicTwo
          img={asset10}
          device="Scanning Electron Microscope (SEM)"
          model="JEOL JSM 6510 lv"
          description="يستخدم لفحص أسطح العينات ويعطى صورة مجسمة عالية الجودة والوضوح تصل القدرة التكبيرية إلى 300000 مرة ، يعمل تحت تفريغ عالى ، ويمكنه العمل تحت تفريغ منخفض ،  وذلك ليلائم جميع التطبيقات المادية والبيولوجية والصناعية والتعدين وتحليل التربة والخامات وفحص البلورات وأبحاث النانو وكذلك الأنسجة والتراكيب السطحية"
        />
        <LabDevicesArabic
          img={asset16}
          device="Transmission Electron Microscope"
          model="JEOL JEM-2100"
          description="هى تقنية مجهرية يستخدم فيها حزمة من الإلكترونات التى تنفذ خلال عينة فائقة الرقة ، مما يؤدى الى ظهور صورة تخضع لعملية تضخيم وتكبير وتركيز على أجهزة تصوير  مثل شاشات مفلورة أو على فيلم فوتوغرافى أو أن تقاس  بكاميرا ذات جهاز مزدوج CCD إن المجاهر الإلكترونية النافذة لها دقة أعلى بكثير من المجاهر الضوئية نتيجة الطول الموجى الصغير للإلكترونات ، مما يمكن المستخدم من فحص تفاصيل العينة بشكل دقيق إلى درجة صف من الذرات وذلك بتكبير يصل إلى مليون ونصف مليون مرة من الحجم الفعلى. ويمثل المجهر وسيلة تحليل أساسية فى العديد من فروع العلوم الطبيعية مثل علوم المواد وأبحاث أشباه الموصلات وأبحاث النانو بالإضافة إلى العلوم الحيوية مثل دراسة الكائنات الحية الدقيقة كالفيروسات والبكتيريا والفطريات وخلايا الأنسجة المختلفة"
        />
         <LabDevicesArabicTwo
          img={asset7}
          device="EDS Analysis for the SEM"
          model="Oxford X-Max 20"
          description="وحدة التحليل باستخدام الأشعة السينية وهي وحدة ملحقة بالميكروسكوب الإلكتروني الماسح وتستخدم فى تحليل أسطع العينات المختلفة وإعطاء فكرة عن العناصر الموجودة "
        />
        <LabDevicesArabic
          img={asset19}
          device="Ultramicrotome"
          model="RMC PT-XL PowerTome Ultramicrotome"
          description="للحصول على قطاعات فائقة الرقة (30 – 70 نانومتر) حتى نتمكن من فحصها بالميكروسكوب الإلكتروني النافذ بالاضافة إلى عمل بعض القطاعات الأكثر سمكا (500 – 1000 نانومتر) للعينات المعدة للمجهر الإلكتروني لكي تفحص بالمجهرالضوئي مما يسهل عملية المتابعة والفحص بالمجهر الالكتروني"
        />

        <LabDevicesArabicTwo
          img={asset9}
          device="Glass Knife Maker"
          model="RMC GKM-2 Glass Knife MakerGenie"
          description="يستخدم هذا الجهاز في تحضير السكاكين الزجاجية المستخدمة في جهاز تقطيع العينات Ultramicrotome."
        />
        <LabDevicesArabic
          img={asset12}
          device="Sputter Coating Evaporator"
          model="SPI Module - Sputter Carbon / Gold Coater"
          description="تغطية العينة بطبقة رقيقة من الكربون أو الذهب او مزيج من الذهب والبلاديوم بسمك 10-30 نانوميتر وذلك بعد عمليات التجفيف للعينات المراد فحصها بهدف جعلها موصلة للتيار الكهربى لأن فحص العينات يكون باستخدام الإلكترونات داخل المجهر الإلكتروني الماسح."
        />
        <LabDevicesArabicTwo
          img={asset6}
          device="Critical Point Dryer"
          model="Tousimis Autosamdri – 815 Coater"
          description="يستخدم فى تجفيف العينات البيولوجية المعدة للفحص بالميكروسكوب الإلكترونى الماسح وذلك بعد مرحلة التجفيف بالإيثانول المطلق حيث يتبادل الإيثانول مع ثانى أكسيد الكربون السائل ويتم ذلك تحت ضغط ويتميز التجفيف به بالمحافظة على التفاصيل السطحية للعينة."
        />
        <LabDevicesArabic
          img={asset21}
          device="Zeta Potential Analyzer"
          model="Malvern Zetasize Nano-zs90"
          description="يستخدم لقياس حجم الحبيبات الموجودة فى المذيبات من 0.3 نانوميتر إلى 5 ميكروميتر وكذلك الحجم الجزيئى والوزن الجزيئى والخصائص الريولوجية والشحنة الكهربية الموجودة عليها من الخارج ويفيد ذلك فى ابحاث الدواء بكليات الصيدلة وفى مجالات الهندسة والعلوم والزراعة."
        />
        <LabDevicesArabicTwo
          img={asset18}
          device="Tissue Rotator"
          model="EMS Tissue Rotator (0-6 RPM)"
          description="يستخدم هذا الجهاز فى تقليب وخلط ومزج الأنسجة والعينات البيولوجية ببطء عن طريق دوران الجهاز بسرعات بطيئة مختلفة لفترات طويلة وذلك لضمان تخلل المواد داخل العينات."
        />
        <LabDevicesArabic
          img={asset22}
          device="Rotary Shaker"
          model="Scientificindustries Roto-Shake Genie"
          description="يستخدم هذا الجهاز فى تقليب وخلط ومزج العينات والمواد الكميائية عن طريق دوران الجهاز بسرعات مختلفة سريعة وبطيئة."
        />
        <LabDevicesArabicTwo
          img={asset15}
          device="Table Top Centrifuge"
          model="Micro Centrifuge"
          description="فصل المكونات الغير ذائبة من السوائل المختلفة بوضعها فى انابيب Centrifuge tubes ثم تدويرها عند السرعات المناسبة وللمدد الزمنية الكافية لكل نوعية من السوائل أو العينات بالمعامل طبقا للتعليمات المحددة لكل مهمة."
        />
        <LabDevicesArabic
          img={asset2}
          device="Four-Spot Magnetic Stirrer"
          model="Digital Magnetic Stirrer"
          description="يستخدم فى إذابة ومزج المواد الكميائية المختلفة بسرعات مختلفة ومدد زمنية متعددة وإمكانيات أخرى. "
        />
        <LabDevicesArabicTwo
          img={asset14}
          device="Stirring Hot Plate"
          model="Corning Stirring Hot Plate (10.2x12.7cm)"
          description=" يستخدم فى إذابة ومزج المواد الكميائية المختلفة مع التسخين لدرجات حرارة مختلفة وسرعات مختلفة ومدد زمنية مختلفة."
        />
        <LabDevicesArabic
          img={asset20}
          device="Vacuum Oven"
          model="Thermo Scientific Oven under Vacuum"
          description="يستخدم فرن التفريغ فى تجفيف العينات المختلفة حيث يعد أسرع بكثير من الأفران التقليدية."
        />
        <LabDevicesArabicTwo
          img={asset5}
          device="Compact Incubator"
          model="Thermo Scientific Incubator"
          description="تستخدم حاضنة الميكروبيولوجى صغيرة الحجم فى توفيرمدى من درجات الحرارة اللازمة لنمو كثير من الكائنات الحية الدقيقة ، وتستخدم أيضا فى بعض العمليات التى قد تتطلب حفظ العينات فى درجات حراة معينة."
        />
        <LabDevicesArabic
          img={asset3}
          device="Two-Digit Top-Pan Balance"
          model="OHAUS Laboratory Balance"
          description="يستخدم فى وزن المواد المختلفة وتحضير الوزنات بدقه تصل لرقمين عشريين."
        />
        <LabDevicesArabicTwo
          img={asset1}
          device="Four-Digit Analytical Balance"
          model="OHAUS Laboratory Analytical Balance"
          description="يستخدم فى وزن المواد المختلفة وتحضير الوزنات الدقيقة بصورة دقيقه جدا تصل إلى أربعة أرقام عشرية."
        />
        <LabDevicesArabic
          img={asset4}
          device="Binocular Microscopes"
          model="Olympus CX31 Binocular Halogen Microscope"
          description="لتكبير الأجسام الصغيرة التي لا يمكن رؤيتها بالعين المجردة أو لإظهار التفاصيل الدقيقة للأشياء من أجل اكتشاف تكوينها و دراستها ، حيث يمكن لهذا النوع التكبير لأكثر من ألف مرة."
        />
        <LabDevicesArabic
          img={asset13}
          device="Zoom Binocular Stereo Microscope"
          model="Olympus SZ30 Stereo Zoom Microscope (9X - 40X Magnification) with Led Ring Light"
          description="جهاز لتكبير الأجسام الصغيرة المجسمة التي لا يمكن رؤية تفاصيلها الدقيقة بالعين المجردة، حيث يمكن لهذا النوع التكبير لأربعين مرة."
        />
       
        <LabDevicesArabic
          img={asset11}
          device="Ultrasonic Cleaner and Sonicator"
          model="Ultrasonic Cleaner (XH-E412)"
          description="Sonication هو فعل من تطبيق الصوت (عادة الموجات فوق الصوتية) لهز وتقليب مكونات العينة والإسراع من تفكيك الجزيئات فيها.  انها مفيدة بشكل خاص عندما لا يكون من الممكن تحريك العينة، كما هو الحال مع أنابيب NMR ويمكن أيضا أن تستخدم لتوفير الطاقة اللازمة لبعض التفاعلات الكيميائية. كما تستخدم عادة في تكنولوجيا النانو للتوزيع المتجانس لجزيئات النانو nanoparticles في السوائل. ويمكن أيضا أن تستخدم لحث عمليات التبلور Crystallisations والمساعدة فى عزل بلورات صغيرة .
          وفي التطبيقات البيولوجية ، غالبا ما تستخدم لتكسير أغشية الخلايا والافراج عن محتويات الخلية. وتسمى هذه العملية Sonoporation.
          كذلك هي آلية مستخدمة في تنظيف الأسطح مثل النظارات والمجوهرات. كما تستخدم أيضا لاستخراج الأحافير الدقيقة microfossils من الصخور."
        />
        <LabDevicesArabicTwo
          img={asset8}
          device="Fume Hood"
          model="FH1500 Fume Hood BIOBASE"
          description="يستخدم هذا الجهاز فى الحد والوقاية من التعرض إلى الأبخرة الخطرة والضارة للمواد الكيميائية المختلفة."
        />
        <LabDevicesArabic
          img={asset17}
          device="Digital pH Meter and Thermometer"
          model="PICCOLO Plus HI1295"
          description="يستخدم جهاز قياس الأس الهيدروجينى pH فى معرفة رقم الحموضة والقلوية فى المحاليل المختلفة المستخدمة فى معالجة العينات المراد فحصها مثل"
        />
      </section>
    </LayoutAr>
  );
};

export default LabDevicesArabicPage;
