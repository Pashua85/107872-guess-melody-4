import {INC_STEP, RESTART_GAME} from '../../actions/actions';

function stepReducer(state, action) {
  switch (action.type) {
    case INC_STEP: {
      return state + 1;
    }
    case RESTART_GAME: {
      return 0;
    }
    default: {
      return state;
    }
  }
}

export default stepReducer;
