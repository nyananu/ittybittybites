import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function TitleScreen() {

  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(() => ring1padding.value = withSpring(ring1padding.value+hp(5)), 100);
    setTimeout(() => ring2padding.value = withSpring(ring2padding.value+hp(5.5)), 300);

    // setTimeout(()=> navigation.navigate('Home'), 2500)
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-white ">
      <StatusBar style="light" />  

      {/* logo with rings */}
      <Animated.View className="bg-amber-500/20 rounded-full" style={{padding: ring2padding}}>
        <Animated.View className="bg-amber-400/20 rounded-full" style={{padding: ring1padding}}>
        <Image source={require('../../assets/images/logo2.png')}
            style={{width: hp(20), height: hp(20)}} />
            </Animated.View>
      </Animated.View>


      {/* tagline */}
      <View className="flex items-center space-y-2">
        {/* <Text style={{fontSize: hp(4)}} className=" font-hi-melody text-gray-800 ">
          smart yummies for tiny tummies
        </Text> */}
      </View>

    </View>
  )
}