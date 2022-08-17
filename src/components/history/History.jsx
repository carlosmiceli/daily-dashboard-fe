import * as React from 'react';
import parse from 'html-react-parser';
import history from '../../services/history.service';
import Typography from '@mui/material/Typography';
import './styles.css';

export default function History() {
	const [dailyHistory, setDailyHistory] = React.useState('');

	React.useEffect(() => {
		history
			.get()
			.then((res) => {
				setDailyHistory(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<div className='history'>
				<Typography sx={{ fontSize: 14 }} gutterBottom>
					{parse(dailyHistory)}
					<br />
					<br />
					Historical data provided by{' '}
					<a
						href='https://zenquotes.io/'
						target='_blank'
						rel='noreferrer'
					>
						ZenQuotes API
					</a>
					.
				</Typography>
			</div>
		</div>
	);
}
