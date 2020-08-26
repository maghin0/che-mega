import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import LayoutAr from '../components/LayoutAr';
import Content, { HTMLContent } from '../components/Content';
import Features from '../components/Features';

import '../components/styles.scss';

//team
import yasser from '../img/about us/yasser.jpg';
import yassercvar from '../img/about us/yassercvar.pdf';
import basem from '../img/about us/basem-tawfik.jpg';
import basempdf from '../img/about us/basem-tawfik.pdf';
import mahomoud from '../img/about us/mahmoud-hasan.jpg';
import mahomoudpdf from '../img/about us/mahmoud-hasan.pdf';
import mohameds from '../img/about us/mohamed-shaheen.jpg';
import mohamedspdf from '../img/about us/mohamed-shaheen.pdf';
import reham from '../img/about us/reham-abdulah.jpg';
import rehampdf from '../img/about us/reham-abdulah.pdf';

import salmao from '../img/about us/salma-osama.jpg';
import salmaopdf from '../img/about us/salma-osama.pdf';

import salmam from '../img/about us/salma-moustafa.jpg';
import salmampdf from '../img/about us/salma-moustafa.pdf';

import hagar from '../img/about us/hagar-dewedar.jpg';
import hagarpdf from '../img/about us/hagar-dewedar.pdf';
import khadiga from '../img/about us/khadiga-hassan.jpg';
import khadigapdf from '../img/about us/khadiga-hassan.pdf';
import khalid from '../img/about us/khalid-fathy.jpg';
import khalidpdf from '../img/about us/khalid-fathy.pdf';
//consultants
import awni from '../img/about us/awni-hassan.jpg';
import awnipdf from '../img/about us/awni-hassan.pdf';

import zak from '../img/about us/zak-baka.jpg';
import zakpdf from '../img/about us/zak-baka.pdf';
import maher from '../img/about us/maher-mahmoud.jpg';

import mohamedm from '../img/about us/mohamed-mostafa.jpg';
import mohamedmpdf from '../img/about us/mohamed-mostafa.pdf';

import fekry from '../img/about us/fekry-mohamed.jpg';
import fekrypdf from '../img/about us/fekry-mohamed.pdf';

