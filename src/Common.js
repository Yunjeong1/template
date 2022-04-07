function Header() {
	return (
		<header>
			<h1>Header</h1>
		</header>
	);
}

function Footer() {
	return (
		<footer>
			<h1>footer</h1>
		</footer>
	);
}

function Popup() {
	return (
		<aside>
			<h1>popup</h1>
		</aside>
	);
}

//하나의 파일에서 여러개의 컴포넌트 함수를 객체로 묶어서 export할 수 있음
export { Header, Footer, Popup };
//함수, 배열도 객체
