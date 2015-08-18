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
    oddContainer: {
        flex: 1,
        width: 200,
        backgroundColor: '#a6a6a6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    evenContainer: {
        flex: 1,
        width: 200,
        backgroundColor: '#6a6a6a',
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
    autoItem: {
        flex: 1,
        alignSelf: 'auto'
    },

    flexStartItem: {
        flex: 1,
        alignSelf: 'flex-start'
    },
    flexEndItem: {
        flex: 1,
        alignSelf: 'flex-end'
    },
    centerItem: {
        flex: 1,
        alignSelf: 'center'
    },
    stretchItem: {
        flex: 1,
        alignSelf: 'stretch'

    },

    content: {
        fontSize: 8,
        color: '#ffffff',

    }
});
class AlignSelfView  extends Component {
    render() {
        return (
            <View style={[styles.container,{marginTop: 80}]}>
                <View style={styles.evenContainer}>
                    <View style={[styles.tvcontainer,styles.autoItem]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,styles.autoItem]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,styles.autoItem]}><Text style={styles.content}>Item</Text></View>
                </View>
                <View style={styles.oddContainer}>
                    <View style={[styles.tvcontainer,styles.flexStartItem]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,styles.flexStartItem]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,styles.flexStartItem]}><Text style={styles.content}>Item</Text></View>
                </View>

                <View style={styles.evenContainer}>
                    <View style={[styles.tvcontainer,styles.flexEndItem]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,styles.flexEndItem]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,styles.flexEndItem]}><Text style={styles.content}>Item</Text></View>
                </View>
                <View style={styles.oddContainer}>
                    <View style={[styles.tvcontainer,styles.centerItem]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,styles.centerItem]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,styles.centerItem]}><Text style={styles.content}>Item</Text></View>
                </View>

                <View style={styles.evenContainer}>
                    <View style={[styles.tvcontainer,styles.stretchItem]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,styles.stretchItem]}><Text style={styles.content}>Item</Text></View>
                    <View style={[styles.tvcontainer,styles.stretchItem]}><Text style={styles.content}>Item</Text></View>
                </View>

            </View>
        );
    }
};

module.exports = AlignSelfView;
