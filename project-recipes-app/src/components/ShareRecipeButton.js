import React from 'react';
import PropTypes from 'prop-types';
import useRecipeLinkToClipboard from '../hooks/useRecipeLinkToClipboard';
import shareIcon from '../images/shareIcon.svg';

export default function ShareRecipeButton({ parentPath, recipeID, dataTestID }) {
  const {
    shouldShowCopiedMessage,
    copyRecipeLinkToClipboard,
  } = useRecipeLinkToClipboard(parentPath, recipeID);

  const copiedMessage = 'Link copiado!';

  return (
    <div className="details-button">
      <input
        type="image"
        src={ shareIcon }
        alt="Compartilhar receita"
        onClick={ copyRecipeLinkToClipboard }
        data-testid={ dataTestID }
      />
      { shouldShowCopiedMessage && <span>{copiedMessage}</span> }
    </div>
  );
}

ShareRecipeButton.propTypes = {
  dataTestID: PropTypes.string.isRequired,
  parentPath: PropTypes.string.isRequired,
  recipeID: PropTypes.string.isRequired,
};
