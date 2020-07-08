import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api';
import DataOperation from './data-operation';
import {LOAD_QUESTIONS} from '../../action-types/action-types';
import questions from '../../../mocks/questions';


const api = createAPI(() => {});

describe(`DataOperaion`, () => {
  it(`should make a correct API call to /questions`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionsLoader = DataOperation.loadQuestions();

    apiMock
      .onGet(`/questions`)
      .reply(200, questions);

    return questionsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: LOAD_QUESTIONS,
          payload: questions
        });
      });
  });
});
