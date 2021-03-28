import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import '../styles/App.css';
import Login from './Login';
import { pickTokenFromUrl } from '../spotify';
import Player from './Player';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const _token = pickTokenFromUrl();
    window.location.hash = "";
    if(_token) {
			console.log(_token);
			localStorage.setItem('token', _token)
      setToken(_token);
      const spotifyApi = new SpotifyWebApi();
      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then((user) => {
        console.log(user);
      })
    }else {
			// setToken(localStorage.getItem('token'))
		}
},[])
  return (
    <div className="app">
      {
      token? <Player /> : <Login />
      }
    </div>
  );
}

export default App;
