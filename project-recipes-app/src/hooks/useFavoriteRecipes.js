import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../localStorage';

export default function useFavoriteRecipes() {
  const localStorageFavoriteRecipes = getLocalStorage('favoriteRecipes');
  const initialFavoriteRecipesState = localStorageFavoriteRecipes || [];
  const [favoriteRecipes, setFavoriteRecipes] = useState(initialFavoriteRecipesState);

  const getFavoriteStatusByID = (targetID) => {
    const currentFavoriteRecipes = getLocalStorage('favoriteRecipes') || [];
    return currentFavoriteRecipes.some(({ id }) => id === targetID);
  };

  const toggleFavoriteStatus = (targetID, newFavoriteRecipe) => {
    const currentFavoriteRecipes = getLocalStorage('favoriteRecipes') || [];
    let newFavoriteRecipes;
    if (newFavoriteRecipe) {
      newFavoriteRecipes = [...currentFavoriteRecipes, newFavoriteRecipe];
    } else {
      newFavoriteRecipes = currentFavoriteRecipes.filter(({ id }) => id !== targetID);
    }
    setLocalStorage('favoriteRecipes', newFavoriteRecipes);
    setFavoriteRecipes(newFavoriteRecipes);
  };

  return { favoriteRecipes, getFavoriteStatusByID, toggleFavoriteStatus };
}
