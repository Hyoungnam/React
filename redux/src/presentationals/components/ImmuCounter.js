import React from 'react'

const ImmuCounter = ({ color, number, onIncrease, onDecrease }) => {
//   const onChange = (e) => {
//     onSetDiff(parseInt(e.target.value, 10));
//   };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        {/* <input type="number" value={number} onChange={onChange} /> */}
        <span>{number}</span>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <br/>
       
      </div>
    </div>
  );
}
export default ImmuCounter;