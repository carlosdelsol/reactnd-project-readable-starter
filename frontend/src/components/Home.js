import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
          <Navbar inverse collapseOnSelect staticTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Home</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <ul className="nav navbar-nav navbar-right">
                 <li role="presentation"><Link to="/react">React</Link></li>
                 <li role="presentation"><Link to="/redux">Redux</Link></li>
                 <li role="presentation"><Link to="/udacity">Udacity</Link></li>
                 </ul>                 
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

export default Home;
