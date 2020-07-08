import NameSpace from '../name-space';

export const getAuthStatus = (state) => {
  return state[NameSpace.USER].authStatus;
};

