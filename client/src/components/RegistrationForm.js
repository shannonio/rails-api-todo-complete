import React from 'react';
// import ResponseModalMixin from '../mixins/response-modal.jsx';
// import FormStateMixin from '../mixins/form-state.jsx';
// import Highlight from 'react-highlight';
import Auth from 'j-toker';
import { Input } from 'semantic-ui-react';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      favorite_color: '',
      sent_email: '',
      errors: null,
      config: 'default'
    };

  }

  handleInputChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  handleRegistrationClick = () => {
    Auth.emailSignUp({
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    })
      .then(function()  {
        debugger;
        debugger;
        this.setState({
          sent_email: this.state.email,
          email: '',
          password: '',
          password_confirmation: '',
          favorite_color: '',
        });
        console.log("Success")
      }).bind(this)
      .fail(function(resp) {
        console.log("Error")
        this.setState({
          errors: resp.data.errors
        });
      }).bind(this);
  };

  successModalTitle = 'Email Registration Success';
  errorModalTitle = 'Email Registration Error';

  renderSuccessMessage = () => {
    return (
      <p>
        Success!
      </p>
    );
  };

  renderErrorMessage = () => {
    return (
      <p>There was an error: {this.state.errors.full_messages.join(', ')}</p>
    );
  };

  render() {

    return (
        <form>
          <Input type='email'
                name='email'
                label='Email'
                placeholder='Enter email...'
                value={this.state.email}
                onChange={this.handleInputChange} />

          <Input type='password'
                name='password'
                label='Password'
                placeholder='Enter password...'
                value={this.state.password}
                onChange={this.handleInputChange} />

          <Input type='password'
                name='password_confirmation'
                label='Password Confirmation'
                placeholder='Enter password again...'
                value={this.state.password_confirmation}
                onChange={this.handleInputChange} />

          <Input type='text'
                name='favorite_color'
                label='Favorite Color'
                placeholder='Enter your favorite color...'
                value={this.state.favorite_color}
                onChange={this.handleInputChange} />

          <button className='btn btn-primary'
                  onClick={this.handleRegistrationClick}>
            Register
          </button>
        </form>
    );
  }
};

RegistrationForm.propTypes = {
  config: React.PropTypes.string
};

export default RegistrationForm;
