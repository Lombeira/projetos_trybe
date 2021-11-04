import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GiBigGear } from 'react-icons/gi';

export default class Button extends Component {
  render() {
    return (
      <Link to="/config" style={ { textDecoration: 'none' } }>
        <button
          className="btn-style"
          data-testid="btn-settings"
          type="button"
        >
          <GiBigGear size="16" />
          <p className="button-text">Config</p>
        </button>
      </Link>
    );
  }
}
