// Internal
import { AUTH } from './types';

/**
 * Authorize user
 */
export const authorize = () => ({ type: AUTH.AUTHORIZE });

/**
 * Unauthorize user
 */
export const unauthorize = () => ({ type: AUTH.UNAUTHORIZE });

/**
 * Set token value
 */
export const setToken = (token = null) => ({ type: AUTH.SET_TOKEN, payload: { token } });

/**
 * Remove token
 */
export const removeToken = () => ({ type: AUTH.REMOVE_TOKEN });
