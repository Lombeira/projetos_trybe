// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { fetchTokenAndQuestions } from '../Redux/actions';
// import { connect } from 'react-redux';
// import Header from './Header';
// import Timer from './Timer';

// class CreateAnswers extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 30,
//       questionIndex: 0,
//     };
//     this.decreaseTime = this.decreaseTime.bind(this);
//   }

//   componentDidMount() {
//     const { fetchApi } = this.props;
//     fetchApi();
//   }

//   decreaseTime() {
//     const { count } = this.state;
//     if (count > 0) {
//       this.setState((prevState) => ({
//         count: prevState.count - 1,
//       }));
//     } else {
//       clearInterval();
//     }
//   }

//   render() {
//     const { count } = this.state;
//     const { questions,
//       questionIndex,
//       score,
//       verifyCorrectAnswer,
//       calculateScore,
//       nextButton,
//       nextQuestion,
//     } = this.props;

//     return (
//       <div>
//         <Header score={ score } />
//         <div className="game-container">
//           <section className="question-card">
//             <Timer count={ count } decreaseTime={ this.decreaseTime } />
//             <h3 data-testid="question-text">{questions[questionIndex].question}</h3>
//             <h4 data-testid="question-category">{questions[questionIndex].category}</h4>
//             {questions[questionIndex].incorrect_answers.map((incorrectAnswer, index) => (
//               <button
//                 className="answer-btn-style incorrect"
//                 data-testid={ `wrong-answer-${index}` }
//                 type="button"
//                 key={ index }
//                 disabled={ (count === 0) }
//                 onClick={ () => {
//                   nextButton();
//                   verifyCorrectAnswer();
//                 } }
//               >
//                 { incorrectAnswer }
//               </button>
//             ))}
//             <button
//               className="answer-btn-style correct"
//               data-testid="correct-answer"
//               type="button"
//               key="3"
//               onClick={ () => {
//                 nextButton();
//                 verifyCorrectAnswer();
//                 calculateScore();
//               } }
//               disabled={ (count === 0) }
//             >
//               { questions[questionIndex].correct_answer }
//             </button>
//           </section>
//           <div className="btn-center">
//             <button
//               className="btn-next"
//               type="button"
//               data-testid="btn-next"
//               onClick={ nextQuestion() }
//             >
//               Próxima
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// CreateAnswers.propTypes = {
//   // fetchApi: PropTypes.func.isRequired,
//   // loading: PropTypes.bool.isRequired,
//   questions: PropTypes.arrayOf(PropTypes.any).isRequired,
//   questionIndex: PropTypes.number.isRequired,
//   score: PropTypes.number.isRequired,
//   // gravatarEmail: PropTypes.string.isRequired,
//   // name: PropTypes.string.isRequired,
//   // history: PropTypes.objectOf(PropTypes.any).isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
//   fetchApi: () => dispatch(fetchTokenAndQuestions()),
// });

// export default connect(null, mapDispatchToProps)(CreateAnswers);
