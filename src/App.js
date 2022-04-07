import './scss/style.scss';

function App() {
	const fontStyle = {
		fontSize: 20,
		color: 'red',
		fontWeight: 'normal',
		opacity: 0.2,
	};

	/*
	//window객체에는 addEventListener 연결가능한 이유가
	//가상돔과는 상관없이 항상있는 요소이기 때문에
	window.addEventListener('click',e=>{
		console.log(e.currentTarget);
	})
	*/

	return (
		<>
			{/* 가상돔에 직접 객체리터럴 형식으로 스타일 적용 가능 */}
			<h1 style={{ color: 'orange' }}>스타일 적용</h1>

			{/* 미리 스타일 객체를 변수에 할당하고, 가상DOM에 지정 가능 */}
			<h2 style={fontStyle}>서브 텍스트</h2>

			{/* 클릭했을때 색상 빨간색으로 변경되도록 */}
			<h3
				onClick={(e) => {
					e.target.style.color = 'red';
				}}>
				이벤트 스타일 변경
			</h3>

			<p></p>
		</>
	);
}

export default App;

/*
e.target
- 이벤트문 안에서 바인딩되어있는 요소를 참조
e.currentTarget
- 실제 이벤트가 발생한 대상이 참조
*/
