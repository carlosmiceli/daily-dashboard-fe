import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title(props) {
	return (
		<Typography
			component='h2'
			variant='h2'
			color='primary'
			style={{
				textAlign: 'center',
				marginTop: '20px',
				marginBottom: '20px',
			}}
		>
			{props.children}
		</Typography>
	);
}

Title.propTypes = {
	children: PropTypes.node,
};
export default Title;
