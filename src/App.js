import React from 'react';
import { Router, Routes,Route, Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import { Container } from '@material-ui/core';
// import styles from './styles';
import Homepage from './components/Homepage';
import Navbar from './components/navigation/Navigation';
import UserAuth from './components/auth/UserAuth';

const App = () => (
    <Container maxWidth="lg">
    <nav>
      <Link path="/">Homepage</Link>
      <Link path="/authentication" >Sign in</Link>
    </nav>
    
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage/>}></Route>
          <Route path="/authentication" element={<UserAuth/>}></Route>
        </Routes>
      </Router>

    </Container>
 
);


// import React, { useEffect } from 'react';
// import { Route, BrowserRouter, Link } from 'react-router-dom';
// // import ReactDom from 'react-dom';
// import { Container, AppBar, Grow, Grid, Typography } from '@material-ui/core';
// import PostContainer from './components/postContainer/PostContainer';
// import ShoeForm from './components/form/ShoeForm'
// import styles from './styles';
// import { useDispatch } from 'react-redux';
// import { getPosts } from './action/post'
// import Homepage from './components/Homepage';
// import Navbar from './components/Navigation';
// import UserAuth from './components/auth/UserAuth';



export default App;