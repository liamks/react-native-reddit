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

import RedditList from './components/reddit-list.js';
import RedditComments from './components/reddit-comments.js';

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
      <Navigator
        initialRoute={{name: 'RedditList'}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('NativeReddit', () => NativeReddit);
