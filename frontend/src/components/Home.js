import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { capitalize } from '../utils/helpers'
import Post from './Post'

class Home extends Component {
  state = {
    categories: [],
    posts: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      categories: nextProps.categories,
      posts: nextProps.posts
    });
  }
  render() {
    const { categories, posts } = this.state;
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Home</Link>
              </div>
          </div>
        </nav>

          <div id="mainbar" className="col-lg-10">
              {posts!==undefined?
                    posts.map((post, index) =>{
                      return  <Post key={index} title={post.title} body={post.body} />
                    })
                :null}
          </div>
          <div id="sidebar" className="col-lg-2 blog-sidebar">
            <div className="sidebar-module">
              <h4>Categories</h4>
              <ol className="list-unstyled">
                 {categories.length!==undefined?
                    categories.map((category, index) =>{
                      return <li key={index}><Link to={"/"+category.path}>{capitalize(category.name)}</Link></li>
                    })
                :null}
              </ol>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);