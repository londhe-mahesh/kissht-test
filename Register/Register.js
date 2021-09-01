import React, {useCallback, useState} from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import InputElement from './InputElement'
import ButtonElement from "./ButtonElement";
import RadioElement from './RadioElement'
import { NavigationContainer } from '@react-navigation/native';

function Register({navigation}) {
    const [user,setUser] = useState({})
    const updateUser = useCallback(
        (e)=>{
            const field = e.target.placeholder;
            const value = e.target.value;
            setUser(()=>{
                return {
                    ...user,
                    [field]: value
                }
            })
            console.log("Global user", user)
        },[user]
    )
    const setGender= useCallback(
        (value)=>{
            setUser(()=>{
                return {
                    ...user,
                    gender: value
                }
            })
        },[user]
    )
    const handleSubmit = useCallback(
        ()=>{
            navigation.navigate('userDetails', user)
        },[user]
    )
    return (
        <View>
            <Text style={styles.formTitle}>Login</Text>
            <View style={styles.inputUnit}>
                <Text>Name</Text>
                <InputElement placeholder='name' id='name' updateUser={updateUser}/>
            </View>
            <View style={styles.inputUnit}>
                <Text>Email</Text>
                <InputElement placeholder='email' id='email' updateUser={updateUser}/>
            </View>
            <View style={styles.inputUnit}>
                <Text>Phone</Text>
                <InputElement placeholder='phone' id='phone' updateUser={updateUser}/>
            </View>
            <RadioElement setGender={setGender}/>
            <ButtonElement title='Submit' handleSubmit={handleSubmit}></ButtonElement>
        </View>
    )
}

const styles = StyleSheet.create({
    inputUnit: {
        display: 'flex',
        flexDirection: 'column',
    },
    formTitle:{
        fontSize: 25,
        fontWeight: "bold"
    }
});
export default Register