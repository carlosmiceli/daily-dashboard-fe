import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardContainer from './views/cardContainer/CardContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
			<CardContainer />
	</React.StrictMode>
);
