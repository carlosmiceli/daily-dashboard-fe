import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from './components/Title.tsx';
import CardContainer from './components/CardContainer.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title>Carlos' Daily Stuff</Title>
    <CardContainer title='Spotify Recommendation'/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
