import React, { Component } from 'react';
import { Link, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import ServiceListPage from '../ServiceListPage/ServiceListPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'

class App extends Component {
  state = {
    services: [
      {
        _id: 1,
        type: 'Massage',
        cost: '$150',
        time: '60 mins'
      },
      {
        _id: 2,
        type: 'Hair cut',
        cost: '$100',
        time: '90 mins'
      },
      {
        _id: 3,
        type: 'Pedicure',
        cost: '$50',
        time: '60 mins'
      },
      {
        _id: 4,
        type: 'Manicure',
        cost: '$50',
        time: '60 mins'
      },
    ]
  }
  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    }, () => this.props.history.push('/'));
  }

  handleSignupOrLogin = () => {
    this.setState();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            {userService.getUser() ?
              <>
                {userService.getUser().name ? `WELCOME, ${userService.getUser().name.toUpperCase()}` : ''}
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/logout' onClick={this.handleLogout}>LOGOUT</NavLink>                &nbsp;&nbsp;&nbsp;
                <NavLink exact to='/services'>SERVICE LIST</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to='/appointment'>MAKE AN APPOINTMENT</NavLink>
              </>
              :
              <>
                <NavLink exact to='/signup'>SIGNUP</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to='/login'>LOGIN</NavLink>
                &nbsp;&nbsp;&nbsp;
            </>
            }
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
            } />
            <Route exact path='/login' render={({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
            <Route exact path='/services' render={({ history }) =>
              <ServiceListPage servicesFromParent={this.state.services} />
            } />
          </Switch>
          <div>
            
          </div>
        </main>
      </div>
    );
  }
}

export default App;
