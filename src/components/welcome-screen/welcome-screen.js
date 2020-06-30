import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {incStepAction} from '../../reducer';

const WelcomeScreen = (props) => {
  const {mistakesLimit, onStartClick} = props;
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
      <li>Можно допустить {mistakesLimit} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>;
};

WelcomeScreen.propTypes = {
  mistakesLimit: PropTypes.number.isRequired,
  onStartClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  mistakesLimit: state.mistakesLimit
});

const mapDispatchToProps = (dispatch) => ({
  onStartClick: () => (
    dispatch(incStepAction())
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
export {WelcomeScreen};
