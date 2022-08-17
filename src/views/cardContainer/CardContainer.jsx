import * as React from 'react';
import CardBox from '../../components/cardBox/CardBox';
import './styles.css';

export default function CardContainer() {
	return (
		<div className='cardContainer'>
			<CardBox title='Time Left' type={'time-left'} />
			<CardBox title='Dollar Today' type={'usd'} />
			<CardBox title='Random Quote' type={'quote'} />
			<CardBox title='On This Day' type={'history'} />
			<CardBox title='Dev Jobs' type={'dev-jobs'} />
			<CardBox title='Daily Coding Challenge' type={'dev-challenge'} />
			<CardBox title='Daily Coding Concept' type={'dev-concept'} />
			<CardBox title='Spotify Recommendation' type={'spotify'} />
			<CardBox title='Soundcloud Recommendation' type={'soundcloud'} />
			<CardBox title='NBA News' type={'nba'} />
		</div>
	);
}
