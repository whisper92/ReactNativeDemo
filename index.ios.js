/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TextView = require('./TextView');
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

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.nav}
        initialRoute={{
          title: 'Base Widgets',
          component: HelloReactNative,
        }}/>
    );
  }
}


class HelloReactNative extends Component {
  onTextPressed() {
    console.log('Text - highlight')
    var url = 'http://www.tuicool.com/'
    console.log(url)
    var group = [];
    this.props.navigator.push({
      title: "TextView",
      component: TextView,
      passProps: {
        url: url
      }
    })
    console.log('onTextPressed - over')
  }

  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.welcome}>
            React-Native ：基本控件
        </Text>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => console.log('Text - highlight')}>
          <Text style={styles.buttonText}>&lt;Text/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => AlertIOS.alert(
              'Foo Title',
              'My Alert Msg'
            )}>
          <Text style={styles.buttonText}>&lt;Image/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this.onTextPressed()}>
          <Text style={styles.buttonText}>&lt;TextInput/&gt;</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress= {this.onTextPressed.bind(this)}>
          <Text style={styles.buttonText}>&lt;TouchableHighlight/&gt;</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('HelloReactNative', function(){return PropertyFinderApp});
