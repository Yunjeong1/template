import './scss/style.scss';
import { useState } from 'react';

function App() {
	let [num, setNum] = useState(0);

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
		</>
	);
}

export default App;
