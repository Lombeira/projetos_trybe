import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class RankingRows extends React.Component {
  constructor(props) {
    super(props);

    this.imageGravatar = this.imageGravatar.bind(this);
  }

  imageGravatar(gravatarEmail) {
    const hash = md5(gravatarEmail).toString();
    const profileImageGravatar = `https://www.gravatar.com/avatar/${hash}`;
    return profileImageGravatar;
  }

  render() {
    const { index, name, gravatarEmail, score } = this.props;
    const imageGravatar = this.imageGravatar(gravatarEmail);
    return (
      <>
        <div className="ranking-row">
          <div className="ranking-position">
            <span className="ranking-position-number">{ `${index + 1}°`}</span>
            <img className="avatar" src={ imageGravatar } alt={ name } />
          </div>
          <span data-testid={ `player-name-${index}` }>{ name }</span>
          <span data-testid={ `player-score-${index}` }>{ score }</span>
        </div>
        <hr />
      </>
    );
  }
}

export default connect()(RankingRows);

RankingRows.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

RankingRows.defaultProps = {

};
