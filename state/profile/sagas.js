import { put, takeLatest, call } from 'redux-saga/effects';
import api from '../../services/api';
import { fetchFailure, fetchSuccess, fetchSuccessAll } from './actions';
import { PROFILE } from './types';

export function* getById({ id }) {
  try {
    const res = yield call(api.profile.byId, id);
    const data = yield res.data;
    yield put(fetchSuccess(data));
  } catch (err) {
    yield put(fetchFailure(err));
  }
}

export function* getAll() {
  try {
    const res = yield call(api.profile.all);
    const data = yield res.data;
    yield put(fetchSuccessAll(data));
  } catch (err) {
    yield put(fetchFailure(err));
  }
}

export function* watchProfiles() {
  yield takeLatest(PROFILE.ALL, getAll);
  yield takeLatest(PROFILE.BY_ID, getById);
}
