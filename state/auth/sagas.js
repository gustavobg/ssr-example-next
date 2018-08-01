// External
import { call, put } from 'redux-saga/effects';

// Internal
// import history from 'routes/history';
import api from '../../services/api';
import { authorize, unauthorize, setToken, removeToken } from './actions';

/**
 * Call auth service and save auth token
 */
export function* workerAuthenticate(email, password) {
  const { data: { token } } = yield call(api.auth.authenticate, email, password);
  localStorage.setItem('authToken', token);
  yield put(authorize());
  yield put(setToken(token));
  // TODO
  // yield call(history.push, '/app/dashboard/');
}

/**
 * Remove token from store and local storage
 */
export function* workerUnauthorize() {
  yield put(unauthorize());
  yield put(removeToken());
  localStorage.removeItem('authToken');
  // TODO
  // yield call(history.push, '/auth/login/');
}
