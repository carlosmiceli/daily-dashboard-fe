import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Usd from '../usd/Usd';
import Quote from '../quote/Quote';
import History from '../history/History';
import Life from '../life/Life';
import Challenges from '../challenges/Challenges';
import Spotify from '../spotify/Spotify';

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
		<div className='box'>
			<Card sx={{ minWidth: 400 }}>
				<CardContent>
					<Typography
						sx={{ fontSize: 20 }}
						color='text.primary'
						gutterBottom
					>
						{props.title}
					</Typography>
					{content}
				</CardContent>
			</Card>
		</div>
	);
}
