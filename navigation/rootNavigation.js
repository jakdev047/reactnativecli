import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import BottomNavigation from './bottomNavigation';
import GetStarted from '../screens/getStarted';
import LogIn from '../screens/login';

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const navigationRef = useRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Get Started"
        screenOptions={{
          headerMode: 'screen',
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
        }}>
        {/* Base Pages */}
        <Stack.Screen name="Get Started" component={GetStarted} />
        <Stack.Screen name="Log in" component={LogIn} />
        <Stack.Screen name="Home" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}