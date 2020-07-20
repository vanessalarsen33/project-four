import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import userService from '../../utils/userService';
import Typography from '@material-ui/core/Typography';
import './LoginPage.css';


class LoginPage extends Component {

  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/home');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };


  render() {
    return (
      <div className="LoginPage">
        <Helmet>
          <style>{'body { background-color: #557050; }'}</style>
        </Helmet>
        <Typography className="loginTitle">Log in to schedule an appointment</Typography>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <div className="loginBtn">
              <button className="loginBtn">Log In</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;