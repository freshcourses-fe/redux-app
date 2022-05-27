import ACTION_TYPES from '../actions/actionTypes';
import CONSTANTS from '../constants';

const initialState = {
  lang: CONSTANTS.LANGUAGES.ua,
};

function langReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_LANGUAGE:
      return { ...state, lang: action.payload.lang };
    default:
      return state;
  }
}

export default langReducer;
