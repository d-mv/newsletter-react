export function setPosts() {
  const postsUrl = `${process.env.REACT_APP_API_URL}/sources/freeCodeCamp`;

  console.log(postsUrl);

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
