// External
import { call, put, takeLatest } from 'redux-saga/effects';

// Internal
import { workerAuthenticate, workerUnauthorize } from '../../state/auth/sagas';
import { LOGIN, LOGOUT } from './types';
import * as actions from './actions';

/**
 * Call auth service an dispatch succes or failure actions
 */
export function* workerLogin({ payload: { email, password } }) {
  try {
    yield call(workerAuthenticate, email, password);
    yield put(actions.loginSuccess());
  } catch (error) {
    yield put(actions.loginFailure({ _error: 'Usuário ou senha inválidos' }));
  }
}

/**
 * Watch for login submit action
 */
export function* watchLogin() {
  yield takeLatest(LOGIN.SUBMIT, workerLogin);
}

/**
 * Watch for logout
 */
export function* watchLogout() {
  yield takeLatest(LOGOUT.ACTION, workerUnauthorize);
}
