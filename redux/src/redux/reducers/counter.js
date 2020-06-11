const initialState = {
  number: 0,
  diff: 1
};


const SET_DIFF = "SET_DIIF";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });


export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
}

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
}



export default function counter(prev = initialState, next) {
  switch (next.type) {
    case SET_DIFF:
      return {
        ...prev,
        diff: next.diff
      };
    case INCREASE:
      return {
        ...prev,
        number: prev.number + prev.diff
      };
    case DECREASE:
      return {
        ...prev,
        number: prev.number - prev.diff
      };
    default:
      return prev;
  }
}
