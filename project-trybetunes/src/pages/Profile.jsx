import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      user: {},
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    this.setState({ loading: true });
    getUser().then((user) => this.setState({ loading: false, user }));
  }

  displayProfile = () => {
    const {
      user: { name, email, description, image },
    } = this.state;
    return (
      <section>
        <img src={ image } alt={ name } data-testid="profile-image" />
        <Link to="/profile/edit">Editar perfil</Link>
        <p>
          <span>Nome: </span>
          <span>{name}</span>
        </p>
        <p>
          <span>Email: </span>
          <span>{email}</span>
        </p>
        <p>
          <span>Descrição: </span>
          <span>{description}</span>
        </p>
      </section>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="page-profile">
        {loading ? <Loading /> : this.displayProfile()}
      </div>
    );
  }
}

export default Profile;
