export function setPosts() {
  const postsUrl = `${process.env.REACT_APP_API_URL}/posts/all`;
  const promise = fetch(postsUrl).then(r => r.json());

  return {
    type: 'SET_POSTS',
    payload: promise
  };
}
export function updatePost(query) {
  const postUrl = `${process.env.REACT_APP_API_URL}/posts/update`;
  const promise = fetch(postUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: query.id,
      action: 'update',
      fields: query.fields
    })
  }).then(r => console.log(`server reply for update: ${r.json()}`));

  return {
    type: 'UPDATE_POST',
    payload: promise
  };
}
export function addSource(query) {
  const postUrl = `${process.env.REACT_APP_API_URL}/sources/`;
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
  }).then(r => console.log(`server reply for update: ${r.json()}`));

  return {
    type: 'ADD_SOURCE',
    payload: promise
  };
}

export function setSources() {
  const sourcesUrl = `${process.env.REACT_APP_API_URL}/sources/list`;
  const promise = fetch(sourcesUrl).then(r => r.json());
  return {
    type: 'SET_SOURCES',
    payload: promise
  };
}

export function selectPost(post) {
  return {
    type: 'SELECT_POST',
    payload: post
  };
}

export function selectModule(module) {
  return {
    type: 'SELECT_MODULE',
    payload: module
  };
}
export function sourceCreateModule(status) {
  return {
    type: 'SHOW_MODULE',
    payload: status
  };
}
