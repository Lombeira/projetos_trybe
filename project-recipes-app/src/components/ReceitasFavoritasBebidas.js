import React from 'react';
import PropTypes from 'prop-types';
import ShareRecipeButton from './ShareRecipeButton';
import ToggleFavoriteButton from './ToggleFavoriteButton';
import FavoriteCard from './FavoriteCard';

export default function ReceitasFavoritasBebidas(
  { receitasFavoritas, toggleFavoriteStatus, index },
) {
  return (
    <div>
      { receitasFavoritas.map((item) => (
        <>
          <FavoriteCard
            key={ index }
            id={ item.id }
            title={ item.name }
            thumb={ item.image }
            type="/bebidas/"
            index={ index }
            alcoholicOrNot={ item.alcoholicOrNot }
            category={ item.category }
          />
          <div className="teste">
            <ShareRecipeButton
              parentPath="drinks"
              recipeID={ item.id }
              dataTestID={ `${index}-horizontal-share-btn` }
            />
            <ToggleFavoriteButton
              isFavorite
              onClick={ () => toggleFavoriteStatus(item.id) }
              dataTestID={ `${index}-horizontal-favorite-btn` }
            />
          </div>
        </>
      ))}
    </div>
  );
}

ReceitasFavoritasBebidas.propTypes = {
  receitasFavoritas: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}.isRequired;
