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
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  },
  padding: {
    padding: 10,
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
class TextView extends Component {
  onTextPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "TextView",
      component: TextView,
      passProps: {
        url: url
      }
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={() => this.onTextPressed()}>
        <Text style={styles.buttonText}>&lt;Text/&gt;</Text>
      </TouchableHighlight>

        <Text style={styles.description}>Text</Text>

        <Text style={[styles.description ,{color:'#ff0000',padding:20}]}>Text1</Text>

      </View>
    );
  }
};

module.exports = TextView;
