export function setPosts() {
  const postsUrl = `${process.env.REACT_APP_API_URL}/sources/freeCodeCamp`;
  const promise = fetch(postsUrl).then(r => r.json());

  return {
    type: 'SET_POSTS',
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
