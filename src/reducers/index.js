import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import langReducer from './langReducer';
import themeReducer from './themeReducer';
import userReducer from './userReducer';
import workerReducer from './workerReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  lang: langReducer,
  theme: themeReducer,
  user: userReducer,
  worker: workerReducer,
});

export default rootReducer;
