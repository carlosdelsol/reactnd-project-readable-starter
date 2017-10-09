
import React from 'react';
import moment from 'moment';
import ArrowDownIcon from 'react-icons/lib/fa/angle-down'
import ArrowUptIcon from 'react-icons/lib/fa/angle-up'

const Post = ({post, votePost}) => (

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
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                    <div className="col-md-2">
                        <span className="label label-primary">{post.category}</span>
                        <p className="post-date">{moment(post.timestamp).format("MMM Do YY")}</p>
                        <p className="post-author">{post.author}</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
);

export default Post;