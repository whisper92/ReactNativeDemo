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
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
        justifyContent: 'center',
    },
    flexEndContainer: {
        flex: 1,
        width: 200,
        backgroundColor: '#a6a6a6',
        flexDirection: 'row',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    centerContainer: {
        flex: 1,
        width: 200,
        backgroundColor: '#6a6a6a',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    stretchContainer: {
        flex: 1,
        width: 200,
        height: 200,
        backgroundColor: '#a6a6a6',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    content: {
        fontSize: 8,
        color: '#ffffff',

    }
});
class AlignItemsView  extends Component {
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
                <View style={styles.centerContainer}>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                </View>

                <View style={styles.stretchContainer}>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                    <View style={styles.tvcontainer}><Text style={styles.content}>Item</Text></View>
                </View>
            </View>
        );
    }
};

module.exports = AlignItemsView;
