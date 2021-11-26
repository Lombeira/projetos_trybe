import React, { useState } from 'react';
import Header from '../components/Header';
import ReceitasFavoritasComidas from '../components/ReceitasFavoritasComidas';
import ReceitasFavoritasBebidas from '../components/ReceitasFavoritasBebidas';
import useFavoriteRecipes from '../hooks/useFavoriteRecipes';

export default function ReceitasFeitas() {
  const { favoriteRecipes, toggleFavoriteStatus } = useFavoriteRecipes();
  const [isComida, setIsComida] = useState(false);
  const [isBebida, setIsBebida] = useState(false);

  function renderReceitas() {
    return favoriteRecipes.map((receita, index) => {
      console.log(receita.type);
      if (receita.type === 'comida') {
        return (
          <ReceitasFavoritasComidas
            key={ receita.id }
            index={ index }
            receitasFavoritas={ [receita] }
            toggleFavoriteStatus={ toggleFavoriteStatus }
          />
        );
      }
      return (
        <ReceitasFavoritasBebidas
          key={ receita.id }
          index={ index }
          receitasFavoritas={ [receita] }
          toggleFavoriteStatus={ toggleFavoriteStatus }
        />
      );
    });
  }

  function renderBebida() {
    return favoriteRecipes.filter((receita) => receita.type === 'bebida')
      .map((receita, index) => (<ReceitasFavoritasBebidas
        key={ receita.id }
        index={ index }
        receitasFavoritas={ [receita] }
        toggleFavoriteStatus={ toggleFavoriteStatus }
      />));
  }

  function renderComida() {
    return favoriteRecipes.filter((receita) => receita.type === 'comida')
      .map((receita, index) => (
        <ReceitasFavoritasComidas
          key={ receita.id }
          index={ index }
          receitasFavoritas={ [receita] }
          toggleFavoriteStatus={ toggleFavoriteStatus }
        />));
  }

  function handleClickFilterBebida() {
    setIsComida(false);
    setIsBebida(true);
  }

  function handleClickFilterComida() {
    setIsComida(true);
    setIsBebida(false);
  }

  function handleClickFilterAll() {
    setIsComida(false);
    setIsBebida(false);
  }

  return (
    <div>
      <Header title="Receitas Favoritas" search={ false } />
      <div className="teste">
        <button
          className="details-button"
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ handleClickFilterAll }
        >
          All
        </button>
        <button
          className="details-button"
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ handleClickFilterComida }
        >
          Food
        </button>
        <button
          className="details-button"
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ handleClickFilterBebida }
        >
          Drinks
        </button>
      </div>
      {favoriteRecipes && !isBebida && !isComida && renderReceitas() }
      {favoriteRecipes && isComida && renderComida() }
      {favoriteRecipes && isBebida && renderBebida() }
    </div>
  );
}
