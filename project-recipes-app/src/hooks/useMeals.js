import PropTypes from 'prop-types';
import React, { useEffect, useState, createContext, useContext } from 'react';
import { useHistory } from 'react-router';

const MealsContext = createContext({});

export function MealsProvider({ children }) {
  const [mealData, setMealData] = useState([]);
  const [mealFilter, setMealFilter] = useState({
    searchInput: '',
    ingrediente: false,
    nome: false,
    primeiraLetra: false,
  });
  const [catMeals, setCatMeals] = useState([]);
  const { push } = useHistory();

  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
  const SEARCH_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?';
  let URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  if (mealFilter.ingrediente) {
    URL = `${BASE_URL}i=${mealFilter.searchInput}`;
  } else if (mealFilter.nome) {
    URL = `${SEARCH_URL}s=${mealFilter.searchInput}`;
  } else if (mealFilter.primeiraLetra) {
    URL = `${SEARCH_URL}f=${mealFilter.searchInput}`;
  } else if (catMeals.length > 0) {
    URL = `${BASE_URL}c=${catMeals}`;
  }

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(URL);
      const { meals } = await response.json();
      const errorMsg = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
      if (meals === null) {
        global.alert(errorMsg);
      } else if (meals.length === 1 && !meals[0].idMeal.includes('52968')) {
        push(`/comidas/${meals[0].idMeal}`);
      } else {
        setMealData(meals);
      }
    };
    fetchApi();
  }, [URL]);

  const GlobalState = {
    mealData,
    setMealData,
    setMealFilter,
    catMeals,
    setCatMeals,
  };

  return (
    <MealsContext.Provider value={ GlobalState }>
      {children}
    </MealsContext.Provider>
  );
}

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

MealsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function useMeals() {
  return useContext(MealsContext);
}
