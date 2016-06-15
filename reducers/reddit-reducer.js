import { RECEIVE_POSTS, RECEIVE_COMMENTS } from '../actions/reddit-actions.js';

const redditStoriesReducer = (state=[], action) => {
  switch(action.type){
    case RECEIVE_POSTS:
      return action.posts;
    default:
      return state;
  }
}

const redditCommentsReducer = (state=[], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    default:
      return state;
  }
}

export { redditStoriesReducer, redditCommentsReducer };
