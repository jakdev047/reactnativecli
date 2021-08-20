import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  imageStyle: {
    alignSelf: 'center',
    marginVertical: '20%',
  },
  headText: {
    color: '#2F3542',
    fontSize: 34,
  },
  subHeadText: {
    color: '#8F9BB3',
    fontSize: 15,
    marginVertical: '4%',
  },

  getStartBtn: {
    backgroundColor: '#063197',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 7,
    marginBottom: 3,
  },
});

export default function GetStarted({navigation}) {
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* get started page texts */}
        <View style={{marginLeft: '10%', marginBottom: 20}}>
          <Text style={styles.headText}>Welcome React Native</Text>
        </View>

        {/* get started page button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Log in')}
          style={styles.getStartBtn}>
          <Text style={{color: '#ffffff'}}>GET STARTED</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
