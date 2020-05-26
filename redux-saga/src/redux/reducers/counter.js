import { delay, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';

const initialState = {
  number: 0,
  diff: 1
};


const SET_DIFF = "SET_DIIF";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function * increaseSaga() {
  yield delay(1000);
  yield put(increase());
}
function * decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}
export function * counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // yield takeLatest(DECREASE_ASYNC, decreaseSaga);
  yield takeLeading(DECREASE_ASYNC, decreaseSaga);
}

// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// }

// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// }



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
