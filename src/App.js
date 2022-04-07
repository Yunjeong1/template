import './scss/style.scss';

function App() {
	const colors = ['aqua', 'orange', 'lightgreen', 'hotpink'];

	return (
		<>
			{/* map으로 특정 배열값을 반복돌면서 JSX 가상돔 생성가능 */}
			{colors.map((color, idx) => {
				const style = { backgroundColor: color };
				return (
					//가상돔을 반복돌며 출력할때는 무조건 key값에 고유값 적용
					<article key={idx} style={style}>
						{color}
					</article>
				);
			})}
		</>
	);
}
/*
function App() {
	const colors = ['aqua', 'orange', 'lightgreen', 'hotpink'];
	return (
		<>
			<article style={{ backgroundColor: colors[0] }}>aqua</article>
			<article style={{ backgroundColor: colors[1] }}>orange</article>
			<article style={{ backgroundColor: colors[2] }}>lightgreen</article>
			<article style={{ backgroundColor: colors[3] }}>hotpink</article>
		</>
	);
}
*/

export default App;
