import { Map, List, fromJS, updateIn } from 'immutable';

const initialState = fromJS({
    counters: [
      {color: 'black', number: 0},
      {color: 'red', number: 1}
    ]
  })
  
  
  const CHANGE_COLOR = "CHANGE_COLOR";
  const INCREASE = "INCREASE";
  const DECREASE = "DECREASE";
  const CREATE = "CREATE";
  const REMOVE = "REMOVE";

  export const changeColor = (color) => ({ type: CHANGE_COLOR, color });
  export const increase = (index) => ({ type: INCREASE, index });
  export const decrease = () => ({ type: DECREASE });
  export const create = (color) => ({ type: CREATE, color });
  export const remove = () => ({type: REMOVE});
  
  export default function immuCounter(state = initialState, action) {
    const counters = state.get('counters');
    
    switch (action.type) {
      case CREATE:
        return state.set('counters', counters.push(Map({
          color: action.color,
          number: 0
          // number: counters.list.size + 1
        })))
      case REMOVE:
        return state.set('counters', counters.pop());
      case CHANGE_COLOR:
        return state.set('color', action.color)
      case INCREASE:
        console.log("increase");
        return updateIn(state, ['counters', action.index, 'number'], number=>number+1)
        // return state.set('number', counters.update(action.index, 
        //   (counter)=> counter.set('number', counter.get('number') + 1))
        //   )
        // return state.set('number', state.get('number') + 1)
      case DECREASE:
        return state.set('number', counters.update(action.index, 
          (counter)=> counter.set('number', counter.get('number') - 1))
          )
        // return state.set('number', state.get('number') - 1)
      default:
        return state;
    }
  }
  