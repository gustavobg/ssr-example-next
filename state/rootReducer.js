// External
import { combineReducers } from 'redux';

// Internal
import profile from './profile/reducer';

export const initialState = {};

const rootReducer = combineReducers({
  // profile
  profile,
});

export default rootReducer;
