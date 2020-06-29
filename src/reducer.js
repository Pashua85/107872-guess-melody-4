import questions from './mocks/questions';

const initialState = {
  mistakes: 0,
  step: -1,
  questions,
  mistakesLimit: 3
};

const INC_MISTAKES = `INC_MISTAKES`;
const INC_STEP = `INC_STEP`;

const incMistakesAction = () => ({
  type: INC_MISTAKES
});
const incStepAction = () => ({
  type: INC_STEP
});

function reducer(state, action) {
  return {
    mistakes: mistakesReducer(state.mistakes, action),
    step: stepReducer(state.step, action),
    questions: state.questions,
    mistakesLimit: state.mistakesLimit
  };
}

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

export {
  initialState,
  incMistakesAction,
  incStepAction
  reducer
};
