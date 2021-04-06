import React from 'react';
import {Text, View, TextInput, Button, Alert, Image, StyleSheet} from 'react-native';

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
    Alert?.alert(text);
  };
  const onPressHandler = () => {
    Alert?.alert('Welcome React Native!');
  };
  return (
    <View>
      <Text style={styles?.welcomeText}>Welcome React Native</Text>
      <TextInput
        style={styles?.textInput}
        placeholder="Enter Something..."
        onChangeText={(text) => handleInputChange(text)}
      />
      <Image style={{width:'100%',height:300}} source={{uri: 'https://www.themesine.com/wp-content/uploads/edd/2019/02/khanas-banner.jpg'}} />
      <View style={{height:30}}></View>
      <Image style={{width:'100%',height:200}} source={require('./assets/images/carwallpaper.jpg')} />
      <Button color="teal" title="Save" onPress={onPressHandler} />
    </View>
  );
}
