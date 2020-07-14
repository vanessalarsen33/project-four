import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import ServiceListPage from '../ServiceListPage/ServiceListPage';
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'

const services= [
      {
          _id: 1,
          service: 'Massage',
          cost: '$150',
          time: '60 mins'
      },
      {
          _id: 2,
          service: 'Hair cut',
          cost: '$100',
          time: '90 mins'
      },
      {
          _id: 3,
          service: 'Pedicure',
          cost: '$50',
          time: '60 mins'
      },
      {
        _id: 4,
        service: 'Manicure',
        cost: '$50',
        time: '60 mins'
    },
  ];

class App extends Component {

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    }, () => this.props.history.push('/'));
  }

  handleSignupOrLogin = () => {
    this.setState();
  }

render () {
    return (
      <div className="App">
        <header className="App-header">
          Spa app
          <nav>
              <>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to='/'>SERVICE LIST</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to='/add'>MAKE AN APPOINTMENT</NavLink>
              </>
              :
              <>
                <NavLink exact to='/signup'>SIGNUP</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to='/login'>LOGIN</NavLink>
                &nbsp;&nbsp;&nbsp;
            </>
          </nav>
        </header>
        <main>
          <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupForm
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          </Switch>
          <ServiceListPage ListOfServices={services} />
        </main>
      </div>
    );
  }
}

export default App;
