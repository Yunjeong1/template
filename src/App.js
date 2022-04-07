import './scss/style.scss';
import Card from './Card';

function App() {
	const colors = ['aqua', 'orange', 'hotpink'];
	/*
부모 컴포넌트에서 자식 컴포넌트로 특정 데이터를 전달하기 위해서는 자식 컴포넌트에 prop에 값을 담아서 전달
*/
	return (
		<>
			{colors.map((color, idx) => {
				return <Card key={idx} color={color} />;
			})}
		</>
	);
}

export default App;
