import React from 'react';
import Auth from 'j-toker';
import _ from 'lodash';
import { Input, Button } from 'semantic-ui-react';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: null,
      signedIn: false,
      config: 'default'
    };

  }

  handleInputChange = (ev) => {
    var nextState = _.cloneDeep(this.state);
    nextState[ev.target.name] = ev.target.value;
    this.setState(nextState);
  }

  handleSignInClick = (ev) =>  {
    Auth.emailSignIn({
      email:    this.state.email,
      password: this.state.password,
      config:   this.props.config,

    })

      .then(function(resp) {
        this.setState({
          email: '',
          password: '',
          errors: null,
          isModalOpen: true
        });
      }.bind(this))

      .fail(function(resp) {
        this.setState({
          errors: resp.data.errors,
          isModalOpen: true
        });
      }.bind(this));
  }

  renderSuccessMessage() {
    return (
      <p>Welcome {Auth.user.email}!</p>
    );
  }

  renderErrorMessage() {
    return (
      <p>There was an error: {this.state.errors.join(', ')}</p>
    );
  }


  render() {
    return (
      <form>
        <Input type='email'
              name='email'
              label='Email'
              placeholder='Enter email...'
              disabled={this.props.signedIn}
              value={this.state.email}
              onChange={this.handleInputChange} />

        <Input type='password'
              name='password'
              label='Password'
              placeholder='Enter password...'
              disabled={this.props.signedIn}
              value={this.state.password}
              onChange={this.handleInputChange} />

        <Button className='btn btn-primary'
                onClick={this.handleSignInClick}
                disabled={this.props.signedIn}>
          Sign In
        </Button>
      </form>
    );
  }
};

LoginForm.propTypes = {
  signedIn: React.PropTypes.bool,
  config: React.PropTypes.string
};

export default LoginForm;
