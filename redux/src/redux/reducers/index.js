import { combineReducers } from "redux";
import counter from "./counter";
import posts from './posts';
import immuCounter from './immuCounter';
const rootReducer = combineReducers({
  counter, posts, immuCounter
});
export default rootReducer;