export const AboutPageArTemplate = ({
  title,
  content,
  contentComponent,
  intro,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
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
            height: '100%',
            width: '100%',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'rgba(28,28,71, 0.4)',
          }}
        >
          <h5
            className=" has-text-weight-bold size-big is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              margin: 'auto',
            }}
          >
            نبذة عن الوحدة
          </h5>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section ">
                <h2
                  className="title is-size-3 has-text-weight-bold is-bold-light"
                  style={{ textAlign: 'right' }}
                >
                  {title}
                </h2>

                <Features id="one" gridItems={intro.blurbs} />
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>

          <div
            className="container "
            style={{
              backgroundColor: '#1c1c47',
              borderRadius: '1rem',
              padding: '4em',
            }}
          >
            <h5
              id="two"
              className="has-text-weight-bold has-text-white is-size-2 has-text-centered"
            >
              فريق العمل
            </h5>

            <br />
            <br />

            <div className="columns column is-multiline is-offset-2 ">
              <div className="column is-6">
                <img src={yasser} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  الأستاذ الدكتور/ ياسر محمد نور الدين شبانه
                  <br />{' '}
                  <a
                    href={yassercvar}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    نبذة مختصرة{' '}
                  </a>{' '}
                  <br />
                  <a
                    href="http://osp.mans.edu.eg/yassershabana/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    الموقع الشخصي{' '}
                  </a>
                </h5>
              </div>
              <div className="column is-6">
                <img src={reham} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  د/ ريهام عبدالله شمس الدين <br /> أخصائي علمي (TEM) <br />
                  01140777134
                  <br />
                  <a href={rehampdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={khalid} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  خالد فتحي إبراهيم <br /> أخصائي معالجة عينات
                  <br />{' '}
                  <a href={khalidpdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={basem} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  باسم محمد توفيق أخصائي علمي (SEM ، Zeta Analyzer) <br />
                  01118254701 - 01116845186 <br />
                  <a href={basempdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
                  <br />
                </h5>
              </div>

              <div className="column is-6">
                <img src={mahomoud} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  محمود عبد الفتاح حسن <br />
                  أخصائي علمي (TEM) <br />
                  01020720431
                  <br />{' '}
                  <a
                    href={mahomoudpdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={mohameds} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  محمد علي شاهين <br />
                  أخصائي علمي (SEM ، Zeta Analyzer) <br />
                  01000461196
                  <br />{' '}
                  <a
                    href={mohamedspdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={salmao} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  سلمى أسامة غانم <br />
                  أخصائي ألتراميكروتوم
                  <br />{' '}
                  <a href={salmaopdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={hagar} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  هاجر السعيد دويدار <br /> أخصائي ألتراميكروتوم
                  <br />{' '}
                  <a href={hagarpdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={khadiga} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  خديجة أحمد حسن <br />
                  أخصائي معالجة عينات
                  <br />
                  <a
                    href={khadigapdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
                </h5>
              </div>
              <div className="column is-6">
                <img src={salmam} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  سلمى مصطفى قاسم <br />
                  أخصائي ألتراميكروتوم
                  <br />{' '}
                  <a href={salmampdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
                  <br />
                </h5>
              </div>

              {/* <div className="column is-4">
                <img src={teamone} alt="" />
                <h5>wowthi sis kinda crazzyy</h5>
              </div>
              <div className="column is-4">
                <img src={teamone} alt="" />
                <h5>wowthi sis kinda crazzyy</h5>
              </div> */}
            </div>
          </div>
          <br />
          <br />
          <div className="container">
            <h5
              id="three"
              className="has-text-weight-bold is-size-2 has-text-centered"
            >
              المستشارون العلميون
            </h5>
            <br />
            <br />
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={awni} alt="Dr Awni"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  أ.د/ عونى حسن إبراهيم ياسين
                </h5>
                <br />
                <p>
                  رئيس قسم الهستولوجى - كلية الطب – جامعة المنصورة استشارى علمى
                  للوحدة فى مجال تجهيز وفحص الأنسجة الحية بالميكروسكوب
                  الإلكترونى النافذ
                </p>
                <a href={awnipdf} target="_blank" rel="noopener noreferrer">
                  {' '}
                  نبذة مختصرة{' '}
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={zak} alt="Dr Zak"></img>
              </div>

              <div className="column is-4">
                <h5 className="has-text-weight-bold">أ.د/ زكريا عوض بقا </h5>
                <br />
                <p>
                  - أستاذ متفرغ - قسم النبات – كلية العلوم – جامعة دمياط استشارى
                  علمى للوحدة فى مجال فحص المواد الحية النباتية بالميكروسكوب
                  الإلكترونى الماسح والنافذ
                </p>

                <a href={zakpdf} target="_blank" rel="noopener noreferrer">
                  {' '}
                  نبذة مختصرة{' '}
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={maher} alt="Dr maher"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  أ.د/ ماهر محمود سعد التونسى{' '}
                </h5>
                <br />
                <p>
                  - أستاذ متفرغ – قسم الفيزياء – كلية العلوم – جامعة المنصورة
                  استشارى علمى للوحدة فى مجال فحص المواد غير الحية بالميكروسكوب
                  الإلكترونى الماسح
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={mohamedm} alt="Dr Mohamed"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  د/ محمد مصطفى إبراهيم مصطفى
                </h5>
                <br />
                <p>
                  - مدرس - قسم الصيدلانيات - كلية الصيدلة – جامعة المنصورة
                  استشارى علمى للوحدة فى مجال القياسات بجهاز تحليل الجهد زيتا
                </p>
                <a href={mohamedmpdf} target="_blank" rel="noopener noreferrer">
                  {' '}
                  نبذة مختصرة{' '}
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={fekry} alt="Dr Fekry"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  أ.د/ فكرى محمد حسن ريشة{' '}
                </h5>
                <br />
                <p>
                  - أستاذ متفرغ – قسم الفيزياء – كلية العلوم – جامعة المنصورة
                  استشارى علمى للوحدة فى مجال فحص المواد غير الحية بالميكروسكوب
                  الإلكترونى النافذ
                </p>
                <a href={fekrypdf} target="_blank" rel="noopener noreferrer">
                  {' '}
                  نبذة مختصرة{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

AboutPageArTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const AboutPageAr = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;
  return (
    <LayoutAr>
      <AboutPageArTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        intro={frontmatter.intro}
      />
    </LayoutAr>
  );
};

AboutPageAr.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPageAr;

export const aboutPageArQuery = graphql`
  query AboutPageAr($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
        }
      }
    }
  }
`;
