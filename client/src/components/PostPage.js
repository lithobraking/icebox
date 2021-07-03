import React from 'react';
import PostList from './DisplayPosts';
import axios from 'axios';


const PostPage = () => {
    const testPosts = {
        posts: [{
            title: "One",
            date: "31 June 2021",
            body: "Lorem ipsum blah blah blah something something"
        },
        {
            title: "Two",
            date: "31 June 2021",
            body: "Lorem ipsum blah blah blah something something"
        },
        {
            title: "Three",
            date: "31 June 2021",
            body: "Lorem ipsum blah blah blah something something"
        },
        {
            title: "Four",
            date: "31 June 2021",
            body: "Lorem ipsum blah blah blah something something"
        }],
        irrelevant: {
            body: "haha! I wasted your time!"
        }
    }

    const [posts, setPosts] = '';

    axios.get('http://localhost:3001/api/v1/posts/')
        .then((res) => {
            console.log(res);
            setPosts(res.data)
        })
        .catch(error => console.log(error));
    console.log(posts);
    return (
        <PostList key={testPosts.title} posts={testPosts.posts} />
    )
}

export default PostPage;