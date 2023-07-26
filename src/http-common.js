import axios from 'axios';

export default axios.create({
	baseURL: 'https://daily-dashboard-be-production.up.railway.app/cards/',
	headers: {
		'Content-type': 'application/json',
	},
});
