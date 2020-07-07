import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import ActionCreator from '../../store/action-creator/action-creator';

const ResultScreen = (props) => {
  const {questions, mistakes, step, onAgainClick} = props;
  const questionsAmountString = getQuestionsAmountString(questions.length);
  const mistakesString = getMistakesString(mistakes);

  if (step === 0) {
    return <Redirect to="/dev-artist" />;
  }

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {questionsAmountString} и совершили {mistakesString}</p>
      <button
        className="replay"
        type="button"
        onClick={onAgainClick}
      >
        Сыграть ещё раз
      </button>
    </section>
  );
};

ResultScreen.propTypes = {
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        questionText: PropTypes.string,
        tracks: PropTypes.arrayOf(
            PropTypes.shape({
              src: PropTypes.string.isRequired,
              artist: PropTypes.string,
              genre: PropTypes.string
            })
        ),
        answers: PropTypes.arrayOf(
            PropTypes.shape({
              picture: PropTypes.string,
              artist: PropTypes.string
            })
        )
      })
  ),
  mistakes: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onAgainClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  mistakes: state.mistakes,
  step: state.step
});

const mapDispatchToProps = (dispatch) => ({
  onAgainClick: () => {
    dispatch(ActionCreator.restartGame());
  }
});

function getQuestionsAmountString(number) {
  const numberSting = number.toString(10);
  const lastDigit = number % 10;
  let questionsString = ``;

  if (number >= 11 && number <= 14) {
    questionsString = `вопросов`;
  } else if (lastDigit === 1 && number !== 11) {
    questionsString = `вопрос`;
  } else if (lastDigit >= 2 && lastDigit <= 4 && (number <= 11 || number >= 14)) {
    questionsString = `вопроса`;
  } else {
    questionsString = `вопросов`;
  }
  return `${numberSting} ${questionsString}`;
}

function getMistakesString(number) {
  const numberSting = number.toString(10);
  const lastDigit = number % 10;
  let mistakesString = ``;

  if (number >= 11 && number <= 14) {
    mistakesString = `ошибок`;
  } else if (lastDigit === 1 && number !== 11) {
    mistakesString = `ошибку`;
  } else if (lastDigit >= 2 && lastDigit <= 4 && (number <= 11 || number >= 14)) {
    mistakesString = `ошибки`;
  } else {
    mistakesString = `ошибок`;
  }
  return `${numberSting} ${mistakesString}`;
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);
export {ResultScreen};

