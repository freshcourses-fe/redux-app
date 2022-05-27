import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import langReducer from './langReducer';
import themeReducer from './themeReducer';
import authReducer from './authReducer';
import workerReducer from './workerReducer';


const rootReducer = combineReducers({
  counter: counterReducer,
  lang: langReducer,
  theme: themeReducer,
  auth: authReducer,
  worker: workerReducer,
});

export default rootReducer;
