import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {incStepAction} from '../../reducer';
import AudioPlayer from '../audio-player/audio-player';
import {connect} from 'react-redux';

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      checkedAnswers: [false, false, false, false]
    };
  }

  handleInputChange(index) {
    this.setState((prevState) => {
      const newAnswers = prevState.checkedAnswers.map((answer, i) => {
        if (i === index) {
          return !answer;
        } else {
          return answer;
        }
      });
      return ({
        checkedAnswers: newAnswers
      });
    });
  }

  render() {
    const {questionText, tracks, type} = this.props.question;
    const {onAnswerClick} = this.props;

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

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">{questionText}</h2>
          <form className="game__tracks">
            <AudioPlayer tracks={tracks} onInputChange={this.handleInputChange} type={type} />
            <Link
              to="/"
              onClick={() => {
                onAnswerClick(type, this.state.checkedAnswers);
              }}
            >
              <button
                className="game__submit button"
                type="button"
              >
                Ответить
              </button>
            </Link>
          </form>
        </section>
      </section>
    );
  }
}

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
  onAnswerClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  question: state.questions[state.step]
});

const mapDispatchToProps = (dispatch) => ({
  onAnswerClick: () => (
    dispatch(incStepAction())
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreQuestionScreen);
export {GenreQuestionScreen};
