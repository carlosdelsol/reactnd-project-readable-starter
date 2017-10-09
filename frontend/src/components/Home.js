import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { capitalize } from '../utils/helpers'

class Home extends Component {
  state = {
    categories: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      categories: nextProps.categories
    });
  }
  render() {
    const { categories } = this.state;
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
                {categories!==undefined?
                  categories.map((category, index) =>{
                    return <li key={index} role="presentation"><Link to={"/"+category.path}>{capitalize(category.name)}</Link></li>
                  })
                :null}
              </ul>                 
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);