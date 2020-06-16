import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isAnswersChecked: [false, false, false, false]
    };
  }

  render() {
    const {questionText, answers} = this.props.question;
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
            {
              answers.map((answer, index) => (
                <div className="track" key={answer.genre}>
                  <button className="track__button track__button--play" type="button"></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value={answer.genre} id={answer.genre} />
                    <label className="game__check" htmlFor={answer.genre}>Отметить</label>
                  </div>
                </div>
              ))
            }
            <Link to="/" onClick={onAnswerClick} >
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
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string,
          genre: PropTypes.string
        })
    )
  }).isRequired,
  onAnswerClick: PropTypes.func.isRequired
};

export default GenreQuestionScreen;
