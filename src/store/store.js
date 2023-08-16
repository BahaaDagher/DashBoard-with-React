import { configureStore } from '@reduxjs/toolkit'
import levelSlice from './slices/levelSlice'
import userSlice from './slices/userSlice'
import packageSlice from './slices/packageSlice'
import questionsSlice from './slices/questionsSlice'

export const store = configureStore({
  reducer: {
    levelsList:levelSlice,
    packagesList:packageSlice,
    userData:userSlice , 
    questionsData : questionsSlice , 
  },
})