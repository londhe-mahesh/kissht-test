import React from "react";
import {View, StyleSheet, Text} from 'react-native'
import HeaderComp from "./HeaderComp";
import Register from "./Register";

function Home(props){
    const handleNavigation = ()=>{
      props.navigation.navigate('TransactionData')
    }
    return(
        <View style={styles.container}>
            <HeaderComp/>
            <Register navigation={props.navigation}/>
            <Text style={styles.transactionLink} onPress={handleNavigation}>Customer Transactions</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      margin: "auto",
      padding: 15
    },
    transactionLink: {
      fontSize: 13,
      fontWeight: 'bold',
      textDecorationColor: '#000000',
      cursor: 'pointer',
      padding: 10,
      paddingLeft: 0,
      color: "rgb(33, 150, 243)",
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
    }
  });
export default Home