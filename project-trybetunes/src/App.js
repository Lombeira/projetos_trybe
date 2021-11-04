import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Content from './components/Content';

const App = () => (
  <div>
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  </div>
);

export default App;
