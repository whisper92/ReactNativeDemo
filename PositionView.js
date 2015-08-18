'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var PixelRatio = require('PixelRatio');
var {
  StyleSheet,
  Image,
  View,
  Text,
  Component
} = React;

var styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7e7e7e',
  },
  tvcontainer: {
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red'
  }
});

class DimensionsView extends Component {
  render() {
      var {width,height} = Dimensions.get('window');
      var ratio = PixelRatio.get();
    return (
      <View style={styles.container}>
        <View style={[{width: 200 ,height: 200,backgroundColor: '#6a6a6a',marginBottom:10}]}><View style={[{width: 50 ,height: 50,backgroundColor: '#a6a6a6'}]} /><View style={[styles.circle,{position:'absolute',left:70,top:20}]}></View></View>
        <View style={[{width: 200 ,height: 200,backgroundColor: '#a6a6a6'}]}><View style={[{width: 50 ,height: 50,backgroundColor: '#6a6a6a'}]} /><View style={[styles.circle,{position:'relative',left:70,top:20}]}></View></View>
      </View>
    );
  }
};

module.exports = DimensionsView;
