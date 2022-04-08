import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	//<React.StrictMode>
	<App />
	//</React.StrictMode>
);

// 리액트에서 strict모드일때는 컴포넌트가 return문 실행이 될때에도 useEffect 호출
//strict모드를 해제하면 useEffect문이 한번씩만 호출
