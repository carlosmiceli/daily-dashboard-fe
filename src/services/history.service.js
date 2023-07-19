import http from '../http-common';

class History {
	get() {
		return http.get('/history');
	}
}
export default new History();
