import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from './components/Title.jsx';
import CardContainer from './views/cardContainer/CardContainer';

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
