import './scss/style.scss';
import { useState, useEffect } from 'react';

function App() {
	//버튼 클릭시 증가될 카운트값을 관리할 state
	let [num, setNum] = useState(0);
	//num값을 활용해서 실제 box가 회전할 각도값을 관리할 state
	let [rot, setRot] = useState(0);

	//num값이 변경될때마다 실행되는 useEffect 추가
	useEffect(() => {
		//num값이 변경될때마다 45를 곱해서 해당값을 다시 rot에 적용하여 변경
		setRot(45 * num);
		console.log('rot', rot);
	}, [num]);

	return (
		<>
			<article>
				<button
					onClick={() => {
						setNum(--num);
					}}>
					반시계방향 회전
				</button>
				<button
					onClick={() => {
						setNum(++num);
					}}>
					시계방향 회전
				</button>
				<div className='box' style={{ transform: `rotate(${rot}deg)` }}></div>
			</article>
		</>
	);
}

export default App;
