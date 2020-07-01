import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const getQuestionsAmountString = (number) => {
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
};

const ResultScreen = (props) => {
  const {questions, mistakes, step} = props;
  const questionsAmountString = getQuestionsAmountString(questions.length);

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {questionsAmountString} и совершили {mistakes} ошибки</p>
      <button className="replay" type="button">Сыграть ещё раз</button>
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
  step: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  mistakes: state.mistakes,
  step: state.step
});


export default connect(mapStateToProps)(ResultScreen);
export {ResultScreen};

