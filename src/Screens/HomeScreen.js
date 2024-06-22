import { View, ScrollView, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MagnifyingGlassIcon, PlusIcon } from 'react-native-heroicons/outline'


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
                style={{width: hp(8), height: hp(8), borderRadius: hp(4)}} 
                className="rounded-full mt-3" />
                <PlusIcon size={hp(4)} color="gray" />
            </View>
            
            {/*Greeting*/}
            <View className="mx-4 space-y-2 mb-2">
                <Text style={{ fontSize: hp(2.2)}} className="text-neutral-500">Hi there!</Text>
                <Text style={{ fontSize: hp(3.8)}} className="font-semibold text-neutral-600">What <Text className="text-amber-500">Itty Bitty Bite</Text> will you feed today?</Text>
            </View>

            {/*Search Bar*/}
            <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
            <TextInput
            placeholder="Search recipes"
            placeholderTextColor={'gray'}
            style={{ fontSize: hp(1.7)}}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
            /> 
            <View className="bg-white rounded-full p-3">
                <MagnifyingGlassIcon size={hp(2.5)} color="gray" strokeWidth={3} />
            </View>
            </View>

        </ScrollView>
    </View>
  )
}
