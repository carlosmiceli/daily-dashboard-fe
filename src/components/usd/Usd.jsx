import * as React from 'react';
import usd from '../../services/usd.service';
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
					<p
						sx={{ fontSize: 14 }}
					>
						{`Official Buy: ${
							Math.round(dollar.oficial.value_buy * 100) / 100
						}`}
					</p>
					<p
						sx={{ fontSize: 14 }}
					>
						{`Official Sell: ${
							Math.round(dollar.oficial.value_sell * 100) / 100
						}`}
					</p>
					<p
						sx={{ fontSize: 14 }}
					>
						{`Tourist Buy: ${
							Math.round(
								(dollar.oficial.value_buy +
									dollar.oficial.value_buy * addedTax) *
									100
							) / 100
						}`}
					</p>
					<p
						sx={{ fontSize: 14 }}
					>
						{`Tourist Sell: ${
							Math.round(
								(dollar.oficial.value_sell +
									dollar.oficial.value_buy * addedTax) *
									100
							) / 100
						}`}
					</p>
					<p
						sx={{ fontSize: 14 }}
					>
						{`Blue Buy: ${
							Math.round(dollar.blue.value_buy * 100) / 100
						}`}
					</p>
					<p
						sx={{ fontSize: 14 }}
					>
						{`Blue Sell: ${
							Math.round(dollar.blue.value_sell * 100) / 100
						}`}
					</p>
				</div>
			)}
		</div>
	);
}
