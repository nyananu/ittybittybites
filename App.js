import React, { useState, useEffect } from 'react';
import AppNavigation from './src/Navigation';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const loadFonts = () => {
  return Font.loadAsync({
    'Hi-Melody': require('./assets/fonts/HiMelody-Regular.ttf'),
  });
};

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
       <AppNavigation />
  );
}

