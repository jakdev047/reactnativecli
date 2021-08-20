import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text} from 'react-native';
import Welcome from '../screens/home/Home';
import About from '../screens/about/About';

const styles = StyleSheet.create({
  tabStyle: (focused, color) => {
    return {
      borderBottomWidth: focused ? 2 : 0,
      alignItems: 'center',
      height: '100%',
      paddingTop: 7,
      width: '100%',
      borderColor: color,
    };
  },
  tabTextStyle: (color) => {
    return {color: color, fontSize: 14, marginTop: 4};
  },
});

export default function BottomNavigation(props) {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            marginBottom: 10,
          },
          safeAreaInsets: {
            bottom: 0,
          },
          style: {
            height: 80,
          },
          tabStyle: {
            justifyContent: 'center',
            backgroundColor: '#063197',
          },
          activeTintColor: '#11f7d1',
          inactiveTintColor: 'white',
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: ({color, focused}) => {
              return (
                <View style={styles.tabStyle(focused, color)}>
                  <Text style={styles.tabTextStyle(color)}>Home</Text>
                </View>
              );
            },
          }}
          name="Home"
          component={Welcome}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({color, focused}) => {
              return (
                <View style={styles.tabStyle(focused, color)}>
                  <Text style={styles.tabTextStyle(color)}>About</Text>
                </View>
              );
            },
          }}
          name="About"
          component={About}
        />
      </Tab.Navigator>
    </>
  );
}
