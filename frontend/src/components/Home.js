import React, { Component } from 'react';
import _ from 'lodash'
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { capitalize } from '../utils/helpers'
import { votePost } from '../actions'
import Post from './Post'

class Home extends Component {
  state = {
    categories: [],
    posts: [],
    sort: 'Date'
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      categories: nextProps.categories,
      posts: _.sortBy(nextProps.posts, this.state.sort).reverse()
    });
  }

  handleChangeSort = (e) =>{
    var index = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
    var postsSorted = _.sortBy(this.state.posts, index).reverse();
    this.setState({sort: index, posts: postsSorted});
  }
  
  render() {
    const { categories, posts, sort } = this.state;
    const { votePost } = this.props;
    const { category } = this.props.match.params;
    const postsFiltered =  category ? posts.filter(data => data.category === category) : posts;
    
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
            {postsFiltered.length!==undefined?
                  postsFiltered.map((post, index) =>{
                    return  <Post key={index} 
                                  id={post.id}
                                  title={post.title}
                                  body={post.body}
                                  category={post.category}
                                  timestamp={post.timestamp}
                                  voteScore={post.voteScore}
                                  author={post.author}
                                  votePost={votePost} />
                  })
              :null}
        </div>
        <div id="sidebar" className="col-lg-2 blog-sidebar">
          <select value={sort} onChange={this.handleChangeSort}>
            <option value="timestamp">Date</option>
            <option value="voteScore">Score</option>
          </select>
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
    posts: state.posts,
    votePost: state.votePost
  };
};

export default connect(mapStateToProps,{votePost})(Home);