import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CreateScreen from '../Screens/CreateScreen';
import HomeScreen from '../Screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator 
      initialRouteName="Home" 
      activeColor='#FFC107'
    >
      <Tab.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} 
      />
      <Tab.Screen 
        name='Create' 
        component={CreateScreen}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}
