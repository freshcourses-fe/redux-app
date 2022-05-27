import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER_REQUEST:
    case ACTION_TYPES.LOGIN_REQUEST:
      return { ...initialState };
    case ACTION_TYPES.CREATE_USER_SUCCESS:
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
      };

    case ACTION_TYPES.CREATE_USER_ERROR:
    case ACTION_TYPES.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
