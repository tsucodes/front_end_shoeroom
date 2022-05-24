// import {useEffect, useCallback} from 'react';
import React from "react";
const Post = (props) => {
    const selectPost = () => {
       props.currentPost.current = props.post;
    }

    return (
        <div className={props.class} onClick={() => {
            selectPost();
            props.setShow(true);
        }}>
            <img className="images"src={props.image} alt={props.title} />
            <div className="title">{props.title} </div>
            <div className="text">{props.text}  </div>
        </div>
    )
}

export default Post;