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
import mahomoud from '../img/about us/mahmoud-hasan.jpg';
import mohameds from '../img/about us/mohamed-shaheen.jpg';
import reham from '../img/about us/reham-abdulah.jpg';
import salmao from '../img/about us/salma-osama.jpg';
import salmam from '../img/about us/salma-moustafa.jpg';
import hagar from '../img/about us/hagar-dewedar.jpg';
import khadiga from '../img/about us/khadiga-hassan.jpg';
import khalid from '../img/about us/khalid-fathy.jpg';
//consultants
import awni from '../img/about us/awni-hassan.jpg';
import zak from '../img/about us/zak-baka.jpg';
import maher from '../img/about us/maher-mahmoud.jpg';
import mohamedm from '../img/about us/mohamed-mostafa.jpg';
import fekry from '../img/about us/fekry-mohamed.jpg';

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

                <Features gridItems={intro.blurbs} />
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
            <h5 className="has-text-weight-bold has-text-white is-size-2 has-text-centered">
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
                  الأستاذ الدكتور/ ياسر محمد نور الدين شبانه
                  <br />{' '}
                  <a href={yassercv} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
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
                  الأستاذ الدكتور/ ياسر محمد نور الدين شبانه
                  <br />{' '}
                  <a href={yassercv} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
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
                <img src={khalid} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  الأستاذ الدكتور/ ياسر محمد نور الدين شبانه
                  <br />{' '}
                  <a href={yassercv} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
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
                <img src={basem} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  الأستاذ الدكتور/ ياسر محمد نور الدين شبانه
                  <br />{' '}
                  <a href={yassercv} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
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
                <img src={mahomoud} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  الأستاذ الدكتور/ ياسر محمد نور الدين شبانه
                  <br />{' '}
                  <a href={yassercv} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
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
                <img src={mohameds} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  الأستاذ الدكتور/ ياسر محمد نور الدين شبانه
                  <br />{' '}
                  <a href={yassercv} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
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
                <img src={salmao} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  الأستاذ الدكتور/ ياسر محمد نور الدين شبانه
                  <br />{' '}
                  <a href={yassercv} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
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
                <img src={hagar} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  الأستاذ الدكتور/ ياسر محمد نور الدين شبانه
                  <br />{' '}
                  <a href={yassercv} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
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
                <img src={khadiga} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  الأستاذ الدكتور/ ياسر محمد نور الدين شبانه
                  <br />{' '}
                  <a href={yassercv} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
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
                <img src={salmam} alt="" />
              </div>
              <div className="column is-4">
                <h5 className="has-text-white">
                  الأستاذ الدكتور/ ياسر محمد نور الدين شبانه
                  <br />{' '}
                  <a href={yassercv} target="_blank" rel="noopener noreferrer">
                    {' '}
                    نبذة مختصرة{' '}
                  </a>
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
            <h5 className="has-text-weight-bold is-size-2 has-text-centered">
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
                  Prof. Awni Hassan Ibrahim Yassin
                </h5>
                <br />
                <p>
                  Head of the Histology Department - Faculty of Medicine -
                  Mansoura University Scientific consultant for the unit in the
                  field of processing and examination of living tissues with the
                  electron microscope in force.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={zak} alt="Dr Zak"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  Prof. Awni Hassan Ibrahim Yassin
                </h5>
                <br />
                <p>
                  Head of the Histology Department - Faculty of Medicine -
                  Mansoura University Scientific consultant for the unit in the
                  field of processing and examination of living tissues with the
                  electron microscope in force.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={maher} alt="Dr maher"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  Prof. Awni Hassan Ibrahim Yassin
                </h5>
                <br />
                <p>
                  Head of the Histology Department - Faculty of Medicine -
                  Mansoura University Scientific consultant for the unit in the
                  field of processing and examination of living tissues with the
                  electron microscope in force.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={mohamedm} alt="Dr Mohamed"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  Prof. Awni Hassan Ibrahim Yassin
                </h5>
                <br />
                <p>
                  Head of the Histology Department - Faculty of Medicine -
                  Mansoura University Scientific consultant for the unit in the
                  field of processing and examination of living tissues with the
                  electron microscope in force.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src={fekry} alt="Dr Fekry"></img>
              </div>
              <div className="column is-4">
                <h5 className="has-text-weight-bold">
                  Prof. Awni Hassan Ibrahim Yassin
                </h5>
                <br />
                <p>
                  Head of the Histology Department - Faculty of Medicine -
                  Mansoura University Scientific consultant for the unit in the
                  field of processing and examination of living tissues with the
                  electron microscope in force.
                </p>
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
