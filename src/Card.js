/*
//rfce
//props로 모든 전달된 값을 객체로 받아서 내부 컴포넌트에 적용
function Card(props) {
	const style = { backgroundColor: props.color };
	return <article style={style}>{props.color}</article>;
}

export default Card;
*/

//props로 전달되는 객체안쪽의 각 값들을 비구조화 할당으로 바로 전달
function Card({ color }) {
	const style = { backgroundColor: color };
	return <article style={style}>{color}</article>;
}

export default Card;
