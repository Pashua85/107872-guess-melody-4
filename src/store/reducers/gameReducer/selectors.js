import NameSpace from '../name-space';

export const getMistakesLimit = (state) => {
  return state[NameSpace.GAME].mistakesLimit;
};

export const getMistakes = (state) => {
  return state[NameSpace.GAME].mistakes;
};

export const getStep = (state) => {
  return state[NameSpace.GAME].step;
};
