import './scss/style.scss';
import { useState } from 'react';

function App() {
	let [num, setNum] = useState(0);

	//변경할 배경색을 관리할 state추가 (초기값은 gray)
	let [bg, setBg] = useState('gray');

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
