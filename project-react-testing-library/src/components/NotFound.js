import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      inputValue: 1,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      inputValue: +value,
    });
  }

  incrementCounter() {
    const { counter, inputValue } = this.state;
    this.setState({
      counter: counter + inputValue,
    });
  }

  decrementCounter() {
    const { counter, inputValue } = this.state;
    this.setState({
      counter: counter - inputValue,
    });
  }

  // Outra opção para a função acima
  // handleChange = (e) => {
  //   this.setState({
  //     inputValue: Number(e.target.value),
  //   });
  // };

  render() {
    const { counter, inputValue } = this.state;
    const { decrementCounter, incrementCounter, handleChange } = this;
    return (
      <div className="container">
        <h3>My Counter</h3>
        <h2>{ counter }</h2>
        <button type="button" onClick={ decrementCounter }>
          -
        </button>
        <input
          className="input"
          data-testid="input"
          type="number"
          defaultValue={ inputValue }
          onChange={ handleChange }
        />
        <button type="button" onClick={ incrementCounter }>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
