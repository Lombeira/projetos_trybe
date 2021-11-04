import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlayAgain from '../components/PlayAgain';
import Redirect from '../components/Redirect';

import Header from '../components/Header/index';

class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'btn-play-again',
      label: 'Jogar novamente',
    };

    this.handleClick = this.handleClick.bind(this);
    this.goodFeedback = this.goodFeedback.bind(this);
    this.badFeedback = this.badFeedback.bind(this);
    this.displayFeedBackContent = this.displayFeedBackContent.bind(this);
    this.redirectRanking = this.redirectRanking.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    return history.push('/');
  }

  redirectRanking() {
    const { history } = this.props;
    console.log(history);
    return history.push('/ranking');
  }

  displayFeedBackContent() {
    const getLocal = JSON.parse(localStorage.getItem('state'));
    const { score, assertions } = getLocal.player;

    return (
      <div>
        Você acertou
        {' '}
        <span data-testid="feedback-total-question">{ assertions }</span>
        {' '}
        perguntas e fez
        {' '}
        <span data-testid="feedback-total-score">{ score }</span>
        {' '}
        Pontos!
      </div>
    );
  }

  goodFeedback() {
    const getLocal = JSON.parse(localStorage.getItem('state'));
    const { score } = getLocal.player;
    const { id, label } = this.state;
    const { handleClick, redirectRanking } = this;
    const { displayFeedBackContent } = this;
    const notThatBad = 'Mandou bem!';

    return (
      <>
        <Header score={ score } />
        <div className="feedback-container">
          <div className="feedback-card">
            <div data-testid="feedback-text">{ notThatBad }</div>
            { displayFeedBackContent() }
            <img
              className="feedback-img"
              src="https://media1.giphy.com/media/jJQC2puVZpTMO4vUs0/giphy.gif?cid=790b7611d9a32fe32ab6fd098ac35b7d63f03d902e83e965&rid=giphy.gif&ct=g"
              alt="Imagem que mostra Dwight comemorando"
            />
            <div className="feedback-buttons">
              <PlayAgain id={ id } label={ label } onClick={ handleClick } />
              <Redirect onClick={ redirectRanking } />
            </div>
          </div>
        </div>
      </>
    );
  }

  badFeedback() {
    const getLocal = JSON.parse(localStorage.getItem('state'));
    const { score } = getLocal.player;
    const { id, label } = this.state;
    const { handleClick, redirectRanking } = this;
    const { displayFeedBackContent } = this;
    const getBetterNoob = 'Podia ser melhor...';

    return (
      <>
        <Header score={ score } />
        <div className="feedback-container">
          <div className="feedback-card">
            <div data-testid="feedback-text">{ getBetterNoob }</div>
            { displayFeedBackContent() }
            <img
              className="feedback-img"
              src="https://media2.giphy.com/media/RGaxGKy85cqztyMQOw/giphy.gif?cid=ecf05e47se63nxoejw25uemqcqjs40hl86pf6vuptjzhi1x5&rid=giphy.gif&ct=g"
              alt="Imagem que mostra Dwight comemorando"
            />
            <div className="feedback-buttons">
              <PlayAgain id={ id } label={ label } onClick={ handleClick } />
              <Redirect onClick={ redirectRanking } />
            </div>
          </div>
        </div>
      </>
    );
  }

  render() {
    const { goodFeedback, badFeedback } = this;
    const getLocal = JSON.parse(localStorage.getItem('state'));
    const { assertions } = getLocal.player;
    const MINIMUM_SCORE = 3;

    if (assertions >= MINIMUM_SCORE) return <>{ goodFeedback() }</>;
    if (assertions < MINIMUM_SCORE) return <>{ badFeedback() }</>;
  }
}

Feedback.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

Feedback.defaultProps = {

};

export default connect()(Feedback);
