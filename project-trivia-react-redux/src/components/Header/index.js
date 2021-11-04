import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends Component {
  render() {
    const imageGravatar = (gravatarEmail) => {
      const hash = md5(gravatarEmail).toString();
      const profileImageGravatar = `https://www.gravatar.com/avatar/${hash}`;
      return profileImageGravatar;
    };
    const { name, gravatarEmail, score } = this.props;
    const profileImage = imageGravatar(gravatarEmail);
    return (
      <header className="header">
        <div className="avatar-info">
          <img
            className="avatar"
            alt="Avatar perfil jogador"
            data-testid="header-profile-picture"
            src={ profileImage }
          />
          <h3 className="player-name" data-testid="header-player-name">
            { name }
          </h3>
        </div>
        <h3 className="score">
          Score:
          {' '}
          <span data-testid="header-score">
            { score }
          </span>
        </h3>
      </header>
    );
  }
}

const mapStateToProps = ({ login: { name, gravatarEmail } }) => ({
  gravatarEmail,
  name,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
