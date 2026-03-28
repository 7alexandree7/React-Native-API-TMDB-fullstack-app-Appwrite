interface IEnvConfig {
    API_KEY: string
    MOVIE_API_KEY: string
}

export const envConfig: IEnvConfig = {
    API_KEY: process.env.EXPO_PUBLIC_API_KEY ?? '',
    MOVIE_API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY ?? '',
}