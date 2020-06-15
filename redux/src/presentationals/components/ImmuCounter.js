import React from 'react'
import { toJS } from 'immutable';

const ImmuCounter = ({ color, number, counters, onIncrease, onDecrease, onChangeColor }) => {
  const onChange = (e) => {
    onChangeColor(e.target.value);
  };
  const data = counters && counters.toJS ? counters.toJS() : null;
  return (
    <div>
      <ul>
        {counters.map((item)=>{ return <li>{item.color}</li>})}
      </ul>
      <h1>{data[0].number}</h1>
      <div>
        <input type="text" value={'test'} onChange={onChange} />
        <button onClick={()=>onIncrease(0)}>+</button>
        <button onClick={onDecrease}>-</button>
        <br/>
       
      </div>
    </div>
  );
}
export default ImmuCounter;