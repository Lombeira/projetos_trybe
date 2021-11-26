import PropTypes from 'prop-types';
import React, { useEffect, useState, createContext, useContext } from 'react';
import { useHistory } from 'react-router';

const DrinkContext = createContext({});

export function DrinkProvider({ children }) {
  const [drinkData, setDrinkData] = useState([]);
  const [drinkFilter, setDrinkFilter] = useState({
    searchInput: '',
    ingrediente: false,
    nome: false,
    primeiraLetra: false,
  });
  const [catDrinks, setCatDrinks] = useState([]);
  const { push } = useHistory();

  const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';
  const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
  let URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  if (drinkFilter.ingrediente) {
    URL = `${BASE_URL}i=${drinkFilter.searchInput}`;
  } else if (drinkFilter.nome) {
    URL = `${SEARCH_URL}s=${drinkFilter.searchInput}`;
  } else if (drinkFilter.primeiraLetra) {
    URL = `${SEARCH_URL}f=${drinkFilter.searchInput}`;
  } else if (catDrinks.length > 0) {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${catDrinks}`;
  }

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(URL);
      const { drinks } = await response.json();
      const errorMsg = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
      if (drinks === null) {
        global.alert(errorMsg);
      } else if (drinks.length === 1) {
        push(`/bebidas/${drinks[0].idDrink}`);
      } else {
        setDrinkData(drinks);
      }
    };
    fetchApi();
  }, [URL]);

  const GlobalState = {
    drinkData,
    setDrinkData,
    setDrinkFilter,
    setCatDrinks,
    catDrinks,
  };

  return (
    <DrinkContext.Provider value={ GlobalState }>
      {children}
    </DrinkContext.Provider>
  );
}

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

DrinkProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function useDrinks() {
  return useContext(DrinkContext);
}
