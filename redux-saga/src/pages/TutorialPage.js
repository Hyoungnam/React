import React from 'react';
import TutorialCounter from 'presentationals/components/TutorialCounter';
import { useDispatch, useSelector } from 'react-redux';

function TutorialPage() {
  const dispatch = useDispatch();
  const { value } = useSelector((reducer)=>({
    // value: reducer.reducerName.stateKey
    value: reducer.tutorial.value
  }))

const action = type => dispatch({type})
  return (
    <>
      <div>{value}</div>
      <TutorialCounter
        value={value}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')} 
      />
    </>
  );
}

export default TutorialPage;
