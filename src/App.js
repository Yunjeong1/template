import './scss/style.scss';
import { useState, useRef } from 'react';

/*
useRef
- 아직 리얼돔으로 변경되지 않은 가상돔을 미리 객체에 담아서 참조

const 변수 = useRef(null);
--> current 라는 키값이 있는 객체를 반환
--> 반환된 빈 객체를 원하는 가상돔 요소에 ref 속성으로 지정
--> ref로 지정된 가상돔이 해당 객체에 저장
*/

function App() {
	let [num, setNum] = useState(0);
	//가상돔이 참조될 빈 객체를 useRef로 생성
	let box = useRef(null);
	console.log(box);

	return (
		<>
			<article>
				<button
					onClick={() => {
						setNum(--num);
						//컴포넌트에서 참조된 가상돔을 자유롭게 호출 가능
						box.current.style.transform = `rotate(${45 * num}deg)`;
					}}>
					반시계방향 회전
				</button>
				<button
					onClick={() => {
						setNum(++num);
						box.current.style.transform = `rotate(${45 * num}deg)`;
					}}>
					시계방향 회전
				</button>
				{/* 참조하고싶은 가상돔의 ref속성을 추가하고 useRef로 만든 객체 연결 */}
				<div className='box' ref={box}></div>
			</article>
		</>
	);
}

export default App;
