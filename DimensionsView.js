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
      backgroundColor: '#F5FCFF',
  },
  tvcontainer: {
      margin: 2,
      backgroundColor: '#303339',
      alignItems: 'center',
      justifyContent: 'center',
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});

class DimensionsView extends Component {
  render() {
      var {width,height} = Dimensions.get('window');
      var ratio = PixelRatio.get();
    return (
      <View style={styles.container}>
        <Text style={styles.description}>window.width = {width}</Text>
        <Text style={styles.description}>window.height = {height}</Text>
        <View style={[styles.tvcontainer,{width: width/2 ,height: height/2}]}><Text style={styles.content}>Item</Text></View>
        
      </View>
    );
  }
};

module.exports = DimensionsView;
