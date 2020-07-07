import mistakesReducer from '../reducers/mistakesReducer/mistakesReducer';
import stepReducer from '../reducers/stepReducer/stepReducer';
import questionsReducer from '../reducers/questionsReducer/questionsReducer';
import mistakesLimitReducer from '../reducers/mistakesLimitReducer/mistakesLimitReducer';
import questions from '../mocks/questions';

function reducer(state = {}, action) {
  return {
    mistakes: mistakesReducer(state.mistakes, action),
    step: stepReducer(state.step, action),
    questions: questionsReducer(state.questions, action),
    mistakesLimit: mistakesLimitReducer(state.mistakesLimit, action)
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


