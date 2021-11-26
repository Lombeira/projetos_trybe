import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import useIngredients from '../hooks/useIngredients';
import Footer from '../components/Footer';
import useRandomRecipe from '../hooks/useRandomRecipe';

export default function ExplorarComidas() {
  const { setIngredientRequestURL, setType } = useIngredients();
  const history = useHistory();
  const randomID = useRandomRecipe();
  setIngredientRequestURL(
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  );
  setType('meals');

  function mealsByIngredient() {
    history.push('/explorar/comidas/ingredientes');
  }

  return (
    <div>
      <Header title="Explorar Comidas" />
      <section className="explore-container">
        <button
          onClick={ () => mealsByIngredient() }
          className="explore-btn"
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
        <Link to="/explorar/comidas/area">
          <button
            className="explore-btn"
            type="button"
            data-testid="explore-by-area"
          >
            Por Local de Origem
          </button>
        </Link>
        <Link to={ `/comidas/${randomID}` }>
          <button
            className="explore-btn"
            type="button"
            data-testid="explore-surprise"
          >
            Me Surpreenda!
          </button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}
