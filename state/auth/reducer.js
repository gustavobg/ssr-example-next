import { AUTH } from './types';

const token = localStorage.getItem('authToken');

const initialState = {
  authorized: !!token,
  token,
};

/**
 * TODO:
 * improve implementation
 * this is just for testing pourposes
 */
const authentication = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.AUTHORIZE:
      return {
        ...state,
        authorized: true,
      };
    case AUTH.UNAUTHORIZE:
      return {
        ...state,
        authorized: false,
        token: null,
      };
    case AUTH.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case AUTH.REMOVE_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authentication;
