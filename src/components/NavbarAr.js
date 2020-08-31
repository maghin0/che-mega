import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/social/logo.png';

import servicespdf from '../../static/img/price.pdf';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{ paddingBottom: '0px' }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item"
              title="Logo"
              style={{ padding: '0' }}
            >
              <img
                src={logo}
                alt="Electron Microscope"
                style={{ paddingLeft: '1rem' }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger' ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              style={{ marginLeft: '60vw' }}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered  ">
              <div className="navbar-item has-dropdown is-hoverable">
                <Link
                  className="navbar-link"
                  to="/blog"
                  activeStyle={{ color: '#60f4b8' }}
                >
                  الأحداث
                </Link>

                <div class="navbar-dropdown">
                  <Link
                    className="navbar-item"
                    to="/blog/#one"
                    activeStyle={{ color: '#60f4b8' }}
                  >
                    الأحداث
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/blog/#two"
                    activeStyle={{ color: '#60f4b8' }}
                  >
                    ورش العمل والتدريب
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/blog/#three"
                    activeStyle={{ color: '#60f4b8' }}
                  >
                    الزيارات والمندوبين
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link
                  className="navbar-link"
                  to="/about-ar"
                  activeStyle={{ color: '#60f4b8' }}
                >
                  معلومات عنا
                </Link>
                <div class="navbar-dropdown">
                  <Link
                    className="navbar-item"
                    to="/about-ar/#one"
                    activeStyle={{ color: '#60f4b8' }}
                  >
                    المهمة والرؤية
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/about-ar/#two"
                    activeStyle={{ color: '#60f4b8' }}
                  >
                    فريق العمل
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/about-ar/#three"
                    activeStyle={{ color: '#60f4b8' }}
                  >
                    المستشارون العلميون
                  </Link>
                </div>
              </div>
              <Link
                className="navbar-item"
                to="/lab-devices-ar"
                activeStyle={{ color: '#60f4b8' }}
              >
                أجهزة المعامل
              </Link>

              <Link
                className="navbar-item"
                to="/contact-ar"
                activeStyle={{ color: '#60f4b8' }}
              >
                اتصل
              </Link>
              <Link
                className="navbar-item"
                to="/"
                activeStyle={{ color: '#60f4b8' }}
              >
                English
              </Link>
              <Link className="navbar-item" activeStyle={{ color: '#60f4b8' }}>
                <a className="button is-primary" href={servicespdf}>
                  Service Cost
                </a>
              </Link>

              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
              <div></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
