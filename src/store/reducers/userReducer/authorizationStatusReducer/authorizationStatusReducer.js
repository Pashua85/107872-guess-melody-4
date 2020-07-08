import {REQUIRED_AUTHORIZATION} from '../../../action-types/action-types';

const AUTHORIZATION_STATUS = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const authorizationStatusReducer = (state = AUTHORIZATION_STATUS.NO_AUTH, action) => {
  switch (action.type) {
    case REQUIRED_AUTHORIZATION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default authorizationStatusReducer;
