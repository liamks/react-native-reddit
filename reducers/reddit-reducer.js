import fetch from 'isomorphic-fetch';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const receivePosts = (json) => {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

const fetchPosts = () => {
  return dispatch => {

    return fetch('https://www.reddit.com/top.json')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

export { fetchPosts };
