import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionType';
import navStyles from './navStyles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const styles = navStyles();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate.push('/auth');

    setUser(null);
  }; 
// update logic dependecies missing warning for logout and user?.token
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={styles.appBar} position="static" color="inherit">
      {/* header with links to home */}
      <div className={styles.brandContainer}>
        <Typography component={Link} to="/" className={styles.heading} variant="h2" align="center">The Shoeroom</Typography>
        {/* <img className={navStyles.image} src={memories} alt="icon" height="60" /> */}
      </div>

      <Toolbar className={styles.toolbar}>
        {/*>logic for if user is logged in or not  */}
        {user?.result ? (
          <div className={styles.profile}>
            {/* shows profile imagw if not ffirst letter of nam */}
            {/* <Avatar className={navStyles.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>  */ }    
            <Typography className={styles.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={styles.logout} color="primary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          

          <Button onClick={Link} to="/authentication" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;