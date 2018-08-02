import { delay } from 'redux-saga'
import { put, takeLatest } from 'redux-saga/effects'
import {increment} from "./actions";

// ...

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000)
  yield put(increment())
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}