import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  isLoading: false,
}

export const AppSlice = createSlice({
  name: 'appState',
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
  },
})

export const { setLoading } = AppSlice.actions

export default AppSlice.reducer
