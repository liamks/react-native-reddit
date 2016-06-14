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
          {/* Left Button */}
          <TouchableHighlight
            style={[styles.button, !this.props.back && styles.hide]}
            onPress={this.props.back}
            underlayColor='#CFE3FA'
          >
            <Text style={ styles.buttonText }>{'\u2039'} Back</Text>
          </TouchableHighlight>
          <Text style={styles.title}>{this.title}</Text>
          {/* Right Button, helps title stay centered! */}
          <TouchableHighlight style={[styles.button, styles.hide]}>
            <Text></Text>
          </TouchableHighlight>
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
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    flex: 1
  },
  button: {
    width: 80,
    backgroundColor: '#CFE3FA',
    alignItems: 'center'
  },
  buttonText: {
    fontSize:18,
    color: '#fff',
    backgroundColor: '#CFE3FA',
    padding: 0,
    margin: 0
  },
  hide: {
    opacity: 0
  }
});

export default RedditNavigationBar;
