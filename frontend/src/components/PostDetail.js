import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import NavBar from './NavBar'
import SideBar from './SideBar'
import Post from './Post'
import PostForm from './PostForm'
import { fetchPost, fetchComments } from '../actions'
import _ from 'lodash'

class PostDetail extends Component {
  state = {
    sort: 'Date',
    comments: []
  };

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId, "posts");
    this.props.getComments(this.props.match.params.postId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ comments: nextProps.comments });
  }
  
  handleChangeSort = (e) =>{
    var index = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
    this.setState({sort: index});
  }

  render() {
    const { sort } = this.state;
    const { categories, postSelected, comments } = this.props;
    const commentsSorted = _.sortBy(comments[this.props.match.params.postId], this.state.sort).reverse();

    return (
      <div className="App">
        <NavBar />
        <div id="mainbar" className="col-lg-10">
            <Post type="posts" post={postSelected} detail={true} />
            <div className="col-lg-12">
              {commentsSorted && commentsSorted.map((post, index) =>{
                return  <Post key={index} type="comments" post={post} detail={false} />
              })}
            </div>
            <div className="col-lg-12">
              <h2>New comment:</h2>
              <PostForm />
            </div>
        </div>
        <SideBar categories={categories} sort={sort} handleChangeSort={this.handleChangeSort} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    comments: state.comments,
    postSelected: state.postSelected    
  };
};

export default connect(mapStateToProps,{ getPost: fetchPost, getComments: fetchComments })(PostDetail);