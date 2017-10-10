
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ArrowDownIcon from 'react-icons/lib/fa/angle-down'
import ArrowUptIcon from 'react-icons/lib/fa/angle-up'
import { votePost, fetchComments } from '../actions'

class Post extends Component {
    state = {
      comments: [],
    };
    componentDidMount() {
        this.props.getComments(this.props.post.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ comments: nextProps.comments });
    }

    render() {
        const { post, votePost, detail } = this.props;
        const { comments } = this.state;
        const numComments = comments.filter(comment => comment.parentId === post.id).length
        
        return (
            <div className="row">
                <div className="thumbnail">
                    <div className="caption">
                        <div className="row">
                            <div className="col-md-1">
                                <button className="votes-button" onClick={() => votePost(post.id,'upVote')}>
                                    <ArrowUptIcon size={30}/>
                                </button>
                                <div className="votes-score">{post.voteScore}</div>
                                <button className="votes-button" onClick={() => votePost(post.id,'downVote')}>
                                    <ArrowDownIcon size={30}/>
                                </button>
                            </div>
                            <div className="col-md-9">
                                {detail? <h3>{post.title}</h3> :<Link to={"/"+post.category+"/"+post.id}><h3>{post.title}</h3></Link>}
                                <p>{post.body}</p>
                            </div>
                            <div className="col-md-2">
                                <span className="label label-primary">{post.category}</span>
                                <p className="post-date">{moment(post.timestamp).format("MMM Do YY")}</p>
                                <p className="post-author">{post.author}</p>
                                <p>Comments: {numComments}</p>
                                <p>
                                    <button type="button" className="btn btn-info btn-xs">Edit</button> &emsp;
                                    <button type="button" className="btn btn-danger btn-xs">Delete</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      );
    }
}
const mapStateToProps = state => {
    return {
      comments: state.comments
    };
  };
export default connect(mapStateToProps,{votePost, getComments: fetchComments})(Post);