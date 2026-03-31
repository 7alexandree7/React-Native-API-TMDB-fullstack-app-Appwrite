import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchMovieDetails } from '@/services/api'
import useFetch from '@/hooks/useFetch'
import { icons } from '@/constants/icons'
import MovieInfo from '@/components/MovieInfo'

const MovieDetails = () => {

  const { id } = useLocalSearchParams()
  const router = useRouter()
  const { data: movie, loading: movieLoading, error: movieError } = useFetch(() => fetchMovieDetails(id as string))

  return (
    <View className='bg-primary flex-1'>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View className=''>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} className='w-full h-[550px]' resizeMode='stretch' />
          <View className='flex-col items-start jutify-center mt-5 px-5'>
            <Text className='text-white text-2xl font-bold'>{movie?.title}</Text>

            <View className='flex-row items-center gap-x-1 mt-2'>
              <Text className='text-gray-400 text-sm'>{movie?.release_date.split("-")[0]}</Text>
              <Text className='text-gray-400 text-sm'>{movie?.revenue?.toLocaleString()}m</Text>
            </View>

            <View className='flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2'>
              <Image source={icons.star} className='size-4' />
              <Text className='text-gray-400 text-sm'>{`${movie?.vote_average?.toFixed(1)}/10` || "0.0"}</Text>
              <Text className='text-gray-400 text-sm'>{movie?.vote_count?.toLocaleString()} votes</Text>
            </View>

            <MovieInfo label="Overview" value={movie?.overview} />
            <MovieInfo label="Genres" value={movie?.genres?.map((g) => g.name).join(" - ") || "N/A"} />

            <View className='flex flex-row gap-x-8 w-full mt-5'>
              <MovieInfo label="Budget" value={`${movie?.budget?.toLocaleString() || "N/A"}$`} />
              <MovieInfo label="Revenue" value={`${movie?.revenue?.toLocaleString() || "N/A"}$`} />
            </View>

            <MovieInfo label="Production" value={movie?.production_companies.map((c) => c.name).join(" - ") || "N/A"}/>
             <TouchableOpacity onPress={() => router.back() } className='flex-row mt-5 flex-start items-center'>
              <Image source={icons.arrow} className='size-5 mr-1 mt-0.5 rotate-180' tintColor={"#ab8bff"} />
              <Text className='text-gray-200 text-base'>Go Back</Text>
              </TouchableOpacity> 
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default MovieDetails 