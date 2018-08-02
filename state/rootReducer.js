// External
import { combineReducers } from 'redux';

// Internal
import profiles from './profiles/reducer';
import counter from './counter/reducer';

export const initialState = {};

const rootReducer = combineReducers({
  // profiles
  profiles,
  // counter
  counter
});

export default rootReducer;