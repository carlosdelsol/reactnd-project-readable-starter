import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home';

import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:category" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
