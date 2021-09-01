import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

function RadioElement(props) {
    const [checked, setChecked] = React.useState('Male');
    return (
        <View style={styles.radioWrapper}>
            <View style={styles.radioUnit}>
                <Text>Male</Text>
                <RadioButton
                    value="Male"
                    placeholder="gender"
                    status={checked === 'Male' ? 'checked' : 'unchecked'}
                    onPress={
                        (e) => {
                            setChecked('Male')
                            props.setGender('Male')
                        }
                    }
                />
            </View>
            <View style={styles.radioUnit}>
                <Text>Female</Text>
                <RadioButton
                    value="second"
                    status={checked === 'Female' ? 'checked' : 'unchecked'}
                    onPress={
                        (e) => {
                            setChecked('Female')
                            props.setGender('Female')
                        }
                    }
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    radioWrapper: {
        display: 'flex',
        flexDirection: 'row'
    },
    radioUnit: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default RadioElement