import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface SearchBarProps {
    onPress?: () => void
    placeholder: string
}

const SearchBar = ({ onPress, placeholder, }: SearchBarProps) => {
    return (
        <View className='flex-row justify-between items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor={"#ab8bff"} />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                placeholderTextColor={"#a8b5db"}
                className='flex-1 ml-2 text-white'
                value=""
                onChangeText={() => { }}
            />
        </View>
    )
}

export default SearchBar