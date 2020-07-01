import {INC_MISTAKES} from '../../actions/actions';

function mistakesReducer(state, action) {
  switch (action.type) {
    case INC_MISTAKES: {
      return state + 1;
    }
    default: {
      return state;
    }
  }
}

export default mistakesReducer;
