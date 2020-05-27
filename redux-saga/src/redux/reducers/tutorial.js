// export function* helloSaga() {
//   console.log('Hello Sagas!')
// }
import { put, takeEvery } from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Our worker Saga: will perform the async increment task
export function * incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}


// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
// export function* tutorialSaga() {
//   yield takeEvery('INCREMENT_ASYNC',watchIncrementAsync)
// }

// put is one example of what we call an Effect. 
// Effects are plain JavaScript objects which contain 
// instructions to be fulfilled by the middleware. 
// When a middleware retrieves an Effect yielded by a Saga, 
// the Saga is paused until the Effect is fulfilled.

const initialState = {
  value: 0
};


export default function tutorial(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'INCREMENT_IF_ODD':
      return (state.value % 2 !== 0) ?  { value: state.value + 1 } : state
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      return state
  }
}