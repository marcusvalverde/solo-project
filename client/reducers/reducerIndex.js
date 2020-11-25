import { combineReducers } from 'redux';

// import all reducers here
import jobReducer from './jobReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  jobs: jobReducer,
});

// make the combined reducers available for import
export default reducers;