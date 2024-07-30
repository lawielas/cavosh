import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import coffeeCup from './assets/coffee_cup_1.png';
import coffeeIcon from './assets/coffee_icon.png'

export default function App() {
  return (
    <SafeAreaView className="h-screen flex flex-col bg-[#34536A]">
      <View className="self-end p-2 flex flex-col">
        <View className="flex gap-2 flex-row items-baseline -top-20">
          <Image source={coffeeIcon} alt='coffee icon 1' style={{width: 60, height: 60}} className="-rotate-45"  />
          <Image source={coffeeIcon} alt='coffee icon 2' style={{width: 100, height: 100}} className="opacity-70" />
        </View>
        <View className="-mt-24">
          <Image source={coffeeIcon} alt='coffee icon 2' style={{width: 120, height: 120, resizeMode: 'contain'}} className="rotate-12" />
        </View>
      </View>
      <View className="flex flex-row justify-center -mt-12">
        <Image source={coffeeCup} alt="coffee cup" style={{width: 350, height: 350}} className="" />
      </View>
      <View className="flex items-center mt-2">
        <Text className="text-2xl text-white">Welcome to</Text>
        <Text className="text-6xl font-semibold tracking-widest text-[#E65739]">Cavosh</Text>
      </View>
      <View className="flex flex-row justify-center mt-3">
        <Pressable className="bg-[#293440] py-2 px-5 rounded-2xl">
          <Text className="text-white text-xl">Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
