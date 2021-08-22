import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import BottomNavigation from './bottomNavigation';
import GetStarted from '../screens/getStarted';
import LogIn from '../screens/login';
import Input from '../screens/input/Input';
import ReduxPage from '../screens/reduxPage/index';

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

        {/* Component Pages */}
        <Stack.Screen name="Input" component={Input} />
        <Stack.Screen name="Redux" component={ReduxPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
