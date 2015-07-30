'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  Text,
  Component
} = React;

var styles = StyleSheet.create({
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});
class TextView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Text</Text>
      </View>
    );
  }
};

module.exports = TextView;
