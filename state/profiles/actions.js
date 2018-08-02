// Internal
import { PROFILES } from './types';

export const fetchById = (id) => {
    console.log(`action: fetching by id:`, id)
    return { type: PROFILES.BY_ID, id }
};
export const fetchAll = () => ({ type: PROFILES.ALL });
export const fetchFailure = (payload) => ({ type: PROFILES.FETCH_FAILURE, payload });
export const fetchSuccess = (payload) => ({ type: PROFILES.FETCH_SUCCESS, payload });
export const fetchSuccessAll = (payload) => ({ type: PROFILES.FETCH_SUCCESS_ALL, payload });
export const reset = () => ({ type: PROFILES.RESET });
