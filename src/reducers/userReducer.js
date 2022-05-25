import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER_REQUEST:
      return { ...state, isLoading: true };
    case ACTION_TYPES.CREATE_USER_SUCCESS:
      return {
        ...state,
        user: action.value,
        isLoading: false,
      };

    case ACTION_TYPES.CREATE_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
