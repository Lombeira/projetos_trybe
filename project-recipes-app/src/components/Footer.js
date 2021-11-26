import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

export default function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-container">
        <Link to="/bebidas">
          <button
            className="footer-btn"
            type="button"
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
          >
            <img className="svg-color" src={ drinkIcon } alt="Ícone de Drinks" />
            Drinks
          </button>
        </Link>
        <Link to="/explorar">
          <button
            className="footer-btn"
            type="button"
            data-testid="explore-bottom-btn"
            src={ exploreIcon }
          >
            <img className="svg-color" src={ exploreIcon } alt="Ícone de Explorar" />
            Explore
          </button>
        </Link>
        <Link to="/comidas">
          <button
            className="footer-btn"
            type="button"
            data-testid="food-bottom-btn"
            src={ mealIcon }
          >
            <img className="svg-color" src={ mealIcon } alt="Ícone de Refeições" />
            Meals
          </button>
        </Link>
      </div>
    </footer>
  );
}
