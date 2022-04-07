import './scss/style.scss';

/*
불변성 (immutable)
	- 특정 데이터를 변경할때에는 원본을 수정하지 않으면서 새로운 복사본으로 수정을 해야됨
	- 원본과 수정본이 같이 있어야 변경점을 인지할 수 있기 때문

	참조형 자료 (배열, 객체)
	- 참조형 자료를 새로운 변수에 옮겨담으면 해당 자료값 자체가 복사가 되는 것이 아닌
	- 해당 자료의 참조주소만 복사가 되서 변수에 옮겨담김
	- 변수를 계속 생성을 해서 참조자료값을 복사해봤자 각 변수는 할당된 참조 주소는 같은 데이터를 참조하고 있기 때문에 
	- 하나의 변수에 할당되어 있는 참조값을 수정해도 모든 자료가 다 같이 변경 
	- 위와 같은 이유로 참조형 자료는 불변성이 유지가 안됨

	전개연산자 (Spread Operator)
	- 참조형 자료를 실제 Deep Copy해서 원본은 유지하면서 새로운 복사본을 만들어주는 연산자

const arr1 = ['red', 'green', 'blue'];
//변수 arr1을 변수 arr2에 옮겨 담음
//실제로는 배열이 변수에 할당되어 있는 것이 아닌 참조주소만 복사됨
const arr2 = arr1;

//arr2의 값을 변경했지만
arr2[0] = 'hotpink';
//같은 값을 참조하고 있기 때문에 arr1, arr2값이 모두 변경되는 것을 확인 (불변성 실패)
console.log('arr2', arr2);
console.log('arr1', arr1);

const interests = ['sports', 'game', 'music'];
//전개연산자로 기존 배열을 deep copy
const newInterests = [...interests];
//완전히 복사된 배열을 수정했기 때문에
newInterests[0] = 'painting';
//두개의 배열은 불변성을 유지
console.log('newInterests', newInterests);
console.log('interests', interests);

//전개 연산자를 이용해서 기존배열에 특정값을 추가해서 새로운 배열을 반환
const fruits = ['apple', 'melon', 'strawberry'];
// const newFruits = ['mango', ...fruits];
// console.log('newFruits', newFruits); //mango가 배열의 맨 앞에 추가됨
const newFruits = [...fruits, 'mango'];
console.log('newFruits', newFruits); //mango가 배열의 맨 뒤에 추가됨

//전개 연산자를 이용해서 복수개의 객체값을 합쳐서 새로운 객체를 반환
const defaultOpt = { speed: 500, active: false };
const userOpt = { speed: 500, active: true, name: 'abc' };
const newOpt = { ...defaultOpt, ...userOpt };
console.log('newOpt', newOpt);

//es6 전개연산자가 나오기 전에 객체를 합쳐서 새로운 객체를 반환
const student1 = { name: '홍길동', age: 20 };
const student2 = { name: '김영철', age: 20 };
const newStudent = Object.assign({}, student1, student2);
console.log('newStudent', newStudent);
*/

//아래의 두 배열을 합칠때 발생하는 문제점 찾기
const num1 = [1, 2, 3];
const num2 = [3, 4, 5];
//배열을 전개연산자로 합치면 객체와는 다르게 중복되는 값이 생김
let newNum = [...num1, ...num2];
//기존의 중복되는 값을 제거 (but 객체로 변환됨)
newNum = new Set(newNum); //{1,2,3,4,5}
//객체를 다시 배열로 강제 변환
newNum = Array.from(newNum); //[1,2,3,4,5]
console.log('newNum', newNum);

function App() {
	return <></>;
}

export default App;
