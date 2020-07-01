import {INC_STEP} from '../../actions/actions';

function stepReducer(state, action) {
  switch (action.type) {
    case INC_STEP: {
      return state + 1;
    }
    default: {
      return state;
    }
  }
}

export default stepReducer;
