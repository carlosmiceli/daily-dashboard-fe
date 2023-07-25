import axios from 'axios';

export default axios.create({
	baseURL: 'https://frolicking-taffy-108122.netlify.app/cards',
	headers: {
		'Content-type': 'application/json',
	},
});
