import React from 'react';
import './App.css';
import { Switch } from 'react-router';

import Providers from './hooks/Providers';
import Routes from './Routes';

function App() {
  return (
    <Providers>
      <Switch>
        <Routes />
      </Switch>
    </Providers>
  );
}

export default App;
