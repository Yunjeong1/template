import React from 'react';

function Card(props) {
	return (
		<article>
			<img src={`${props.path}/img/${props.imgSrc}.jpg`} />
			<p>{props.imgSrc}</p>
		</article>
	);
}

export default Card;
