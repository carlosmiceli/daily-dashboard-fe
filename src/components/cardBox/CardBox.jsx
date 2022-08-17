import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Usd from '../usd/Usd';
import Quote from '../quote/Quote';
import History from '../history/History';

export default function CardBox(props) {
	let content;

	switch (props.type) {
		case 'spotify': {
			//statements;
			break;
		}
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
		case 'soundcloud': {
			//statements;
			break;
		}
		case 'dev-challenge': {
			//statements;
			break;
		}
		case 'dev-concept': {
			//statements;
			break;
		}
		case 'time-left': {
			//statements;
			break;
		}
		case 'nba': {
			//statements;
			break;
		}
		case 'dev-jobs': {
			//statements;
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
