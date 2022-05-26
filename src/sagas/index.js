import { takeEvery, put } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import * as API from './../api';
import * as userActionCreators from '../actions/userActionCreators';

// worker saga
function* createUserSaga(action) {
  try {
    const response = yield API.signUpUser(action.payload.values);

    const {
      data: { data: user },
    } = response;

    yield put(userActionCreators.createUserSuccess(user));
  } catch (error) {
    yield put(userActionCreators.createUserError(error.response.data.error));
  }
}

function* loginSaga(action) {
  try {
    const {
      data: { data: user },
    } = yield API.loginUser(action.payload.values);

    yield put(userActionCreators.loginSuccess(user));
  } catch (error) {
    yield put(userActionCreators.loginError(error.response.data.error));
  }
}

export default function* rootSaga() {
  yield takeEvery(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
  yield takeEvery(ACTION_TYPES.LOGIN_REQUEST, loginSaga);
}
