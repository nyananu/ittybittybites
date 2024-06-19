import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TitleScreen from '../Screens/TitleScreen';
import HomeScreen from '../Screens/HomeScreen';
import React from 'react'

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Title" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Title' component={TitleScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}