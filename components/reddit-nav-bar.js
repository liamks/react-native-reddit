import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class RedditNavigationBar extends Component {
  constructor(props){
    super(props);
    this.title = props.title;
  }

  render(){
    return (
      <View>
        <View style={styles.toolbar}>
          <TouchableHighlight
            style={[styles.button, this.props.showBackButton && styles.hide]}
            onPress={()=>{}}>
            <Text style={ styles.buttonText }>Back</Text>
          </TouchableHighlight>
          <Text style={styles.title}>{this.title}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#CFE3FA',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  hide: {
    width: 0,
    height: 0
  },
  title: {
    width: 100,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    flex: 1
  },
  button: {
    height:60,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize:20
  }
});

export default RedditNavigationBar;
