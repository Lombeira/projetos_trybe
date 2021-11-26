import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';
import useIngredients from '../hooks/useIngredients';
import ingredients from '../mocks/ingredients';
import Footer from '../components/Footer';

export default function ExplorarIngredientes() {
  const { setIngredientRequestURL, setType, type } = useIngredients();
  const NUM_MAX_CARDS = 12;

  switch (useHistory().location.pathname) {
  case '/explorar/comidas/ingredientes':
    setIngredientRequestURL(
      'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
    );
    setType('meals');
    break;
  case '/explorar/bebidas/ingredientes':
    setIngredientRequestURL(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
    );
    setType('drinks');
    break;
  default:
  }

  const renderMeals = () => ingredients.meals.map(
    (ingredient, index) => index < NUM_MAX_CARDS && (
      <IngredientCard
        key={ ingredient.idIngredient }
        index={ index }
        ingredientTitle={ ingredient.strIngredient }
        ingredientThumb={ ingredient.thumbIngredient }
      />
    ),
  );

  const renderDrinks = () => ingredients.drinks.map(
    (ingredient, index) => index < NUM_MAX_CARDS && (
      <IngredientCard
        key={ ingredient.strIngredient1 }
        index={ index }
        ingredientTitle={ ingredient.strIngredient1 }
        ingredientThumb={ ingredient.thumbIngredient }
      />
    ),
  );

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {type === 'meals' ? renderMeals() : renderDrinks()}
      <Footer />
    </div>
  );
}
