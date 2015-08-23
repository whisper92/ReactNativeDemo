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
        <Text style={{fontSize:'30'}}>Parent
         <Text style={{color:'red'}}>Child</Text>
        </Text>

         <Text numberOfLines= {3} style={{margin:20}}>React Native 使你能够使用基于 JavaScript 和 React 构建世界一流的应用程序。 React Native 把重点放在所有开发人员关心的平台的开发效率上——开发者只需学习一种语言就能轻易为任何平台高效地编写代码。 通过该课程，学员可以理解 Flexbox， 并基本掌握 React Native 的样式和布局开发。 </Text>
      </View>
    );
  }
};

module.exports = TextView;
