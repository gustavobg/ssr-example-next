// Internal
import { PROFILE } from './types';

export const fetchById = id => ({ type: PROFILE.BY_ID, id });
export const fetchAll = () => ({ type: PROFILE.ALL });
export const fetchFailure = payload => ({ type: PROFILE.FETCH_FAILURE, payload });
export const fetchSuccess = payload => ({ type: PROFILE.FETCH_SUCCESS, payload });
export const fetchSuccessAll = payload => ({ type: PROFILE.FETCH_SUCCESS_ALL, payload });
