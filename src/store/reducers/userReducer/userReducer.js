import authStatusReducer from './authStatusReducer/authStatusReducer';

const userReduder = (userState = {}, action) => ({
  authStatus: authStatusReducer(userState.authStatus, action)
});

export default userReduder;
