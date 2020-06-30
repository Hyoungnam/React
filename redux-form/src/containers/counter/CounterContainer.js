import React from "react";
import { connect } from "react-redux";
import { increaseCount, decreaseCount, setDiff } from "redux/counter";
import Counter from "components/Counter";

function CounterContainer({ count, diff, onIncrease, onDecrease, onSetDiff }) {
  return (
    <Counter
      count={count}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
  diff: state.counter.diff,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrease: () => dispatch(increaseCount()),
  onDecrease: () => dispatch(decreaseCount()),
  onSetDiff: (value) => dispatch(setDiff(value)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(CounterContainer);
