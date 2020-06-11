
import React from 'react'
import { Map, List } from 'immutable';

// 1. 객체는 Map
// 2. 배열은 List
// 3. 설정할땐 set
// 4. 읽을땐 get
// 5. 읽은다음에 설정 할 땐 update
// 6. 내부에 있는걸 ~ 할땐 뒤에 In 을 붙인다: setIn, getIn, updateIn
// 7. 일반 자바스크립트 객체로 변환 할 땐 toJS
// 8. List 엔 배열 내장함수와 비슷한 함수들이 있다 – push, slice, filter, sort, concat… 전부 불변함을 유지함
// console.log(9. 특정 key 를 지울때 (혹은' List 에서 원소를 지울 때) delete 사용')


console.group("1. 객체는 Map")
const obj = Map({
    foo: 1,
    inner: Map({
      bar: 10
    }),
})
console.groupEnd();
console.log("obj.toJS", obj.toJS());

console.group("2. 배열은 List");
const arr = List([
    Map({ foo: 1 }),
    Map({ bar: 2 }),
]);
console.log("arr.toJS", arr.toJS());
console.groupEnd();

console.group("3. 설정할땐 set")
let nextObj = obj.set('foo', 5);
console.log("nextObj.toJS", nextObj.toJS());
console.groupEnd();

console.group("4. 읽을땐 get");
console.log(obj.get('foo'));
console.log(arr.get(0)); // List 에는 index 를 설정하여 읽음
console.groupEnd();

console.group("5. 읽은다음에 설정 할 때는 update");
// 두번째 파라미터로는 updater 함수가 들어감 
nextObj = nextObj.update('foo', value => value + 1);
console.log(nextObj.toJS());
console.groupEnd();

console.group("6. 내부에 있는걸 ~ 할땐 In 을 붙인다");
nextObj = obj.setIn(['inner', 'bar'], 20);
console.log('6. nextObj: ', nextObj.getIn(['inner', 'bar']));

let nextArr = arr.setIn([0, 'foo'], 10);
console.log('6. nextArr: ', nextArr.getIn([0, 'foo']));
console.groupEnd();

console.group('8. List 내장함수는 배열이랑 비슷하다')
nextArr = arr.push(Map({ qaz: 3 }));
console.log(nextArr.toJS());

nextArr = arr.filter(item => item.get('foo') === 1);
console.log(nextArr.toJS());
console.groupEnd();

console.group('9. delete 로 key 를 지울 수 있음')
nextObj = nextObj.delete('foo');
console.log(nextObj.toJS());

nextArr = nextArr.delete(0);
console.log(nextArr.toJS());
console.groupEnd();

const Immutable = () => {
    return (
        <div>
            {obj.toJS().foo}
        </div>
    )
}

export default Immutable;