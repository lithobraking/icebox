import React, { useState } from 'react';
import Post from './Post';


const PostList = ({ posts }) => {

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div>
                        <Post
                            title={post.title}
                            date={post.date}
                            body={post.body}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default PostList;