import React from "react";
import containerstyles from "./containerStyles";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "../post/Post";
import { useSelector } from "react-redux";
  
const PostContainer = ({setUserId}) => {
    const posts = useSelector((state) => state.posts);
    const styles = containerstyles();

    return(
        !posts.length ? <CircularProgress/> : (
            <Grid className={styles.container} container alignItems="stretch" spacing={4}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        {/* <Post post={post} /> */}
                        <Post post={post} setUserId={setUserId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}
export default PostContainer;