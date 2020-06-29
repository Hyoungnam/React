const initialState = {
  count: 0,
  diff: 1,
};

export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const SET_DIFF = "ONSET_DIFF";

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});
export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});
export const setDiff = (value) => ({
  type: SET_DIFF,
  value,
});

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: state.count + state.diff,
      };
    case DECREASE_COUNT:
      return {
        ...state,
        count: state.count - state.diff,
      };
    case SET_DIFF:
      return {
        ...state,
        diff: action.value,
      };
    default:
      return state;
  }
}
export default counter;
