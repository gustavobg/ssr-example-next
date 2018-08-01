import {delay} from 'redux-saga'
import 'isomorphic-unfetch'
import {call, put, take} from "redux-saga/es/effects";
import {delay} from "redux-saga/index";

import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import {actionTypes, failure, loadDataSuccess, tickClock} from '../actions'

function * runClockSaga () {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield call(delay, 1000)
  }
}

function * loadDataSaga () {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}