import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GIF_URL } from '../../constants'
import type { GifResponse } from '../../interfaces/Gif/Response'

export const giphyAPI = createApi({
  reducerPath: 'giphyAPI',
  baseQuery: fetchBaseQuery({ baseUrl: GIF_URL }),
  endpoints: (builder) => ({
    getTrendingGifs: builder.mutation<GifResponse, undefined>({
      query: () => ({
        url: `trending`,
        params: {
          apiKey: process.env.REACT_APP_API_KEY as string,
        },
      }),
    }),
    searchGifs: builder.mutation<GifResponse, string | null>({
      query: (query) => ({
        url: `search`,
        params: {
          apiKey: process.env.REACT_APP_API_KEY as string,
          q: query,
        },
      }),
    }),
  }),
})

export const { useGetTrendingGifsMutation, useSearchGifsMutation } = giphyAPI
