import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const WelcomeScreen = (props) => {
  const {errorAmount, onStartClick} = props;
  return <section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
    </div>
    <Link to="/dev-artist">
      <button
        className="welcome__button"
        onClick={onStartClick}
      >
        <span className="visually-hidden">Начать игру</span>
      </button>
    </Link>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>Нужно ответить на все вопросы.</li>
      <li>Можно допустить {errorAmount} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>;
};

WelcomeScreen.propTypes = {
  errorAmount: PropTypes.number.isRequired,
  onStartClick: PropTypes.func.isRequired
};

export default WelcomeScreen;
