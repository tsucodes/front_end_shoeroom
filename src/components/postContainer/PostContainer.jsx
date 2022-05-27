import React from "react";
import containerstyles from "./containerStyles";
import { CircularProgress, Grid, } from "@material-ui/core";
import Post from "../post/Post";
import { useSelector } from "react-redux";
 
const PostContainer = ({setUserId}) => {
    const posts = useSelector(state => {
        return state
    });
    const styles = containerstyles();
return(
    <div>
        {posts?<Grid className={styles.container} container alignItems="stretch" spacing={4}> 
                    {posts.map((post) =>{
                        console.log(post)
                        return(
                        <Grid key={post._id} item xs={12} sm={6} md={6}>
                            <Post post={post} setUserId={setUserId}/>
                        </Grid>) })}
               </Grid>: <CircularProgress/>}
    </div>
)
}
export default PostContainer;