import {put, takeLatest, call} from "redux-saga/effects";
import api from "../../services/api";
import {fetchFailure, fetchSuccess, fetchSuccessAll} from "./actions";
import { PROFILES } from './types';

export function* getById (id) {
  try {
    const res = yield call(api.profiles.byId, id);
    const data = yield res.data;
    console.log(`returned data: `, data);
    yield put(fetchSuccess(data))
  } catch (err) {
    yield put(fetchFailure(err))
  }
}

export function* getAll () {
  try {
    const res = yield call(api.profiles.all);
    const data = yield res.data;
    yield put(fetchSuccessAll(data))
  } catch (err) {
    yield put(fetchFailure(err))
  }
}

export function* watchProfiles() {
    yield takeLatest(PROFILES.ALL, getAll);
    yield takeLatest(PROFILES.BY_ID, getById);
}