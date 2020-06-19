import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ControlledCarousel from '../components/ControlledCarousel';

import '../components/styles.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import asset from '../img/devices/asset 1.png';

class CarouselBlog extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;
    const post = edges[0];

    const asset1 = post.node.frontmatter.imageone;
    return (
      <div style={{ height: 500 }} className="columns is-multiline">
        <div className="featured-thumbnail">
          <div className="carousell">
            <Img src={asset} />
            <p className="legend">flavor_wheel</p>
          </div>
          <ControlledCarousel />
        </div>
      </div>
    );
  }
}

CarouselBlog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query CarouselBlogQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                imageone {
                  childImageSharp {
                    fluid(maxWidth: 1120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <CarouselBlog data={data} />}
  />
);
