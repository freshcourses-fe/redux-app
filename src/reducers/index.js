import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import langReducer from './langReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  lang: langReducer,
  theme: themeReducer,
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
