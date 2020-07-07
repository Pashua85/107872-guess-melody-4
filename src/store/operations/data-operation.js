import ActionCreator from '../action-creator/action-creator';

const DataOperation = {
  loadQuestions: () => (dispatch, getState, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuestions(response.data));
      });
  }
};

export default DataOperation;
