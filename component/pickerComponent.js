import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import { Picker } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
    languageText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    }
});

const PickerComponent = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    return (
        <View>
            <ActivityIndicator size="large" color="#000" />
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedLanguage(itemValue);
                }}>
                <Picker.Item label="Java" value="Java" />
                <Picker.Item label="JavaScript" value="Javascript" />
            </Picker>
            <Text style={styles?.languageText}>{selectedLanguage}</Text>
        </View>
    )
}

export default PickerComponent;
