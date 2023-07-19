import http from '../http-common';

class Challenges {
	get() {
		return http.get('/challenges');
	}
}
export default new Challenges();
