import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Switch,
  Modal,
  Button,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
// import { Picker } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
  languageText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  modalView: {
    width: 250,
    height: 150,
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#FF2233',
    alignItems: 'center',
    shadowOffset: {height: 0, width: 2},
  },
});

const PickerComponent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isText, setIsText] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);

  // open Modal
  const openModal = () => {
    setIsModalShow(true);
  };

  // close Modal
  const closeModal = () => {
    setIsModalShow(false);
  };

  return (
    <SafeAreaView>
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

      {/* Modal */}
      <Button title="Modal Open" onPress={() => openModal()} />
      <Modal visible={isModalShow} animationType={'fade'}>
        <View style={styles?.modalView}>
          <Text style={styles?.languageText}>This is Modal</Text>
          <Button onPress={() => closeModal()} title="Close" />
        </View>
      </Modal>

      <View style={{height: 30}}></View>

      {/* ImageBackground */}
      <ImageBackground
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
          justifyContent: 'center',
        }}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/f/fa/Faisal_Masjid_From_Damn_e_koh.jpg',
        }}
      />
    </SafeAreaView>
  );
};

export default PickerComponent;
