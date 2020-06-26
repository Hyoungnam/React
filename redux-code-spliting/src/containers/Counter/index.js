import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { injectReducer } from "redux-injectors";
import Counter from "presentationals/components/Counter";
import CounterReducer from "./reducer";
import CounterSaga from "./saga";
import { increase, decrease, setDiff } from "./reducer";

function CounterContainer({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  //   useInjectSaga({ key: "counter", saga: ㄱCounterSaga });
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
  onSetDiff: (diff) => dispatch(setDiff(diff)),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: "counter", reducer: CounterReducer });
// const withSaga = injectReducer({key: 'counter', reducer: CounterReducer})

export default compose(withReducer, withConnect)(CounterContainer);
