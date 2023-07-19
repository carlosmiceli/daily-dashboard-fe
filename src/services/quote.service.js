import http from '../http-common';

class Quote {
	get() {
		return http.get('/quote');
	}
}
export default new Quote();
