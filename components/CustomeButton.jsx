import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
const CustomBut = ({title,handelPress ,containerStyles,textStyles,isloading}) => {
  return (
  <TouchableOpacity
  onPress={handelPress}
  activeOpacity={0.7}
  
  className={`bg-secondary-200 
  rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isloading ?'opacity-50':''}`}
  disabled={isloading}
  >
    <Text className={`text-primary font-psemibold
    text-xl ${textStyles}`}>
        {title}
    </Text>
    <StatusBar
    backgroundColor='#161622'
    style='light'
    
    />
  </TouchableOpacity>
  )
}

export default CustomBut