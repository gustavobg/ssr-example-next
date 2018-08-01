// External
import { all, fork } from 'redux-saga/effects';

// Internal
import { watchLogin, watchLogout } from '../state/login/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
  ]);
}
