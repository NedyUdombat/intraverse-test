import { combineReducers } from 'redux';

// reducers
import { authReducer } from './modules/auth';

export default combineReducers({
  auth: authReducer,
});
