import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import counter from "./counter";

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  counter: counter,
  //   form: formReducer
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default rootReducer;