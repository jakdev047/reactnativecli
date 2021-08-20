import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigation from './navigation/rootNavigation';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#063197'}}>
      <RootNavigation />
    </SafeAreaView>
  );
}
