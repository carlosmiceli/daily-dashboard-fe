import http from '../http-common';

class Usd {
	get() {
		return http.get('/usd');
	}
}
export default new Usd();
