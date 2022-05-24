import ACTION_TYPES from '../actions/actionTypes';
import CONSTANTS from '../constants';

const initialState = {
  count: 0,
  step: 1,
  lang: CONSTANTS.LANGUAGES.ua,
  theme: 'dark',
  user: {
    id: 213547805,
    name: 'Test Test',
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      const newState = {
        ...state,
        count: state.count + state.step,
      };

      return newState;
    }
    case ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - state.step };

    case ACTION_TYPES.SET_STEP:
      return { ...state, step: action.newStep };

    case ACTION_TYPES.CHANGE_LANGUAGE:
      return { ...state, lang: action.lang };
    default:
      return state;
  }
}

export default reducer;
