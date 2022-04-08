import './scss/style.scss';
import { useState } from 'react';

function App() {
	let [num, setNum] = useState(0);
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
