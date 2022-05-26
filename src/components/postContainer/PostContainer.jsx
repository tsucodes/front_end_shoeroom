import React from "react";
import containerstyles from "./containerStyles";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "../post/Post";
import { useSelector } from "react-redux";


const PostContainer = () => {
    const posts = useSelector((state) => state.posts);
    const classes = containerstyles();

    return(
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={4}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} />
                        {/* <Post post={post} setCurrentId={setCurrentId} /> */}
                    </Grid>
                ))}
            </Grid>
        )
    )
}
export default PostContainer;
