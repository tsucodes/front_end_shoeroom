import { useEffect, useState, useCallback } from "react";
import Post from "./Post";


const PostContainer = (props) => {
    const axios = require('axios');
    const baseURL = 'http://localhost:8000/';
    const [posts, setPosts] = useState([]);
    const {postChange, setPostChange} = props;
    

    const getPosts = useCallback( () => {
        axios.get(baseURL)
        .then(response=>{
            setPosts(old=>[]);
            for (let i=0; i<response.data.length; i++) {
                setPosts(old=>[...old, response.data[i]]);
        }
        })
    }, [axios])

    useEffect(()=>{
        getPosts();
        if(postChange){
            setPostChange(old=>false);
        }
    }, [getPosts, postChange, setPostChange]);

    return (
        <div className="container">
            
            {posts?.map((post, index) => (
                <Post class={"blogpost"}
                post={post} 
                image={post.image} 
                text={post.text} 
                title={post.title} 
                key={index} 
                setShow={props.setShow} 
                currentPost={props.currentPost}/>
            ))}
        </div>
    )
}

export default PostContainer;