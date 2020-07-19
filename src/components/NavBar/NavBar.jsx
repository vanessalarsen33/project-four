import React, { Component } from 'react';
import userService from '../../utils/userService';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import './NavBar.css';

class NavBar extends Component {
  
  render() {
    return (
      <AppBar 
      className="NavBar" 
      position="fixed" 
      style={{ 
        top: "auto", 
        bottom: 0, 
        backgroundColor: "#E4CAB0", 
        display: "inline-block", 
        height: "5%",
        paddingTop: "1.5vh",
    }}>
          {userService.getUser() ?
            <>
              <NavLink exact to='/logout' onClick={this.handleLogout} color="primary" >LOGOUT</NavLink>
              <NavLink exact to='/services' >SERVICES</NavLink>
              <NavLink exact to='/profile'>PROFILE</NavLink>
              <NavLink exact to='/home'>HOME</NavLink>
            </>
            :
            <>
              <NavLink exact to='/signup'>SIGNUP</NavLink>
              <NavLink exact to='/login'>LOGIN</NavLink>
              <NavLink exact to='/home'>HOME</NavLink>
            </>
          }
      </AppBar>
    );
  }
};

export default NavBar;