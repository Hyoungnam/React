import { Map, List, fromJS } from 'immutable';


const initialState = fromJS({
    color: 'black',
    number: 0
  })
  
  
  const CHANGE_COLOR = "CHANGE_COLOR";
  const INCREASE = "INCREASE";
  const DECREASE = "DECREASE";
  
  export const changeColor = (color) => ({ type: CHANGE_COLOR, color });
  export const increase = () => ({ type: INCREASE });
  export const decrease = () => ({ type: DECREASE });
    
  
  
  export default function immuCounter(state = initialState, action) {
    switch (action.type) {
      case CHANGE_COLOR:
        return state.set('color', action.color)
      case INCREASE:
        return state.set('number', state.get('number') + 1)
      case DECREASE:
        return state.set('number', state.get('number') - 1)
      default:
        return state;
    }
  }
  