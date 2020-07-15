import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import { Form, FormInput, RegButton } from './style'

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
            <h1>Create Account</h1>
            <FormInput type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <FormInput type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
            <FormInput type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <RegButton>Sign Up</RegButton>
      </Form>
    );
  }
}

export default SignupForm;