import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AppNavigation from './src/Navigation';
import TitleScreen from './src/Screens/TitleScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={AppNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 2000); // 2 seconds delay for the splash screen
  }, [navigation]);

  return <TitleScreen />;
};
