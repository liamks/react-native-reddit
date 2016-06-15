/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { redditStoriesReducer, redditCommentsReducer } from './reducers/reddit-reducer.js';
import { fetchPosts } from './actions/reddit-actions.js';

import RedditList from './components/reddit-list.js';
import RedditComments from './components/reddit-comments.js';

const rootReducer = combineReducers({
  reddit: redditStoriesReducer,
  comments: redditCommentsReducer
});

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(
    thunkMiddleware
  )
);

class NativeReddit extends Component {
  renderScene(route, navigator){
      switch (route.name) {
        case 'RedditList':
          return <RedditList navigator={navigator} {...route.passProps} />
        case 'RedditComments':
          return <RedditComments navigator={navigator} {...route.passProps} />
        default:
          return <RedditList navigator={navigator} {...route.passProps} />
      }
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{name: 'RedditList'}}
          renderScene={this.renderScene}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('NativeReddit', () => NativeReddit);

// bootstrap app
(function initialize() {
  fetchPosts()(store.dispatch);
})();
