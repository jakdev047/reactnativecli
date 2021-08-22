import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';

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
});

export default function About(props) {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles?.welcomeText}>About</Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 15,
          }}>
          <Button
            style={{margin: 15}}
            color="teal"
            title="Home"
            onPress={() => {
              props?.navigation?.navigate('Home');
            }}
          />
          <Button
            color="teal"
            title="Input"
            onPress={() => {
              props?.navigation?.navigate('Input');
            }}
          />
          <Button
            color="teal"
            title="Redux"
            onPress={() => {
              props?.navigation?.navigate('Redux');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
