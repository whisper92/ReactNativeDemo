/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TextView = require('./TextView');
var ImageView = require('./ImageView');
var TextInputView = require('./TextInputView');
var TouchableHighlightView = require('./TouchableHighlightView');
var AlertView = require('./AlertView');

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

class BaseWidgetsNavigator extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.nav}
        initialRoute={{
          title: 'Base Widgets',
          component: BaseWidgetsView,
        }}/>
    );
  }
}


class BaseWidgetsView extends Component {
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

  onIamgePressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "ImageView",
      component: ImageView,
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

  onTouchableHighlightPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "TouchableHighlightView",
      component: TouchableHighlightView,
      passProps: {
        url: url
      }
    })
  }

  onAlertPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "AlertView",
      component: AlertView,
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

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onIamgePressed()}>
          <Text style={styles.buttonText}>&lt;Image/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onTextInputPressed()}>
          <Text style={styles.buttonText}>&lt;TextInput/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress= {this.onTouchableHighlightPressed.bind(this)}>
          <Text style={styles.buttonText}>&lt;TouchableHighlight/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress= {this.onAlertPressed.bind(this)}>
          <Text style={styles.buttonText}>&lt;Alert/&gt;</Text>
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

module.exports = BaseWidgetsView;
