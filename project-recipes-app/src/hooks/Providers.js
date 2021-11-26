import React from 'react';
import PropTypes from 'prop-types';
import { DrinkProvider } from './useDrinks';
import { LoginProvider } from './useLogin';
import { MealsProvider } from './useMeals';
import { IngredientsProvider } from './useIngredients';

export default function Providers({ children }) {
  return (
    <LoginProvider>
      <DrinkProvider>
        <MealsProvider>
          <IngredientsProvider>
            {children}
          </IngredientsProvider>
        </MealsProvider>
      </DrinkProvider>
    </LoginProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
