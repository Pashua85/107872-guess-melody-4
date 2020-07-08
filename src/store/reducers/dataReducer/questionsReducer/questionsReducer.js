import {LOAD_QUESTIONS} from '../../../action-types/action-types';

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_QUESTIONS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }

};

export default questionsReducer;


