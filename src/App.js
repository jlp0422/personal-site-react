import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Experience from './Experience';

const App = () => {
  return (
    <Router>
      <div>
      <Route path='/' component={ Nav } />
      <div className="container">
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route exact path='/home' component={ Home } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/experience' component={ Experience } />
        </Switch>
      </div>
      </div>
    </Router>
  )
}

export default App;
