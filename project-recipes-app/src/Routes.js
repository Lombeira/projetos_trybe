import React from 'react';
import { Route } from 'react-router';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import Area from './pages/Area';
import Detalhes from './pages/Detalhes';
import Progresso from './pages/Progresso';
import NotFound from './pages/NotFound';
import ExplorarIngredientes from './pages/ExplorarIngredientes';

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route exact path="/comidas/:recipeID" component={ Detalhes } />
      <Route exact path="/bebidas/:recipeID" component={ Detalhes } />
      <Route path="/comidas/:recipeID/in-progress" component={ Progresso } />
      <Route path="/bebidas/:recipeID/in-progress" component={ Progresso } />
      <Route exact path="/explorar" component={ Explorar } />
      <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
      <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
      <Route path="/explorar/comidas/ingredientes" component={ ExplorarIngredientes } />
      <Route path="/explorar/bebidas/ingredientes" component={ ExplorarIngredientes } />
      <Route path="/explorar/comidas/area" component={ Area } />
      <Route path="/explorar/bebidas/area" component={ NotFound } />
      <Route path="/perfil" component={ Perfil } />
      <Route path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
    </>
  );
}
