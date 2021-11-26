import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareRecipeButton from './ShareRecipeButton';

export default function ReceitasProntasComidas({ receitasProntas, index }) {
  return (
    <div>
      { receitasProntas.map((item) => (
        <>
          <Link to={ `comidas/${item.id}` }>
            <img
              className="image-receitas-feitas"
              src={ item.image }
              alt={ item.name }
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>
          <Link to={ `comidas/${item.id}` }>
            <h2 data-testid={ `${index}-horizontal-name` }>{item.name}</h2>
          </Link>
          <h2
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${item.area} - ${item.category}`}
          </h2>
          <h2 data-testid={ `${index}-horizontal-done-date` }>{item.doneDate}</h2>
          <ShareRecipeButton
            parentPath="meals"
            recipeID={ item.id }
            dataTestID={ `${index}-horizontal-share-btn` }
          />
          {item.tags.map((tagsName, indexTag) => (
            <span
              data-testid={ `${index}-${item.tags[indexTag]}-horizontal-tag` }
              key={ tagsName }
            >
              {tagsName}
              {indexTag === item.tags.length - 1 ? '' : ', '}
            </span>
          ))}
        </>
      ))}
    </div>
  );
}

ReceitasProntasComidas.propTypes = {
  array: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;
