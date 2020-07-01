import {INC_MISTAKES, INC_STEP} from '../actions/actions';

const incMistakesAction = () => ({
  type: INC_MISTAKES
});
const incStepAction = () => ({
  type: INC_STEP
});

export {
  incMistakesAction,
  incStepAction
};
