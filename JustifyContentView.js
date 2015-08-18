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
        padding: 10,
        backgroundColor: '#303339',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexStartContainer: {
        flex: 1,
        width: 200,
        backgroundColor: '#6a6a6a',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },
    flexEndContainer: {
        flex: 1,
        width: 200,
        backgroundColor: '#a6a6a6',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
    },
    spaceBetweenContainer: {
        flex: 1,
        width: 200,
        backgroundColor: '#6a6a6a',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    spaceAroundContainer: {
        flex: 1,
        width: 200,
        backgroundColor: '#a6a6a6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        fontSize: 8,
        color: '#ffffff',

    }
});
class JustifyContentView  extends Component {
    render() {
        return (
            <View style={[styles.container,{marginTop: 80}]}>
                <View style={styles.flexStartContainer}>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                </View>

                <View style={styles.flexEndContainer}>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                </View>
                <View style={styles.spaceBetweenContainer}>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                </View>

                <View style={styles.spaceAroundContainer}>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                </View>
            </View>
        );
    }
};

module.exports = JustifyContentView;
