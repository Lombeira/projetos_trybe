import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import useRecipeDetails from '../hooks/useRecipeDetails';
import ShareRecipeButton from '../components/ShareRecipeButton';

export default function Progresso({
  match: {
    params: { recipeID },
  },
}) {
  const { pathname } = useLocation();
  const treatType = () => {
    if (pathname.includes('bebida')) return 'cocktails';
    return 'meals';
  };
  const localSteps = JSON.parse(localStorage.getItem('inProgressRecipes'))[
    treatType()
  ][recipeID];
  const { recipe, loading } = useRecipeDetails(recipeID);
  const { image, title, category, instructions, dosages } = recipe;

  const definedSteps = localSteps || [];
  const [steps, setSteps] = useState(definedSteps);

  useEffect(() => {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!inProgress[treatType()][recipeID]) {
      inProgress[treatType()][recipeID] = [];
    } else {
      inProgress[treatType()][recipeID] = steps;
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
  }, [steps, loading]);

  const addCompletedStep = (index) => steps && setSteps([...steps, index]);

  const removeCompletedStep = (index) => steps && setSteps([...steps
    .filter((element) => element !== index)]);

  const handleChange = ({ target: { checked } }, index) => {
    if (checked) {
      addCompletedStep(index);
    } else {
      removeCompletedStep(index);
    }
  };

  const isChecked = (index) => steps && steps.includes(index);

  if (loading) return '';
  return (
    <div>
      <img alt="Recipe" data-testid="recipe-photo" src={ image } />
      <h1 data-testid="recipe-title">{title}</h1>
      <ShareRecipeButton />
      <button type="button" data-testid="favorite-btn">
        Favorita
      </button>
      <h3 data-testid="recipe-category">{category}</h3>
      <form>
        {dosages
          && dosages.map((dosage, index) => (
            <label
              key={ index }
              htmlFor={ `dosages${index}` }
              data-testid={ `${index}-ingredient-step` }
            >
              {dosage}
              <input
                key={ index }
                style={ { display: 'flex', flexDirection: 'column' } }
                type="checkbox"
                checked={ isChecked(index) }
                id={ `dosages${index}` }
                onChange={ (event) => handleChange(event, index) }
              />
            </label>
          ))}
      </form>
      <h4 data-testid="instructions">{instructions}</h4>
      <Link to="/receitas-feitas">
        <button
          // onClick={ () => { doneRecipes(...getDoneRecipes); } }
          type="button"
          data-testid="finish-recipe-btn"
        >
          Finalizar receita
        </button>
      </Link>
    </div>
  );
}

Progresso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeID: PropTypes.string,
    }),
  }).isRequired,
};
