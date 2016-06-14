import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

import RedditNavigationBar from './reddit-nav-bar.js';

const REDDIT_COMMENTS = [
  {text: 'lol'},
  {text: 'ftw'}
];

class RedditComments extends Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(REDDIT_COMMENTS)
    };
  }

  renderRow(rowData){
    return (
      <View style={styles.row}>
        <Text>{rowData.text}</Text>
      </View>
    );
  }

  render(){
    return (
      <View style={styles.outerContainer}>
        <RedditNavigationBar
          title="Reddit"
          showBackButton={true}
          back={() => this.props.navigator.pop() }/>
        <View style={styles.container}>
          <Text>Article!</Text>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingTop: 4,
    paddingBottom: 4,
    flex: 1
  }
});

export default RedditComments;
