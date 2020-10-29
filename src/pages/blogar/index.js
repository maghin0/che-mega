import React from 'react';

import LayoutAr from '../../components/LayoutAr';
import BlogRollAr from '../../components/BlogRollAr';
import BlogRollEng from '../../components/BlogRollEng';
import BlogRollWorkShopAr from '../../components/BlogRollWorkShopAr';
import BlogRollVisitsAr from '../../components/BlogRollVisits';
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <LayoutAr>
        <div
          className="full-width-image margin-top-0"
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
              className=" has-text-weight-bold size-big is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              style={{
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
                margin: 'auto',
              }}
            >
              الأحداث
            </h1>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 id="one">الأحداث </h1>
              <BlogRollAr />
              <h1 id="two">ورش العمل والتدريب</h1>
              <BlogRollWorkShopAr />
              <h1 id="three">الزيارات والمندوبين</h1>
              <BlogRollAr />
            </div>
          </div>
        </section>
      </LayoutAr>
    );
  }
}
