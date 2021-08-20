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
        <Button
          color="teal"
          title="Home"
          onPress={() => {
            props?.navigation?.navigate('Home');
          }}
        />
      </View>
    </SafeAreaView>
  );
}
