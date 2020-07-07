import questionsReducer from './questionsReducer/questionsReducer';

const dataReducer = (dataState = {}, action) => ({
  questions: questionsReducer(dataState.questions, action)
});

export default dataReducer;
