import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import langReducer from './langReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  lang: langReducer,
});

export default rootReducer;

// const oldGlobalState = {
//   count: 0,
//   step: 1,
//   lang: 'ua_UA',
// };

// const newGlobalState = {
//   counter: {
//     count: 0,
//     step: 1,
//   },
//   lang: {
//     lang: 'ua_UA',
//   },
// };
