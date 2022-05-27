import React from "react";
import containerstyles from "./containerStyles";
import { CircularProgress, Grid, } from "@material-ui/core";
import Post from "../post/Post";
import { useSelector } from "react-redux";
 


const PostContainer = ({setUserId}) => {
    // const posts = useSelector((state) => state.posts[setUserId.id]);
    // const posts = useSelector(state=> state.posts);
    const posts = useSelector(state => {
        return state
        console.log(state)
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
//     return(
//         // !posts.length ? <CircularProgress/> : (
//             // <div>
//             //   <Grid className={styles.container} container alignItems="stretch" spacing={4}>
//             //     {/* {posts.map((post) => (  */}
//             //         {/* <Grid key={posts._id} item xs={12} sm={6} md={6}>  */}
//             //              <Post post={posts} /> 
//             //              <Post post={posts} setUserId={setUserId} /> 
//             //         {/* </Grid>  */}
//             //      {/* ))} */}

//             //  </Grid>

//             // </div>
          
//         )
//     // )
}
export default PostContainer;






// import React from "react";
// import containerstyles from "./containerStyles";
// import { Grid, CircularProgress } from "@material-ui/core";
// import Post from "../post/Post";
// import { useSelector } from "react-redux";
  
// const PostContainer = ({setUserId}) => {
//     const posts = useSelector((state) => state.posts);
   
//     const styles = containerstyles();

//     return(
//         // !posts.length ? <CircularProgress/> : (
//             <div>
//              <Grid className={styles.container} container alignItems="stretch" spacing={4}>
//                 {posts.map((post) => (
//                     <Grid key={post._id} item xs={12} sm={6} md={6}>
//                         {/* <Post post={post} /> */}
//                         <Post post={post} setUserId={setUserId} />
//                     </Grid>
//                 ))}

//             </Grid>

//             </div>
          
//         )
//     // )
// }
// export default PostContainer;