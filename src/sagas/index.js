import { takeEvery, put } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import * as API from './../api';
import * as actionCreators from '../actions';

function* createUserSaga(action) {
  try {
    const response = yield API.signUpUser(action.values);
    yield put(actionCreators.createUserSuccess(response.data.data));
  } catch (error) {
    yield put(actionCreators.createUserError(error));
  }
}

export default function* rootSaga() {
  yield takeEvery(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
}
