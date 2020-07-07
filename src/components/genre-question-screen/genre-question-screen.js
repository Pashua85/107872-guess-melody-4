import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ActionCreator from '../../store/action-creator/action-creator';
import {checkAnswers} from '../../helpers';
import AudioPlayer from '../audio-player/audio-player';
import GameMistakes from '../game-mistakes/game-mistakes';
import {getRandomGenreQuestion} from '../../store/reducers/dataReducer/selectors';
import {getMistakes, getMistakesLimit, getStep} from '../../store/reducers/gameReducer/selectors';

const GenreQuestionScreen = (props) => {
  const [checkedAnswers, setCheckedAnswers] = useState([false, false, false, false]);

  const handleInputChange = (index) => {
    const newAnswers = checkedAnswers.map((answer, i) => {
      if (i === index) {
        return !answer;
      } else {
        return answer;
      }
    });
    setCheckedAnswers(newAnswers);
  };

  const {questionText, tracks, type} = props.question;
  const {onAnswerClick, mistakes, mistakesLimit, step, question} = props;

  if (mistakes > mistakesLimit) {
    return (
      <Redirect to="/dev-fail" />
    );
  } else if (step > 1) {
    return <Redirect to="/dev-result" />;
  }

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle
            className="timer__line"
            cx="390"
            cy="390"
            r="370"
            style={{
              filter: `url(#blur)`,
              transform: `rotate(-90deg) scaleY(-1)`,
              transformOrigin: `center`
            }}
          />
        </svg>

        <GameMistakes />
      </header>

      <section className="game__screen">
        <h2 className="game__title">{questionText}</h2>
        <form className="game__tracks">
          <AudioPlayer tracks={tracks} onInputChange={handleInputChange} type={type} />

          <button
            className="game__submit button"
            type="button"
            onClick={() => {
              onAnswerClick(question, checkedAnswers);
              setCheckedAnswers([false, false, false, false]);
            }}
          >
            Ответить
          </button>

        </form>
      </section>
    </section>
  );
};

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string,
    questionText: PropTypes.string,
    genre: PropTypes.string,
    tracks: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          genre: PropTypes.string.isRequired
        })
    ),
  }).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
  mistakesLimit: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  question: getRandomGenreQuestion(state),
  mistakes: getMistakes(state),
  mistakesLimit: getMistakesLimit(state),
  step: getStep(state)
});

const mapDispatchToProps = (dispatch) => ({
  onAnswerClick: (question, answer) => {

    if (!checkAnswers(question, answer)) {
      dispatch(ActionCreator.increaseMistakesAction());
    } else {
      dispatch(ActionCreator.increaseStepAction());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreQuestionScreen);
export {GenreQuestionScreen};
