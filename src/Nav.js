/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const url = location.hash.slice(1)
  return (
    <div>
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to='/home'>
            <img src="./vendor/images/logo-black-no-bkg.png" className="d-inline-block align-middle nav-jp-logo" />
          </Link>
          <ul className="nav">
            {
              url === '/home' ? (
                <span className="nav-item nav-page-selected">Home</span>
              ) : (
              <li className="nav-item nav-page-link">
                <Link to='/home'>Home</Link>
              </li>
              )
            }
            {
              url === '/about' ? (
                <span className="nav-item nav-page-selected">About</span>
              ) : (
              <li className="nav-item nav-page-link">
                <Link to='/about'>About</Link>
              </li>
              )
            }
            {
              url === '/experience' ? (
                <span className="nav-item nav-page-selected">Experience</span>
              ) : (
              <li className="nav-item nav-page-link">
                <Link to='/experience'>Experience</Link>
              </li>
              )
            }
            {
              url === '/resume' ? (
                <span className="nav-item nav-page-selected">Resume</span>
              ) : (
              <li className="nav-item nav-page-link">
                <Link to='/resume'>Resume</Link>
              </li>
              )
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav;
