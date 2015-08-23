'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  Text,
  Component,
  TouchableHighlight,
} = React;

var styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
});
class ResizeModeView extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={{backgroundColor:'black',margin:10}}><Image style={{resizeMode:'cover',height:80}} source={require('image!whisper')}></Image></View>
          <View style={{backgroundColor:'black',margin:10}}><Image style={{resizeMode:'contain',height:80}} source={require('image!whisper')}></Image></View>
          <View style={{backgroundColor:'black',margin:10}}><Image style={{resizeMode:'stretch',height:80}} source={require('image!whisper')}></Image></View>
          <View style={{backgroundColor:'black',margin:10}}><Image source={require('image!whisper')}></Image></View>
      </View>
    );
  }
};

module.exports = ResizeModeView;
