
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';
import ArrowDownIcon from 'react-icons/lib/fa/angle-down'
import ArrowUptIcon from 'react-icons/lib/fa/angle-up'
import { vote, fetchComments, remove} from '../actions'

class Post extends Component {
    componentDidMount() {
        this.props.getComments(this.props.post.id);
    }

    render() {
        const { type, post, vote, detail, comments, remove } = this.props;
        const comment = comments[post.id] || {};
        const numComments = Object.keys(comment).length
        
        return (
            <div className="row">
                <div className="thumbnail">
                    <div className="caption">
                        <div className="row">
                            <div className="col-md-1">
                                <button className="votes-button" onClick={() => vote(type, post.id,'upVote')}>
                                    <ArrowUptIcon size={30}/>
                                </button>
                                <div className="votes-score">{post.voteScore}</div>
                                <button className="votes-button" onClick={() => vote(type, post.id,'downVote')}>
                                    <ArrowDownIcon size={30}/>
                                </button>
                            </div>
                            <div className="col-md-9">
                                {detail? <h3>{post.title}</h3> :<Link to={"/"+post.category+"/"+post.id}><h3>{post.title}</h3></Link>}
                                <p>{post.body}</p>
                            </div>
                            <div className="col-md-2">
                                {type === "posts" && <span className="label label-primary">{post.category}</span>}
                                <p className="post-date">{moment(post.timestamp).format("MMM Do YY")}</p>
                                <p className="post-author">{post.author}</p>
                                <p>Comments: {numComments}</p>
                                <p>
                                    <Link className="btn btn-info btn-xs" to={"/"+type+"/edit/"+post.id}>Edit</Link> &emsp;
                                    <button type="button" className="btn btn-danger btn-xs" onClick={() => remove(type, post.id, ()=>this.props.history.push('/'))}>Delete</button>
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
export default withRouter(connect(mapStateToProps,{vote, getComments: fetchComments, remove})(Post));