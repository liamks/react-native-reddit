import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';
import { connect } from 'react-redux';

import RedditNavigationBar from './reddit-nav-bar.js';
import { fetchComments } from '../actions/reddit-actions.js';

class RedditComments extends Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.comments)
    };
  }

  componentDidMount() {
    this.props.fetchComments(this.props);
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.comments)
    });
  }

  renderRow(rowData){
    return (
      <View style={styles.row}>
        <Text>{rowData.body}</Text>
      </View>
    );
  }

  render(){
    return (
      <View style={styles.outerContainer}>
        <RedditNavigationBar
          title="Reddit"
          back={this.props.navigator.pop}
        />
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

const mapStateToProps = (state) => {
  return { comments: state.comments };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (redditStory) => {
      return fetchComments(redditStory)(dispatch);
    }
  }
}

RedditComments = connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditComments);

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
