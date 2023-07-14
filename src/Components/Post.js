import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
    const { id, title, body } = props.post;

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }
    
    return (
        <div>
            <h1>{id}: {title}</h1>
            <h5>{body}</h5>
            <button onClick={() => handleNavigate(id)}>Show Comments</button>
        </div>
    );
};

export default Post;