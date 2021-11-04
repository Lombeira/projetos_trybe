import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();

    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const { expenses } = this.props;
    const totalValue = expenses.reduce((acc, expense) => {
      const currencyValue = Number(expense.exchangeRates[expense.currency].ask);
      acc += Number(expense.value) * currencyValue;
      return acc;
    }, 0);
    return totalValue;
  }

  render() {
    const { totalValue } = this;
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          Email:
          {' '}
          {email}
        </div>
        <div>
          <div data-testid="total-field">
            {totalValue().toFixed(2)}
          </div>
          <div data-testid="header-currency-field">BRL</div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
