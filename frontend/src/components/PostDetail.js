import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import NavBar from './NavBar'
import SideBar from './SideBar'
import Post from './Post'
import { fetchPost } from '../actions'

class PostDetail extends Component {
  state = {
    sort: 'Date'
  };

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId);
  }
    
  handleChangeSort = (e) =>{
    var index = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
    this.setState({sort: index});
  }

  render() {
    const { sort } = this.state;
    const { categories, postSelected } = this.props;
    return (
      <div className="App">
        <NavBar />
        <div id="mainbar" className="col-lg-10">
            <Post post={postSelected} detail={true} />
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

export default connect(mapStateToProps,{ getPost: fetchPost})(PostDetail);