import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './Home';
import { fetchPosts } from './../actions';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

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

App.propTypes = {
  getPosts: PropTypes.func
};

export default withRouter(
  connect(null, {
    getPosts: fetchPosts
  })(App)
);
