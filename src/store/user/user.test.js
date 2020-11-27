import MockAdapter from 'axios-mock-adapter';
import {ServerURL, ServerResponseStatus, AuthorizationStatus} from '../../const';
import createAPI from '../../api';
import {ActionType, ActionCreator, Operation, reducer} from './user';

const userMock = {
  authorizationStatus: AuthorizationStatus.UNAUTHORIZED,
  email: null
};
const email = `foxspb@yandex.ru`;
const authorizationStatus = AuthorizationStatus.AUTHORIZED;

describe(`userActionCreator`, () => {
  it(`should create SET_AUTHORIZATION_STATUS action`, () => {
    expect(ActionCreator.setAuthorizationStatus(authorizationStatus)).toEqual({
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: authorizationStatus
    });
  });

  it(`should create SET_EMAIL action`, () => {
    expect(ActionCreator.setEmail(email)).toEqual({
      type: ActionType.SET_EMAIL,
      payload: email
    });
  });
});

describe(`userOperation`, () => {
  const api = createAPI(() => { });

  it(`should check authorizationStatus`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    apiMock.onGet(ServerURL.LOGIN).reply(ServerResponseStatus.OK, {email});
    return Operation.checkAuthorizationStatus()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionType.SET_AUTHORIZATION_STATUS, payload: authorizationStatus});
        expect(dispatch).toHaveBeenNthCalledWith(2, {type: ActionType.SET_EMAIL, payload: email});
      });
  });

  it(`should login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    apiMock.onPost(ServerURL.LOGIN).reply(ServerResponseStatus.OK, {email});
    return Operation.login()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionType.SET_AUTHORIZATION_STATUS, payload: authorizationStatus});
        expect(dispatch).toHaveBeenNthCalledWith(2, {type: ActionType.SET_EMAIL, payload: email});
      });
  });
});

describe(`userReducer`, () => {
  it(`should return initialState user`, () => expect(reducer(undefined, {})).toEqual(userMock));

  it(`should set authorizationStatus`, () => {
    expect(reducer({authorizationStatus: AuthorizationStatus.UNAUTHORIZED}, {type: ActionType.SET_AUTHORIZATION_STATUS, payload: authorizationStatus})).toEqual({authorizationStatus});
  });

  it(`should set email`, () => {
    expect(reducer({email: null}, {type: ActionType.SET_EMAIL, payload: email})).toEqual({email});
  });
});
