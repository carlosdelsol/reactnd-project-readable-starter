import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
              <Nav pullRight>
                <NavItem><Link to="/react">React</Link></NavItem>
                <NavItem><Link to="/redux">Redux</Link></NavItem>
                <NavItem><Link to="/udacity">Udacity</Link></NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

export default Home;
