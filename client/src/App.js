import React, { Component } from 'react';
import Auth from 'j-toker';

// import Router from 'react-router';
// import Route from Router.Route;
// import DefaultRoute from Router.DefaultRoute;
// import RouteHandler from Router.RouteHandler;
// import Navbar from BS.Navbar;
// import Nav from BS.Nav;
// import NavItem from BS.NavItem;
// import RRBS from 'react-router-bootstrap';
// import NavItemLink from RRBS.NavItemLink;

// import Banner from './components/github-banner.jsx';
// import HomePage from './pages/home.jsx';
// import AltUserPage from './pages/alt-user.jsx';
import PubSub from 'pubsub-js';

import RegistrationForm from './components/RegistrationForm';
import ProfileInfo from './components/ProfileInfo';
import LoginForm from './components/LoginForm';

Auth.configure({
  apiUrl: 'http://localhost:3000/api',
  storage: 'localStorage',
  confirmationSuccessUrl: '/',
  handleLoginResponse: (resp) => {
    console.log(resp)
    return resp.data;
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: Auth.user
    };

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }
  //
  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  // update the user state on all auth-related events
  componentWillMount() {
    PubSub.subscribe('auth', function() {
      this.setState({user: Auth.user});
    }.bind(this));
  }

  render() {
    return (
      <div className='App'>
        <div className='ui text container'>
          UID: {this.state.user.uid}
          <ProfileInfo {...this.props.user} />
          <RegistrationForm />
          <LoginForm {...this.props.user} />
        </div>
      </div>
    );
  }
}

export default App;
