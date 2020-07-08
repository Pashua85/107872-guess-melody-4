import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api';
import UserOperation from './user-operation';
import {REQUIRE_AUTHORIZATION} from '../../action-types/action-types';
// import {LOAD_QUESTIONS} from '../../action-types/action-types';
// import questions from '../../../mocks/questions';

const api = createAPI(() => {});

describe(`UserOperaion`, () => {
  it(`make a correct API get call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecker = UserOperation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200);

    return authChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: REQUIRE_AUTHORIZATION,
          payload: `AUTH`
        });
      });
  });

  it(`make a correct API post call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authData = {
      login: `email`,
      password: `pasdfd`
    };
    const userLoginer = UserOperation.login(authData);

    apiMock
      .onPost(`/login`)
      .reply(200);

    return userLoginer(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: REQUIRE_AUTHORIZATION,
          payload: `AUTH`
        });
      });
  });
});
