import { PROFILES } from './types';

const initialState = {
  profiles: [],
  profile: {},

};

/**
 * TODO:
 * improve implementation
 * this is just for testing purpouses
 */
const profiles = (state = initialState, action) => {
  switch (action.type) {
    case PROFILES.BY_ID:
      return {
        ...state,
        authorized: true,
      };
    default:
      return state;
  }
};

export default profiles;
