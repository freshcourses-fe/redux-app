import ACTION_TYPES from './actionTypes';

export const increment = () => {
  return {
    type: ACTION_TYPES.INCREMENT,
  };
};

export const decrement = () => ({ type: ACTION_TYPES.DECREMENT });

export const setStep = (newStep) => ({
  type: ACTION_TYPES.SET_STEP,
  payload: { newStep },
});
