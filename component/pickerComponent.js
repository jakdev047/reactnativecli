import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Switch} from 'react-native';
// import { Picker } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
  languageText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

const PickerComponent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isText, setIsText] = useState(false);
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
      <Switch
        value={isText}
        onValueChange={() => setIsText(!isText)}
        trackColor="#eb1b33"
        thumbColor="#eb1"
        // disabled
      />
      <Text style={styles?.languageText}>{isText ? 'On' : 'Off'}</Text>
    </View>
  );
};

export default PickerComponent;
