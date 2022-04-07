import './scss/style.scss';

/*
	const 로 지정한 상수
	const로 지정한 값을 절대 변경이 안되나요?
	-- 상황에 따라 가능함
	-- 대입되는 값이 원시형 자료면 변경불가
	-- 대입되는 값이 참조형 자료면 변경가능
	-- 설사 대입되는 값이 참조형 자료라고 하더라도 재할당 자체는 불가
*/

//const로 지정한 변수에 원시형 자료는 재 할당 불가
/*
const name = 'David';
name = 'Andy';
console.log(name);
*/

//const로 지정했다고 하더라도 할당되는 값이 참조형 자료면 값을 변경가능
const arr = ['red', 'green', 'blue'];
arr[0] = 'hotpink';
console.log(arr);

//const로 저장되는 값이 참조형 자료라고 하더라도 기존의 값을 변경하는 것이 아닌 아예 재할당을 불가
const fruit = ['mango', 'apple'];
fruit = ['mango', 'apple', 'melon']; //오류

function App() {
	return <></>;
}

export default App;
