import React, { useState, useEffect } from 'react';
import spotify from '../../services/spotify.service';
import './styles.css';

export default function Spotify() {
	const playlistUrl = `https://open.spotify.com/embed/playlist/6BEoKex6bLNP9NPqJAKxTk?utm_source=generator&theme=0`;

	const [iframeSrc, setIframeSrc] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const spotifyToken = localStorage.getItem('spotify_token');
		if (spotifyToken) {
			setLoggedIn(true);
			setIframeSrc(playlistUrl);
		}
		else {
			console.log('No token found')
		}
	}, []);

	const checkAuthorization = () => {
		// Check if the user is already authorized
		const spotifyToken = localStorage.getItem('spotify_token');	
		if (!spotifyToken) {
			console.log('Not logged in')
			authorizeAndLogin()
		}
		else {
			console.log('Already logged in')
			setLoggedIn(true);
			setIframeSrc(playlistUrl);
		}
	}

	const authorizeAndLogin = () => {
		spotify.authorize()
			.then((response) => {
				const popupWindow = window.open(response.data, 'Spotify authorization', 'width=500,height=600');
				const timer = setInterval(() => {
					if (popupWindow.closed) {
						clearInterval(timer);
					} else {
						const popupURL = popupWindow.location.href;
						if (popupURL.includes('code=')) {
							const code = new URLSearchParams(new URL(popupURL).search).get('code');
							if (code) {
								spotify.token(code)
								  .then((response) => {
									const spotifyToken = response.data;
									localStorage.setItem('spotify_token', spotifyToken);
									popupWindow.close();
									clearInterval(timer);
								  })
								  .catch((error) => {
									console.log(error);
								  });
							  }
							setIframeSrc(playlistUrl);
							setLoggedIn(true);
							popupWindow.close();
							clearInterval(timer);
						}
					}
				}, 500);
			})
			.catch((error) => {
				console.log({ error });
			});
	};


	const handleButtonClick = () => {
		// add headers and send token
		const token = localStorage.getItem('spotify_token');
		spotify.addSongs(token)
			.then(response => {
				console.log('Success adding songs')
			})
			.catch(error => {
				console.log({ error })
			})
	};

	return (
		<div className="spotify">
			<button className={'spotify-button'} onClick={loggedIn ? handleButtonClick : checkAuthorization}>
				{loggedIn ? 'Add New Spotify Songs for DJ Sets' : 'Authorize'}
			</button>
			<div className="divider"></div>
			{loggedIn ? (
				<iframe
					title="Spotify APIs Recommendation Playlist"
					src={iframeSrc}
					width="100%"
					height="100%"
					style={{ minHeight: '360px' }}
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				/>
			) : (
				<div>Authorize to access the playlist</div>
			)}
		</div>
	);
}


