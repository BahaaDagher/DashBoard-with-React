import { configureStore } from '@reduxjs/toolkit'
import levelSlice from './slices/levelSlice'

export const store = configureStore({
  reducer: {
    levelsList:levelSlice
  },
})