/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var DimensionsView = require('./DimensionsView');
var PositionView = require('./PositionView');
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


class CSSView extends Component {
  onDimensionsPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "Dimensions",
      component: DimensionsView,
      passProps: {
        url: url
      }
    })
  }

  onPositionPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)

    this.props.navigator.push({
      title: "Position",
      component: PositionView,
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
            onPress={() => this.onDimensionsPressed()}>
          <Text style={styles.buttonText}>&lt;Dimensions/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onPositionPressed()}>
          <Text style={styles.buttonText}>&lt;Position/&gt;</Text>
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

module.exports = CSSView;
