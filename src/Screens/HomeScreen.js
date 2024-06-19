import { View, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
        <StatusBar style="dark" />
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6 pt-14"
        >
            
        </ScrollView>
    </View>
  )
}