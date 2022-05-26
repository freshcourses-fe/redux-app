import ACTION_TYPES from './actionTypes';

export const increment = () => {
  return {
    type: ACTION_TYPES.INCREMENT,
  };
};

export const decrement = () => ({ type: ACTION_TYPES.DECREMENT });

export const setStep = (newStep) => ({ type: ACTION_TYPES.SET_STEP, newStep });

export const changeLang = (lang) => ({
  type: ACTION_TYPES.CHANGE_LANGUAGE,
  lang,
});

export const changeTheme = (theme) => ({
  type: ACTION_TYPES.CHANGE_THEME,
  theme,
});

export const createUserRequest = (values) => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
  payload: {values},
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

export const loginSuccess = (values) => ({
  type: ACTION_TYPES.LOGIN_SUCCESS,
  payload: { values },
});

export const loginError = (error) => ({
  type: ACTION_TYPES.LOGIN_ERROR,
  payload: { error },
});
