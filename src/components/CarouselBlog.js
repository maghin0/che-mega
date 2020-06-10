import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import '../components/styles.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselBlog extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: post } = data.allMarkdownRemark;
    return (
      <header>
        {post.node.frontmatter.imageone ? (
          <div className="featured-thumbnail">
            <Carousel showArrows={true}>
              <div className="carousell">
                <img src={post.node.frontmatter.imageone} />
                <p className="legend">flavor_wheel</p>
              </div>
              <div className="carousell">
                <img src="/img/coffee.png" />
                <p className="legend">Legend 2</p>
              </div>
              <div className="carousell">
                <img src="/img/coffee.png" />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
        ) : null}
      </header>
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
    render={(data, count) => <CarouselBlog data={data} count={count} />}
  />
);
