import React from 'react';

import Layout from '../../components/Layout';
// import BlogRoll from '../../components/BlogRoll';
import BlogRollEng from '../../components/BlogRollEng';
import BlogRollWorkShop from '../../components/BlogRollWorkShop';
// import BlogRollVisits from '../../components/BlogRollVisits';
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className='full-width-image margin-top-0'
          style={{
            backgroundImage: `url('/img/event-bg.jpg')`,

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
              className=' has-text-weight-bold size-big is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
              style={{
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
                margin: 'auto',
              }}
            >
              Events
            </h1>
          </div>
        </div>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1 id='one'>Events </h1>
              <BlogRollEng />
              <h1 id='two'>Workshops and Training</h1>
              <BlogRollWorkShop />
              <h1 id='three'>Visitations and Delegates</h1>
              <BlogRollEng />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
