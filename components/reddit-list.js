import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';

import RedditNavigationBar from './reddit-nav-bar.js';

const REDDIT_STORIES = [
  {
    title: 'Got another dog yesterday (right), he\'s settling in well!',
    thumbnail: 'https://b.thumbs.redditmedia.com/5SOQ6sNiqEyqh48M9MOgM6sZmj-5iejiddLuRhPkWxA.jpg'},
  {
    title: 'We found this gal constantly stealing from our peach trees, so we named her Peaches. (Very original, I know)',
    thumbnail: 'https://b.thumbs.redditmedia.com/8ZkujfQt-MmvxoB_oQdq5DOgT3L3VkaeBDz_O40MzTk.jpg'}
];

class RedditList extends Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(REDDIT_STORIES)
    };
  }

  renderRow(rowData){
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.navigator.push({
            name: 'RedditComments',
            passProps: {}
          });
        }}
        underlayColor={'#ddd'}
      >
        <View style={styles.row}>
          <Image style={styles.image} source={{uri: rowData.thumbnail}} />
          <View style={styles.rightColumn}>
            <Text style={styles.title}>{rowData.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <RedditNavigationBar title="Reddit"  showBackButton={false}/>
        <View style={styles.container}>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderRow(rowData)}
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
    flex: 1,
    flexDirection: 'row'
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 5
  },
  title: {
    fontSize: 16
  },
  image: {
    width: 100,
    height: 100
  }
});

export default RedditList;
