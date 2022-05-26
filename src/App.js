import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
// import ReactDom from 'react-dom';
import { Container } from '@material-ui/core';
// import styles from './styles';
import Homepage from './components/Homepage';
import Navbar from './components/navigation/Navigation';
import UserAuth from './components/auth/UserAuth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
       <Navbar />
       <Routes>
          <Route path="/"  element={<Homepage/>}></Route>
          <Route path="/authentication" element={<UserAuth/>}></Route>
       </Routes>
       <Homepage/>
    {/* <nav>
      <Link path="/">Homepage</Link>
      <Link path="/authentication" >Sign in</Link>
    </nav> */}

    </Container>
    </BrowserRouter>
);


export default App;