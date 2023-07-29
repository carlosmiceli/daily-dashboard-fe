import * as React from 'react';
import CardBox from '../../components/cardBox/CardBox';
import './styles.css';

export default function CardContainer() {
	return (
		<div className='cardContainer'>
			<CardBox title='Daily Coding Challenge' type={'challenges'} />
			<CardBox type={'spotify'} />
			<CardBox title='Dollar Today' type={'usd'} />
			<CardBox title='On This Day' type={'history'} />
			<CardBox title='Random Quote' type={'quote'} />
			<CardBox title='Time Left' type={'life'} />
		</div>
	);
}
