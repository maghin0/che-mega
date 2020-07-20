import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/social/logo.svg';

import services from '../../static/img/price.pdf';
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
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="Electron Microscope"
                style={{ width: '8em', height: '8em' }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger' ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              style={{ marginLeft: '80vw' }}
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
                <Link className="navbar-link" to="/blog">
                  Events
                </Link>

                <div class="navbar-dropdown">
                  <Link className="navbar-item" to="/blog/#one">
                    Events
                  </Link>
                  <Link className="navbar-item" to="/blog/#two">
                    Workshops and Training
                  </Link>
                  <Link className="navbar-item" to="/blog/#three">
                    Visits and Delegates
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/about">
                  About
                </Link>
                <div class="navbar-dropdown">
                  <Link
                    className="navbar-item"
                    to="/about/#one"
                    activeStyle={{ color: 'red' }}
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
              <Link className="navbar-item" to="/lab-devices-page">
                Lab Devices
              </Link>

              <Link
                className="navbar-item"
                to="/contact"
                activeStyle={{ color: 'red' }}
              >
                Contact
              </Link>
              <Link>
                <a
                  className="button is-primary"
                  href={services}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: '#60f4b8 !important' }}
                >
                  <span>Services</span>
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
