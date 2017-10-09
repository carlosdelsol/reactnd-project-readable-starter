
import React from 'react';

const Post = ({title, body}) => (

    <div class="row">
        <div>
            <div class="thumbnail">
                <div class="caption">
                <h3>{title}</h3>
                <p>{body}</p>
                </div>
            </div>
        </div>
  </div>
);

export default Post;