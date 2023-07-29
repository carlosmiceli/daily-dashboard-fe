import * as React from 'react';
import parse from 'html-react-parser';
import history from '../../services/history.service';
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
				<p sx={{ fontSize: 14 }}>
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
				</p>
			</div>
		</div>
	);
}
