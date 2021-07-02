import React from 'react';
import PostList from './PostList';


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


    return(
        <PostList posts={testPosts.posts}/>
    )
}

export default PostPage;