
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TitleScreen from '../Screens/TitleScreen';
import HomeScreen from '../Screens/HomeScreen';
import CreateScreen from '../Screens/CreateScreen';
import React from 'react'

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
      <Stack.Navigator initialRouteName="Title" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Title' component={TitleScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Create' component={CreateScreen} />
      </Stack.Navigator>
  
  );
}