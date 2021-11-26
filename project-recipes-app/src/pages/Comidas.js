import React from 'react';
import { useHistory } from 'react-router';
import CategoriesMeals from '../components/CategoriesMeals';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import useMeals from '../hooks/useMeals';
import { progressRecipes } from '../localStorage';

progressRecipes();
export default function Comidas() {
  const { location } = useHistory();
  const { mealData } = useMeals();
  const NUM_MAX_CARDS = 12;

  return (
    <div>
      <Header title="Comidas" searchBtn />
      <CategoriesMeals />
      <section className="recipe-container">
        {mealData.map((meal, index) => (
          index < NUM_MAX_CARDS && (<RecipeCard
            key={ meal.idMeal }
            idRecipe={ meal.idMeal }
            id={ index }
            recipeTitle={ meal.strMeal }
            recipeThumb={ meal.strMealThumb }
            recipe={ `${location.pathname}/` }
          />)
        ))}
      </section>
      <Footer />
    </div>
  );
}
