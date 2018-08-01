// Internal
import { LOGIN, LOGOUT } from './types';

/**
 * Login submit
 */
export const loginSubmit = payload => ({ type: LOGIN.SUBMIT, payload });

/**
 * Login success
 */
export const loginSuccess = response => ({ type: LOGIN.SUCCESS, payload: response });

/**
 * Login failure
 */
export const loginFailure = errors => ({ type: LOGIN.FAILURE, payload: errors });

/**
 * Logout
 */
export const logout = () => ({ type: LOGOUT.ACTION });

