import React from 'react';
import Comment from "./Comment";

const CommentList = () => {
    //this is a comment list components that will be reusing the comment component
    return (
        <div>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    );
};

export default CommentList;