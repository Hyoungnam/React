import React from 'react'

const TutorialCounter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => {
  return (
    <div>
      <h1>TutotrialCounter</h1>
      <button onClick={onIncrementAsync}>
        Increment after 1 second
      </button>
      {' '}
      <button onClick={onIncrement}>
        Increment
      </button>
      {' '}
      <button onClick={onDecrement}>
        Decrement
      </button>
      <hr />
      <div>
        Clicked: {value} times
      </div>
    </div>
  )
}

export default TutorialCounter;