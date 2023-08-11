import { configureStore } from '@reduxjs/toolkit'
import levelSlice from './slices/levelSlice'
import userSlice from './slices/userSlice'
import packageSlice from './slices/packageSlice'

export const store = configureStore({
  reducer: {
    levelsList:levelSlice,
    packagesList:packageSlice,
    userData:userSlice
  },
})