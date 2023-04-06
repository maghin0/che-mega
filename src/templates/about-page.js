import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Features from '../components/Features';

import '../components/styles.scss';

//team
import yasser from '../img/about us/yasser.jpg';
import yassercv from '../img/about us/yassercv.pdf';
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

export const AboutPageTemplate = ({
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
  img/about-bg.jpg
  )`,
          backgroundPosition: `top right`,
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
            About Us
          </h5>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section ">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
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
              Our Team
            </h5>

            <br />
            <br />

            <div className="columns column is-multiline is-offset-2 ">
              <div className="column is-6">
                <img src={yasser} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  Prof. Dr. Yasser Shabana
                  <br />
                  Director
                  <br />
                  01149892220
                  <br />{' '}
                  <a href={yassercv} target="_blank" rel="noopener noreferrer">
                    {' '}
                    CV{' '}
                  </a>{' '}
                  <br />
                  <a
                    href="http://osp.mans.edu.eg/yassershabana/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    Personal Website{' '}
                  </a>
                </h5>
              </div>
              <div className="column is-6">
                <img src={reham} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  Dr. Reham Shams Eldeen <br /> Specialist (TEM) <br />
                  01140777134
                  <br />
                  <a href={rehampdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    CV{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={khalid} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  Dr. Khaled Ibrahim <br /> Specialist (Zeta Analyzer, Sample Processing)
                  <br />
                  01211156956
                  <br />{' '}
                  <a href={khalidpdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    CV{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={basem} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  Basem Tawfik <br /> Specialist (SEM ، Zeta Analyzer) <br />
                  01118254701 - 01116845186 <br />
                  <a href={basempdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    CV{' '}
                  </a>
                  <br />
                </h5>
              </div>

              <div className="column is-6">
                <img src={mahomoud} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  Dr. Mahmoud Hasan <br />
                  Specialist (TEM) <br />
                  01020720431
                  <br />{' '}
                  <a
                    href={mahomoudpdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    CV{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={mohameds} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  Dr. Mohamed Ali Shaheen <br />
                  Specialist (SEM ، Zeta Analyzer)
                  <br />
                  01000461196
                  <br />{' '}
                  <a
                    href={mohamedspdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    CV{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={salmao} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  Salma Osama Khalid Ghanim <br />
                  Specialist (Ultramicrotome)
                  <br />{' '}
                  01096693151
                  <br />
                  <a href={salmaopdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    CV{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={hagar} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  Hager Ali Dewedar <br /> Specialist (Ultramicrotome)
                  <br />{' '}
                  01008198249
                  <br />
                  <a href={hagarpdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    CV{' '}
                  </a>
                  <br />
                </h5>
              </div>
              <div className="column is-6">
                <img src={khadiga} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  Khadiga Hassan <br />
                  Specialist (SEM, Zeta Analyzer, Sample Processing)
                  <br />
                  01068088925
                  <br />
                  <a
                    href={khadigapdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    CV{' '}
                  </a>
                </h5>
              </div>
              <div className="column is-6">
                <img src={salmam} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  Salma Kassem <br />
                  Specialist (Ultramicrotome)
                  <br />{' '}
                  01005787739
                  <br />
                  <a href={salmampdf} target="_blank" rel="noopener noreferrer">
                    {' '}
                    CV{' '}
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
              Scientific Consultant
            </h5>
            <br />
            <br />
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={awni} alt="Dr Awni"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  Prof. Dr. Awni Hassan Ibrahim Yaseen
                </h5>
                <br />
                <p>
                  Head of the Histology Department - Faculty of Medicine -
                  Mansoura University, a scientific consultant for the unit in
                  the field of preparing and examining living tissues by a
                  transmissive electron microscope
                </p>
                <a href={awnipdf} target="_blank" rel="noopener noreferrer">
                  {' '}
                  CV{' '}
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={zak} alt="Dr Zak"></img>
              </div>

              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  Prof. Dr. Zakaria Awad Mohamed Baka{' '}
                </h5>
                <br />
                <p>
                  Full-time Professor - Department of Botany - Faculty of
                  Sciences - Damietta University - Scientific Consultant for the
                  unit in the field of examining plant living materials by
                  scanning and window electron microscopy
                </p>

                <a href={zakpdf} target="_blank" rel="noopener noreferrer">
                  {' '}
                  CV{' '}
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={maher} alt="Dr maher"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  Prof. Dr. Maher Mahmoud Saad{' '}
                </h5>
                <br />
                <p>
                  Full-time Professor - Department of Physics - College of
                  Science - Mansoura University - Scientific Consultant for the
                  unit in the field of examining inanimate matter by scanning
                  electron microscope
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={mohamedm} alt="Dr Mohamed"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  Dr. Mohamed Mostafa Ibrahim Mostafa
                </h5>
                <br />
                <p>
                  Lecturer - Department of Pharmaceutics - College of Pharmacy -
                  Mansoura University - Scientific Consultant for the unit in
                  the field of measurements in the voltage analyzer Zeta
                </p>
                <a href={mohamedmpdf} target="_blank" rel="noopener noreferrer">
                  {' '}
                  CV{' '}
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={fekry} alt="Dr Fekry"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  Prof. Dr. Fikri Mohamed Hassan Resha{' '}
                </h5>
                <br />
                <p>
                  Full-time Professor - Department of Physics - College of
                  Science - Mansoura University - Scientific Consultant for the
                  unit in the field of examining inanimate substances by
                  electron microscope
                </p>
                <a href={fekrypdf} target="_blank" rel="noopener noreferrer">
                  {' '}
                  CV{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
