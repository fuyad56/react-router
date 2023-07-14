import React, { useEffect, useState } from 'react';
import Post from './Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    
    return (
        <div>
            <h1>Neat post: {posts.length}</h1>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Home;