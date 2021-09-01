import React from "react";
import {View, Text, StyleSheet} from 'react-native'

function UserDetails({navigation}){
    return(
        <View style={styles.pageWrapper}>
             <Text style={styles.pageHeader}>User Details</Text>
             <Text>Name{navigation.getParam('name')}</Text> 
             <Text>{navigation.getParam('email')}</Text> 
             <Text>{navigation.getParam('phone')}</Text> 
             <Text>{navigation.getParam('gender')}</Text>       
        </View>
    )
}
const styles = StyleSheet.create({
    pageWrapper:{
        textAlign: "center"
    },
    pageHeader: {
       fontSize: 20,
       textAlign: 'center',
       padding: 5,
       
    }
});
export default UserDetails