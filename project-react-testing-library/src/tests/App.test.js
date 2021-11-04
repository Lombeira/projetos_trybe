import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from '../Counter/Counter';
import App from '../../App';

describe('Testa o componente App', () => {
  it('Deve renderizar o Counter dentro do App', () => {
    render(<App />);
    expect(screen.getByRole('heading', {
      name: 'My Counter',
      level: 3,
    })).toBeInTheDocument();
  });

  it(`Deve renderizar um Heading h3 com o texto "My Counter" no componente
    Counter`, () => {
    render(<Counter />);
    expect(
      screen.getByRole('heading', {
        name: 'My Counter',
        level: 3,
      }),
    ).toBeInTheDocument();
  });
});

describe('Testa o contador', () => {
  it('Deve renderizar um contador com o texto começando por "0"', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('Deve ter dois botões', () => {
    render(<Counter />);
    expect((screen.getAllByRole('button')).toHaveLength(2);
  });

  it('Deve ter um input com o valor inicial de " 1 "', () => {
    const { getByRole } = render(<Counter />);
    const input = getByRole('spinbutton');
    expect(input.value).toBe('1');
  });

  it('Deve ter " - " no texto do primeiro botão', () => {
    render(<Counter />);
    const firstButton = screen.getAllByRole('button')[0];
    expect(firstButton.textContent).toBe('-');
  });

  it('Deve ter " + " no texto do segundo botão', () => {
    render(<Counter />);
    const secondButton = screen.getAllByRole('button')[1];
    expect(secondButton.textContent).toBe('+');
  });
});

describe('Testa os use cases da aplicação', () => {
  it(`Deve incrementar o contador pelo valor do input 
    ao clicar no botão " + ".`, () => {
    render(<Counter />);
    const secondButton = screen.getAllByRole('button')[1];
    const counter = screen.getByRole('heading', { level: 2 });
    userEvent.click(secondButton);
    expect(counter.textContent).toBe('1');
  });

  it(`Deve decrementar o contador pelo valor do input 
    ao clicar no botão " - ".`, () => {
    render(<Counter />);
    const firstButton = screen.getAllByRole('button')[0];
    const counter = screen.getByRole('heading', { level: 2 });
    userEvent.click(firstButton);
    expect(counter.textContent).toBe('-1');
  });

  it(`Deve incrementar por 5 ao inserir "5" no input e clicar no botão " + "
    pela pessoa usuária`, () => {
    render(<Counter />);
    const secondButton = screen.getAllByRole('button')[1];
    const counter = screen.getByRole('heading', { level: 2 });
    const input = screen.getByTestId('input');
    userEvent.type(input, ' {backspace} 5');
    expect(input).toHaveValue(5);
    userEvent.click(secondButton);
    expect(counter.textContent).toBe('5');
  });

  it(`Deve decrementar por 3 ao inserir "3" no input e clicar no botão " - "
    pela pessoa usuária`, () => {
    render(<Counter />);
    const firstButton = screen.getAllByRole('button')[0];
    const counter = screen.getByRole('heading', { level: 2 });
    const input = screen.getByTestId('input');
    userEvent.type(input, ' {backspace} 3');
    expect(input).toHaveValue(3);
    userEvent.click(firstButton);
    expect(counter.textContent).toBe('-3');
  });

  it(`Deve incrementar por 10 ao inserir "10" no input e clicar no botão " + "
    e logo em seguida decrementar 3, após digitar "3" no input e clicar
    no botão " - "  pela pessoa usuária`, () => {
    render(<Counter />);
    const firstButton = screen.getAllByRole('button')[0];
    const secondButton = screen.getAllByRole('button')[1];
    const counter = screen.getByRole('heading', { level: 2 });
    const input = screen.getByTestId('input');
    userEvent.type(input, '0');
    expect(input).toHaveValue(10);
    userEvent.click(secondButton);
    expect(counter.textContent).toBe('10');
    userEvent.type(input, ' {backspace} {backspace} 3');
    expect(input).toHaveValue(3);
    userEvent.click(firstButton);
    expect(counter.textContent).toBe('7');
  });
});
