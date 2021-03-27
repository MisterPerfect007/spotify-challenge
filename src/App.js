import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login';
import { pickTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const _token = pickTokenFromUrl();
    window.location.hash = "";
    if(_token) {
      setToken(_token);
      const spotifyApi = new SpotifyWebApi();
      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then((user) => {
        console.log(user);
      })
    }
},[])
  return (
    <div className="app">
      {
      token? <h1>Player</h1> : <Login />
      }
    </div>
  );
}

export default App;
