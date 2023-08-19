import { configureStore } from '@reduxjs/toolkit'
import levelSlice from './slices/levelSlice'
import userSlice from './slices/userSlice'
import packageSlice from './slices/packageSlice'
import questionsSlice from './slices/questionsSlice'
import researchesSlice from './slices/researchesSlice'
import examsSlice from './slices/examsSlice'
import projectsSlice from './slices/projectsSlice'

export const store = configureStore({
  reducer: {
    levelsList:levelSlice,
    packagesList:packageSlice,
    userData:userSlice , 
    questionsData : questionsSlice , 
    researchesData:researchesSlice,
    projectsData: projectsSlice , 
    examsData : examsSlice , 
  },
})