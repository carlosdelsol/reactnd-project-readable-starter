import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home';

import './App.css';

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
