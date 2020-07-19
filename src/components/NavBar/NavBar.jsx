import React, { Component } from 'react';
import userService from '../../utils/userService';
import { BottomNavigation } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import './NavBar.css';

class NavBar extends Component {

  render() {
    return (
      <AppBar className="navBar" position="fixed" color="primary" style={{ top: "auto", bottom: 0 }}>
        <BottomNavigation
        >
          {userService.getUser() ?
            <>
              {userService.getUser().name ? `WELCOME, ${userService.getUser().name.toUpperCase()}` : ''}
              <BottomNavigationAction exact to='/logout' onClick={this.handleLogout} color="primary">LOGOUT</BottomNavigationAction>
              <BottomNavigationAction exact to='/services'>SERVICE LIST</BottomNavigationAction>
              <BottomNavigationAction exact to='/appointment'>MAKE AN APPOINTMENT</BottomNavigationAction>
              <BottomNavigationAction exact to='/profile'>PROFILE</BottomNavigationAction>
              <BottomNavigationAction exact to='/home'>HOME</BottomNavigationAction>
            </>
            :
            <>
              <BottomNavigationAction exact to='/signup'>SIGNUP</BottomNavigationAction>
              <BottomNavigationAction exact to='/login'>LOGIN</BottomNavigationAction>
              <BottomNavigationAction exact to='/home'>HOME</BottomNavigationAction>
            </>
          }
        </BottomNavigation>
      </AppBar>
    );
  }
};

export default NavBar;