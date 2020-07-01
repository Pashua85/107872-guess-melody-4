import mistakesReducer from '../reducers/mistakesReducer/mistakesReducer';
import stepReducer from '../reducers/stepReducer/stepReducer';
import questions from '../mocks/questions';

function reducer(state, action) {
  return {
    mistakes: mistakesReducer(state.mistakes, action),
    step: stepReducer(state.step, action),
    questions: state.questions,
    mistakesLimit: state.mistakesLimit
  };
}

const initialState = {
  mistakes: 0,
  step: -1,
  questions,
  mistakesLimit: 3
};

export {
  reducer,
  initialState
};
