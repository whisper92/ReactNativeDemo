/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var FlexDirectionView = require('./FlexDirectionView');
var FlexWrapView = require('./FlexWrapView');
var AlignItemsView = require('./AlignItemsView');
var JustifyContentView = require('./JustifyContentView');
var TouchableHighlightView = require('./TouchableHighlightView');
var FlexView = require('./FlexView');
var AlignSelfView = require('./AlignSelfView');

var {
  AlertIOS,
  AppRegistry,
  StyleSheet,
  View,
  NavigatorIOS,
  TouchableHighlight,
  Text,
  Image,
  Component,
  NavigatorIOS,
} = React;


class Flexbox extends Component {
  onFlexDirectionViewPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "FlexDirection",
      component: FlexDirectionView,
      passProps: {
        url: url
      }
    })
  }

  onFlexWrapViewPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "FlexWrap",
      component: FlexWrapView,
      passProps: {
        url: url
      }
    })
  }

  onAlignItemsPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "AlignItems",
      component: AlignItemsView,
      passProps: {
        url: url
      }
    })
  }

  onJustifyContentPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "JustifyContent",
      component: JustifyContentView,
      passProps: {
        url: url
      }
    })
  }

  onFlexViewPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "Flex",
      component: FlexView,
      passProps: {
        url: url
      }
    })
  }

  onAlignSelfViewPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "AlignSelf",
      component: AlignSelfView,
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
            onPress={() => this.onFlexDirectionViewPressed()}>
          <Text style={styles.buttonText}>&lt;FlexDirection/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onFlexWrapViewPressed()}>
          <Text style={styles.buttonText}>&lt;FlexWrap/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onAlignItemsPressed()}>
          <Text style={styles.buttonText}>&lt;AlignItems/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onJustifyContentPressed()}>
          <Text style={styles.buttonText}>&lt;JustifyContent/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onFlexViewPressed()}>
          <Text style={styles.buttonText}>&lt;Flex/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onAlignSelfViewPressed()}>
          <Text style={styles.buttonText}>&lt;AlignSelf/&gt;</Text>
        </TouchableHighlight>


      </View>

    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  nav: {
    flex: 1
  },
    container: {
        flex: 1,
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#303339',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'red',
    },
    pic: {
        width: 200 ,
        height: 100,
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
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
});

module.exports = Flexbox;
