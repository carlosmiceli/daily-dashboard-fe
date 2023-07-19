import * as React from 'react';
import usd from '../../services/usd.service';
import Typography from '@mui/material/Typography';
import './styles.css';

export default function Usd() {
	const [dollar, setDollar] = React.useState();

	const addedTax = 1;

	React.useEffect(() => {
		usd.get()
			.then((res) => {
				setDollar(res.data)
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			{dollar && (
				<div className='usd'>
					<Typography
						sx={{ fontSize: 14 }}
						color='green'
						gutterBottom
					>
						{`Official Buy: ${
							Math.round(dollar.oficial.value_buy * 100) / 100
						}`}
					</Typography>
					<Typography
						sx={{ fontSize: 14 }}
						color='green'
						gutterBottom
					>
						{`Official Sell: ${
							Math.round(dollar.oficial.value_sell * 100) / 100
						}`}
					</Typography>
					<Typography
						sx={{ fontSize: 14 }}
						color='green'
						gutterBottom
					>
						{`Tourist Buy: ${
							Math.round(
								(dollar.oficial.value_buy +
									dollar.oficial.value_buy * addedTax) *
									100
							) / 100
						}`}
					</Typography>
					<Typography
						sx={{ fontSize: 14 }}
						color='green'
						gutterBottom
					>
						{`Tourist Sell: ${
							Math.round(
								(dollar.oficial.value_sell +
									dollar.oficial.value_buy * addedTax) *
									100
							) / 100
						}`}
					</Typography>
					<Typography
						sx={{ fontSize: 14 }}
						color='green'
						gutterBottom
					>
						{`Blue Buy: ${
							Math.round(dollar.blue.value_buy * 100) / 100
						}`}
					</Typography>
					<Typography
						sx={{ fontSize: 14 }}
						color='green'
						gutterBottom
					>
						{`Blue Sell: ${
							Math.round(dollar.blue.value_sell * 100) / 100
						}`}
					</Typography>
				</div>
			)}
		</div>
	);
}
