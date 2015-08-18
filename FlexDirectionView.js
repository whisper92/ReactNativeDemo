'use strict'

var React = require('react-native');
var {
    View,
    StyleSheet,
    Component,
    Text,
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tvcontainer: {
        margin: 2,
        width: 50,
        height:50,
        backgroundColor: '#303339',
        alignItems: 'center',
        justifyContent: 'center',
    },
    columnContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        fontSize: 8,
        color: '#ffffff',

    }
});
class FlexDirectionView  extends Component {
    render() {
        return (
            <View style={[styles.container,{marginTop: 30}]}>

                <View style={styles.columnContainer}>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                </View>
                
                <View style={styles.rowContainer}>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                </View>
            </View>
        );
    }
};

module.exports = FlexDirectionView;
