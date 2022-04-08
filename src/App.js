import './scss/style.scss';
import Card from './Card';

//public폴더까지의 절대 경로값 구하기
const path = process.env.PUBLIC_URL;

//이미지명을 배열로 관리
function App() {
	const imgs = [
		'Blizzards',
		'Calm',
		'Dusty_Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
		'Vespers',
	];
	return (
		<>
			{/* 해당 배열의 데이터 개수만큼 Card컴포넌트 출력 */}
			{imgs.map((img, idx) => {
				return <Card key={idx} imgSrc={img} path={path} />;
			})}
		</>
	);
}

export default App;
