const postUrl = process.env.REACT_APP_API_URL;

export function setPosts() {
  const promise = fetch(`${postUrl}/list`)
    .then(r => r.json())
    .catch(e => {
      return e;
    });

  return {
    type: 'SET_POSTS',
    payload: promise
  };
}
export function updatePost(query) {
  const postUrl = process.env.REACT_APP_API_URL;
  const promise = fetch(postUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
    .then(r => r.json())
    .catch(e => {
      return e;
    });

  return {
    type: 'UPDATE_POST',
    payload: promise
  };
}
export function addSource(query) {
  const promise = fetch(postUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      action: query.action,
      id: query.id || '',
      fields: query.fields
    })
  }).then(r => r.json());

  return {
    type: 'ADD_SOURCE',
    payload: promise
  };
}

export function setSources() {
  const promise = fetch(`${postUrl}/sources`).then(r => r.json());
  return {
    type: 'SET_SOURCES',
    payload: promise
  };
}

export function selectPost(postId) {
  const promise = fetch(`${postUrl}/post/${postId}`).then(r => r.json());
  return {
    type: 'SELECT_POST',
    payload: promise
  };
}

// export function selectModule(module) {
//   return {
//     type: 'SELECT_MODULE',
//     payload: module
//   };
// }

export function sourceCreateModule(status) {
  return {
    type: 'SHOW_MODULE',
    payload: status
  };
}
