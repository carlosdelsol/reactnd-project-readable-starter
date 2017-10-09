
import React from 'react';
import moment from 'moment';
import ArrowDownIcon from 'react-icons/lib/fa/angle-down'
import ArrowUptIcon from 'react-icons/lib/fa/angle-up'

const Post = ({id, title, body, category, timestamp, author, voteScore, votePost}) => (

    <div className="row">
        <div className="thumbnail">
            <div className="caption">
                <div className="row">
                    <div className="col-md-1">
                        <button className="votes-button" onClick={() => votePost(id,'upVote')}>
                            <ArrowUptIcon size={30}/>
                        </button>
                        <div className="votes-score">{voteScore}</div>
                        <button className="votes-button" onClick={() => votePost(id,'downVote')}>
                            <ArrowDownIcon size={30}/>
                        </button>
                    </div>
                    <div className="col-md-9">
                        <h3>{title}</h3>
                        <p>{body}</p>
                    </div>
                    <div className="col-md-2">
                        <span className="label label-primary">{category}</span>
                        <p className="post-date">{moment(timestamp).fromNow()}</p>
                        <p className="post-author">{author}</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
);

export default Post;