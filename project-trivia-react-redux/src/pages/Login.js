import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GiConsoleController, GiTimeBomb, GiTrophyCup } from 'react-icons/gi';
import { addLoginInfo, fetchTokenAndQuestions } from '../Redux/actions';
import logo from '../trivia.png';
import Button from '../components/Button/index';

import '../index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gravatarEmail: '',
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyLogin = this.verifyLogin.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  verifyLogin() {
    const { gravatarEmail, name } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(gravatarEmail) && name.length !== 0;
  }

  renderButton() {
    const { sendInfo } = this.props;
    const { verifyLogin, state } = this;
    return (
      <Link to="/game" style={ { textDecoration: 'none' } }>
        <button
          className="btn-play btn-style"
          type="button"
          data-testid="btn-play"
          onClick={ () => {
            sendInfo(state);
          } }
          disabled={ !verifyLogin() }
        >
          <GiConsoleController size="18" />
          <p className="button-text">Jogar</p>
        </button>
      </Link>
    );
  }

  render() {
    const { gravatarEmail, name } = this.state;
    const { handleChange } = this;
    return (
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <GiTimeBomb className="icon-spacer App-logo-mini" size="60" />
        <form className="form" action="">
          <input
            type="text"
            placeholder="Nome"
            data-testid="input-player-name"
            name="name"
            value={ name }
            onChange={ (e) => handleChange(e) }
          />
          <input
            type="email"
            placeholder="Email"
            data-testid="input-gravatar-email"
            name="gravatarEmail"
            value={ gravatarEmail }
            onChange={ (e) => handleChange(e) }
          />
          <div className="buttons-div">
            { this.renderButton() }
            <Button />
          </div>
        </form>
        <Link to="/ranking" className="no-decoration">
          <GiTrophyCup className="ranking-link" size="50" />
        </Link>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchTokenAndQuestions()),
  sendInfo: (loginInfo) => dispatch(addLoginInfo(loginInfo)),
});

Login.propTypes = {
  sendInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
