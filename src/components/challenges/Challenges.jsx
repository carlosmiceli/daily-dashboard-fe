
import * as React from 'react';
import challenge from '../../services/challenges.service';
import Typography from '@mui/material/Typography';
import './styles.css';

export default function Challenges() {
	const [chal, setChallenge] = React.useState();

	React.useEffect(() => {
		challenge.get()
			.then((res) => {
				setChallenge(res.data)
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			{challenge && (
				<div className='challenge'>
					<Typography
						sx={{ fontSize: 14 }}
						color='green'
						gutterBottom
					>
						{chal}
					</Typography>
				</div>
			)}
		</div>
	);
}
