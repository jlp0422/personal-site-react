import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="margin-default">
      <Helmet><title>Home | Jeremy Philipson</title></Helmet>
      <h2>Home page info will go here</h2>
    </div>
  )
}

export default Home;
