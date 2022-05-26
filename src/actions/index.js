import ACTION_TYPES from './actionTypes';

export const changeLang = (lang) => ({
  type: ACTION_TYPES.CHANGE_LANGUAGE,
  lang,
});

export const changeTheme = (theme) => ({
  type: ACTION_TYPES.CHANGE_THEME,
  theme,
});
