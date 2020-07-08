const AUTHORIZATION_STATUS = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authorizationStatus: AUTHORIZATION_STATUS.NO_AUTH
};

const userReduder = (userState = initialState) => (userState);

export default userReduder;
