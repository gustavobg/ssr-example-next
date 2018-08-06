import { PROFILE } from './types';

const initialState = {
  profiles: [],
  profile: {},
  isFetching: false,
  showError: false,
  message: '',
};

/**
 * TODO:
 * improve implementation
 * this is just for testing purpouses
 */
const profile = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE.ALL:
      return {
        ...state,
        isFetching: true,
      };
    case PROFILE.BY_ID:
      return {
        ...state,
        isFetching: true,
      };
    case PROFILE.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        showError: true,
        message: action.payload,
      };
    case PROFILE.FETCH_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    case PROFILE.FETCH_SUCCESS_ALL:
      return {
        ...state,
        profiles: action.payload,
      };
    case PROFILE.RESET:
      return {
        ...state,
        showError: false,
        message: '',
      };
    default:
      return state;
  }
};

export default profile;
