import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

// import { likePost, deletePost } from "../../action/post";
import { createPost, updatePost, likePost, deletePost } from '../../action/post';
import postStyles from './postStyles';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = postStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own shoe collection!
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;













// import React from 'react';
// import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
// import MoneyOffIcon from '@material-ui/icons/MoneyOff';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment';
// import { useDispatch } from 'react-redux';
// import { likePost, deletePost } from "../../action/post";
// import postStyles from './postStyles';

// const Post = ({ post, setCurrentId }) => {
//   const dispatch = useDispatch();
//   const classes = postStyles();

//   return (
//     <Card className={classes.card}>
//       <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
//       <div className={classes.overlay}>
//         <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
//       </div>
//       <div className={classes.overlay2}>
//         <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
//             <MoreHorizIcon fontSize="default" /></Button>
//       </div>
   
//       <Typography className={classes.details} gutterBottom variant="h5" component="h2">{post.name}</Typography>
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">{post.brand} sz {post.size}</Typography>
//         <Typography variant="body2" color="textSecondary" component="p">{post.condition}</Typography>
//       </CardContent>
//       <CardActions className={classes.cardActions}>
//         <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
//             {/* add on change to mark as sold */}
//             <MoneyOffIcon fontSize="small" /> Sold </Button>
//         <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
//             <DeleteIcon fontSize="small" /> Delete </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default Post;