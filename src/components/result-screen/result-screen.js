import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import ActionCreator from '../../store/action-creator/action-creator';
import {getStep, getMistakes} from '../../store/reducers/gameReducer/selectors';

const ResultScreen = (props) => {
  const {questionsAmount, mistakes, step, onAgainClick} = props;
  const questionsAmountString = getQuestionsAmountString(questionsAmount);
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
  questionsAmount: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onAgainClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  questionsAmount: getStep(state),
  mistakes: getMistakes(state),
  step: getStep(state)
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

