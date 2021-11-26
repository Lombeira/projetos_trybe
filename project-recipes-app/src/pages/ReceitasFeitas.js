import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ReceitasFeitasComidas from '../components/ReceitasFeitasComidas';
import ReceitasFeitasBebidas from '../components/ReceitasFeitasBebidas';

export default function ReceitasFeitas() {
  const [receitasFeitas, setReceitasFeitas] = useState([]);
  const [isComida, setIsComida] = useState(false);
  const [isBebida, setIsBebida] = useState(false);

  useEffect(() => {
    const localStorageDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setReceitasFeitas(localStorageDoneRecipes);
  }, []);

  function renderReceitas() {
    return receitasFeitas.map((receita, index) => {
      if (receita.type === 'comida') {
        return (<ReceitasFeitasComidas
          key={ receita.id }
          index={ index }
          receitasProntas={ [receita] }
        />);
      }
      return (<ReceitasFeitasBebidas
        key={ receita.id }
        index={ index }
        receitasProntas={ [receita] }
      />);
    });
  }

  function renderBebida() {
    return receitasFeitas.filter((receita) => receita.type === 'drinks')
      .map((receita, index) => (<ReceitasFeitasBebidas
        key={ receita.id }
        index={ index }
        receitasProntas={ [receita] }
      />));
  }

  function renderComida() {
    return receitasFeitas.filter((receita) => receita.type === 'meals')
      .map((receita, index) => (
        <ReceitasFeitasComidas
          key={ receita.id }
          index={ index }
          receitasProntas={ [receita] }
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
      <Header title="Receitas Feitas" search={ false } />
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
      {receitasFeitas && !isBebida && !isComida && renderReceitas() }
      {receitasFeitas && isComida && renderComida() }
      {receitasFeitas && isBebida && renderBebida() }
    </div>
  );
}
