import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/social/logo.png';

import servicespdf from '../../static/img/price-2.pdf';

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
              title="electron microscope mansoura"
              style={{ padding: '0' }}
            >
              <img
                src={logo}
                alt="Electron Microscope mansoura"
                style={{ paddingLeft: '1rem' }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger' ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
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
                  Events
                </Link>

                <div class="navbar-dropdown">
                  <Link
                    className="navbar-item"
                    to="/blog/#one"
                    activeStyle={{ color: '#60f4b8' }}
                  >
                    Events
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/blog/#two"
                    activeStyle={{ color: '#60f4b8' }}
                  >
                    Workshops and Training
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/blog/#three"
                    activeStyle={{ color: '#60f4b8' }}
                  >
                    Visits and Delegates
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link
                  className="navbar-link"
                  to="/about"
                  activeStyle={{ color: '#60f4b8' }}
                >
                  About Us
                </Link>
                <div class="navbar-dropdown">
                  <Link
                    className="navbar-item"
                    to="/about/#one"
                    activeStyle={{ color: '#60f4b8' }}
                  >
                    Mission and Vission
                  </Link>
                  <Link className="navbar-item" to="/about/#two">
                    Our Team
                  </Link>
                  <Link className="navbar-item" to="/about/#three">
                    Scientific Consultants
                  </Link>
                </div>
              </div>
              <Link
                className="navbar-item"
                to="/lab-devices-page"
                activeStyle={{ color: '#60f4b8' }}
              >
                Lab Devices
              </Link>

              <Link
                className="navbar-item"
                to="/contact"
                activeStyle={{ color: '#60f4b8' }}
              >
                Contact Us
              </Link>

              <Link
                className="navbar-item"
                to="/arabic"
                activeStyle={{ color: '#60f4b8' }}
              >
                عربى
              </Link>
              <Link className="navbar-item" activeStyle={{ color: '#60f4b8' }}>
                <a
                  className="button is-primary"
                  href={servicespdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
