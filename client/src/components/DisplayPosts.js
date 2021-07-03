import React, { useState } from 'react';
import Post from './Post';


const PostList = ({ posts }) => {

    if (posts.length > 0) {
        return (
            <div>
                {posts.map((post) => {
                    return (
                        <div>
                            <Post
                                date={post.date}
                                body={post.body}
                            />
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return <h3>No posts to display yet.</h3>
    }
}

export default PostList;