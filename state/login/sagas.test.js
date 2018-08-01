import { call, put, takeLatest } from 'redux-saga/effects';

import { workerAuthenticate } from 'state/auth/sagas';
import { LOGIN } from './types';
import { loginSubmit, loginSuccess, loginFailure } from './actions';
import { workerLogin, watchLogin } from './sagas';

describe('state/login/sagas workerLogin', () => {
  const email = 'user@provider.com';
  const password = '123';
  const iter = workerLogin(loginSubmit({ email, password }));

  it('should call api.auth.login', () => {
    expect(iter.next().value).toEqual(call(workerAuthenticate, email, password));
  });

  it('should dispatch loginSuccess', () => {
    expect(iter.next().value).toEqual(put(loginSuccess()));
  });

  it('should call loginFailure on error', () => {
    expect(iter.throw({ status: false }).value).toEqual(put(loginFailure({ _error: 'Usuário ou senha inválidos' })));
  });
});

describe('state/auth/login/sagas watchLogin', () => {
  const iter = watchLogin();
  it('should yield takeLatest', () => {
    expect(iter.next().value).toEqual(takeLatest(LOGIN.SUBMIT, workerLogin));
  });
});
