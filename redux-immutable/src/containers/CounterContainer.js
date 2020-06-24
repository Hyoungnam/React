import React from "react";
import Counter from "components/Counter";
import { Map, List } from "immutable";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { increase, decrease, setDiff } from "redux/reducers/counterReducer";
import {
  makeSelectCountersFirstIndexNumber,
  makeSelectCountersFirstIndexDiff,
} from "redux/selectors";

function CounterContainer({
  state,
  counter,
  counters,
  number,
  diff,
  onIncrease,
  onDecrease,
  onSetDiff,
}) {
  return (
    // <>
    //     {counters.map(item=>
    //         <div>{item.get('number')}</div>
    //     )}
    // </>
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}
// const mapStateToProps = (state) => ({
//   number: getCountersFirstIndexNumber(state),
//   diff: getCountersFirstIndexDiff(state),
// });

const mapStateToProps = createStructuredSelector({
  number: makeSelectCountersFirstIndexNumber,
  diff: makeSelectCountersFirstIndexDiff,
});

// const mapStateToProps = (state) => ({
//     // counters: state.counter.get('counters'),
//     // number: state.counter.get('counters').get(0).get('number')
//     number: state.counter.getIn(['counters', 0 ,'number']),
//     diff: state.counter.getIn(['counters', 0 ,'diff']),
//     counter: state.counter,
//     state: state
//     // number: state.counter.number,
//     // diff: state.counter.diff
// })

const mapDispatchToProps = (dispatch) => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
  onSetDiff: (diff) => dispatch(setDiff(diff)),
});

// const enhance = connect();
// export default enhance(CounterContainer);
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withConnect(CounterContainer);
