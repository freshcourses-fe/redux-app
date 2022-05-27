import { all } from 'redux-saga/effects';
import authSagas from './authSagas';
import workersSagas from './workersSagas';

export default function* rootSaga() {
  yield all([authSagas(), workersSagas()]);
}
