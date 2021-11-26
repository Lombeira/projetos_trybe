import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import useIngredients from '../hooks/useIngredients';
import Footer from '../components/Footer';
import useRandomRecipe from '../hooks/useRandomRecipe';

export default function ExplorarBebidas() {
  const { setIngredientRequestURL, setType } = useIngredients();
  const history = useHistory();
  const randomID = useRandomRecipe();

  setIngredientRequestURL('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  setType('drinks');

  function drinksByIngredient() {
    history.push('/explorar/bebidas/ingredientes');
  }

  return (
    <div>
      <Header title="Explorar Bebidas" />
      <section className="explore-container">
        <button
          onClick={ () => drinksByIngredient() }
          className="explore-btn"
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
        <Link to={ `/bebidas/${randomID}` }>
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
