import mockQuestions from '../../mocks/questions';

const LOAD_QUESTIONS = `LOAD_QUESTIONS`;

const ActionCreator = {
  loadQuestions: (questions) => {
    return {
      type: LOAD_QUESTIONS,
      payload: questions
    };
  }
};

const Operation = {
  loadQuestions: () => (dispatch, getState, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuestions(response.data));
      });
  }
};

const questionsReducer = (state = mockQuestions, action) => {
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
export {Operation};

