import React from 'react';
import { useHistory } from 'react-router';
import InputLogin from './InputLogin';
import useLogin from '../hooks/useLogin';
import { saveToken, emailToken, setupLocalStorage } from '../localStorage';

function Form() {
  const { password, setPassword, mail, setMail } = useLogin();

  const isEmailValid = (email) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  };

  const MIN_PASSWORD = 6;
  const { push } = useHistory();

  const login = () => {
    saveToken();
    emailToken(mail);
    setupLocalStorage();
    push('/comidas');
  };

  return (
    <form className="login-form">
      <InputLogin
        inputType="text"
        testId="email-input"
        info={ mail }
        handleChange={ setMail }
      />
      <InputLogin
        inputType="password"
        testId="password-input"
        info={ password }
        handleChange={ setPassword }
      />
      <button
        className="form-btn"
        type="button"
        data-testid="login-submit-btn"
        disabled={ !isEmailValid(mail) || password.length <= MIN_PASSWORD }
        onClick={ login }
      >
        Entrar
      </button>
    </form>
  );
}

export default Form;
