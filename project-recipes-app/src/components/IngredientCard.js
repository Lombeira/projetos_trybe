import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import useMeals from '../hooks/useMeals';
import useDrinks from '../hooks/useDrinks';
import useIngredients from '../hooks/useIngredients';

export default function IngredientCard({
  ingredientTitle,
  ingredientThumb,
  index,
}) {
  const { setMealData, setMealFilter } = useMeals();
  const { setDrinkData, setDrinkFilter } = useDrinks();
  const { type } = useIngredients();
  const history = useHistory();

  const sendToFilteredMeals = () => {
    setMealData([]);
    setMealFilter({
      searchInput: ingredientTitle,
      ingrediente: true,
      nome: false,
      primeiraLetra: false,
    });
    history.push('/comidas');
  };

  const sendToFilteredDrinks = () => {
    setDrinkData([]);
    setDrinkFilter({
      searchInput: ingredientTitle,
      ingrediente: true,
      nome: false,
      primeiraLetra: false,
    });
    history.push('/bebidas');
  };

  console.log(ingredientThumb);

  return (
    <button
      type="button"
      onClick={ type === 'meals' ? () => {
        sendToFilteredMeals();
      } : () => {
        sendToFilteredDrinks();
      } }
      className="recipe-card"
      data-testid={ `${index}-ingredient-card` }
    >
      <h4 data-testid={ `${index}-card-name` }>{ingredientTitle}</h4>
      <img
        data-testid={ `${index}-card-img` }
        className="recipe-thumb-ingredient"
        src={ ingredientThumb }
        alt="Imagem da receita ou ingrediente"
      />
    </button>
  );
}

IngredientCard.propTypes = {
  ingredientTitle: PropTypes.string.isRequired,
  ingredientThumb: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};
