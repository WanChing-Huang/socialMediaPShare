//still wor on it
//fetch to server check session 
export function fetchSession() {
    return fetch('/api/session', {
      method: 'GET',
    })
      .catch(() => Promise.reject({ error: 'networkError' }))
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return response.json()
          .catch(error => Promise.reject({ error }))
          .then(err => Promise.reject(err));
      });
  }
  

export function fetchLogin(username, password) {
    return fetch('/api/session', {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({ username, password }),
    })
      .catch(() => Promise.reject({ error: 'networkError' }))
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return response.json()
          .catch(error => Promise.reject({ error }))
          .then(err => Promise.reject(err));
      });
  }
 
  //fetch user/:userId
  export function fetchUserPage(userID) {
    console.log('in fetchUserPage');
    return fetch(`/api/user/${userID}`, {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({userID}),
    })
      .catch(() => Promise.reject({ error: 'networkError' }))
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return response.json()
          .catch(error => Promise.reject({ error }))
          .then(err => Promise.reject(err));
      });
  }