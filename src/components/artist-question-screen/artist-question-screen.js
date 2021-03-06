import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import AudioPlayer from '../audio-player/audio-player';
import GameMistakes from '../game-mistakes/game-mistakes';
import ActionCreator from '../../store/action-creator/action-creator';
import {checkAnswers} from '../../helpers';
import {getRandomArtistQuestion} from '../../store/reducers/dataReducer/selectors';
import {getMistakes, getMistakesLimit, getStep} from '../../store/reducers/gameReducer/selectors';

const ArtistQuestionScreen = (props) => {
  const {questionText, answers, type, tracks} = props.question;
  const {onAnswerClick, mistakes, mistakesLimit, step, question} = props;

  if (mistakes > mistakesLimit) {
    return (
      <Redirect to="/dev-fail" />
    );
  } else if (step > 0) {
    return (
      <Redirect to="/dev-genre" />
    );
  }

  return (
    <section className="game game--artist">
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
        <div className="game__track">

          <AudioPlayer tracks={tracks} type={type} />

        </div>

        <form className="game__artist">
          {
            answers.map((answer) => (
              <div className="artist" key={answer.artist}>
                <input
                  className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  value={answer.artist}
                  id={answer.artist}
                />
                <label
                  className="artist__name"
                  htmlFor={answer.artist}
                  onClick={() => {
                    onAnswerClick(question, answer.artist);
                  }}
                >
                  <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                  {answer.artist}
                </label>
              </div>
            ))
          }
        </form>
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string,
    questionText: PropTypes.string,
    tracks: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          artist: PropTypes.string.isRequired,
        })
    ),
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          picture: PropTypes.string,
          artist: PropTypes.string
        })
    )
  }).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
  mistakesLimit: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired
};

const mapStateToProps = (state) => (
  {
    question: getRandomArtistQuestion(state),
    mistakes: getMistakes(state),
    mistakesLimit: getMistakesLimit(state),
    step: getStep(state)
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onAnswerClick: (question, answer) => {
      if (!checkAnswers(question, answer)) {
        dispatch(ActionCreator.increaseMistakesAction());
      } else {
        dispatch(ActionCreator.increaseStepAction());
      }
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistQuestionScreen);
export {ArtistQuestionScreen};
