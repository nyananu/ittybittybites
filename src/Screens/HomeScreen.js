import { View, ScrollView, Text, TouchableOpacity, Image, Touchable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
        <StatusBar style="dark" />
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6 pt-14"
        >
            {/*Profile*/}
            <View className="mx-4 flex-row justify-between items-center mb-2">
                <Image 
                source={require('../../assets/p_cat.jpeg')}
                style={{width: hp(10), height: hp(10)}} 
                className="rounded-full mt-3" />
            </View>
            
        </ScrollView>
    </View>
  )
}