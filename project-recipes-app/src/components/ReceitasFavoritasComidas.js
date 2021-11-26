import React from 'react';
import PropTypes from 'prop-types';
import ShareRecipeButton from './ShareRecipeButton';
import ToggleFavoriteButton from './ToggleFavoriteButton';
import FavoriteCard from './FavoriteCard';

export default function ReceitasFavoritasComidas(
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
            type="/comidas/"
            index={ index }
            category={ item.category }
            area={ item.area }
          />
          <nav className="teste">
            <ShareRecipeButton
              parentPath="meals"
              recipeID={ item.id }
              dataTestID={ `${index}-horizontal-share-btn` }
            />
            <ToggleFavoriteButton
              isFavorite
              onClick={ () => toggleFavoriteStatus(item.id) }
              dataTestID={ `${index}-horizontal-favorite-btn` }
            />
          </nav>
        </>
      ))}
    </div>
  );
}

ReceitasFavoritasComidas.propTypes = {
  receitasFavoritas: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}.isRequired;
