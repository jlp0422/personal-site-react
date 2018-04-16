import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Experience = () => {
  return (
    <div className="margin-default">
    <Helmet><title>Experience | Jeremy Philipson</title></Helmet>
      <div className="flex exp-card-container flex-column space-around">
        <div className="flex space-around exp-card">
          <div>
            <img style={{height: '200px'}}src="./vendor/images/fanduel_logo.png" />
          </div>
          <div className="flex flex-colum">
            <div>
              <h2>Email Marketing Associate</h2>
              <h3>FanDuel</h3>
              <h5>February 2017 &ndash; Present</h5>
              <h5>New York, NY</h5>
            </div>
          </div>
        </div>
        <div className="flex flex-column exp-card">
          <h2>Email Marketing Coordinator</h2>
          <h3>FanDuel</h3>
          <h5>June 2016 &ndash; February 2017</h5>
          <h5>New York, NY</h5>
        </div>
        <div className="flex flex-column exp-card">
          <h2>Customer Support Agemt</h2>
          <h3>FanDuel</h3>
          <h5>June 2015 &ndash; June 2016</h5>
          <h5>New York, NY</h5>
        </div>
        <div className="flex flex-column exp-card">
          <h2>Sports Marketing Coordinator</h2>
          <h3>Wake Forest University</h3>
          <h5>September 2013 &ndash; June 2015</h5>
          <h5>Winston Salem, NC</h5>
        </div>
      </div>
    </div>
  )
}

export default Experience;
