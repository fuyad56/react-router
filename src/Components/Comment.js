import React from 'react';

const Comment = (props) => {
    const { id, name, email, body } = props.comment;
    
    return (
        <div>
            <h1>{id}: {name}</h1>
            <h4>Email: {email}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Comment;