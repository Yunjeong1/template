//props객체는 전달된 imgSrc, path 값을 컴포넌트 내부에서 활용
function Card(props) {
	return (
		<article>
			<img src={`${props.path}/img/${props.imgSrc}.jpg`} />
			<p>{props.imgSrc}</p>
		</article>
	);
}

export default Card;
