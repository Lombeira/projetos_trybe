import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/Loading';

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      user: {},
      disabled: true,
      redirect: null,
    };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  handleChange = ({ target: { name, value } }) => {
    const { user } = this.state;
    user[name] = value;
    this.buttonDisable();
  }

  onClick = (event) => {
    const { user } = this.state;
    event.preventDefault();
    this.setState({ loading: true });
    updateUser(user).then(() => {
      this.setState({ loading: false, redirect: '/profile' });
    });
  }

  getUserInfo = () => {
    this.setState({ loading: true });
    getUser().then((user) => {
      this.setState({ loading: false, user });
      this.buttonDisable();
    });
  }

  buttonDisable = () => {
    const { user } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    const emailResult = !emailRegex.test(user.email);
    const requiredAllResult = Object.values(user).some((value) => value === '');
    if (requiredAllResult || emailResult) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  }

  editForm = () => {
    const {
      user: { name, email, description, image },
      disabled,
    } = this.state;
    return (
      <form>
        <input
          type="text"
          name="name"
          value={ name }
          onChange={ this.handleChange }
          data-testid="edit-input-name"
        />
        <input
          type="text"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="edit-input-email"
        />
        <input
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
          data-testid="edit-input-description"
        />
        <input
          type="text"
          name="image"
          value={ image }
          onChange={ this.handleChange }
          data-testid="edit-input-image"
        />
        <input
          type="submit"
          value="Salvar"
          disabled={ disabled }
          onClick={ this.onClick }
          data-testid="edit-button-save"
        />
      </form>
    );
  }

  render() {
    const { loading, redirect } = this.state;
    if (redirect) return <Redirect to="/profile" />;
    return (
      <div data-testid="page-profile-edit">
        {loading ? <Loading /> : this.editForm()}
      </div>
    );
  }
}

export default ProfileEdit;
