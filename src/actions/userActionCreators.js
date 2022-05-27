import ACTION_TYPES from './actionTypes';

export const createUserRequest = (values) => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
  payload: { values },
});

export const createUserSuccess = (values) => ({
  type: ACTION_TYPES.CREATE_USER_SUCCESS,
  payload: { values },
});

export const createUserError = (error) => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  payload: { error },
});

export const loginRequest = (values) => ({
  type: ACTION_TYPES.LOGIN_REQUEST,
  payload: { values },
});

export const loginSuccess = (user) => ({
  type: ACTION_TYPES.LOGIN_SUCCESS,
  payload: { user },
});

export const loginError = (error) => ({
  type: ACTION_TYPES.LOGIN_ERROR,
  payload: { error },
});
