import './scss/style.scss';
import { useState, useEffect } from 'react';
/*

useEffect
- 컴포넌트의 생명주기(life cycle)에 따라 특정 기능을 호출하는 hook 
- 컴포넌트 생성, 변경, 소멸
- useEffect(호출할 함수, [의존성 배열])

- 컴포넌트 생성시
	useEffect(()=>{
		이곳의 구문이 처음 로딩시 한번만 호출
	}, [])
	
- 컴포넌트 소멸시
	useEffect(()=>{
		return() =>{
			컴포넌트가 사라질때 한번만 호출
		}
	},[])

-컴포넌트 변경시
	useEffect(()=>{
		의존성배열에 등록한 state값이 변경될때마다 호출
	}, [state])
*/

function App() {
	let [num, setNum] = useState(0);
	//변경할 배경색을 관리할 state추가 (초기값은 gray)
	let [bg, setBg] = useState('gray');

	//의존성배열이 비어있으므로 처음 컴포넌트 실행시 한번만 호출
	useEffect(() => {
		console.log('App생성');

		//의존성배열이 비어있으므로 컴포넌트 소멸시 한번만 호출
		return () => {
			console.log('App소멸');
		};
	}, []);

	//state값(num)이 변경될때마다 호출
	useEffect(() => {
		console.log('num값 변경');
	}, [num]);

	useEffect(() => {
		console.log('bg값 변경');
	}, [bg]);

	return (
		<>
			<article className='counter'>
				<h1>{num}</h1>
				<button
					onClick={() => {
						// num--;
						// setNum(num);
						setNum(--num);
					}}>
					감소
				</button>
				<button
					onClick={() => {
						num++;
						setNum(num);
						//setNum(++num);
					}}>
					증가
				</button>
			</article>

			<article className='colorBox'>
				<div className='box' style={{ backgroundColor: bg }}></div>

				{/* 이벤트 연결 */}
				{/* <button onClick={e => {setBg('red');}}>red</button> */}
				<button
					onClick={(e) => {
						setBg(e.target.innerText);
					}}>
					red
				</button>
				<button
					onClick={(e) => {
						setBg(e.target.innerText);
					}}>
					green
				</button>
				<button
					onClick={(e) => {
						setBg(e.target.innerText);
					}}>
					blue
				</button>
			</article>
		</>
	);
}

export default App;
