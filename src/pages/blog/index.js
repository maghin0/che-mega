import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import BlogRollEvents from '../../components/BlogRollEvents';
import BlogRollVisits from '../../components/BlogRollVisits';
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,

            backgroundAttachment: 'fixed',
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
              className="has-text-weight-bold is-size-1"
              style={{
                boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                backgroundColor: '#f40',
                color: 'white',
                padding: '1rem',
              }}
            >
              Latest Stories
            </h1>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Latest News </h1>
              <BlogRoll />
              <h1>Conference and Events</h1>
              <BlogRollEvents />
              <h1>Visitations and Delegates</h1>
              <BlogRollVisits />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
