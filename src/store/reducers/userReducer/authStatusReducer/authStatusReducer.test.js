import {REQUIRE_AUTHORIZATION} from '../../../action-types/action-types';
import authStatusReducer from './authStatusReducer';
import {AUTH_STATUS} from './authStatusReducer';

describe(`authStatusReducer`, () => {
  test(`When it is called with ${AUTH_STATUS.AUTH} and { type: ${REQUIRE_AUTHORIZATION}, payload: ${AUTH_STATUS.NO_AUTH}}, it should return ${AUTH_STATUS.NO_AUTH}`, () => {
    const state = AUTH_STATUS.AUTH;
    const action = {
      type: REQUIRE_AUTHORIZATION,
      payload: AUTH_STATUS.NO_AUTH
    };
    const result = authStatusReducer(state, action);
    expect(result).toBe(AUTH_STATUS.NO_AUTH);
  });

  test(`When it is called with ${AUTH_STATUS.AUTH} and { type: "OTHER_TYPE", payload: ${AUTH_STATUS.NO_AUTH}}, it should return ${AUTH_STATUS.AUTH}`, () => {
    const state = AUTH_STATUS.AUTH;
    const action = {
      type: `OTHER_ACTION`,
      payload: AUTH_STATUS.NO_AUTH
    };
    const result = authStatusReducer(state, action);
    expect(result).toBe(state);
  });
});

