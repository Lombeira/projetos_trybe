import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

export default function useRandomRecipe() {
  const { pathname } = useLocation();
  const [randomID, setRandomID] = useState('');
  const infos = {};
  if (pathname.includes('bebida')) {
    infos.URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    infos.type = 'drinks';
    infos.onlyType = 'Drink';
  } else {
    infos.URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    infos.type = 'meals';
    infos.onlyType = 'Meal';
  }

  useEffect(() => {
    const fetchRandomRecipe = async () => {
      const { URL, type, onlyType } = infos;
      const response = await fetch(URL);
      const data = await response.json();
      setRandomID(data[type][0][`id${onlyType}`]);
    };
    fetchRandomRecipe();
  }, []);

  return randomID;
}
