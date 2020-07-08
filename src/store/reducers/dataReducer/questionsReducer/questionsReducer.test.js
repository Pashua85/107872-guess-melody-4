import questionsReducer from './questionsReducer';
import questions from '../../../../mocks/test-questions';

describe(`questionReducer`, () => {
  it(`should return new questions from LOAD_QUESTION action`, () => {
    const questionsState = [];
    const action = {
      type: `LOAD_QUESTIONS`,
      payload: questions
    };
    const result = questionsReducer(questionsState, action);
    expect(result).toEqual(questions);
  });

  it(`should return questiosState from LOAD_SOMETHING action`, () => {
    const questionsState = [];
    const action = {
      type: `LOAD_SOMETHING`,
      payload: questions
    };
    const result = questionsReducer(questionsState, action);
    expect(result).toEqual(questionsState);
  });
});

