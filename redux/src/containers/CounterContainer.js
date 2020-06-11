import React from "react";
import Counter from 'presentationals/components/Counter';
import { connect } from 'react-redux';
import { increase, decrease, setDiff } from "redux/reducers/counter";


function CounterContainer({number, diff, onIncrease, onDecrease, onSetDiff}) {
  
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
    diff: state.counter.diff
}) 

const mapDispatchToProps = (dispatch) => ({
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease()),
    onSetDiff: (diff) => dispatch(setDiff(diff))
})

// const enhance = connect();
// export default enhance(CounterContainer);
const withConnect = connect(
 mapStateToProps, 
 mapDispatchToProps
)
export default withConnect(CounterContainer);

