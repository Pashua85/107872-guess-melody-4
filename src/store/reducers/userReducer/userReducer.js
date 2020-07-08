import authStatusReducer from './authStatusReducer/authStatusReducer';

const userReduder = (userState = {}, action) => ({
  authStatus: authStatusReducer(userState, action)
});

export default userReduder;
