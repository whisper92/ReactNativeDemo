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
  button: {
    height: 36,
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
class ImageContainTextView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image style={{alignItems:'center',justifyContent:'center'}} source={require('image!whisper')}>
            <Text style={{color:'red'}}>whisper</Text>
        </Image>
      </View>
    );
  }
};

module.exports = ImageContainTextView;
