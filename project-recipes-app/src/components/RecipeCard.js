import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipeTitle, recipeThumb, id, idRecipe, recipe }) {
  return (
    <Link className="recipe-card" to={ `${recipe}${idRecipe}` }>
      <div className="recipe-card" data-testid={ `${id}-recipe-card` }>
        <h4 data-testid={ `${id}-card-name` }>{recipeTitle}</h4>
        <img
          data-testid={ `${id}-card-img` }
          className="recipe-thumb"
          src={ recipeThumb }
          alt="Imagem da receita ou ingrediente"
        />
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  recipeTitle: PropTypes.string.isRequired,
  recipeThumb: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  idRecipe: PropTypes.number.isRequired,
  recipe: PropTypes.string.isRequired,
};
