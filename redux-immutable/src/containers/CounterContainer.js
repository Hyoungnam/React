import React from "react";
import Counter from 'components/Counter';
import { Map, List } from 'immutable'
import { connect } from 'react-redux';
import { increase, decrease, setDiff } from "redux/reducers/counter";


function CounterContainer({counters, number, diff, onIncrease, onDecrease, onSetDiff}) {
  console.log("number: ", number);
  console.log("diff: ", diff);
  console.log("counters: ", counters);
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

const mapStateToProps = (reducers) => ({

    counters: reducers.counter.get('counters'),
    // number: reducers.counter.get('counters').get(0).get('number')
    number: reducers.counter.getIn(['counters', 0 ,'number']),
    diff: reducers.counter.getIn(['counters', 0 ,'diff'])
    // number: reducer.counter.number,
    // diff: reducer.counter.diff
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

