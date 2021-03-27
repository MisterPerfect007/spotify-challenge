
export const authEndpoint = "https://accounts.spotify.com/authorize";

const  redirectUri = "http://localhost:3000/";

const clientID = "b907c96c74d84fa8b633bb098be2e32c";

const scopes = "user-read-currently-playing user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state";

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;

export const pickTokenFromUrl = () => {
    return (window.location.hash).split("&")[0].split("=")[1];
}