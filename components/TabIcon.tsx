import { Text, Image, ImageBackground, View } from 'react-native'
import { images } from '@/constants/images'
import React from 'react'

interface TabIconProps {
    focused: boolean
    icon: any
    title: string
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                style={{
                    flexDirection: 'row',
                    minWidth: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    overflow: 'hidden',
                    gap: 8,
                }}
            >
                <Image source={icon} style={{ width: 20, height: 20 }} tintColor="#151312" />
                <Text style={{ color: '#151312', fontWeight: '600', fontSize: 16 }}>{title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View className='size-full justify-center items-center'>
            <Image source={icon} className='size-5' tintColor="#A8B5D8" />
        </View>
    )
}

export default TabIcon