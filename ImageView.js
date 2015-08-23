'use strict';

var React = require('react-native');
var ResizeModeView = require('./ResizeModeView');
var ImageContainTextView = require('./ImageContainTextView');

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
class ImageView extends Component {
    onResizeModePressed() {
      console.log('Text - highlight')
      var url = 'http://www.tuicool.com/'
      console.log(url)

      this.props.navigator.push({
        title: "ResizeModeView",
        component: ResizeModeView,
        passProps: {
          url: url
        }
      })
    }

    onImageContainTextPressed() {
        console.log('Text - highlight')
        var url = 'http://www.tuicool.com/'
        console.log(url)

        this.props.navigator.push({
          title: "ImageContainTextView",
          component: ImageContainTextView,
          passProps: {
            url: url
          }
        })
    }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('image!whisper')}></Image>

        <Image style={{width:200,height:80}} source={{uri:'https://www.baidu.com/img/bdlogo.png'}}></Image>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onResizeModePressed()}>
            <Text>resizeMode</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onImageContainTextPressed()}>
            <Text>ImageContainText</Text>
        </TouchableHighlight>

      </View>
    );
  }
};

module.exports = ImageView;
