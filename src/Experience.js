import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <div className="margin-default">
      <div className="flex exp-card-container space-around" style={{ }}>
        <div className="flex flex-column exp-card" style={{  }}>
          <h2>Email Marketing Associate</h2>
          <h3>FanDuel</h3>
          <h5>February 2017 &ndash; Present</h5>
          <h5>New York, NY</h5>
        </div>
        <div className="flex flex-column exp-card" style={{}}>
          <h2>Title</h2>
          <h3>Company</h3>
          <h5>Dates</h5>
          <h5>Location</h5>
        </div>
      </div>
    </div>
  )
}

export default Experience;
