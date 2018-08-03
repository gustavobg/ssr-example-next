// External
import { all, fork } from 'redux-saga/effects';
import { watchProfiles } from "./profiles/sagas";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    fork(watchProfiles)
  ])
}
