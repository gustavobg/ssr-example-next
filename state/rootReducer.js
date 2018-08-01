// External
import { combineReducers } from 'redux';

// Internal
import profiles from './profiles/reducer';

export const initialState = {};

const rootReducer = combineReducers({
  // profiles
  profiles
});

export default rootReducer;