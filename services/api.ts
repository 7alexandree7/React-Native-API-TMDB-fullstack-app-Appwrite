import { envConfig } from "@/config/env";
import { TMDBConfig } from "@/interfaces/interfaces";



export const TMDB_CONFIG: TMDBConfig = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: envConfig.MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${envConfig.MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {

    const endpoint = query ?
        `search/movie?query=${encodeURIComponent(query)}` :
        `discover/movie?sort_by=popularity.desc`

    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/${endpoint}`, {
            method: 'GET',
            headers: TMDB_CONFIG.headers
        })
        console.log('STATUS:', response.status)

        if (!response.ok) {
            const errorBody = await response.json()
            console.log('ERROR BODY:', errorBody)
            throw new Error('Failed to fetch movies')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching movies:', error)
        throw error
    }
}