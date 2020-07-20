import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';

import facebook from '../../img/social/facebookmu.svg';
import twitter from '../../img/social/twittermu.svg';
import youtube from '../../img/social/youtubemu.svg';
import email from '../../img/social/emailmu.svg';
import call from '../../img/social/callmu.svg';

import '../../components/styles.scss';
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
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
              className=" has-text-weight-bold size-big is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              style={{
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
                margin: 'auto',
              }}
            >
              Contact Us
            </h1>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns is-multiline">
                <div className="column is-full">
                  <h1>Location</h1>
                  <iframe
                    title="google maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.4847151948074!2d31.355184315631707!3d31.040603081530868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dd44a2aeb93%3A0xa609ad58cc230721!2sMansoura%20University%20College%20of%20Agriculture%20and%20Electron%20Microscopy%20Unit!5e0!3m2!1sen!2seg!4v1592389308186!5m2!1sen!2seg"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    className="googlemaps"
                  ></iframe>
                </div>
                <div className="column is-4">
                  <h1>Find Us</h1>
                  <div className="columns is-multiline">
                    <div className="column is-4">
                      <a
                        title="facebook"
                        href="https://www.facebook.com/%D9%88%D8%AD%D8%AF%D8%A9-%D8%A7%D9%84%D9%85%D9%8A%D9%83%D8%B1%D9%88%D8%B3%D9%83%D9%88%D8%A8-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%89-%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9-566336020116519/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={facebook}
                          alt="Facebook"
                          style={{ width: '2em', height: '2em', margin: '1em' }}
                        />
                        Facebook
                      </a>
                    </div>
                    <div className="column is-6">
                      <a
                        title="facebook"
                        href="https://twitter.com/mansoura_uni"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={twitter}
                          alt="Twitter"
                          style={{ width: '2em', height: '2em', margin: '1em' }}
                        />
                        Twitter
                      </a>
                    </div>

                    <div className="column is-4 ">
                      <a
                        title="facebook"
                        href="https://www.youtube.com/user/mansvu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={youtube}
                          alt="Youtube"
                          style={{ width: '2em', height: '2em', margin: '1em' }}
                        />
                        Youtube
                      </a>
                    </div>

                    <div className="column is-6"></div>
                    <div className="column is-10">
                      <h1>Contact Us</h1>
                    </div>
                    <div className="column is-8">
                      <img
                        src={call}
                        alt="call us"
                        style={{ width: '2em', height: '2em', margin: '1em' }}
                      />
                      Call Us 002 (050) 2221688
                    </div>
                    <div className="column is-6">
                      <a title="facebook" href="mailto:emunit@mans.edu.eg">
                        <img
                          src={email}
                          alt="email us"
                          style={{ width: '2em', height: '2em', margin: '1em' }}
                        />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <h1>Contact</h1>
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Your name
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        Email
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button className="button is-link" type="submit">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
