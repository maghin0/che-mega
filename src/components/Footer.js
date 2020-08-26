import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/social/logo no text.png';
import smallfacebook from '../img/social/smallfacebook.svg';
import smalltwitter from '../img/social/smalltwitter.svg';
import smallyoutube from '../img/social/smallyoutube.svg';
import smallcall from '../img/social/smallcall.svg';
import smallemail from '../img/social/smallemail.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Electron Microscope Unit"
            style={{ width: '14em', height: '12em' }}
          />
        </div>
        <div className="content has-text-centered has-text-white">
          <div className="container has-text-white">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/lab-devices-page">
                        Products
                      </Link>
                    </li>

                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a
                  title="facebook"
                  href="https://www.facebook.com/%D9%88%D8%AD%D8%AF%D8%A9-%D8%A7%D9%84%D9%85%D9%8A%D9%83%D8%B1%D9%88%D8%B3%D9%83%D9%88%D8%A8-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%89-%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9-566336020116519"
                >
                  <img
                    src={smallfacebook}
                    alt="Facebook"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/mansoura_uni">
                  <img
                    className="fas fa-lg"
                    src={smalltwitter}
                    alt="Twitter"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="Youtube" href="https://www.youtube.com/user/mansvu">
                  <img
                    src={smallyoutube}
                    alt="YouTube"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="call" href="">
                  <img
                    src={smallcall}
                    alt="Call"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="email" href="https://vimeo.com">
                  <img
                    src={smallemail}
                    alt="Email"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
