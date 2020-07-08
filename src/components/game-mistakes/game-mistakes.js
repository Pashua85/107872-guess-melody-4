import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getMistakes} from '../../store/reducers/gameReducer/selectors';

const GameMistakes = (props) => {
  const wrongs = [];
  for (let i = 0; i < props.mistakes; i++) {
    wrongs.push(
        <div className="wrong" key={i}></div>
    );
  }
  return (
    <div className="game__mistakes">
      {wrongs}
    </div>
  );
};

GameMistakes.propTypes = {
  mistakes: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  mistakes: getMistakes(state)
});

export default connect(mapStateToProps)(GameMistakes);
export {GameMistakes};
