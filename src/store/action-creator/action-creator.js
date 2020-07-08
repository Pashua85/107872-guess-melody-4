import {INC_MISTAKES, INC_STEP, RESTART_GAME, LOAD_QUESTIONS, REQUIRED_AUTHORIZATION} from '../action-types/action-types';

const ActionCreator = {
  increaseMistakesAction: () => ({
    type: INC_MISTAKES
  }),
  increaseStepAction: () => ({
    type: INC_STEP
  }),
  restartGame: () => ({
    type: RESTART_GAME
  }),
  loadQuestions: (questions) => ({
    type: LOAD_QUESTIONS,
    payload: questions
  }),
  requireAuthorization: (status) => ({
    type: REQUIRED_AUTHORIZATION,
    payload: status
  })
};

export default ActionCreator;
