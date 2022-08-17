import * as React from 'react';
import quote from '../../services/quote.service';
import Typography from '@mui/material/Typography';
import './styles.css';

export default function Quote() {
	const [dailyQuote, setDailyQuote] = React.useState('');

	React.useEffect(() => {
		quote
			.get()
			.then((res) => {
				setDailyQuote(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<div className='quote'>
				<Typography sx={{ fontSize: 14 }} gutterBottom>
					{dailyQuote && `"${dailyQuote.q}" - ${dailyQuote.a}`}
				</Typography>
			</div>
		</div>
	);
}
