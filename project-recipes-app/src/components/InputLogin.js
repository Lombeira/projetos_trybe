import React from 'react';
import PropTypes from 'prop-types';

function Input({ info, handleChange, testId, inputType }) {
  return (
    <input
      className="form-input"
      type={ inputType }
      value={ info }
      onChange={ ({ target: { value } }) => handleChange(value) }
      data-testid={ testId }
    />
  );
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  info: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
};

export default Input;
