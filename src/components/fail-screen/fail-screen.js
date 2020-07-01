import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {restartGame} from '../../action-creators/action-creators';
import {Redirect} from 'react-router-dom';

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
  step: state.step
});

const mapDispatchToProps = (dispatch) => ({
  onAgainClick: () => {
    dispatch(restartGame());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FailScreen);
export {FailScreen};


