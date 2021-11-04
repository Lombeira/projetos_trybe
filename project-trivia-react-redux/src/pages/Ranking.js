import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PlayAgain from '../components/PlayAgain';
import RankingRows from '../components/RankingRows';

class Ranking extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    return history.push('/');
  }

  render() {
    const ranking = localStorage.getItem('ranking');
    const { handleClick } = this;
    return (
      <section className="ranking-container">
        <h1 data-testid="ranking-title" className="ranking-title">Ranking</h1>
        <div className="ranking-card">
          { JSON.parse(ranking).map(({ gravatarEmail, name, score }, index) => (
            <RankingRows
              key={ index }
              index={ index }
              name={ name }
              gravatarEmail={ gravatarEmail }
              score={ score }
            />
          ))}
        </div>
        <div className="ranking-spacing" />
        <div>
          <PlayAgain
            id="btn-go-home"
            label="Início"
            onClick={ handleClick }
            fixedBottom="fixed-bottom"
          />
        </div>
      </section>
    );
  }
}

export default connect()(Ranking);

Ranking.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

Ranking.defaultProps = {

};
