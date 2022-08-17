import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from './components/Title.jsx';
import CardContainer from './views/cardContainer/CardContainer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<div
			style={{
				padding: '0 50px',
			}}
		>
			<Title>Carlos' Daily Stuff</Title>
			<CardContainer />
		</div>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
