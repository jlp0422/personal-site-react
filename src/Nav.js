/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-light bg-light">
        <Link className="navbar-brand" to='/home'>
          <img style={{width: '30px', height: '30px'}} src="./vendor/images/logo-black-no-bkg.png" className="d-inline-block align-middle" />
          &nbsp;Home
        </Link>
        <ul className="nav">
          <li style={{margin: '0px 5px'}} className="nav-item">
            <Link to='/about'>About</Link>
          </li>
          <li style={{margin: '0px 5px'}} className="nav-item">
            <Link to='/experience'>Experience</Link>
          </li>
          <li style={{margin: '0px 5px'}} className="nav-item">
            <Link to='/resume'>Resume</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;
