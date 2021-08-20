import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

// component
import CoreComponent from './../../component/coreComponent';
import PickerComponent from './../../component/pickerComponent';
import SectionListComponent from './../../component/sectionList';
import Calculator from './../../component/calculator';

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

export default function Home(props) {
  const handleInputChange = (text) => {
    Alert?.alert(text);
  };
  const onPressHandler = () => {
    Alert?.alert('Welcome React Native!');
  };
  return (
    <ScrollView horizontal={false}>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
        hidden={false}
      />
      <Text style={styles?.welcomeText}>Welcome React Native</Text>
      <Button
        color="teal"
        title="About"
        onPress={() => {
          props?.navigation?.navigate('About');
        }}
      />
      <TextInput
        style={styles?.textInput}
        placeholder="Enter Something..."
        onChangeText={(text) => handleInputChange(text)}
      />
      <Image
        style={{width: '100%', height: 500}}
        source={{
          uri:
            'https://www.themesine.com/wp-content/uploads/edd/2019/02/khanas-banner.jpg',
        }}
      />
      <View style={{height: 30}}></View>
      {/* <Image
        style={{width: '100%', height: 500}}
        source={require('../../assets/images/carwallpaper.jpg')}
      /> */}
      <CoreComponent />
      <PickerComponent />
      <SectionListComponent />
      <Calculator />
      <TextInput
        style={styles?.textInput}
        placeholder="Your Name..."
        placeholderTextColor="#000"
        textAlign="left"
        maxLength={20}
        autofocus={true}
        multiline={false}
        onChangeText={(text) => handleInputChange(text)}
      />
      <Button color="teal" title="Save" onPress={onPressHandler} />
    </ScrollView>
  );
}
