import './scss/style.scss';
import { useState } from 'react';
//useState , useEffect, useRef
//useState - 컴포넌트에 특정 정보값이 변경이 되면 해당 정보값에 관련된 view화면으로 자동으로 재 랜더링
//만약 위와 같은 기능이 없다면 개발자들은 특정 정보값을 변경해야할때마다 해당값이 어느 view에 쓰이는지 다 인지해야함
//프로젝트 범위가 커질수록 정보값에 매칭되는 모든 view를 일일이 관리하는것이 불가능

//리액트의 장점 - 특정 데이터만 관리하면 작업자가 해당 데이터가 매핑되는 view를 일일이 관리하지 않아도 자동갱신됨

/*
useState 사용법
const [상태값, 상태값을 변경하는 전용함수] = useState(초기값);
모든 hook은 무조건 컴포넌트함수 안쪽에서 호출 
*/
function App() {
	//기존 colors배열을 data라는 state를 만들어서 저장
	//data state값이 변경될때마다 해당 컴포넌트가 재실행되면서 화면이 재렌더링됨
	//state값은 무조건 state전용변경함수로 변경해야만 화면이 재랜더링됨
	const [colors, setColors] = useState(['red', 'green', 'blue']);

	return (
		<>
			<button
				onClick={() => {
					let newColors = [...colors];
					newColors[0] = 'hotpink';
					setColors(newColors);
				}}>
				색상변경
			</button>

			{colors.map((color, idx) => {
				const bg = { backgroundColor: color };
				return (
					<article key={idx} style={bg}>
						<p>{color}</p>
					</article>
				);
			})}
		</>
	);
}

export default App;
