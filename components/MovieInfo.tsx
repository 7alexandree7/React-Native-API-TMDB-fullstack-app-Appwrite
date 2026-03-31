import { View, Text } from 'react-native'
import React from 'react'

interface MovieInfoProps {
  label: string
  value?: string | number | null
}

const MovieInfo = ({label, value}: MovieInfoProps) => {
  return (
    <View className='flex-col items-start justify-center mt-5'>
      <Text className='text-gray-400 text-sm font-normal'>{label}</Text>
      <Text className='text-gray-100 text-sm font-bold mt-2'>{value ?? "N/A"}</Text>
    </View>
  )
}

export default MovieInfo  