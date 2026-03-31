interface IEnvConfig {
    API_KEY: string
    MOVIE_API_KEY: string
    EXPO_PUBLIC_APPWRITE_PROJECT_ID: string
    DATABASE_ID: string
    COLLECTION_ID: string
    PROJECT_ID: string
}

export const envConfig: IEnvConfig = {
    API_KEY: process.env.EXPO_PUBLIC_API_KEY ?? '',
    MOVIE_API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY ?? '',
    EXPO_PUBLIC_APPWRITE_PROJECT_ID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ?? '',
    DATABASE_ID: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID ?? '',
    COLLECTION_ID: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID ?? '',
    PROJECT_ID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ?? '',
}