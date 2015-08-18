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
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
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
        <Text style={styles.description}>TextInput</Text>
      </View>
    );
  }
};

module.exports = TextView;
