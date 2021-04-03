import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

export default function App() {
  const handleInputChange = (text) => {
    // eslint-disable-next-line no-alert
    alert(text);
  };
  return (
    <View>
      <Text style={styles?.welcomeText}>Welcome React Native</Text>
      <TextInput
        style={styles?.textInput}
        placeholder="Enter Something..."
        onChangeText={(text) => handleInputChange(text)}
      />
    </View>
  );
}
