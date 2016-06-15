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

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

const receiveComments = (json) => {
  return {
    type: RECEIVE_COMMENTS,
    comments: json[1].data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

const fetchComments = ({subreddit, id, slug}) => {
  var path = `/r/${subreddit}/comments/${id}/${slug}.json`;
  var url = `http://www.reddit.com${path}`;

  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveComments(json)));
  }
}

export { fetchPosts, fetchComments };
