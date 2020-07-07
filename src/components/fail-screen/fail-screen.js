import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../store/action-creator/action-creator';
import {Redirect} from 'react-router-dom';
import {getStep} from '../../store/reducers/gameReducer/selectors';

const FailScreen = (props) => {
  const {onAgainClick, step} = props;

  if (step === 0) {
    return <Redirect to="/dev-artist" />;
  }

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
      <button
        className="replay"
        type="button"
        onClick={onAgainClick}
      >
        Попробовать ещё раз
      </button>
    </section>
  );
};

FailScreen.propTypes = {
  onAgainClick: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  step: getStep(state)
});

const mapDispatchToProps = (dispatch) => ({
  onAgainClick: () => {
    dispatch(ActionCreator.restartGame());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FailScreen);
export {FailScreen};


