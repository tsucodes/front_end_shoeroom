import React, {useEffect, useState} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {readPosts} from "./action/post";
import useStyles from './styles';
// import Footer from './components/Footer';
import PostContainer from './components/postContainer/PostContainer';
import ShoeForm from './components/form/ShoeForm';


const App = () => {
  const styles = useStyles();
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readPosts());
  }, [userId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={styles.appBar} position="static" color="inherit">
        <Typography className={styles.heading} variant="h2" align="center">The Shoeroom</Typography>
        {/* <img className={styles.image} src={header} alt="icon" height="60" /> */}
      </AppBar>

    <Grow in>

    <Container>
      <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
          <PostContainer setUserId={setUserId} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ShoeForm userId={userId} setUserId={setUserId} />
          </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    // find footer for material ui and import <Footer/>
  );
  };


export default App;