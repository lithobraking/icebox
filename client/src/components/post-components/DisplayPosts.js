import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';
import parseISO from 'date-fns/parseISO';


const DisplayPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const req = await axios.get('http://localhost:3001/api/v1/posts/')
            setPosts(req.data);
            return req;
        }
        getPosts();

    }, []);

    if (posts.length > 0) {
        return (
            <div>
                {posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <Post
                                
                                date={post.createdAt}
                                body={post.postContent}
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

export default DisplayPosts;