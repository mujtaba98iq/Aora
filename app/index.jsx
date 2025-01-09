import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomeButton from "../components/CustomeButton";
import { Redirect,router } from 'expo-router'

const Home = () => {
    return (
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{height:'100%'}}>
            <View className="w-full justify-center items-center min-h-[85vh] px-4">
                <Image source={images.logo} 
                className="w-[130px] h-[84px]"
                resizeMode='contain'
                /> 
                <Image
                source={images.cards}
                className="w-full h-[300px] max-w-[380px]"
                resizeMode='contain'
                />
                <View className=" relative mt-5 w-96">
                    <Text className="text-3xl text-white font-bold text-center">
                        Discover Endless Possibilities with {' '} 
                        <Text className="text-secondary-200">
                            Aora
                        </Text>
                    </Text>
                 <Image
                 source={images.path}
                 className="w-[136px] h-[15px] absolute -bottom-2 -right-0"
                 resizeMode='contain'
                 />

                </View>
                <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                    Where creativity meets innovation:
                    embark on journey of limitless exploration 
                    with Aora
                </Text>

                <CustomeButton
                title="Coninue with Email"
                handelPress={()=>{router.push('/sign-in')}}
                containerStyles="w-full mt-7" 
                />
            </View>
        </ScrollView>
      </SafeAreaView>
    )
}

export default Home

