import React from "react";
import { StyleSheet, Image, View,Text } from 'react-native'


function HeaderComp() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.siteLogo}
                source={require('../assets/images/kissht-test-logo.png')}
            />
            <Text style={styles.pageTitle}>User App</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    siteLogo: {
        width: '50px',
        height: "50px"
    },
    pageTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10
    }
});
export default HeaderComp