const getUserData = (accessToken) => {
  return fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
  }).then(response => response.json())
};

export default {
  getUserData
}