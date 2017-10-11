import React, { Component } from 'react';
import _ from 'lodash'
import './App.css';
import { connect } from 'react-redux';
import NavBar from './NavBar'
import SideBar from './SideBar'
import Post from './Post'

class Home extends Component {
  state = {
    sort: 'Date'
  };
  
  handleChangeSort = (e) =>{
    var index = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
    this.setState({sort: index});
  }
  
  render() {
    const { sort } = this.state;
    const { posts, categories } = this.props;
    const { category } = this.props.match.params;
    const postsSorted = _.sortBy(posts, this.state.sort).reverse();
    const postsFiltered =  category ? postsSorted.filter(data => data.category === category) : postsSorted;
    
    return (
      <div className="App">
        <NavBar />
        <div id="mainbar" className="col-lg-10">
            {postsFiltered &&
                  postsFiltered.map((post, index) =>{
                    return  <Post key={index} type="posts" post={post} detail={false} />
                  })
            }
        </div>
        <SideBar categories={categories} sort={sort} handleChangeSort={this.handleChangeSort} />
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