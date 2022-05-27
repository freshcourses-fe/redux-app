import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  count: 0,
  step: 1,
};

function counterReducer(state = initialState, action) {
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

    case ACTION_TYPES.SET_STEP: {
      const {
        payload: { newStep },
      } = action;

      return { ...state, step: newStep };
    }
    default:
      return state;
  }
}

export default counterReducer;
