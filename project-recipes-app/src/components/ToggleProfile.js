import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';

export default function ToggleFavoriteRecipeButton({ onClick, dataTestID }) {
  return (
    <input
      className="details-button"
      type="image"
      src={ searchIcon }
      alt="Favoritar receita"
      onClick={ onClick }
      data-testid={ dataTestID }
    />
  );
}

ToggleFavoriteRecipeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  dataTestID: PropTypes.string.isRequired,
};
