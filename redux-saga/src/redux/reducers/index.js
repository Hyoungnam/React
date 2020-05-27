import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import posts, { postsSaga } from './posts';
import tutorial, { watchIncrementAsync } from './tutorial';
import { all } from 'redux-saga/effects';
const rootReducer = combineReducers({
  counter, posts, tutorial
});

export function * rootSaga() {
  yield all([counterSaga(), postsSaga(), watchIncrementAsync()]);
}
export default rootReducer;
