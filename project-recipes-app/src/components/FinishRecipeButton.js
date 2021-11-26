import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { getLocalStorage, setLocalStorage } from '../localStorage';

export default function FinishRecipeButton({
  recipe,
  type,
  allStepsCompleted,
  recipeDone,
}) {
  const history = useHistory();

  const updateLocalStorage = () => {
    const date = new Date();
    const newDoneRecipe = {
      id: recipe.idMeal || recipe.idDrink,
      type,
      area: recipe.strArea || '',
      category: recipe.strCategory || '',
      alcoholicOrNot: recipe.strAlcoholic || '',
      name: recipe.strMeal || recipe.strDrink,
      image: recipe.strMealThumb || recipe.strDrinkThumb,
      doneDate: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`,
      tags: recipe.strTags ? recipe.strTags.split(',') : [],
    };

    const currentDoneRecipes = getLocalStorage('doneRecipes');
    const newDoneRecipes = [...currentDoneRecipes, newDoneRecipe];
    setLocalStorage('doneRecipes', newDoneRecipes);
  };

  const handleClick = () => {
    updateLocalStorage();
    history.push('/receitas-feitas');
  };

  return (
    <button
      type="button"
      onClick={ handleClick }
      disabled={ !allStepsCompleted || recipeDone }
      data-testid="finish-recipe-btn"
    >
      {recipeDone ? 'Receita finalizada' : 'Finalizar receita'}
    </button>
  );
}

FinishRecipeButton.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
  allStepsCompleted: PropTypes.bool.isRequired,
  recipeDone: PropTypes.bool.isRequired,
};
