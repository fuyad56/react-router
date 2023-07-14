import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';

const Detail = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])
    const { title, body } = post;

    const [ comment, setComment ] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [id])
    
    return (
        <div>
            <h1>Showing results for: {id}</h1>
            <h2>{title}</h2>
            <h4>{body}</h4>
            <h1>Comments: {comment.length}</h1>
            {
                comment.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    );
};

export default Detail;