import {REQUIRED_AUTHORIZATION} from '../../../action-types/action-types';

export const AUTH_STATUS = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const authStatusReducer = (state = AUTH_STATUS.NO_AUTH, action) => {
  switch (action.type) {
    case REQUIRED_AUTHORIZATION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default authStatusReducer;
