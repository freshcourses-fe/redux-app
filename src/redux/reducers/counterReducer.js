import produce from 'immer';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  count: 0,
  step: 1,

  obj: {
    value: 1,
  },
};

const handlers = {
  [ACTION_TYPES.INCREMENT]: produce((draftState, action) => {
    draftState.count += draftState.step;
  }),
  [ACTION_TYPES.DECREMENT]: produce((draftState, action) => {
    draftState.count -= draftState.step;
  }),
  [ACTION_TYPES.SET_STEP]: produce((draftState, action) => {
    draftState.step = action.payload.newStep;
  }),
};

function counterReducer(state = initialState, action) {
  const { type } = action;

  const handler = handlers[type];

  return handler ? handler(state, action) : state;
}

export default counterReducer;
