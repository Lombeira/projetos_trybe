import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      name: '',
    };
  }

  componentDidMount() {
    getUser().then(({ name }) => this.setState({
      name,
      loading: false,
    }));
  }

  render() {
    const { loading, name } = this.state;
    return (
      <header data-testid="header-component">
        {loading ? <Loading /> : <p data-testid="header-user-name">{name}</p>}
        <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
        <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        <Link to="/profile/edit">Edit Profile</Link>
      </header>
    );
  }
}

export default Header;
