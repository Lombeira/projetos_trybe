import React, { useEffect, useState } from 'react';
import useMeals from '../hooks/useMeals';

export default function Categories() {
  const [categoryMeals, setCategoryMeals] = useState([]);
  const { catMeals, setCatMeals } = useMeals();
  const NUM_MAX_BUTTONS = 5;

  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const category = await response.json();
      setCategoryMeals(category.meals);
    };
    fetchApi();
  }, [url]);

  return (
    <div className="categories-container">
      <button
        className="details-button"
        data-testid="All-category-filter"
        type="button"
        onClick={ () => setCatMeals([]) }
      >
        All
      </button>
      {categoryMeals.map((cat, index) => (
        index < NUM_MAX_BUTTONS && (
          <button
            className="details-button"
            data-testid={ `${cat.strCategory}-category-filter` }
            type="button"
            key={ cat.strCategory }
            onClick={ () => (
              catMeals === cat.strCategory
                ? setCatMeals([])
                : setCatMeals(cat.strCategory)
            ) }
          >
            {cat.strCategory}
          </button>)))}
    </div>
  );
}
