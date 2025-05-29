// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EventScreen from '../Screens/EventScreen';
import ShortlistScreen from '../Screens/ShortListScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 10 },
        tabBarStyle: {
          backgroundColor: '#000',
          paddingVertical: 10,
          borderTopColor: '#1a1a1a',
          height: 60,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Event') iconName = 'calendar';
          else if (route.name === 'Shortlists') iconName = 'heart';
          else if (route.name === 'Profile') iconName = 'user';

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#a95eff',
        tabBarInactiveTintColor: '#999',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Event" component={EventScreen} />
      <Tab.Screen name="Shortlists" component={ShortlistScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const DummyScreen = () => (
  <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: '#fff' }}>Coming Soon</Text>
  </View>
);

export default BottomTabNavigator;
