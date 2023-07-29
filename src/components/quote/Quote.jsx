import * as React from 'react';
import quote from '../../services/quote.service';
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
				<p sx={{ fontSize: 14 }}>
					{dailyQuote && `"${dailyQuote.q}" - ${dailyQuote.a}`}
				</p>
			</div>
		</div>
	);
}
