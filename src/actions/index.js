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