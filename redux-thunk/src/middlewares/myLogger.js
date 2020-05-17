// const middleware = store => next => action => {
// 	//하고 싶은 작업....
// }

// -->
// function middleware(store) {
// 	return function(next) {
// 		return function (action) {
// 				//하고 싶은 작업...
// 		}
// 	}
// }

const myLogger = store => next => action => {
  console.log("action: ", action);
  console.log('\tPrev: ', store.getState());
  //action을 다음 미들웨어에게, 미들웨어가 없다면 다음 reducers에게 action 전달
  const result = next(action);
  console.log('\tNext: ', store.getState());
  return result;
}

export default myLogger; 

//thunk middleware

// const thunk = store => next => action => 
//   typeof action === 'function'  타입이 함수면 함수 호출할 수 있도록
//     ? action(store.dispatch, store.getState)
//     : next(action)
// const myThunk = () => (dispatch, getState) => {
//   dispatch({type: 'HELLO'});
//   dispatch({type: 'BYE'});
// }
// dispatchEvent(myThunk())