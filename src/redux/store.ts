import { configureStore } from '@reduxjs/toolkit'
import { giphyAPI } from './apis'
import { AppSlice } from './slices'

export const store = configureStore({
  reducer: {
    [giphyAPI.reducerPath]: giphyAPI.reducer,
    [AppSlice.name]: AppSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(giphyAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
