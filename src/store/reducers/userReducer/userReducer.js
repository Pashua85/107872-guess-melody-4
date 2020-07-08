import authorizationStatusReducer from './authorizationStatusReducer/authorizationStatusReducer';

const userReduder = (userState = {}, action) => ({
  authorizationStatus: authorizationStatusReducer(userState, action)
});

export default userReduder;
