import React from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHearIcon from '../images/whiteHeartIcon.svg';

export default function ToggleFavoriteButton({ isFavorite, onClick, dataTestID }) {
  return (
    <input
      className="details-button"
      type="image"
      src={ isFavorite ? blackHeartIcon : whiteHearIcon }
      alt="Favoritar receita"
      onClick={ onClick }
      data-testid={ dataTestID }
    />
  );
}

ToggleFavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  dataTestID: PropTypes.string.isRequired,
};
