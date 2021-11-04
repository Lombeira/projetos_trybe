import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      loading: false,
      loggedIn: false,
    };
  }

  whenLogged = () => {
    const { inputName } = this.state;
    this.setState({ loading: true });
    createUser({ name: inputName })
      .then(() => this.setState({ loading: false, loggedIn: true }));
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ inputName: value });
  };

  render() {
    const { inputName, loading, loggedIn } = this.state;
    const MINIMUM_LENGTH = 3;
    if (loggedIn) {
      return <Redirect to="/search" />;
    }

    return (
      <div data-testid="page-login">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <input
              data-testid="login-name-input"
              type="text"
              value={ inputName }
              onChange={ this.handleChange }
            />
            <button
              data-testid="login-submit-button"
              disabled={ inputName.length < MINIMUM_LENGTH }
              type="button"
              onClick={ this.whenLogged }
            >
              Entrar
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
