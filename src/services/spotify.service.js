import http from '../http-common';

class Spotify {
	authorize() {
		return http.get('/spotify/authorize');
	}

	token(code) {
		const headers = {
			'Authorization': code,
		  };
		return http.get('/spotify/token', {headers});
	}

	addSongs(code) {
		const headers = {
			'Authorization': code,
		  };
		return http.get('/spotify/add-songs', {headers});
	}
}

export default new Spotify();
