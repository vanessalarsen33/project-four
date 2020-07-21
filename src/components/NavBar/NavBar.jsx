import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <>
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
        <NavLink exact to='/home' onClick={props.handleLogout} color="primary" >LOGOUT</NavLink>
        <NavLink exact to='/services' >SERVICES</NavLink>
        <NavLink exact to='/profile'>PROFILE</NavLink>
        <NavLink exact to='/home'>HOME</NavLink>
      </AppBar>
    </>
    :
    <>
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
        <NavLink exact to='/signup'>SIGNUP</NavLink>
        <NavLink exact to='/login'>LOGIN</NavLink>
        <NavLink exact to='/home'>HOME</NavLink>
      </AppBar>
    </>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;