import React from 'react'
import {Button} from 'react-native'

function ButtonElement({title, handleSubmit}){
    return(
        <Button title={title} onPress={handleSubmit}></Button>
    )
}
export default ButtonElement