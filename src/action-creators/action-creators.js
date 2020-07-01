import {INC_MISTAKES, INC_STEP, RESTART_GAME} from '../actions/actions';

const incMistakesAction = () => ({
  type: INC_MISTAKES
});

const incStepAction = () => ({
  type: INC_STEP
});

const restartGame = () => ({
  type: RESTART_GAME
});

export {
  incMistakesAction,
  incStepAction,
  restartGame
};
