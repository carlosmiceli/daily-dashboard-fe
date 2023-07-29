import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Usd from '../usd/Usd';
import Quote from '../quote/Quote';
import History from '../history/History';
import Life from '../life/Life';
import Challenges from '../challenges/Challenges';
import Spotify from '../spotify/Spotify';
import './styles.css';

export default function CardBox(props) {
	let content;

	switch (props.type) {
		case 'quote': {
			content = <Quote />;
			break;
		}
		case 'history': {
			content = <History />;
			break;
		}
		case 'usd': {
			content = <Usd />;
			break;
		}
		case 'challenges': {
			content = <Challenges />;
			break;
		}
		case 'spotify': {
			content = <Spotify />
			break;
		}
		case 'chatbot': {
			//statements;
			break;
		}
		case 'life': {
			content = <Life />;
			break;
		}
		default: {
			break;
		}
	}

	return (
			<Card sx={{ width: '100%' }}>
				<CardContent>
					<h2
						sx={{ fontSize: 20 }}
					>
						{props.title}
					</h2>
					{content}
				</CardContent>
			</Card>
	);
}
