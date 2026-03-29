import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";


export default function Index() {

  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => fetchMovies({ query: "" }))

  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "flex-start", gap: 20, marginBottom: 10, paddingHorizontal: 5 }}
        className="mt-2 pb-32 px-5"
        ListHeaderComponent={
          <>
            <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

            {moviesLoading ? (
              <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" />
            ) : moviesError ? (
              <Text className="text-white text-center mt-10">Error {moviesError}</Text>
            ) : (
              <>
                <SearchBar
                  onPress={() => router.push("/search")}
                  placeholder="Search for a movie..."
                />
                <Text className="text-white text-lg font-semibold mt-5 mb-3">Latest Movies</Text>
              </>
            )}
          </>
        }
      />
    </View>
  );
}
