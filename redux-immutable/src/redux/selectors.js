import { createSelector } from "reselect";
import { initialState } from "./reducers/counterReducer";

const selectCounters = (state) => state.counter.get("counters");


export const makeSelectCountersFirstIndexNumber = createSelector(
  selectCounters,
  (countersState) => {
    console.log("makeSelectCountersFirstIndexNumber");
    return countersState.getIn(["0", "number"]);
  }
);
export const makeSelectCountersFirstIndexDiff = createSelector(
  selectCounters,
  (countersState) => {
    console.log("makeSelectCountersFirstIndexDiff");
    return countersState.getIn(["0", "diff"]);
  }
);