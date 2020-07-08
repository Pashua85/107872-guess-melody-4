import ActionCreator from '../../action-creator/action-creator';
import {AUTH_STATUS} from '../../reducers/userReducer/authStatusReducer/authStatusReducer';

const UserOperation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AUTH_STATUS.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AUTH_STATUS.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  }
};

export default UserOperation;
