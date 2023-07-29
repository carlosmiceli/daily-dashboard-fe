
import * as React from 'react';
import challenge from '../../services/challenges.service';
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
					<p
						sx={{ fontSize: 14 }}
						gutterBottom
					>
						{chal}
					</p>
				</div>
			)}
		</div>
	);
}
