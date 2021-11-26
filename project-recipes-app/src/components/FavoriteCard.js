import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard({ id, title,
  thumb, type, index, alcoholicOrNot, category, area }) {
  return (
    <Link className="recipe-card" to={ `${type}${id}` }>
      <div className="recipe-card">
        <h4 data-testid={ `${index}-horizontal-name` }>{title}</h4>
        <h5 className="teste" data-testid={ `${index}-horizontal-top-text` }>
          {area ? `${area} - ${category}` : `${category} - `}
          {alcoholicOrNot}
        </h5>
        <img
          data-testid={ `${index}-horizontal-image` }
          className="recipe-thumb"
          src={ thumb }
          alt="Imagem da receita ou ingrediente"
        />
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};
