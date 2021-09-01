import React, { useState } from "react";
import { TextInput, View,StyleSheet } from 'react-native'

function InputElement({ placeholder, id, updateUser }) {
    return (
        <View>
            <TextInput  style={styles.inputElement} placeholder={placeholder} onChange={
                (e) => updateUser(e)
            }/>
        </View>
    )
}
const styles = StyleSheet.create({
    inputElement: {
       padding: 5,
       borderWidth: 1,
       borderColor: '#000000'
    }
});
export default InputElement