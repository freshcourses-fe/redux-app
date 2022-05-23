import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  count: 0,
  lang: 'en',
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
        count: state.count + 1,
      };

      return newState;
    }
    case ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

export default reducer;
