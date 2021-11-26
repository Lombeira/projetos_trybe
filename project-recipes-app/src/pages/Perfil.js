import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { emailToken } from '../localStorage';
import Footer from '../components/Footer';

export default function Perfil() {
  let userEmail;
  if (JSON.parse(window.localStorage.getItem('user'))) {
    userEmail = Object.values(JSON.parse(window.localStorage.getItem('user')));
  } else {
    emailToken('');
  }

  function clearLocalStorage() {
    localStorage.clear();
  }

  return (
    <>
      <Header title="Perfil" />
      <div className="explore-container">
        <h3 className="user-email" data-testid="profile-email">{userEmail}</h3>
        <Link to="/receitas-feitas">
          <button className="explore-btn" type="button" data-testid="profile-done-btn">
            Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
          <button
            className="explore-btn"
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/">
          <button
            className="explore-btn"
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => clearLocalStorage() }
          >
            Sair
          </button>
        </Link>
        <Footer />
      </div>
    </>
  );
}
