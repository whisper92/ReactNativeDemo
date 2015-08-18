/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var FlexboxView = require('./FlexboxView');
var CSSView = require('./CSSView');
var BaseWidgetsView = require('./BaseWidgetsView');


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

/*
<Image source={{uri:'http://cc.cocimg.com/api/uploads/20150408/1428472690963397.jpg'}} style={styles.pic}>
</Image>
*/

class HelloNavigator extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.nav}
        initialRoute={{
          title: 'Chapters',
          component: Chapters,
        }}/>
    );
  }
}


class Chapters extends Component {
  onFlexboxViewPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "Flexbox",
      component: FlexboxView,
      passProps: {
        url: url
      }
    })
  }

  onCSSViewPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "CSS",
      component: CSSView,
      passProps: {
        url: url
      }
    })
  }

  onTextInputPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "TextInputView",
      component: TextInputView,
      passProps: {
        url: url
      }
    })
  }

  onBaseWidgetsViewPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "BaseWidgets",
      component: BaseWidgetsView,
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
            onPress={() => this.onFlexboxViewPressed()}>
          <Text style={styles.buttonText}>&lt;Flexbox/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onCSSViewPressed()}>
          <Text style={styles.buttonText}>&lt;CSS/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onBaseWidgetsViewPressed()}>
          <Text style={styles.buttonText}>&lt;BaseWidgets/&gt;</Text>
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

AppRegistry.registerComponent('HelloReactNative', function(){return HelloNavigator});
