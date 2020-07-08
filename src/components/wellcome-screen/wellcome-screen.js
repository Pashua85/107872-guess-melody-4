import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ActionCreator from '../../store/action-creator/action-creator';
import {getMistakesLimit} from '../../store/reducers/gameReducer/selectors';

const WellcomeScreen = (props) => {
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

WellcomeScreen.propTypes = {
  mistakesLimit: PropTypes.number.isRequired,
  onStartClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  mistakesLimit: getMistakesLimit(state)
});

const mapDispatchToProps = (dispatch) => ({
  onStartClick: () => (
    dispatch(ActionCreator.increaseStepAction())
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(WellcomeScreen);
export {WellcomeScreen};
