import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Features from '../components/Features';
import TagRoute from '../templates/tags';
import '../components/styles.scss';

import teamone from '../img/consultant/09.jpg';

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
          <h1
            className=" has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              margin: 'auto',
              backgroundColor: '#00d1b2',
            }}
          >
            About Us
          </h1>
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
          <h1 className="has-text-weight-bold is-size-2 has-text-centered">
            Our Team
          </h1>
          <br />
          <br />
          <div className="container" style={{ marginLeft: '20%' }}>
            <div className="columns is-multiline">
              <div className="column is-12 is-offset-4 ">
                <img src={teamone} alt="" />
                <h1>wowthi sis kinda crazzyy</h1>
              </div>
              <div className="column is-4">
                <img src={teamone} alt="" />
                <h1>wowthi sis kinda crazzyy</h1>
              </div>
              <div className="column is-4">
                <img src={teamone} alt="" />
                <h1>wowthi sis kinda crazzyy</h1>
              </div>
              <div className="column is-4">
                <img src={teamone} alt="" />
                <h1>wowthi sis kinda crazzyy</h1>
              </div>
              <div className="column is-4">
                <img src={teamone} alt="" />
                <h1>wowthi sis kinda crazzyy</h1>
              </div>
              <div className="column is-4">
                <img src={teamone} alt="" />
                <h1>wowthi sis kinda crazzyy</h1>
              </div>
              <div className="column is-4">
                <img src={teamone} alt="" />
                <h1>wowthi sis kinda crazzyy</h1>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="container">
            <h1 className="has-text-weight-bold is-size-2 has-text-centered">
              Scientific Consultant
            </h1>
            <br />
            <br />
            <div className="columns">
              <div className="column is-4 is-offset-2">
                <img src="../img/02.jpg"></img>
              </div>
              <div className="column is-4">
                <h1 className="has-text-weight-bold">
                  Prof. Awni Hassan Ibrahim Yassin
                </h1>
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
                <img src="../img/02.jpg"></img>
              </div>
              <div className="column is-4">
                <h1 className="has-text-weight-bold">
                  Prof. Awni Hassan Ibrahim Yassin
                </h1>
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
                <img src="../img/02.jpg"></img>
              </div>
              <div className="column is-4">
                <h1 className="has-text-weight-bold">
                  Prof. Awni Hassan Ibrahim Yassin
                </h1>
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
                <img src="../img/02.jpg"></img>
              </div>
              <div className="column is-4">
                <h1 className="has-text-weight-bold">
                  Prof. Awni Hassan Ibrahim Yassin
                </h1>
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
