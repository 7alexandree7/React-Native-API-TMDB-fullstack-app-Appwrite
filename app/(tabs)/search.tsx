import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import useFetch from '@/hooks/useFetch'
import { fetchMovies } from '@/services/api'
import MovieCard from '@/components/MovieCard'
import { Movie } from '@/interfaces/interfaces'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'


const search = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: refetchMovies,
    reset: resetMovies
  } = useFetch(() => fetchMovies({ query: searchQuery }), false)

  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      if (searchQuery.trim()) await refetchMovies()
      else resetMovies()
    }, 500)
    return () => clearTimeout(timeOutId)
  }, [searchQuery])

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover' />
      <FlatList
        data={movies}
        renderItem={({ item }: { item: Movie }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        className='px-5 mt-2'
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <View className='mt-10 px-5'>
              <Text className='text-center text-gray-500'>{searchQuery.trim() ? "Movies Not Found": "Search Movies..."}</Text>
            </View>
          ) : null
        } 
        ListHeaderComponent={
          <>
            <View className='w-full items-center mt-20'>
              <Image source={icons.logo} className='w-12 h-10' />
            </View>
            <View className='my-5'>
              <SearchBar
                placeholder='Search Movies...'
                searchQuery={searchQuery}
                onchangeText={(text) => setSearchQuery(text)}
              />
            </View>

            {moviesLoading && <ActivityIndicator size="large" color="#000FF" />}
            {moviesError && <Text className='text-red-500 text-center mt-10'>Error: {moviesError}</Text>}

            {!moviesError && !moviesLoading && searchQuery.trim() && movies?.length > 0 && (
              <Text className='text-xl text-white font-bold'>Search Results {" "}
                <Text className='text-accent'>{searchQuery}</Text>
              </Text>
            )}
          </>
        }
      />
    </View>
  )
}

export default search