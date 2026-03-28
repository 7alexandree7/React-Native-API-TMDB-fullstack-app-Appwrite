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
        `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
        `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/${endpoint}`, {
            method: 'GET',
            headers: TMDB_CONFIG.headers
        })

        if (!response.ok) {
            throw new Error('Failed to fetch movies')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching movies:', error)
        throw error
    }
}