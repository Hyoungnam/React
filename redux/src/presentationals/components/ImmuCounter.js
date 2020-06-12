import React from 'react'

const ImmuCounter = ({ color, number, onIncrease, onDecrease, onChangeColor }) => {
  const onChange = (e) => {
    onChangeColor(e.target.value);
  };
  return (
    <div>
      <h1>{color}</h1>
      <div>{number}</div>
      <div>
        <input type="text" value={color} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <br/>
       
      </div>
    </div>
  );
}
export default ImmuCounter;