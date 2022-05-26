import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../action/post';
import PostContainer from './postContainer/PostContainer';
import ShoeForm from './form/ShoeForm';

const Home = () => {
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [userId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <PostContainer setUserId={setUserId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ShoeForm userId={userId} setUserId={setUserId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
