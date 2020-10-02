import React from 'react';

import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRollEng from '../components/BlogRollEng';
import ControlledCarousel from '../components/ControlledCarousel';
import ControlledHero from '../components/ControlledHero';
import '../components/styles.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import Servicess from '../components/Servicess';

import carousel9 from '../img/09.jpg';
import carousel10 from '../img/10.jpg';
//import carousel11 from '../img/11.jpg';
import carousel1 from '../img/01.jpg';
import carousel2 from '../img/02.jpg';
import carousel3 from '../img/03.jpg';
import carousel4 from '../img/04.jpg';
import carousel5 from '../img/05.jpg';
import carousel6 from '../img/06.jpg';
import carousel7 from '../img/07.jpg';
import carousel8 from '../img/08.jpg';

export const IndexPageTemplate = ({
  // image,
  // title,
  heading,
  // subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <section className="hero is-medium">
      <ControlledHero
        img9={carousel9}
        img10={carousel10}
        //img11={carousel11}
        img={carousel1}
        img2={carousel2}
        img3={carousel3}
        img4={carousel4}
        img5={carousel5}
        img6={carousel6}
        img7={carousel7}
        img8={carousel8}
      />
    </section>
    {/* <Carousel showArrows={true}>
        <div className="carousell">
          <img src={carousel1} alt="Third slide" />
          <p className="legend">flavor_wheel</p>
        </div>
        <div className="carousell">
          <img src={carousel2} alt="Third slide" />
          <p className="legend">flavor_wheel</p>
        </div>
        <div className="carousell">
          <img src={carousel3} alt="Third slide" />
          <p className="legend">flavor_wheel</p>
        </div>
        <div className="carousell">
          <img src={carousel4} alt="Third slide" />
          <p className="legend">flavor_wheel</p>
        </div>
        <div className="carousell">
          <img src={carousel5} alt="Third slide" />
          <p className="legend">flavor_wheel</p>
        </div>
        <div className="carousell">
          <img src={carousel6} alt="Third slide" />
          <p className="legend">flavor_wheel</p>
        </div>
        <div className="carousell">
          <img src={carousel7} alt="Third slide" />
          <p className="legend">flavor_wheel</p>
        </div>
        <div className="carousell">
          <img src={carousel8} alt="Third slide" />
          <p className="legend">flavor_wheel</p>
        </div>
      </Carousel> */}

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                {/* <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div> */}
                {/* <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div> */}
                <Servicess />
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered"> </div>
                </div>
                <ControlledCarousel />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/lab-devices-page">
                    View All Devices
                  </Link>
                </div>
                <br />
                {/* <table className="table">
                  <thead>
                    <tr>
                      <th
                        className="has-text-centered"
                        style={{ backgroundColor: '#1c1c47' }}
                      >
                        <abbr title="Position" style={{ color: 'white' }}>
                          Servicess
                        </abbr>
                      </th>
                      <th
                        className="has-text-centered"
                        style={{ backgroundColor: '#1c1c47', color: 'white' }}
                      >
                        Price (Egyptians)*
                      </th>
                      <th
                        className="has-text-centered"
                        style={{ backgroundColor: '#1c1c47', color: 'white' }}
                      >
                        <abbr title="Played">Price (non-Egyptians)**</abbr>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Biological Sample</td>
                      <td className="has-text-centered">300 L.E.</td>
                      <td className="has-text-centered">$110</td>
                    </tr>
                    <tr>
                      <td>Non-biological Sample</td>
                      <td className="has-text-centered">250 L.E.</td>
                      <td className="has-text-centered">$80</td>
                    </tr>
                    <tr>
                      <td>
                        Elemental microanalysis for non-biological sample (EDS)
                      </td>
                      <td className="has-text-centered">240 L.E.</td>
                      <td className="has-text-centered">$75</td>
                    </tr>
                    <tr>
                      <td>EDS Mapping</td>
                      <td className="has-text-centered">1000 L.E.</td>
                      <td className="has-text-centered">$500</td>
                    </tr>
                    <tr>
                      <td>Coating</td>
                      <td className="has-text-centered">50 L.E.</td>
                      <td className="has-text-centered"> $10</td>
                    </tr>
                    <tr>
                      <td>Every Additional Picture</td>
                      <td className="has-text-centered"> 10 L.E.</td>
                      <td className="has-text-centered">$5</td>
                    </tr>
                  </tbody>
                </table>
                <div className="column is-12 has-text-centered">
                  <a className="btn" href="/img/price.pdf" target="_blank">
                    View full Servicess
                  </a>
                </div> */}
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">Events</h3>
                  <BlogRollEng />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
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
          heading
          description
        }
      }
    }
  }
`;
