const initialLocalStorage = [
  {
    key: 'inProgressRecipes',
    value: {
      meals: {},
      cocktails: {},
    },
  },
  {
    key: 'doneRecipes',
    value: [],
  },
  {
    key: 'favoriteRecipes',
    value: [],
  },
];

export const saveToken = () => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('favoriteRecipes', '');
};

export const emailToken = (mail) => {
  const objEmail = {
    email: mail,
  };
  localStorage.setItem('user', JSON.stringify(objEmail));
};

export const doneRecipes = (recipes) => {
  const recipesObj = [recipes];
  localStorage.setItem('recipesDone', JSON.stringify(recipesObj));
};

export const favoriteRecipes = (recipes) => {
  const favoriteList = recipes;
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteList));
};

export const progressRecipes = () => {
  // Lógica para verificação se a chave inProgressRecipes existe ou não existe
  const obj = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (obj === null) {
    const recipesProgress = {
      cocktails: {},
      meals: {},
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(recipesProgress));
  }
};
// abc
export function getLocalStorage(key) {
  const value = localStorage.getItem(key);
  if (!value) return value;
  return JSON.parse(value);
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function setupLocalStorage() {
  initialLocalStorage.forEach(({ key, value }) => {
    if (!getLocalStorage(key)) setLocalStorage(key, value);
  });
}
