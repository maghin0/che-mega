import React from 'react';

import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import LayoutAr from '../components/LayoutAr';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import ControlledCarousel from '../components/ControlledCarousel';
import ControlledHero from '../components/ControlledHero';
import '../components/styles.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import Services from '../components/Services';

import carousel1 from '../img/01.jpg';
import carousel2 from '../img/02.jpg';
import carousel3 from '../img/03.jpg';
import carousel4 from '../img/04.jpg';
import carousel5 from '../img/05.jpg';
import carousel6 from '../img/06.jpg';
import carousel7 from '../img/07.jpg';
import carousel8 from '../img/08.jpg';

export const IndexPageArTemplate = ({
  // image,
  // title,
  heading,
  // subheading,
  mainpitch,
  description,
  intro,
}) => (
  <section className="hero is-medium">
    <ControlledHero
      img={carousel1}
      img2={carousel2}
      img3={carousel3}
      img4={carousel4}
      img5={carousel5}
      img6={carousel6}
      img7={carousel7}
      img8={carousel8}
    />

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
                <Services />
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered"> </div>
                </div>
                <ControlledCarousel />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/lab-devices-ar">
                    Read more
                  </Link>
                </div>
                <br />

                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">Events</h3>
                  <BlogRoll />
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
  </section>
);

IndexPageArTemplate.propTypes = {
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

const IndexPageAr = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;

  return (
    <LayoutAr>
      <IndexPageArTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </LayoutAr>
  );
};

IndexPageAr.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPageAr;

export const pageQuery = graphql`
  query IndexPageArTemplate {
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
