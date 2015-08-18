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
    nowrapContainer: {
        flex: 1,
        width: 200,
        backgroundColor: '#6a6a6a',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },
    wrapContainer: {
        flex: 1,
        width: 200,
        backgroundColor: '#a6a6a6',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    content: {
        fontSize: 8,
        color: '#ffffff',

    }
});
class FlexView  extends Component {
    render() {
        return (
            <View style={[styles.container,{marginTop: 30}]}>
                <View style={styles.wrapContainer}>
                    <View style={[styles.tvcontainer,{flex: 1}]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,{flex: 2}]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,{flex: 3}]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,{flex: 2}]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,{flex: 1}]}><Text style={styles.content}>Item</Text></View>
                </View>
                <View style={[styles.nowrapContainer,{backgroundColor: '#6a6a6a'}]}>
                    <View style={[styles.tvcontainer,{flex: 2}]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,{flex: 2}]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,{flex: 2}]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,{flex: 2}]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,{flex: 2}]}><Text style={styles.content}>Item</Text></View>
                </View>

            </View>
        );
    }
};

module.exports = FlexView;
