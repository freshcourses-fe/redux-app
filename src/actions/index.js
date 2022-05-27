import ACTION_TYPES from './actionTypes';

export const changeLang = (lang) => ({
  type: ACTION_TYPES.CHANGE_LANGUAGE,
  payload: { lang },
});

export const changeTheme = (theme) => ({
  type: ACTION_TYPES.CHANGE_THEME,
  payload: { theme },
});

export const workerRequest = (options) => ({
  type: ACTION_TYPES.WORKINING_USER_REQUEST,
  payload: options,
});

export const workingSuccess = (workers) => ({
  type: ACTION_TYPES.WORKINING_USER_SUCCESS,
  payload: { workers },
});
export const workingError = (error) => ({
  type: ACTION_TYPES.WORKINING_USER_ERROR,
  payload: { error },
});
