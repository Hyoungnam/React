import { Map, List, fromJS } from 'immutable'

const initialState = fromJS({
    counters: [
        {
          number: 5,
          diff: 1
        }
    ]
})
  
  const SET_DIFF = "SET_DIIF";
  const INCREASE = "INCREASE";
  const DECREASE = "DECREASE";
  
  export const setDiff = (diff) => ({ type: SET_DIFF, diff });
  export const increase = () => ({ type: INCREASE });
  export const decrease = () => ({ type: DECREASE });
  
  
  export default function counter(state = initialState, action) {
    const counters = state.get('counters')
    const diff = state.getIn(['counters', 0, 'diff'])
    // console.log("counters at reducer: ", counters);
    switch (action.type) {
      case SET_DIFF:
        return state.set('counters', counters.updateIn([0, 'diff'], ()=> action.diff))  
        // return {
        //   ...state,
        //   diff: action.diff
        // };
      case INCREASE:
          return state.set('counters', counters.updateIn([0, 'number'], (value)=> value+diff))
        //   return state.set('counters', counters.update(0, (object)=> object.set('number', object.get('number')+1)))
        // return {
        //   ...state,
        //   number: state.number + state.diff
        // };
      case DECREASE:
          return state.set('counters', counters.updateIn([0, 'number'], (value)=> value-diff))
        //   return state.set('counters', counters.update(0, (object)=> object.set('number', object.get('number')-1)))
        // return {
        //   ...state,
        //   number: state.number - state.diff
        // };
      default:
        return state;
    }
  }


//case types.CREATE:
//  return state.set('counters', counters.push(Map({
//      color: action.color,
//      number: 0
//  })))
//// slice 를 이용하여 맨 마지막 카운터를 제외시킵니다
//case types.REMOVE:
//    return state.set('counters', counters.pop());
  