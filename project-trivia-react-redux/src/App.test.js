import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';

test('VAI COMEÇAR, A CYBER LUTAAAAA... ATÉ CAIR! NÃO PERCA O CONTROLE, E AO TOPO VAMOS SUBIR!', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/SUA VEZ/i);
  expect(linkElement).toBeInTheDocument();
});
