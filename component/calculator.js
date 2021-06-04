import React, {useState} from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textInput: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        height: 40
    },
    resultText: {
        margin: 10,
        fontSize: 24
    }
});

export default function Calculator() {

    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [result,setResult] = useState(0);

    const handleInputChange = (text,cb) => {
        cb(text);
    };
    const onPressHandler = () => {
        const add = num1 + num2;
        return setResult(add);
    };
    console.log("result",result)

    return (
        <View style={styles?.container}>
            <TextInput 
                placeholder="Number One" 
                style={styles?.textInput} 
                onChangeText={(text)=>handleInputChange(parseInt(text),setNum1)} 
            />
            <TextInput 
                placeholder="Number Two" 
                style={styles?.textInput}
                onChangeText={(text)=>handleInputChange(parseInt(text),setNum2)} 
            />
            <Button color="teal" title="Add" onPress={onPressHandler} />
            <Text style={styles?.resultText}>Result: {result}</Text>
        </View>
    )
}
