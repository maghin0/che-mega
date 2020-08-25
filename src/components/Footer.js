import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/social/logo.svg';
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
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
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
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={smallfacebook}
                    alt="Facebook"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={smalltwitter}
                    alt="Twitter"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={smallyoutube}
                    alt="Instagram"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="call" href="https://vimeo.com">
                  <img
                    src={smallcall}
                    alt="Vimeo"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="email" href="https://vimeo.com">
                  <img
                    src={smallemail}
                    alt="Vimeo"
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
