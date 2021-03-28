import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import '../styles/App.css';
import Login from './Login';
import { pickTokenFromUrl } from '../spotify';
import Player from './Player';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    let _token = pickTokenFromUrl();
    window.location.hash = "";
    const spotifyApi = new SpotifyWebApi();
    if(_token) {
			console.log(_token);
			localStorage.setItem('token', _token)
      setToken(_token);
      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then((user) => {
        console.log(user);
      })
    }else {
      _token = localStorage.getItem('token');
      setToken(_token)
      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then((user) => {
        console.log(user);
      })
      // spotifyApi.play()
      //   .then((resp) => resp.json())
      //   .then(p => console.log(p))
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
