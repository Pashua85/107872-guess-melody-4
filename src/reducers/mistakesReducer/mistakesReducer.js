import {INC_MISTAKES, RESTART_GAME} from '../../actions/actions';

function mistakesReducer(state = 0, action) {
  switch (action.type) {
    case INC_MISTAKES: {
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

export default mistakesReducer;
