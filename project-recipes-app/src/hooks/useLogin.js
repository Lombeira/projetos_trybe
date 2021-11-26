import PropTypes from 'prop-types';
import React, { useState, createContext, useContext } from 'react';

const LoginContext = createContext({});

export function LoginProvider({ children }) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const GlobalState = {
    mail,
    setMail,
    password,
    setPassword,
  };

  return (
    <LoginContext.Provider value={ GlobalState }>
      {children}
    </LoginContext.Provider>
  );
}

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

LoginProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function useLogin() {
  return useContext(LoginContext);
}
